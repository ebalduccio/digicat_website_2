import { NavItems } from '@/constants';
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import type { NavItem, SubNavItem } from './Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const NavLinksMobile: React.FC = () => {
  const pathname = usePathname();
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);

  const toggleSubMenu = (index: number): void => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  return (
    <div className="space-y-1.5">
      {NavItems.map((item: NavItem, index: number) => {
        const isActive: boolean = pathname === item.href ||
          (item.subItems ? item.subItems.some((subItem: SubNavItem) => pathname === subItem.href) : false);
        const isOpen: boolean = openSubMenu === index;

        if (item.subItems) {
          return (
            <div key={index} className="overflow-hidden rounded-xl">
              <motion.button
                className={cn(
                  "w-full py-3 px-4 rounded-lg flex justify-between items-center transition-all duration-300 text-left",
                  isActive || isOpen
                    ? "bg-indigo-900/20 text-indigo-400"
                    : "text-gray-200 hover:bg-gray-800/70"
                )}
                onClick={(): void => toggleSubMenu(index)}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-medium text-sm">{item.label}</span>
                <div className={cn(
                  "p-1 rounded-full transition-all duration-300",
                  isOpen ? "bg-indigo-900/30 rotate-180" : "bg-gray-800"
                )}>
                  <ChevronDown size={14} />
                </div>
              </motion.button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: 'auto',
                      opacity: 1,
                      transition: {
                        height: {
                          duration: 0.3,
                        },
                        opacity: {
                          duration: 0.3,
                          delay: 0.1
                        }
                      }
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: {
                          duration: 0.3,
                        },
                        opacity: {
                          duration: 0.2
                        }
                      }
                    }}
                    className="ml-2 mt-1 pl-2 border-l border-gray-800/80 space-y-1"
                  >
                    {item.subItems.map((subItem: SubNavItem, subIndex: number) => (
                      <motion.div
                        key={subIndex}
                        initial={{ x: -5, opacity: 0 }}
                        animate={{
                          x: 0,
                          opacity: 1,
                          transition: {
                            delay: 0.05 * subIndex
                          }
                        }}
                      >
                        <Link href={subItem.href}>
                          <div className={cn(
                            "group flex items-center p-3 rounded-lg transition-all duration-200",
                            pathname === subItem.href
                              ? "bg-indigo-900/20 text-indigo-400"
                              : "text-gray-300 hover:bg-gray-800/50 hover:text-white"
                          )}>
                            {subItem.icon && (
                              <div className={cn(
                                "mr-3 p-1 rounded-md transition-colors duration-200",
                                pathname === subItem.href
                                  ? "bg-indigo-900/40 text-indigo-400"
                                  : "bg-gray-800 text-gray-400 group-hover:text-gray-300"
                              )}>
                                <subItem.icon className="h-4 w-4" />
                              </div>
                            )}

                            <div>
                              <div className="text-sm font-medium">{subItem.label}</div>
                              {subItem.description && (
                                <div className="text-xs mt-0.5 text-gray-400 line-clamp-1 group-hover:text-gray-300">
                                  {subItem.description}
                                </div>
                              )}
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        }

        return (
          <Link key={index} href={item.href}>
            <motion.div
              className={cn(
                "w-full py-3 px-4 rounded-lg transition-all duration-200",
                isActive
                  ? "bg-indigo-900/20 text-indigo-400"
                  : "text-gray-200 hover:bg-gray-800/70 hover:text-white"
              )}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center">
                {item.icon && (
                  <item.icon className="mr-3 h-4 w-4" />
                )}
                <span className="font-medium text-sm">{item.label}</span>
              </div>

              {isActive && (
                <div className="w-1/3 h-0.5 bg-indigo-500/70 rounded-full mt-1.5" />
              )}
            </motion.div>
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinksMobile;