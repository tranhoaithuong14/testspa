import { useState } from 'react';
import './Home.less';

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="home">
      <h1>Welcome to React SPA</h1>
      <p>This is a minimal Single Page Application built with:</p>
      <ul>
        <li>React 19.1</li>
        <li>TypeScript 5.7</li>
        <li>Webpack 5.97</li>
        <li>LESS for styling</li>
        <li>ESLint & Prettier</li>
        <li>Husky & lint-staged</li>
      </ul>

      <div className="counter">
        <button onClick={() => setCount(count - 1)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};

export default Home;
