// import NavBar from './components/NavBar/NavBar'
import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemlistContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {

  

  return (
    <div className="App">
      
      
      <ItemListContainer title='Welcome to my page' />
      {/* <ItemCount stock="5" initial={1} /> */}
    </div>
  );
}


export default App;
