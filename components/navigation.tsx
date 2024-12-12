'use client';

import { Dumbbell } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <Dumbbell className="me-2" />
          Workout Tracker
        </Link>
        <div className="navbar-nav">
          <Link
            href="/"
            className={`nav-link ${pathname === '/' ? 'active' : ''}`}
          >
            Workout Plans
          </Link>
          <Link
            href="/calendar"
            className={`nav-link ${pathname === '/calendar' ? 'active' : ''}`}
          >
            Calendar
          </Link>
          <Link
            href="/summary"
            className={`nav-link ${pathname === '/summary' ? 'active' : ''}`}
          >
            Summary
          </Link>
        </div>
      </div>
    </nav>
  );
}