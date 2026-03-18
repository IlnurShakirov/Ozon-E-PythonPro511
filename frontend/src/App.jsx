import { useState, useEffect } from 'react';
import Header from '@components/UI/Header/Header'; 
import Footer from '@components/UI/Footer/Footer';

function App() {
  const [count, setCount] = useState(0);
  const [showFooter, setShowFooter] = useState(true)

useEffect(
    () => {
      document.title = (alert("Привет!"))
    },
    []
)  



  return (
    <>
      {/* Передаем title, который ждет Header */}
      <Header title="Счётчик кликов" />
      
      <main style={{ textAlign: 'center', padding: '50px' }}>
        <button onClick={() => setCount(count + 1)}>
          Клик: {count}
        </button>
      </main>

      {/* Передаем copyright, который ждет Footer */}
      {showFooter && <Footer copyright="© 2026 Alias Team. Все права защищены." />}
      <button onClick={() => setShowFooter(!showFooter)}>{showFooter ? "Скрыть" : "Показать"} Footer</button>
    </>
  );
}

export default App;
