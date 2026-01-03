export const Navbar = () => {
  return (
    <div className='fixed top-4 left-0 right-0 z-50 flex justify-center'>
      <nav className='w-[92%] max-w-5xl flex items-center justify-between shadow-sm backdrop-blur px-6 py-3 rounded-full bg-[#F4F4F4]'>
        
        <div className='text-xl font-semibold'></div>
        
        <button className='flex flex-col gap-1.5'>
          <span clasName='w-4 h-0.5 bg-black'></span>
          <span clasName='w-3.5 h-0.5 bg-black'></span>
        </button>
      </nav>
    </div>
  )
}

export default Navbar