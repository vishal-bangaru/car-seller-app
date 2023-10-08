  import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, useParams,Outlet,useLocation } from 'react-router-dom';
import CardsList from './components/CardsList'
import PaginationNav from './components/PaginationNav'
import { FaSearch } from 'react-icons/fa';

const ITEMS_PER_PAGE = 6;
const TOTAL_ITEMS = 60;
function App() {
  const [data,setData]=useState([])
  const [searchQuery, setSearchQuery] = useState('');
  const [inputFocused, setInputFocused] = useState(false);
  useEffect(()=>{
    axios.get(" http://localhost:4000/cars")
   .then(res=>setData(res.data))
   .catch(err=>console.log(err))
  },[])
  
  const totalPages = Math.ceil(TOTAL_ITEMS / ITEMS_PER_PAGE);
  return (
    <Router>
      <div className="App">

      
        <nav>
        
        <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
        />
        <FaSearch className="search-icon" />
      </div>
      
        </nav>
        {inputFocused ? (
         
          <>
            <CardsList items={data} searchQuery={searchQuery} />
          </>
        ) : (
         
          <Routes>
            <Route
              path="/page/:page"
              element={
                <>
                  <CardsList items={data} searchQuery={searchQuery} />
                  <PaginationNav totalPages={totalPages} />
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <CardsList items={data} searchQuery={searchQuery} />
                  <PaginationNav totalPages={totalPages} />
                </>
              }
            />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
