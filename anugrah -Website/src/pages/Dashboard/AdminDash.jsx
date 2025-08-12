
// import StatsCard from './StatsCard';
import { UserGroupIcon, CurrencyDollarIcon, TrendingUpIcon, RefreshIcon, DownloadIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import Sidebar from './Sidebar';
import Navbars from './Navbars';
import SalesChart from './SalesChart';
import StatsCard from './StatsCard';

export default function AdminDash() {
  return (
    <div className="flex pt-16">
      <Sidebar />
      <div className="flex-1 ">
        <Navbars />
        <div className="p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <h1>Hello !</h1>
        </div>
        
      </div>
    </div>
  );
}
