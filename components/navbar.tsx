import Link from 'next/link';
import { ArrowRight, Bell, Compass, PlusCircle, Search, UserCircle2 } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/explore', label: 'Explore' },
  { href: '/community', label: 'Community' },
  { href: '/notifications', label: 'Notifications' },
  { href: '/auth', label: 'Login' }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600/15 text-lg font-bold text-violet-200 ring-1 ring-violet-500/30">
            T
          </div>
          <div>
            <p className="text-lg font-semibold text-white">TechConnect</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/explore" className="secondary-btn hidden sm:inline-flex">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Link>
          <Link href="/create" className="primary-btn gap-2">
            <PlusCircle className="h-4 w-4" />
            Start a Discussion
          </Link>
          <Link href="/notifications" className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-200 hover:border-slate-600">
            <Bell className="h-4 w-4" />
          </Link>
          <Link href="/profile/ava-chen" className="hidden h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-200 hover:border-slate-600 sm:inline-flex">
            <UserCircle2 className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
