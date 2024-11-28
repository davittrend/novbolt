import { Routes, Route, Link } from 'react-router-dom';
import { CalendarDays, Users, Clock } from 'lucide-react';

export function Dashboard() {
  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r">
        <nav className="p-4 space-y-2">
          <Link
            to="/dashboard/accounts"
            className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <Users className="h-5 w-5" />
            <span>Accounts</span>
          </Link>
          <Link
            to="/dashboard/schedule"
            className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <CalendarDays className="h-5 w-5" />
            <span>Schedule Pins</span>
          </Link>
          <Link
            to="/dashboard/scheduled"
            className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <Clock className="h-5 w-5" />
            <span>Scheduled Pins</span>
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <Routes>
          <Route path="accounts" element={<div>Accounts Page</div>} />
          <Route path="schedule" element={<div>Schedule Pins Page</div>} />
          <Route path="scheduled" element={<div>Scheduled Pins Page</div>} />
          <Route index element={<div>Welcome to Dashboard</div>} />
        </Routes>
      </div>
    </div>
  );
}