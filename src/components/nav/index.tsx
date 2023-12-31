'use client'
import { ModeToggle } from "../mode-toggler"
import ActionButtons from "./action-buttons"
import NormalMenu from "./normal-menu"

export default function PageNav() {
    // FIXME: Try moving through these with tab key! :-(
    return (
        <header className="z-20 fixed top-0 right-0 flex p-1 m-2 gap-0 flex-row align-middle justify-between bg-background text-foreground rounded-lg shadow-lg">
            {/* <Brand /> */}
            <NormalMenu />
            <ModeToggle />
            <ActionButtons />
        </header>
    )
}