src/components/File.jsx
```jsx
import React from 'react';
import Icon from './Icon';
import PropTypes from 'prop-types';

const File = React.memo(({ file, onPreview }) => {

  const handleClick = () => {
    onPreview(file);
  };

  return (
    <div
      className="flex flex-col items-center cursor-pointer p-2 hover:bg-gray-300 rounded transition-colors duration-200"
      onClick={handleClick}
    >
      <Icon type="file" />
      <span className="text-center mt-1">{file}</span>
    </div>
  );
});

File.propTypes = {
  file: PropTypes.string.isRequired,
  onPreview: PropTypes.func.isRequired,
};

export default File;