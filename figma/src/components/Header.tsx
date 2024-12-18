import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-blue-950 text-white flex">
      <div className="flex flex-row gap-5 w-[37px] h-[27px] ml-16 mt-6">
        <Image src="/logo.png" alt="logo" width={20} height={20} />
        <p>whitepace</p>
      </div>
      <nav className="w-[988.5px] h-[60px]

 flex flex-row justify-evenly ml-24 mt-7">
        
        <Link id="prod" href="/">Product</Link>
        <Link href="/">Solution </Link>
        <Link href="/">Resources</Link>
        <Link href="/">Pricing</Link>
        
        </nav>
      
        <button className="
                 flex
                 justify-center
                 items-center
               bg-yellow-200 
               text-black w-36 h-12 mt-5 mx-4">Loging</button>
      
      <div className="
                flex;
                flex-row;
                justify-center;
                items-center;
                w-60 h-12 px-7 mr-8 mt-5
                 bg-blue-500 rounded-sm flex justify-center">
    
        <button>Try Whitespace free </button>
      </div>
    
    </div>
  );
};

export default Header;
