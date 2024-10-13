src/App.jsx
```jsx
import React from 'react';
import RetroDocumentLibrary from './RetroDocumentLibrary';
import { LibraryProvider } from './context/LibraryContext';

const App = () => (
  <LibraryProvider>
    <RetroDocumentLibrary />
  </LibraryProvider>
);

export default App;