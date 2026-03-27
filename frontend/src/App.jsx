import { useState, useEffect } from 'react'
import axios from 'axios'

import AddProduct from '@components/UI/Forms/AddProduct';
import Header from '@components/UI/Header'; 
import ProductList from '@components/UI/ProductList';

import styles from './App.module.css'

const API_URL = import.meta.env.VITE_API_URL


function App() {
  // items = [
  //   {id: "1", name: "Xiaomi Redmi 10", description: "Топ за свои деньги!", isAvailable: true},
  //   {id: "2", name: "Iphone X", description: "Крутой телефон (нет) и дорогой (да)", isAvailable: false}
  // ]
  const [items, setItems] = useState([])
  const [itemsLoading, setItemsLoading] = useState(true)
  const [itemsError, setItemsError] = useState(null)

 useEffect(() => {
    axios.get(`${API_URL}/items`)
      .then(response => {
        setItems(response.data)
        setItemsLoading(false)
      })
      .catch(error => {
        console.error("Ошибка при получении данных:", error)
        setItemsLoading(false)

        const errMsg = 
          error.message === "Network Error" ? "Ошибка сети" :
          error.response?.status === 404 ? "Ресурс не найден" : 
          "Повторите попытку позже"
        
        setItemsError(`Ошибка загрузки вещей: ${errMsg}`)
      })
  }, [])

  return (
    <div>
      <Header />
      
      <main className={styles.main}>
        <ProductList 
          items={items} 
          itemsLoading={itemsLoading} 
          itemsError={itemsError}
        />
      </main>  
      <aside className={styles.aside}>
        <AddProduct />
      </aside>
    </div>
  );
}


export default App




