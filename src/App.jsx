import './App.scss';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import Main from './pages/Main';
import Story from './pages/Story';
import Menu from './pages/Menu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route element={<MainLayout />}>
                  <Route path='/' element={<Navigate to='/home'/>}></Route>
                  <Route path='*' element={<Main/>}></Route>
                  <Route path='/home' element={<Main/>}></Route>
                  <Route path='/story' element={<Story/>}></Route>
                  <Route path='/menu' element={<Menu/>}></Route>
              </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
