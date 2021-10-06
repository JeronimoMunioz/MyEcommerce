// import NavBar from './components/NavBar/NavBar'
import './App.css';
import Navbar from './NavBar';
import ItemListContainer from './ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {

  

  return (
    <div className="App">
      
      <Navbar/>
      <ItemListContainer title='Welcome to my page' />
      <ItemCount stock="5" initial={1} />
    </div>
  );
}


export default App;
