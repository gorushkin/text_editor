import axios from 'axios';

const TestBtn = () => {
  const testHandler = async () => {
    console.log('click');
    const response = await axios('/test')
    console.log('response: ', response);
  };
  return <button onClick={testHandler}>Test Api</button>;
};

export default TestBtn;
