export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4">
      <div className="text-xl font-bold">M</div>

      <button className="flex flex-col gap-1">
        <span className="w-6 h-0.5 bg-black"></span>
        <span className="w-6 h-0.5 bg-black"></span>
      </button>
    </nav>
  );
}