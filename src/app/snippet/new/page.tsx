'use client';

import { createAction } from '@/app/actions';
import { useFormState } from 'react-dom';

export default function CreateSnippetPage() {
  const [formState, action] = useFormState(createAction, { message: '' });
  return (
    <div className='w-[1000px] h-[200px]'>
      <form
        className=' flex flex-col w-full h-full gap-4 justify-center'
        action={action}
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
        {formState.message !== '' && (
          <div className=' rounded bg-red-200 border-red-50 border-[1px] p-2'>
            {formState.message}
          </div>
        )}
        <button type='submit' className=' bg-blue-200 rounded-md mx-3'>
          Sayhi
        </button>
      </form>
    </div>
  );
}
