import ItemlistContainer from '../src/Components/ItemListContainer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemlistContainer greeting="Saludos este es mi Ecommerce"/>
    </div>
  );
}

export default App;
