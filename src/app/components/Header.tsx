'use client'
import { PanelRightOpen, SearchCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaWallet } from 'react-icons/fa';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

function Header() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <section className=' md:m-10'>
      <nav className="navbar sm:flex  md: p-10 bg-[#161616] bg-cover flex items-center justify-evenly ">
        {/* Logo Section */}
        <Link href="/" className="flex items-center">
          <Image
            className=" "
            src="/images/logo.png"
            alt="Logo"
            width={60}
            height={60}
          />
          <div className="logo font-system-ui text-white text-3xl font-bold flex items-center ml-2">
            OpeN
            <div className="text-[#E2FE26]">9</div>
          </div>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex text-white font-bold items-center space-x-8 ">
            
          <Link href="/">
  <li className="text-focus-in cursor-pointer hover:text-[#E2FE26] flex items-center space-x-1 group">
    <span className="group-hover:text-[#E2FE26]">Home</span>
    <MdOutlineKeyboardArrowDown className="text-gray-500 group-hover:text-[#E2FE26]" />
  </li>
</Link>

<Link href="/">
  <li className="text-focus-in cursor-pointer hover:text-[#E2FE26] flex items-center space-x-1 group">
    <span className="group-hover:text-[#E2FE26]">About us</span>
    <MdOutlineKeyboardArrowDown className="text-gray-500 group-hover:text-[#E2FE26]" />
  </li>
</Link>

<Link href="/">
  <li className="text-focus-in cursor-pointer hover:text-[#E2FE26] flex items-center space-x-1 group">
    <span className="group-hover:text-[#E2FE26]">Home</span>
    <MdOutlineKeyboardArrowDown className="text-gray-500 group-hover:text-[#E2FE26]" />
  </li>
</Link>

<Link href="/">
  <li className="text-focus-in cursor-pointer hover:text-[#E2FE26] flex items-center space-x-1 group">
    <span className="group-hover:text-[#E2FE26]">Explore</span>
    <MdOutlineKeyboardArrowDown className="text-gray-500 group-hover:text-[#E2FE26]" />
  </li>
</Link>

<Link href="/">
  <li className="text-focus-in cursor-pointer hover:text-[#E2FE26] flex items-center space-x-1 group">
    <span className="group-hover:text-[#E2FE26]">Pages</span>
    <MdOutlineKeyboardArrowDown className="text-gray-500 group-hover:text-[#E2FE26]" />
  </li>
</Link>

<Link href="/blogs">
  <li className="text-focus-in cursor-pointer hover:text-[#E2FE26] flex items-center space-x-1 group">
    <span className="group-hover:text-[#E2FE26]">Blog</span>
    <MdOutlineKeyboardArrowDown className="text-gray-500 group-hover:text-[#E2FE26]" />
  </li>
</Link>

<Link href="/">
  <li className="text-focus-in cursor-pointer hover:text-[#E2FE26] flex items-center space-x-1 group">
    <span className="group-hover:text-[#E2FE26]">Contact</span>
    <MdOutlineKeyboardArrowDown className="text-gray-500 group-hover:text-[#E2FE26]" />
  </li>
</Link>


       
        </ul>
        <button className=' md:bg-[#E2FE26] flex items-center text-black px-3 py-2 rounded-lg text-sm gap-x-2  '>Wallet Connect <FaWallet className='text-black text-xl  ' /> </button>

<SearchCheck className='sm:flex items-end text-white'/>
<PanelRightOpen className='text-white' onClick={() => setSidebarOpen(true)}/>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex">
          <div className="w-64 bg-white h-full shadow-lg">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-black font-bold text-xl">Menu</h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-black font-bold text-lg"
              >
                ×
              </button>
            </div>
            <ul className="flex flex-col items-center text-black font-bold mt-4 space-y-4 p-4">
              <Link href="/" onClick={() => setSidebarOpen(false)}>
                <li className="cursor-pointer hover:text-[#E2FE26]">Home</li>
              </Link>
              <Link href="/about" onClick={() => setSidebarOpen(false)}>
                <li className="cursor-pointer hover:text-[#E2FE26]">About us</li>
              </Link>
              <Link href="/explore" onClick={() => setSidebarOpen(false)}>
                <li className="cursor-pointer hover:text-[#E2FE26]">Explore</li>
              </Link>
              <Link href="/pages" onClick={() => setSidebarOpen(false)}>
                <li className="cursor-pointer hover:text-[#E2FE26]">Pages</li>
              </Link>
              <Link href="/blog" onClick={() => setSidebarOpen(false)}>
                <li className="cursor-pointer hover:text-[#E2FE26]">Blog</li>
              </Link>
              <Link href="/contact" onClick={() => setSidebarOpen(false)}>
                <li className="cursor-pointer hover:text-[#E2FE26]">Contact</li>
              </Link>
              <button className=' bg-[#E2FE26] flex items-center text-black px-3 py-2 rounded-lg text-sm gap-x-2  '>Wallet Connect <FaWallet className='text-black text-xl  ' /> </button>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}

export default Header;
