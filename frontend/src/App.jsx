import { useState } from 'react';
import Header from '@components/UI/Header/Header'; 
import Footer from '@components/Footer/Footer';

function App() {
  const [count, setCount] = useState(0);

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
      <Footer copyright="© 2026 Alias Team. Все права защищены." />
    </>
  );
}

export default App;

