src/components/File.test.jsx
```jsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import File from './File';

describe('File Component', () => {
  test('renderar filnamn korrekt', () => {
    const { getByText } = render(<File file="Test.pdf" onPreview={() => {}} />);
    expect(getByText('Test.pdf')).toBeInTheDocument();
  });

  test('anropar onPreview när klickas', () => {
    const onPreviewMock = jest.fn();
    const { getByText } = render(<File file="Test.pdf" onPreview={onPreviewMock} />);
    fireEvent.click(getByText('Test.pdf'));
    expect(onPreviewMock).toHaveBeenCalledWith('Test.pdf');
  });
});