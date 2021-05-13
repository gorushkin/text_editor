const TextArea = ({ content }) => (
  <>
    <h2>Text</h2>
    <div dangerouslySetInnerHTML={{ __html: content }}></div>
  </>
);
export default TextArea;
