export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center px-6 py-20 gap-6">
      <div className="w-20 h-20 rounded-xl bg-gray-200">
        <img className='rounded-xl p-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkYv0WpaaokK4puhnqruFDEbfCp5ifESYdbsKZmQNUYg&s'></img>
      </div>

      <h1 className="text-4xl font-bold">
        Discover real-world design inspiration.
      </h1>

      <p className="text-gray-500 max-w-md">
        Featuring over 1,000 iOS & Web apps, and 200 sites.
      </p>

      <div className="flex gap-4">
        <button className="px-6 py-3 rounded-full bg-black text-white">
          Join for free
        </button>
        <button className="px-6 py-3 rounded-full border">
          See our plans →
        </button>
      </div>

      <div className="flex gap-6 pt-8 text-gray-400">
        <span>Uber</span>
        <span>Airbnb</span>
        <span>Revolut</span>
        <span>Pinterest</span>
      </div>
    </section>
  );
}