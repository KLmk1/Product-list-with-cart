import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';
import Modal from './components/Modal/Modal';

export default function App() {
  return (
    <div className="app">
      <ProductList />
      <Cart />
      <Modal />
    </div>
  );
}
