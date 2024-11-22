"use client";

import Link from "next/link";
import '../styles/NavBar.css';
import { usePathname } from "next/navigation";
import { SIDENAV_ITEMS } from "../lib/constants.tsx";

function NavBar() {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar-content">
          {/* Logo Section */}
          <Link href="/" className="sidebar-link">
            <span className="nav-logo-icon"></span>
            <span className="nav-logo-text">Present Pals</span>
          </Link>

          {/* Menu Items Section - Dynamic */}
          <div className="menu-section">
            {SIDENAV_ITEMS.slice(0, -1).map((item, idx) => (  // Slice to exclude the last item
              <MenuItem key={idx} item={item} />
            ))}
          </div>

          {/* Last Menu Item Section (this will always be at the bottom) */}
          <div className="last-menu-item">
            <MenuItem item={SIDENAV_ITEMS[SIDENAV_ITEMS.length - 1]} /> {/* Last item */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

const MenuItem = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`menu-item ${item.path === pathname ? "active" : ""}`}
    >
      <div className="menu-item-content">
        {item.icon}
        <span className="menu-item-title">{item.title}</span>
      </div>
    </Link>
  );
};

