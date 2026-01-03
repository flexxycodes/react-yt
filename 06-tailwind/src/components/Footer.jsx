export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-16 mt-auto">
      <p className="text-gray-400 mb-10">
        Design better digital experiences with Mobbin.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="font-semibold mb-2">Explore</h4>
          <ul className="space-y-1 text-gray-400">
            <li>Glossary</li>
            <li>Pricing</li>
            <li>Changelog</li>
            <li>Blog</li>
            <li>Colors</li>
            <li>Competitor research</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <ul className="space-y-1 text-gray-400">
            <li>Help center</li>
            <li>Careers</li>
            <li>Merch</li>
            <li>X (Twitter)</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between text-xs text-gray-500 mt-12">
        <span>© Mobbin 2018–2026</span>
        <div className="flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms</span>
        </div>
      </div>
    </footer>
  );
}