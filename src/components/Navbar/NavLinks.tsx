import { NavItems } from '@/constants';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';

function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {NavItems.map((item, index) => {
        const isActive = pathname === item.href || (item.subItems && item.subItems.some(subItem => pathname === subItem.href));

        if (item.subItems) {
          return (
            <DropdownMenu key={index}>
              <DropdownMenuTrigger className={`
                flex items-center font-medium text-lg px-3 py-2 rounded-md transition duration-300 ease-in-out
                ${isActive 
                  ? 'text-sky-600 bg-sky-50' 
                  : 'hover:text-sky-600 hover:bg-sky-50'
                }
              `}>
                {item.label}
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[400px] grid grid-cols-2 gap-2 p-4">
                {item.subItems.map((subItem, subIndex) => (
                  <DropdownMenuItem key={subIndex} className="p-0">
                    <Link href={subItem.href} className="flex items-center w-full p-2 rounded-md hover:bg-sky-50">
                      {subItem.icon && <subItem.icon className="mr-2 h-4 w-4" />}
                      <span>{subItem.label}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          );
        }

        return (
          <Link key={index} href={item.href}>
            <div className={`
              relative font-medium text-lg px-3 py-2 rounded-md transition duration-300 ease-in-out
              ${isActive 
                ? 'text-sky-600 bg-sky-50' 
                : 'hover:text-sky-600 hover:bg-sky-50'
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