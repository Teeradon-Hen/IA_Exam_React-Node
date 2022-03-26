import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Hero from "./Hero"
import Post from "./Post"
import NumberFormat from "./NumberFormat"
import Area from "./Area"
import CitizenId from "./CitizenId"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/hero">ข้อ1</Link>
          <Link to="/posts">ข้อ2</Link>
          <Link to="/areaCompute">ข้อ3</Link>
          <Link to="/citizenId">ข้อ4</Link>
          <Link to="/numberFormat">ข้อ5</Link>
        </nav>
        <Routes>
          <Route path='/hero' element={<Hero></Hero>} />
          <Route path='/posts' element={<Post></Post>} />
          <Route path='/areaCompute' element={<Area></Area>} />
          <Route path='/citizenId' element={<CitizenId></CitizenId>} />
          <Route path='/numberFormat' element={<NumberFormat></NumberFormat>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
