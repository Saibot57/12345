src/context/LibraryContext.jsx
```jsx
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const LibraryContext = createContext();

export const LibraryProvider = ({ children }) => {
  const [activeFolder, setActiveFolder] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  return (
    <LibraryContext.Provider value={{ activeFolder, setActiveFolder, uploadedFiles, setUploadedFiles }}>
      {children}
    </LibraryContext.Provider>
  );
};

LibraryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};