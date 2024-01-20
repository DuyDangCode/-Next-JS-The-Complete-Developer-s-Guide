export default function HelloFormServer() {
  console.log('Hello from server 1');
  async function sayHello() {
    // 'use server';
    console.log('Oke');
  }
  return (
    <div>
      Hello
      {/* <form action={sayHello.bind(null)}>
        <button type='submit'>Say hello</button>
      </form> */}
      {/* <button>aaaaaa</button> */}
    </div>
  );
}
