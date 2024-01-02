import './App.css';
import Header from './Components/Header/header';
import Sidebar from './Components/Sidebar/sidebar';
import Content from './Components/Maincontaint/containt';



function App() {
  return (
    <div className='App'>
      <Header />
      <div className='App_Page'>
        <Sidebar />
        <Content /> 
      </div>
      
    </div>
  );
}

export default App;
