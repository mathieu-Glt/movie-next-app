import Link from "next/link";

function Navigation() {
  return (
    <div>
      <nav className="flex flex-wrap justify-around">
        <Link href="/">Home</Link>

        {/* Prefetched when the link is hovered or enters the viewport */}
        <Link href="/blog">Blog</Link>
        {/* No prefetching */}
        <Link href="/contact">Contact</Link>
        <Link href="/dashboard">Dashboard</Link>
      </nav>
    </div>
  );
}

export default Navigation;
