import ReactDom from 'react-dom/client';
import App from './App';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDom.createRoot(document.querySelector('#root')!);
root.render(<App />);
