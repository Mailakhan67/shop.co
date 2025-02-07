"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"


const components: { title: string; href: string; description: string }[] = [
  {
    title: "Men's Fashion",
    href: "/casual",
    description: "Modern styles crafted with premium fabrics for a bold look.",
  },
  {
    title: "Women's Chic Collection",
    href: "/casual",
    description: "Elegant and comfortable designs that elevate your style.",
  },
  {
    title: "Kids Wardrobe",
    href: "/casual",
    description: "Fun and vibrant outfits designed for active little ones.",
  },
  {
    title: "Bags & Footwear Collection",
    href: "/casual",
    description: "Trendy accessories to perfectly complement any outfit.",
  },
];


export function ShopNavigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>         
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-md ">
            Shop 
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid  sm:w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component,index) => (
              <Link href={component.href} key={index}>
                   <ListItem
                  key={component.title}
                  title={component.title}
                >
                  {component.description}
                </ListItem>
              </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"