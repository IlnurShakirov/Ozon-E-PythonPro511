import AddProduct from '@components/UI/Forms/AddProduct';
import Header from '@components/UI/Header'; 
import ProductList from '@components/UI/ProductList';

import styles from './App.module.css'


function App() {
  return (
    <div>
      <Header />
      
      <main className={styles.main}>
        <ProductList />
      </main>  
      <aside className={styles.aside}>
        <AddProduct />
      </aside>
    </div>
  );
}


export default App




