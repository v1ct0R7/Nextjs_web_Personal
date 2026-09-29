import Link from "next/link";

export default function Header() {
    return (
      <header className="border-b">
        <nav className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center text-zinc-600">
          <Link href="/" className="text-2xl font-bold">
            MyWebsite
          </Link>

          <div className="flex gap-6">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>

            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>

            <Link href="/products" className="hover:text-blue-600">
              Products
            </Link>
          </div>
        </nav>
      </header>
    );
}