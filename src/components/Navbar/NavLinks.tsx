import { NavItems } from '@/constants';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import type { NavItem, SubNavItem } from './Navbar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const NavLinks: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center space-x-1">
      {NavItems.map((item: NavItem, index: number) => {
        const isActive: boolean = pathname === item.href ||
          (item.subItems ? item.subItems.some((subItem: SubNavItem) => pathname === subItem.href) : false);

        if (item.subItems) {
          return (
            <DropdownMenu key={index}>
              <DropdownMenuTrigger className={cn(
                "flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                isActive
                  ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20"
                  : "text-white dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100/80 dark:hover:bg-gray-800/50"
              )}>
                <span>{item.label}</span>
                <ChevronDown className="h-3.5 w-3.5 opacity-70" />
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="center"
                sideOffset={8}
                className="w-[320px] p-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border border-gray-200/50 dark:border-gray-800/50 rounded-xl shadow-lg"
              >
                <div className="grid grid-cols-1 gap-1">
                  {item.subItems.map((subItem: SubNavItem, subIndex: number) => (
                    <DropdownMenuItem
                      key={subIndex}
                      className="p-0 focus:bg-transparent"
                    >
                      <Link
                        href={subItem.href}
                        className={cn(
                          "flex items-center w-full p-2.5 rounded-lg transition-colors duration-200",
                          pathname === subItem.href
                            ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
                            : "hover:bg-gray-100/80 dark:hover:bg-gray-800/50"
                        )}
                      >
                        {subItem.icon && (
                          <div className={cn(
                            "mr-3 p-1.5 rounded-md",
                            pathname === subItem.href
                              ? "bg-indigo-100 dark:bg-indigo-800/30 text-indigo-600 dark:text-indigo-400"
                              : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                          )}>
                            <subItem.icon className="h-4 w-4" />
                          </div>
                        )}
                        <div>
                          <div className="text-sm font-medium">{subItem.label}</div>
                          {subItem.description && (
                            <div className="text-xs mt-0.5 opacity-70 line-clamp-1">
                              {subItem.description}
                            </div>
                          )}
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          );
        }

        return (
          <Link key={index} href={item.href} className="relative">
            <div className={cn(
              "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
              isActive
                ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20"
                : "text-white dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100/80 dark:hover:bg-gray-800/50"
            )}>
              {item.label}

              {isActive && (
                <motion.span
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 right-0 mx-auto w-1/2 h-0.5 bg-indigo-500 dark:bg-indigo-400 rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;