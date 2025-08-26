import { HomeIcon, ChartBarIcon, ShoppingCartIcon, CurrencyDollarIcon, FolderIcon } from '@heroicons/react/outline';

export default function Sidebar() {
  return (
    <aside className="bg-gray-900 text-white w-64 min-h-screen p-4 hidden md:block">
      
      <nav className="space-y-2">
        <a href="#" className="flex items-center gap-2 p-2 rounded hover:bg-gray-700">
          <HomeIcon className="w-5 h-5" /> Dashboard
        </a>
        <a href="/adminHome" className="flex items-center gap-2 p-2 rounded hover:bg-gray-700">
         Home
        </a>
        <a href="/adminAbout" className="flex items-center gap-2 p-2 rounded hover:bg-gray-700">
         About
        </a>
        <a href="/adminWhyJewar" className="flex items-center gap-2 p-2 rounded hover:bg-gray-700">
         Why Jewar
        </a>
        <a href="/adminFaq" className="flex items-center gap-2 p-2 rounded hover:bg-gray-700">
          Faq
        </a>
        <a href="/adminMedia" className="flex items-center gap-2 p-2 rounded hover:bg-gray-700">
          Media
        </a>
        {/* <a href="#" className="flex items-center gap-2 p-2 rounded hover:bg-gray-700">
          Price
        </a><a href="#" className="flex items-center gap-2 p-2 rounded hover:bg-gray-700">
          Contact Us
        </a> */}
      </nav>
    </aside>
  );
}
