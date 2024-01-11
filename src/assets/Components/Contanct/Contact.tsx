// Contact.tsx
import React from 'react'

const Contact: React.FC = () => {
  return (
    <div className='min-h-screen min-w-screen flex items-center justify-center'>
      <div className='bg-gray-100 p-8 rounded-md shadow-md w-96'>
        <h2 className='text-2xl font-bold mb-4'>Contact Us</h2>
        <p className='text-gray-600 mb-4'>
          If you have any questions, feedback, or inquiries, please feel free to reach out to us using the form below.
        </p>
        <form>
          <div className='mb-4'>
            <label htmlFor='name' className='block text-sm font-medium text-gray-600'>Name</label>
            <input type='text' id='name' name='name' className='mt-1 p-2 w-full border rounded-md' />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-600'>Email</label>
            <input type='email' id='email' name='email' className='mt-1 p-2 w-full border rounded-md' />
          </div>
          <div className='mb-4'>
            <label htmlFor='message' className='block text-sm font-medium text-gray-600'>Message</label>
            <textarea id='message' name='message' rows={4} className='mt-1 p-2 w-full border rounded-md' />
          </div>
          <button
            type='submit'
            className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
