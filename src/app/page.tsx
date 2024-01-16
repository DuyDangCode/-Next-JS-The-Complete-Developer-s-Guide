import Image from 'next/image';
import { db } from './db';
import Link from 'next/link';

export default async function Home() {
  const allSnippets = await db.snippet.findMany();
  const renderedSnippet = allSnippets.map((snippet) => {
    return (
      <div key={snippet.id}>
        <Link href={`/snippet/${snippet.id}`}>{snippet.title}</Link>
      </div>
    );
  });
  return (
    <div className='flex flex-col gap-5'>
      <Link href={'/snippet/new'}>And new</Link>
      {renderedSnippet}
    </div>
  );
}
