'use client';

import { editAction } from '@/app/actions';
import { Editor } from '@monaco-editor/react';
import { Snippet } from '@prisma/client';
import { useState } from 'react';

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState<string>(snippet.code);
  const handleChangeCode = (value: string | undefined) => {
    setCode(value ? value : '');
  };
  const handleSaveBtn = editAction.bind(null, snippet.id, code);

  return (
    <div>
      <Editor
        height='40vh'
        theme='vs-dark'
        language='javascript'
        defaultValue={code}
        onChange={handleChangeCode}
      />
      <form action={handleSaveBtn}>
        <button type='submit'>Save</button>
      </form>
    </div>
  );
}
