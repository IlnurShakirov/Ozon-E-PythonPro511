import React from 'react'
import { BsTrash3Fill } from 'react-icons/bs'
import { FaEdit } from "react-icons/fa"

import styles from './ProductList.module.css'

const API_URL = import.meta.env.VITE_API_URL


const ProductList = ({ items, itemsLoading, itemsError}) => {
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
                  <strong>{item.name}</strong>
                  <div>
                      <img
                          className= {styles.itemImg}
                          src={item.imageUrl ? `${API_URL}/${item.imageUrl}` : `${API_URL}/no-image.jpg`}
                          alt={item.imageUrl ? "Фото вещи" : 'Нет фото'}
                      />
                  </div>                   
                  <div>{item.description}</div> 
                  <div>{item.isAvailable ? " ✅  (В наличии)" : " ❌ (Нет на складе)"}</div>
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





