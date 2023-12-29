import { useState } from 'react';

import ReactLogo from '@/shared/assets/icons/react.svg?react';

import s from './About.module.css';

export const About = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
          <ReactLogo className={s.logo} />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={s.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className={s.readTheDocs}>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};
