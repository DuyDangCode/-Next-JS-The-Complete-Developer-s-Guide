import { db } from '@/app/db';
import { redirect } from 'next/navigation';

export default function CreateSnippetPage() {
  async function createSnippet(formData: FormData) {
    'use server';
    const title = formData.get('title') as string;
    const code = formData.get('code') as string;

    const newSnippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    console.log('newSnippet:::', newSnippet);

    redirect('/');
  }
  return (
    <div className='w-[1000px] h-[200px]'>
      <form
        className=' flex flex-col w-full h-full gap-4 justify-center'
        action={createSnippet}
      >
        <h3>Create snippet</h3>
        <div className='flex flex-row gap-4 '>
          <label htmlFor='title'>Name</label>
          <input name='title' id='title' className='w-full border-2' />
        </div>
        <div className='flex flex-row gap-4 '>
          <label htmlFor='code'>Code</label>
          <textarea name='code' id='code' className='w-full border-2' />
        </div>
        <button type='submit' className=' bg-blue-200 rounded-md mx-3'>
          Sayhi
        </button>
      </form>
    </div>
  );
}
