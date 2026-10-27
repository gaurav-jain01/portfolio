import './App.css';
import Layoutpage from './component/layout-page';
import { MotionProvider } from './component/motion';

export default function App() {
  return <MotionProvider><Layoutpage /></MotionProvider>;
}
