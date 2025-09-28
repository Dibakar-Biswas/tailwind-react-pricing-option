import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

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

const links = navigationData.map((route) => (<Link route={route} key={route.id}></Link>))

const NavBar = () => {
    const [open, setOpen] = useState(false)
  return (
    <nav className="flex justify-between mx-10">
        <span className="flex" onClick={() => setOpen(!open)}>
            {open ? <X className="md:hidden"></X> : <Menu className="md:hidden"></Menu>}

            <ul className={`md:hidden absolute duration-1000 ${open ? 'top-8 ' : '-top-40'} bg-amber-300`}>
                {links}
            </ul>
            
            <h3 className="ml-4">My NavBar</h3>
        </span>
      <ul className="md:flex hidden">
        {
            links
        }
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
        <button className="btn cursor-pointer">Sign In</button>
    </nav>
  );
};

export default NavBar;
