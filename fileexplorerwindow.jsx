src/components/FileExplorerWindow.jsx
```jsx
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import { LibraryContext } from '../context/LibraryContext';


const FileExplorerWindow = React.memo(({ folder, onClose }) => {


  return (
    <div className="absolute top-10 left-10 w-96 bg-gray-100 border-2 border-gray-400 shadow-lg">
      <div className="bg-blue-800 text-white px-2 py-1 flex justify-between items-center">
        <span>{folder.name}</span>
        <button onClick={onClose}>
          X
        </button>
      </div>
      <div className="p-4">
        {folder.files.map((file) => (
          <div key={file} className="flex items-center mb-2">
            <Icon type="file" />
            <span>{file}</span>
          </div>
        ))}
      </div>
    </div>
  );
});

FileExplorerWindow.propTypes = {
  folder: PropTypes.shape({
    name: PropTypes.string.isRequired,
    files: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default FileExplorerWindow;