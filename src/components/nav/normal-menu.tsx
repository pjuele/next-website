'use client'
import {
    NavigationMenu,
    NavigationMenuContent,
    // NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    // NavigationMenuViewport,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
import { navData } from "./nav-data"
import { Button } from "../ui/button"
import Link from "next/link"
import { LogIn } from "lucide-react"
// import Link from "next/link"
// // import BalancedHeading from "./BalancedHeading"
export default function PageNav(): JSX.Element {
    return (
        <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
            {navData.map((item) => (
                <NavigationMenuItem key={item.title}>
                    <NavigationMenuLink asChild>
                        {/* <div className="bg-background text-foreground rounded-lg shadow-lg"> */}
                        <Button variant="link" size="icon" className="w-max p-2">
                            <Link href={item.href}>{item.title}</Link>
                        </Button>
                        {/* </div> */}
                    </NavigationMenuLink>
                </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
                <NavigationMenuLink asChild>
                    <Button variant="link" size="icon" className="w-max p-2 font-xxs">
                        <Link href="/">
                            <Button variant="ghost" size="icon">
                                <LogIn className="h-[1.2rem] w-[1.2rem] transition-all" />
                            </Button>
                        </Link>
                    </Button>
                </NavigationMenuLink>
            </NavigationMenuItem>
        </NavigationMenuList>
        </NavigationMenu>
    )
}