'use client'
import { ModeToggle } from "../mode-toggler"
import ActionButtons from "./action-buttons"

export default function PageNav() {
    return (
        <header className="z-20 fixed top-0 right-0 flex p-4 gap-2 flex-row align-middle justify-between">
            {/* <Brand /> */}
            {/* <NormalMenu /> */}
            <ModeToggle />
            <ActionButtons />
        </header>
    )
}