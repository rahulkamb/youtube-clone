import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/header';
//import Sidebar from './Components/Sidebar/sidebar';
// import Content from './Components/Maincontaint/containt';
import RoutePage from './Components/Routing/route';
import Search from './Components/Routing/search';

function App() {
  return (
    <Router>
      <Header />
     
      <Routes>
        <Route path='/' element={<RoutePage />} />
        <Route  path='/search' element={<Search />} />
      </Routes>
    </Router>
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
