export default async function HelloFormServer() {
  console.log('Hello from server 1');
  // async function sayHello() {
  //   'use server';
  //   console.log('Oke');
  // }

  // const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));
  const data = await new Promise((resolve, reject) => {
    console.log('a');
    resolve(1);
  });

  return (
    <div>
      Hello from server
      {/* <form action={sayHello.bind(null)}>
        <button type='submit'>Say hello</button>
      </form> */}
      {/* <button>aaaaaa</button> */}
    </div>
  );
}
