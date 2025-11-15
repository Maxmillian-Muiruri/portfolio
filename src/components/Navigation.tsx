import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { toggleTheme } from '../store/themeSlice';
import type { RootState } from '../store';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();
  const handleToggleTheme = () => dispatch(toggleTheme());

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white hover:text-cyan-400 transition-colors"
          >
            <img
              src="/image.png"
              alt="Maxmillin Muiruri"
              className="w-8 h-8 rounded-full object-cover border-2 border-cyan-400/50"
            />
            <span>MM</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-slate-900 dark:text-white hover:text-cyan-400 transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={handleToggleTheme}
              className="p-2 rounded-lg bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-400" /> : theme === 'blue' ? <div className="w-5 h-5 bg-blue-500 rounded" /> : theme === 'green' ? <div className="w-5 h-5 bg-green-500 rounded" /> : <Moon className="w-5 h-5 text-slate-300" />}
            </button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={handleToggleTheme}
              className="p-2 rounded-lg bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-400" /> : theme === 'blue' ? <div className="w-5 h-5 bg-blue-500 rounded" /> : theme === 'green' ? <div className="w-5 h-5 bg-green-500 rounded" /> : <Moon className="w-5 h-5 text-slate-300" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-900 dark:text-white p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-t border-slate-200 dark:border-slate-800">
          <div className="container mx-auto px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left text-slate-900 dark:text-white hover:text-cyan-400 transition-colors font-medium py-2"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
