src/components/Icon.jsx
```jsx
import React from 'react';
import { FaFolder, FaFile } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Icon = React.memo(({ type }) => {
  const iconStyles = "w-6 h-6 mr-2";

  switch (type) {
    case 'folder':
      return <FaFolder className={iconStyles} />;
    case 'file':
      return <FaFile className={iconStyles} />;
    default:
      return null;
  }

});

Icon.propTypes = {
  type: PropTypes.oneOf(['folder', 'file']).isRequired,
};

export default Icon;