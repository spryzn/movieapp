import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-3 max-w-6xl mx-auto bg-background text-foreground transition-colors duration-300">
      <ul className="flex gap-4">
        <li className="hidden sm:block">
          <Link href="/sign-in">Sign in</Link>
        </li>
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
    </header>
  );
}
