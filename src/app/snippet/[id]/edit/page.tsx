import SnippetEditForm from '@/app/components/snippetEditForm';
import { db } from '@/app/db';
import { notFound } from 'next/navigation';

interface EditPageProps {
  params: {
    id: string;
  };
}

export default async function EditPage(props: EditPageProps) {
  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(props.params.id),
    },
  });
  if (!snippet) return notFound();
  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
