
function Footer (): JSX.Element {
  return (
    <footer className='bg-black text-white p-8 w-full'>
      <div className='container mx-auto flex justify-between items-center'>
        <div>
          <h2 className='text-2xl font-bold'>RetroSpin</h2>
          <p className='mt-2'>Your source for vintage vinyl records</p>
        </div>
        <div>
          <h3 className='text-lg font-bold mb-4'>Contact Us</h3>
          <p>Email: info@retrospin.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
