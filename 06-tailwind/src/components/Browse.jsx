export default function Browse() {
  return (
    <section className="px-6 py-16">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div>
          <h3 className="font-semibold mb-2">Categories</h3>
          <ul className="space-y-1 text-gray-600">
            <li>Finance</li>
            <li>Food & Drink</li>
            <li>Travel</li>
            <li>Shopping</li>
            <li>Social</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Screens</h3>
          <ul className="space-y-1 text-gray-600">
            <li>Login</li>
            <li>Home</li>
            <li>Search</li>
            <li>Checkout</li>
            <li>Filter & Sort</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-64 rounded-xl bg-gray-200 flex items-center justify-center"
          >
            Screen {i}
          </div>
        ))}
      </div>
    </section>
  );
}