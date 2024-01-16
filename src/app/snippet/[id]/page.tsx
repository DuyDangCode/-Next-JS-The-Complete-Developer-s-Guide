import { db } from '@/app/db';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface PropSnippet {
  params: {
    id: string;
  };
}

export default async function SnippetPage(prop: PropSnippet) {
  // console.log(prop);

  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(prop.params.id),
    },
  });

  if (!snippet) return notFound();
  return (
    <div>
      {snippet.code}
      <Link href={`/snippet/${prop.params.id}/edit`}>Edit</Link>
    </div>
  );
}
