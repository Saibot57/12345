src/components/PDFPreview.jsx
```jsx
import React from 'react';
import { Document, Page } from 'react-pdf';
import PropTypes from 'prop-types';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';


const PDFPreview = React.memo(({ fileName, onClose }) => {
  // Här antar vi att dina PDF-filer finns i public/pdfs/
  const fileUrl = `${process.env.PUBLIC_URL}/pdfs/${fileName}`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg w-3/4 h-3/4 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{fileName} - Förhandsvisning</h2>
          <button onClick={onClose} className="bg-red-500 text-white px-2 py-1 rounded">
            Stäng
          </button>
        </div>
        <div className="flex-grow bg-gray-100 p-4 overflow-auto">
          <Document file={fileUrl}>
            <Page pageNumber={1} />
          </Document>
        </div>
      </div>
    </div>
  );
});

PDFPreview.propTypes = {
  fileName: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};


export default PDFPreview;