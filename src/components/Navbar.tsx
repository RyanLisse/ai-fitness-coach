"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { AlignRight } from "lucide-react";
import { defaultLinks } from "@/config/nav";
import {UserButton} from "@clerk/nextjs";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    return (
        <>
            {/* Mobile Navbar */}
            <div className="md:hidden border-b mb-4 pb-2 w-full">
                <nav className="flex justify-between w-full items-center">
                    <Link href="/">
                      <h1 className="font-semibold text-lg uppercase font-mono">Goggins Ai</h1>
                    </Link>
                    <Button variant="ghost" onClick={() => setOpen(!open)}>
                        <AlignRight />
                    </Button>
                </nav>
                {open && (
                    <div className="my-4 p-4 bg-muted">
                        <ul className="space-y-2">
                            {defaultLinks.map((link) => (
                                <li key={link.title} onClick={() => setOpen(false)}>
                                    <Link href={link.href}>
                                        <div className={pathname === link.href ? "text-primary hover:text-primary font-semibold" : "text-muted-foreground hover:text-primary"}>
                                            {link.title}
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* Desktop Navbar */}
            <div className="hidden md:flex justify-between items-center w-full border-b mb-4 pb-2">
                <Link href="/">
                  <h1 className="font-semibold text-lg uppercase font-mono">Goggins Ai</h1>
                </Link>
           <div className="flex gap-4 ">     <nav>
               <ul className="flex space-x-4">
                   {defaultLinks.map((link) => (
                       <li key={link.title}>
                           <Link href={link.href}>
                               <div className={pathname === link.href ? "text-primary border-b-2 hover:text-primary font-semibold" : "text-muted-foreground hover:text-primary"}>
                                   {link.title}
                               </div>
                           </Link>
                       </li>
                   ))}
               </ul>
           </nav>
                <UserButton afterSignOutUrl="/"/>
           </div>
            </div>
        </>
    );
}
