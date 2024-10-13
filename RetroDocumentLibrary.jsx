src/RetroDocumentLibrary.jsx
```jsx
import React, { useState, useCallback, useContext, Suspense, lazy } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';
import { LibraryContext } from './context/LibraryContext';
import Folder from './components/Folder';
import File from './components/File';
import StartMenu from './components/StartMenu';
// Lazy load komponenter för prestandaoptimering
const FileExplorerWindow = lazy(() => import('./components/FileExplorerWindow'));
const PDFPreview = lazy(() => import('./components/PDFPreview'));

const RetroDocumentLibrary = () => {
  const { setActiveFolder, uploadedFiles, setUploadedFiles } = useContext(LibraryContext);
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [previewFile, setPreviewFile] = useState(null);

  const folders = [
    { name: 'Work Documents', files: ['Report.pdf', 'Presentation.ppt'] },
    { name: 'Personal Files', files: ['Budget.xls', 'Notes.pdf'] },
  ];

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    try {
      const files = Array.from(e.dataTransfer.files);
      if (files.length === 0) throw new Error('Inga filer droppades.');

      setUploadedFiles(prevFiles => {
        const newFiles = files.map(f => ({ id: uuidv4(), name: f.name }));
        const uniqueFiles = newFiles.filter(file => !prevFiles.some(prev => prev.name === file.name));
        if (uniqueFiles.length < newFiles.length) {
          toast.warn('Vissa filer var redan uppladdade och har ignorerats.');
        }
        return [...prevFiles, ...uniqueFiles];
      });
      toast.success('Filer uppladdade framgångsrikt!');
      console.log('Filer uppladdade:', files.map(f => f.name));
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    }
  }, [setUploadedFiles]);

  const handleStartMenuSelect = useCallback((option) => {
    console.log(`Valt alternativ: ${option}`);
    setShowStartMenu(false);
  }, []);


  const handlePreview = useCallback((fileName) => {
    setPreviewFile(fileName);
  }, []);

  return (
    <div
      className="bg-gray-200 min-h-screen font-sans text-sm relative overflow-hidden"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {folders.map((folder) => (
          <Folder key={folder.name} folder={folder} onClick={setActiveFolder} />
        ))}
        {uploadedFiles.map((file) => (
          <File key={file.id} file={file.name} onPreview={handlePreview} />
        ))}
      </div>


      {useContext(LibraryContext).activeFolder && (
        <Suspense fallback={<div>Loading...</div>}>
          <FileExplorerWindow
            folder={useContext(LibraryContext).activeFolder}
            onClose={() => setActiveFolder(null)}
          />
        </Suspense>
      )}


      <div className="absolute bottom-0 left-0 right-0 bg-gray-300 p-1 flex items-center">
        <button
          className="bg-gray-400 px-4 py-1 font-bold"
          onClick={() => setShowStartMenu(!showStartMenu)}
        >
          Start
        </button>
      </div>

      {showStartMenu && <StartMenu onSelect={handleStartMenuSelect} />}


      {isDragging && (
        <div className="absolute inset-0 bg-blue-200 bg-opacity-50 flex items-center justify-center">
          <div className="text-2xl font-bold">Släpp här för att ladda upp</div>
        </div>
      )}


      {previewFile && (
        <Suspense fallback={<div>Loading Preview...</div>}>
          <PDFPreview
            fileName={previewFile}
            onClose={() => setPreviewFile(null)}
          />
        </Suspense>
      )}

      <ToastContainer />
    </div>
  );
};

export default RetroDocumentLibrary;