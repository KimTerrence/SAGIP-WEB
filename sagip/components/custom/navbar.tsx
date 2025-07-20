'use client';

import { useEffect, useState } from 'react';
import { HomeIcon, MenuIcon, X, Download, ChartNoAxesCombined, Bug } from 'lucide-react';
import { useRouter } from 'next/navigation';

const navItems = [
  { icon: HomeIcon, label: 'Home' },
  { icon: ChartNoAxesCombined, label: 'Dashboard' },
  { icon: Bug, label: 'Pest' },
  { icon: Download, label: 'Download' },
 // { icon: UserCircleIcon, label: '' },
 // { icon: Squares2X2Icon, label: 'Blocks' },
 // { icon: CommandLineIcon, label: 'Docs' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const router = useRouter();

  return (
    <>
      {/* Navbar */}
      <nav className="w-full border-b bg-white shadow-sm fixed">
        <div className="container mx-auto flex items-center justify-between px-10 py-4">
          <img src="logo.png" alt="sagip logo" className='h-10'/>

          <ul className="hidden gap-6 lg:flex items-center">
            {navItems.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-gray-700 hover:text-green-600 font-medium">
                <Icon className="h-5 w-5" />
                {label}
              </li>
            ))}
          </ul>

          <div className="hidden gap-4 lg:flex items-center">
            <button className="text-gray-700 hover:text-green-600 font-medium" onClick={() => {router.push("/login")}}>Log in</button> 
          </div>

          <button className="lg:hidden text-gray-700" onClick={handleOpen}>
            {open ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden container mx-auto px-4 py-4 border-t">
            <ul className="flex flex-col gap-4 mb-4">
              {navItems.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-gray-700 hover:text-green-600 font-medium">
                  <Icon className="h-5 w-5" />
                  {label}
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              <button className="text-gray-700 font-medium" onClick={() => {router.push("/login")}}>Log in</button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
