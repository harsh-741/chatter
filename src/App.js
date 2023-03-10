import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Join from './components/Joins/Join';
import Chat from './components/Chats/Chat';



function App() {
  
  return (
    <BrowserRouter>
    <div className='app'>
      <Routes>
      <Route path="/" element={<Join />}></Route>
      <Route path="/Chat" element={<Chat />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
