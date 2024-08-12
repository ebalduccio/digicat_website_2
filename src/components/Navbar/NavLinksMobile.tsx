import { NavItems } from '@/constants';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const NavLinksMobile = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-2">
      {NavItems.map((item, index) => {
        const isActive = pathname === item.href;
        return (
          <Link key={index} href={item.href}>
            <motion.div 
              className={`
                w-full py-3 px-4 rounded-md transition duration-300 ease-in-out
                ${isActive 
                  ? 'bg-sky-50 text-sky-600' 
                  : 'text-gray-700 hover:bg-gray-100'
                }
              `}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-medium text-base">{item.label}</span>
            </motion.div>
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinksMobile;