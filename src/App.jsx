import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className='container-fluid background-primary'>
      <NavBar/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
