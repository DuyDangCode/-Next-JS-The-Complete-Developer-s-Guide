'use client';

import Hello from '@/app/components/clientComponent';
import HelloFormServer from '@/app/components/serverComponent';
import { useState } from 'react';

export default function A() {
  console.log('A page');
  const [count, setCount] = useState(0);
  return (
    <div>
      A page
      {/* <button
        onClick={() => {
          console.log('clicked');
        }}
      >
        Click me please
      </button> */}
      <Hello>
        <HelloFormServer />
      </Hello>
      <h1>{count}</h1>
      <button
        onClick={() => {
          console.log(count);
          setCount((prev) => ++prev);
        }}
      >
        Clicked
      </button>
    </div>
  );
}
