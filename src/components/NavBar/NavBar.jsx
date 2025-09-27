import React from "react";
import Link from "./Link";

const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Shop",
    path: "/shop",
  },
  {
    id: 3,
    name: "About",
    path: "/about",
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact",
  },
  {
    id: 5,
    name: "Cart",
    path: "/cart",
  },
];

const NavBar = () => {
  return (
    <nav>
      <ul className="flex">
        {navigationData.map((route) => (
          <Link route={route} key={route.id}></Link>
        ))}
      </ul>
      {/* <ul className='flex'>
                {
                    navigationData.map(route => <li className='mr-15'>
                        <a href="{route.path}">{route.name}</a>
                    </li>)
                }
            </ul> */}
      {/* <ul className='flex'>
                <li className='mr-5'><a href="/">Home</a></li>
                <li className='mr-5'><a href="/about">About</a></li>
                <li className='mr-5'><a href="/blog">Blog</a></li>
            </ul> */}
    </nav>
  );
};

export default NavBar;
