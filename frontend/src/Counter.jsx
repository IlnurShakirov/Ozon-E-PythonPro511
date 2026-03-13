import React, {useState} from 'react';

const Counter = () => {
 const [count, setCount] = useState(0);

 const increment = () => {
 setCount(count + 1);
};

 const decrement = () => {
 if (count > 0) {// Не позволяем уходить в отрицательные значения
 setCount(prev => prev -1 );
}
};

 const reset = () => {
 setCount(0);
};

 return (
 <div>
 <h2>Счётчик: {count}</h2>
 <button onClick={increment}>+1</button>
 <button onClick={decrement}>-1</button>
 <button onClick={reset}>Сбросить</button>
 </div>
);
};

export default Counter;
