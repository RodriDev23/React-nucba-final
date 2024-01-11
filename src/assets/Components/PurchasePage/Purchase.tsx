import { Link } from 'react-router-dom'

function Purchase (): JSX.Element {
  return (
    <div className='min-h-screen min-w-screen flex flex-col justify-center items-center'>
      <div className='bg-gray-100 p-8 rounded-md shadow-md flex flex-col justify-center items-center gap-20'>
        <h1 className='text-3xl font-bold mb-4'>Thank You for Your Purchase!</h1>
        <p className='text-lg w-72'>
          We appreciate your buy. An email with details about your purchase has been sent to your email address.
        </p>
        <img src='https://media.tenor.com/4ZG0y2QXMzgAAAAM/playing-guitar-strumming.gif' />
      </div>
      <button
        className='bg-black py-3 px-5 rounded-md text-white mt-10'
      ><Link to='/EntirePage'>Go to the main  page</Link>
      </button>
    </div>
  )
}

export default Purchase
