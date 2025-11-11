"use client";
import { useState } from "react";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="flex justify-between items-center p-3 max-w-6xl mx-auto bg-background text-foreground transition-colors duration-300 relative">
      <ul className="flex gap-4 items-center">
        <li className="sm:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className="text-2xl"
          >
            {isMobileMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </li>

        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Link href="/sign-in">Sign in</Link>
        </SignedOut>

        <li className="hidden sm:block">
          <Link href="/">Home</Link>
        </li>
        <li className="hidden sm:block">
          <Link href="/favorites">Favorites</Link>
        </li>
        <li className="hidden sm:block">
          <Link href="/about">About</Link>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <DarkModeSwitch />
        <Link href="/" className="flex gap-1 items-center">
          <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
            MOVIE
          </span>
          <span className="text-xl hidden sm:inline">rating</span>
        </Link>
      </div>

      {isMobileMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-background shadow-lg z-50">
          <ul className="flex flex-col items-center gap-4 p-4">
            <li>
              <Link href="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/favorites" onClick={closeMenu}>
                Favorites
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={closeMenu}>
                About
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}


// import Link from "next/link";
// import DarkModeSwitch from "./DarkModeSwitch";
// import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

// export default function Header() {
//   return (
//     <header className="flex justify-between items-center p-3 max-w-6xl mx-auto bg-background text-foreground transition-colors duration-300">
//       <ul className="flex gap-4">
//         <SignedIn>
//           <UserButton />
//         </SignedIn>
//         <SignedOut>
//           <Link href="/sign-in">Sign in</Link>
//         </SignedOut>
//         <li className="hidden sm:block">
//           <Link href="/">Home</Link>
//         </li>
//         <li className="hidden sm:block">
//           <Link href="/favorites">Favorites</Link>
//         </li>
//         <li className="hidden sm:block">
//           <Link href="/about">About</Link>
//         </li>
//       </ul>
//       <div className="flex items-center gap-4">
//         <DarkModeSwitch />
//         <Link href="/" className="flex gap-1 items-center">
//           <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
//             MOVIE
//           </span>
//           <span className="text-xl hidden sm:inline">rating</span>
//         </Link>
//       </div>
//     </header>
//   );
// }
