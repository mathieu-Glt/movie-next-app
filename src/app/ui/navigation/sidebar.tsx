"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "invoices", href: "/dashboard/invoices" },
  { name: "customers", href: "/dashboard/customers" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 flex-col bg-skyBlue text-white">
      {/* Logo */}
      <Link href="/" className="flex h-20 items-center gap-3 px-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-mint-500 text-lg font-bold">
          <Image
            src="/logo.jpg"
            width={200}
            height={200}
            className="hidden md:block m-auto"
            alt="logo society"
          />
        </div>
        <span className="text-xl font-semibold">Blog</span>
      </Link>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col gap-1 px-3 py-4">
        {links.map((link) => {
          const isActive = pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-blue-600 text-blue-50"
                  : "text-white/70 hover:bg-blue-600 hover:text-white/100"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
