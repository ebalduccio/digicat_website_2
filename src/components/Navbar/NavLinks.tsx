import { NavItems } from '@/constants';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {NavItems.map((item, index) => {
        const isActive = pathname === item.href;
        return (
          <Link key={index} href={item.href}>
            <div className={`
              relative font-medium text-sm px-3 py-2 rounded-md transition duration-300 ease-in-out
              ${isActive 
                ? 'text-sky-600 bg-sky-50' 
                : 'text-gray-700 hover:text-sky-600 hover:bg-sky-50'
              }
            `}>
              {item.label}
              {isActive && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-600 rounded-full" />
              )}
            </div>
          </Link>
        );
      })}
    </>
  );
}

export default NavLinks;