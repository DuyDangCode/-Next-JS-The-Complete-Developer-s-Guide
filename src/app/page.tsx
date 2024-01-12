import Image from 'next/image';
import { db } from './db';
import Link from 'next/link';

export default async function Home() {
  const allSnippets = await db.snippet.findMany();
  const renderedSnippet = allSnippets.map((snippet) => {
    return <div key={snippet.id}>{snippet.title}</div>;
  });
  return (
    <div>
      <Link href={'/snippet/new'}>And new</Link>
      {renderedSnippet}
    </div>
  );
}
