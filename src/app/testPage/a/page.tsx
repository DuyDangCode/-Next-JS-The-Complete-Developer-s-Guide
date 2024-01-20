// 'use client';

import Hello from '@/app/components/clientComponent';
import HelloFormServer from '@/app/components/serverComponent';

export default function A() {
  console.log('A page');
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
    </div>
  );
}
