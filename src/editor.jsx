import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const App = ({ text, setText }) => {
  // const [text, setText] = useState('<p>Hello from CKEditor 5!</p>');

  const onChange = (event, editor) => setText(editor.getData());

  const onClick = () => console.log(text);

  return (
    <div className='App'>
      <h2>Using CKEditor 5 build in React</h2>
      <CKEditor
        editor={ClassicEditor}
        data={text}
        onReady={(editor) => {
          console.log('Editor is ready to use!', editor);
        }}
        config={{
          ckfinder: {
            uploadUrl: '/uploads',
          },
        }}
        onChange={onChange}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
      />
      <button onClick={onClick}>Submit</button>
    </div>
  );
};

export default App;
