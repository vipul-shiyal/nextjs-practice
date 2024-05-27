'use client'

import { useFormStatus } from 'react-dom';

//this component used for better user experices and client side render
export default function FormSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button 
      className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-gray hover:bg-opacity-90"
      disabled={pending}
    >
      {pending ? 'Submitting...' : 'Save'}
    </button>
  )
}