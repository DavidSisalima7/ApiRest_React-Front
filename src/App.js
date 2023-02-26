import logo from './logo.svg';
import './App.css';
import ProductContextProvider from './contexts/ProductContext';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
    <ProductContextProvider>
        <ProductList/>
    </ProductContextProvider>
</div>
  );
}

export default App;
