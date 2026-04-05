import ProductCard from `@components/UI/ProductCard`


const ProductList = ({ items, itemsLoading, itemsError, onDelete}) => {
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
                   <ProductCard key={item.id} item={item} onDelete />         
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





