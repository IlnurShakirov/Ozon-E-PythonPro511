import { useState, useEffect } from 'react'
import axios from 'axios'
import { BsTrash3Fill } from 'react-icons/bs'
import { FaEdit } from "react-icons/fa"

import styles from './ProductList.module.css'

const API_URL = import.meta.env.VITE_API_URL

const ProductList = () => {
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
    <div style={{ padding: '20px' }}>
      <h1>Список вещей</h1>
      
      {itemsError && <div style={{ color: 'red', marginBottom: '10px' }}>{itemsError}</div>}

      <ul>
        {
          itemsLoading ? (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Загрузка вещей...</span>
            </div>
          ) : (
            
            !itemsError && items.length > 0 ? (
              items.map(item => (
                <li key={item.id} style={{ marginBottom: '8px' }}>
                  <BsTrash3Fill 
                     title="Удалить"
                     className={styles.deleteIcon} 
                     size={15}
                     color="red"
                  />
                  <FaEdit 
                    title="Редактировать"
                    className={styles.editIcon} 
                    size={15}
                    color="black"
                  />
                  <strong>{item.name}</strong>: {item.description} — {item.isAvailable ? "✅ В наличии" : "❌ Нет в наличии"}
                </li>
              ))
            ) : (
              !itemsError && <div>Список пуст</div>
            )
          )
        }
      </ul>
    </div>
  )
}

export default ProductList





