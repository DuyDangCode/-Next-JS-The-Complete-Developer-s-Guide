import Hello from '@/app/components/clientComponent';
import HelloFormServer from '@/app/components/serverComponent';

export default function B() {
  console.log('b');
  async function a() {
    'use server';
    console.log('a');
  }
  return (
    <div>
      B page
      <HelloFormServer />
      <form action={a}>
        <button type='submit'>Say a</button>
      </form>
    </div>
  );
}
