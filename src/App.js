import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/header';
import Sidebar from './Components/Sidebar/sidebar';
// import Content from './Components/Maincontaint/containt';
import RoutePage from './Components/Routing/route';
import Search from './Components/Routing/search';
import History from './Components/Pages/history';
import Library from './Components/Pages/library';
import Subscription from './Components/Pages/subscription';
import Trending from './Components/Pages/trending';
import WatchLater from './Components/Pages/watchLater';

function App() {

  const [isOpen , setIsOpen] = useState(true);

  const toggleSidebar = () =>{    
    setIsOpen(!isOpen);
  }

  return (
    <div className=''>
      <div className=''>
        <Router>
          <Header toggleSidebar={toggleSidebar} />
          <div className='App_Page'>
            <Sidebar className='sidebar_menu' isSidebarOpen={isOpen} />
            <Routes>
              <Route path='/' element={<RoutePage />} />
                <Route path='/search/:searchTerm' element={<Search />} />
                <Route path='/history' element={<History />} />
                <Route path='/library' element={<Library />} />
                <Route path='/subscription' element={<Subscription />} />
                <Route path='/trending' element={<Trending />} />
                <Route path='/watchLater' element={<WatchLater />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
    // <div className='App'>
    //   <Header />
    //   <div className='App_Page'>
    //     <Sidebar />
    //     <Content /> 
    //   </div>

    // </div>
  );
}

export default App;
