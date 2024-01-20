'use client';

import { ReactNode } from 'react';
import HelloFormServer from '../serverComponent';

export default function Hello({ children }: { children: ReactNode }) {
  return (
    <div>
      Hello
      <button
        onClick={() => {
          console.log('bye');
        }}
      >
        Say bye
      </button>
      <HelloFormServer />
      {children}
    </div>
  );
}
