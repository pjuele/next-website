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
        <Button variant="default" size="icon" className="text-background dark:text-foreground hover:dark:text-background">
          <LuAlignJustify className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all"/>
          <span className="sr-only">Open menu</span>
        </Button>
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