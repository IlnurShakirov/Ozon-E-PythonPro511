import React from 'react'


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
                <li key={item.id} item={item} style={{ marginBottom: '8px' }}>
                  
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





