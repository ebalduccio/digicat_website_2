import { NavItems } from '@/constants';
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const NavLinksMobile = () => {
  const pathname = usePathname();
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {NavItems.map((item, index) => {
        const isActive = pathname === item.href || (item.subItems && item.subItems.some(subItem => pathname === subItem.href));
        const isOpen = openSubMenu === index;

        return (
          <div key={index}>
            {item.subItems ? (
              <div>
                <motion.div 
                  className={`
                    w-full py-3 px-4 rounded-md transition duration-300 ease-in-out flex justify-between items-center
                    ${isActive 
                      ? 'bg-sky-50 text-sky-600' 
                      : 'text-white hover:bg-gray-800'
                    }
                  `}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setOpenSubMenu(isOpen ? null : index)}
                >
                  <span className="font-medium text-base">{item.label}</span>
                  {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </motion.div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-4 mt-2 space-y-2"
                    >
                      {item.subItems.map((subItem, subIndex) => (
                        <Link key={subIndex} href={subItem.href}>
                          <motion.div 
                            className={`
                              w-full py-2 px-4 rounded-md transition duration-300 ease-in-out flex items-center
                              ${pathname === subItem.href 
                                ? 'bg-sky-50 text-sky-600' 
                                : 'text-white hover:bg-gray-800'
                              }
                            `}
                            whileTap={{ scale: 0.95 }}
                          >
                            {subItem.icon && <subItem.icon className="mr-2 h-4 w-4" />}
                            <span className="font-medium text-sm">{subItem.label}</span>
                          </motion.div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link href={item.href}>
                <motion.div 
                  className={`
                    w-full py-3 px-4 rounded-md transition duration-300 ease-in-out
                    ${isActive 
                      ? 'bg-sky-50 text-sky-600' 
                      : 'text-white hover:bg-gray-800'
                    }
                  `}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="font-medium text-base">{item.label}</span>
                </motion.div>
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default NavLinksMobile;