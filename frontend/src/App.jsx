import { useState, useEffect } from 'react'
import axios from 'axios'

import AddProduct from './components/UI/Forms/AddProduct';
import Header from './components/UI/Header'; 
import ProductList from './components/UI/ProductList';

import styles from './App.module.css'

const API_URL = import.meta.env.VITE_API_URL

function App() {
  const [items, setItems] = useState([])
  const [siteData, setSiteData] = useState(null) // Состояние для логотипа и фона
  const [itemsLoading, setItemsLoading] = useState(true)
  const [itemsError, setItemsError] = useState(null)

  useEffect(() => {
    // 1. Загрузка товаров с обработкой ошибок
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

    // 2. Загрузка данных сайта (логотип и фон)
    axios.get(`${API_URL}/site`)
      .then(response => {
        setSiteData(response.data)
      })
      .catch(err => console.error("Ошибка загрузки настроек сайта:", err))
  }, [])

  const addProduct = (newProduct) => {
    newProduct.id = String(items.length + 1)
    setItems([...items, newProduct])
    axios.post(`${API_URL}/items`, newProduct) 
  }

  // Динамический стиль для фона
  const backgroundStyle = siteData?.background 
    ? { 
        backgroundImage: `url(${API_URL}/${siteData.background})`, 
        backgroundSize: 'cover', 
        backgroundAttachment: 'fixed',
        minHeight: '100vh' 
      } 
    : { minHeight: '100vh' }

  return (
    <div style={backgroundStyle}>
      {/* Передаем путь к логотипу в Header */}
      <Header logo={siteData?.logo} />
      
      <main className={styles.main}>
        <ProductList 
          items={items} 
          itemsLoading={itemsLoading} 
          itemsError={itemsError}
        />
      </main>  
      <aside className={styles.aside}>
        <AddProduct onAdd={addProduct} />
      </aside>
    </div>
  );
}

export default App






