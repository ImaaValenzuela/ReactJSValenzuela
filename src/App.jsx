import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className='container-fluid background-primary'>
      <NavBar/>
      <ItemListContainer season="collection spring summer 2023"/>
    </div>
  );
}

export default App;
