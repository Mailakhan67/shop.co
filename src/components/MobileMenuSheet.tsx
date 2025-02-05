"use client"
import { TiThMenu } from "react-icons/ti";
import Link from "next/link";
//import { RiArrowDropDownLine } from "react-icons/ri";

import {
  Sheet,
  //SheetClose,
  SheetContent,
 // SheetDescription,
 // SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ShopNavigation } from "./ShopNavigation";

const SHEET_SIDES = [ "left"] as const

type MobileMenuSheet = (typeof SHEET_SIDES)[number]

export function MobileMenuSheet() {
  return (
    <div className=" gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side} >
          <SheetTrigger asChild className="sm:hidden">
            <TiThMenu className="text-2xl "/>
          </SheetTrigger >
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>SHOP.CO</SheetTitle>
            </SheetHeader>
             {/* navigation bar */}
             <ul>
             <li className=" grid grid-cols-1 space-y-5 place-items-start">
                    
                
                    <Link href={``}><ShopNavigation/></Link>
                    <Link className="ml-3" href={`/sell`}>On Sale</Link>
                    <Link className="ml-3" href={"/product"}>New Arrivals</Link>
                    <Link className="ml-3" href={"/brands"}>Brands</Link>

                </li>
            </ul>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}