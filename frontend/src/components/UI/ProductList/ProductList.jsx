import { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(data => {
        console.log("Данные получены:", data); // Проверка в консоли
        setProducts(data);
      })
      .catch(err => console.error("Ошибка запроса:", err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Наши товары:</h2>
      {products.length === 0 ? <p>Загрузка или список пуст...</p> : (
        products.map(item => (
          <div key={item.id} style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <b>{item.isAvailable ? "В наличии" : "Под заказ"}</b>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;




