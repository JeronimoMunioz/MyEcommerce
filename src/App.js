// import NavBar from './components/NavBar/NavBar'
import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemlistContainer/ItemListContainer';



function App() {

  
  return (
    <div className="App">
      
      <Navbar/>
      <ItemListContainer title='Welcome to my page'/>
    </div>
  );
}


export default App;
