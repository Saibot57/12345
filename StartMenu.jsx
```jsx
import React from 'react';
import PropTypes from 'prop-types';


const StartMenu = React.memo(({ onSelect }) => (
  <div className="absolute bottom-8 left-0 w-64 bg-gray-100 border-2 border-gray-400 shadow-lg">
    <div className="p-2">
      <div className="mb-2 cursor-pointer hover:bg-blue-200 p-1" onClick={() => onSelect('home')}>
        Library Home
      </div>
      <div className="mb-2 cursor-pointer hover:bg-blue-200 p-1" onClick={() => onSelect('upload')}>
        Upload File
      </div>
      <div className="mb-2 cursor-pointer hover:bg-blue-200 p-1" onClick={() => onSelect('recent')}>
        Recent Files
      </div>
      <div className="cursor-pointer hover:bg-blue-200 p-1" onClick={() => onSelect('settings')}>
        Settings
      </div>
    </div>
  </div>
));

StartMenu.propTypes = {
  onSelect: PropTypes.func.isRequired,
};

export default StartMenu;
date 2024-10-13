src/components/StartMenu.jsx
```jsx
import React from 'react';
import PropTypes from 'prop-types';


const StartMenu = React.memo(({ onSelect }) => (
  <div className="absolute bottom-8 left-0 w-64 bg-gray-100 border-2 border-gray-400 shadow-lg">
    <div className="p-2">
      <div className="mb-2 cursor-pointer hover:bg-blue-200 p-1" onClick={() => onSelect('home')}>
        Library Home
      </div>
      <div className="mb-2 cursor-pointer hover:bg-blue-200 p-1" onClick={() => onSelect('upload')}>
        Upload File
      </div>
      <div className="mb-2 cursor-pointer hover:bg-blue-200 p-1" onClick={() => onSelect('recent')}>
        Recent Files
      </div>
      <div className="cursor-pointer hover:bg-blue-200 p-1" onClick={() => onSelect('settings')}>
        Settings
      </div>
    </div>
  </div>
));

StartMenu.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default StartMenu;