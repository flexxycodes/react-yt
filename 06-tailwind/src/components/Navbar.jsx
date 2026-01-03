export default function Navbar() {
  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <nav className="w-[92%] max-w-5xl flex items-center justify-between px-6 py-3 
                      bg-[#F4F4F4] rounded-full shadow-sm backdrop-blur">
        
        {/* Logo */}
        <div className="text-xl font-bold">M</div>

        {/* Menu icon */}
        <button className="flex flex-col gap-1.5">
          <span className="w-5 h-0.5 bg-black"></span>
          <span className="w-5 h-0.5 bg-black"></span>
        </button>

      </nav>
    </div>
  );
}