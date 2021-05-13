import React, { useState } from 'react';

import Editor from './editor.jsx';
import TestBtn from './TestBtn.jsx';
import TextArea from './TextArea.jsx';

const App = () => {
  const [text, setText] = useState('<p>Hello from CKEditor 5!</p>');

  return (
    <>
      <Editor text={text} setText={setText} />
      <TestBtn />
      <TextArea content={text} />
    </>
  );
};

export default App;
