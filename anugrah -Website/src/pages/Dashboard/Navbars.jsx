import { SearchIcon, BellIcon, SunIcon } from '@heroicons/react/outline';

export default function Navbars() {
  return (
    <header className="flex items-center justify-between p-4 px-10 bg-white shadow">
      <h2 className="font-semibold text-lg">Home</h2>
      <div className="flex items-center gap-4">
        <SearchIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
        <SunIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
        <BellIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
        <img src="https://i.pravatar.cc/40" alt="Profile" className="w-8 h-8 rounded-full" />
      </div>
    </header>
  );
}
