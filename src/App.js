import './App.css';
import { Route, Routes } from 'react-router-dom';
import Transcript from './Transcript';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Transcript />} />
      </Routes>
    </>
  );
}

export default App;
