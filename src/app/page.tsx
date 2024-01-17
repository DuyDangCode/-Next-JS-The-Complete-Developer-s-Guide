import Image from 'next/image';
import { db } from './db';
import Link from 'next/link';

export default async function Home() {
  const allSnippets = await db.snippet.findMany();
  const renderedSnippet = allSnippets.map((snippet) => {
    return (
      <div key={snippet.id}>
        <Link
          href={`/snippet/${snippet.id}`}
          className=' border-2 flex justify-center items-center p-[10px] min-w-[200px]'
        >
          {snippet.title}
        </Link>
      </div>
    );
  });
  return (
    <div className='flex flex-col gap-5 justify-center items-center w-full h-full'>
      <Link
        href={'/snippet/new'}
        className=' rounded-md border-2 bg-blue-200 flex justify-center items-center w-[100px]'
      >
        And new
      </Link>
      {renderedSnippet}
    </div>
  );
}
