'use client';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { LuAlignJustify } from "react-icons/lu";
import { Button } from "../ui/button";
import { navData } from "@/components/nav/nav-data"
import Link from "next/link";

export default function ActionButtons() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {/* <div className="bg-background text-foreground rounded-lg shadow-lg"> */}
        <Button variant="ghost" color="primary" size="icon" className="flex lg:hidden">
          <LuAlignJustify className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all"/>
          <span className="sr-only">Open menu</span>
        </Button>
        {/* </div> */}
      </SheetTrigger>
      <SheetContent>
        {navData.map((item) => (
          <div key={item.title}>
            <Link href={item.href}>{item.title}</Link>
          </div>
        ))}
      </SheetContent>
    </Sheet>
  )
}