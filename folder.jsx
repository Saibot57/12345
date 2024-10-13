src/components/folder.jsx
```jsx
import React from 'react';
import Icon from './Icon';
import PropTypes from 'prop-types';

const Folder = React.memo(({ folder, onClick }) => (
  <div
    className="flex flex-col items-center cursor-pointer p-2 hover:bg-gray-300 rounded transition-colors duration-200"
    onClick={() => onClick(folder)}
  >
    <Icon type="folder" />
    <span className="text-center mt-1">{folder.name}</span>
  </div>
));


Folder.propTypes = {
  folder: PropTypes.shape({
    name: PropTypes.string.isRequired,
    files: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Folder;