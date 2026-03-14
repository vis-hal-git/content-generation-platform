import { Link, useLocation } from 'react-router-dom'
import { Home, Zap, Clock, User } from 'lucide-react'
import clsx from 'clsx'

const Sidebar = () => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Dashboard', icon: Home },
    { path: '/generator', label: 'Generator', icon: Zap },
    { path: '/history', label: 'History', icon: Clock },
    { path: '/profile', label: 'Profile', icon: User },
  ]

  return (
    <aside className="w-64 bg-white border-r border-gray-200 shadow-sm">
      <div className="p-6">
        <h2 className="text-lg font-bold text-gray-800">ContentAI</h2>
        <p className="text-xs text-gray-500 mt-1">AI-Powered Content</p>
      </div>

      <nav className="mt-8 px-4 space-y-2">
        {navItems.map(({ path, label, icon: Icon }) => (
          <Link
            key={path}
            to={path}
            className={clsx(
              'flex items-center gap-3 px-4 py-3 rounded-lg transition',
              location.pathname === path
                ? 'bg-blue-50 text-blue-600 font-semibold'
                : 'text-gray-600 hover:bg-gray-50'
            )}
          >
            <Icon className="w-5 h-5" />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar