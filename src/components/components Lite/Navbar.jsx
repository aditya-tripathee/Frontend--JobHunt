import { Popover } from "@radix-ui/react-popover";
import React from "react";
import { Link } from "react-router-dom";
import { PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { LogOut, LogOutIcon, User2 } from "lucide-react";

function Navbar() {
    const user = false;

  return (
    <div className="bg-white">
      <div className="flex justify-between items-center  mx-auto max-w-7xl h-16 px-5">
        {/* LOGO */}
        <div>
          <h1 className="md:text-2xl text-xl font-bold">
            Job<span className="text-[#F83002]">Hunt</span>
          </h1>
        </div>

        {/* Right list div */}
        <div className=" flex items-center md:gap-10 gap-3">
          <ul className="flex justify-center items-center md:gap-7 gap-4 font-medium ">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/"}>Browse</Link>
            </li>
            <li>
              <Link to={"/"}>Jobs</Link>
            </li>
          </ul>


          
          {
            !user ? (
                <div className="flex items-center gap-3">
                <Link to={"/login"}>
                  <Button variant={"outline"} >Login</Button>
                </Link>
                <Link to={"/register"}>
                  <Button variant={"primary"} className={"bg-red-500 cursor-pointer hover:transform-border hover:scale-110"}>Register</Button>
                </Link>     
                </div>
            )  
            : 
            (
              <Popover>
            <PopoverTrigger asChild>
               <Avatar className={"cursor-pointer"}>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"></AvatarImage>
                <AvatarFallback>CN</AvatarFallback>
               </Avatar>
            </PopoverTrigger>
            <PopoverContent className={"w-80"}>
             <div className="flex  items-center gap-4 space-y-2">
                <Avatar className={"cursor-pointer"}>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"></AvatarImage>
                </Avatar>
               <div>
                <h3 className="font-medium">Aditya Tripathi</h3>
                <p className="text-muted-foreground text-sm">Software Engineer🤖✅</p>
               </div>
             </div>
             <div className="flex flex-col text-gray-700 gap-0 my-1">
               <div className="flex w-fit items-center cursor-pointer gap-1 ">
               <User2></User2>
                <Button variant={"link"} className={"cursor-pointer "}>Profile</Button>
               </div>
               <div className="flex w-fit gap-1">
               <LogOut className="my-2 mx-0.5"></LogOut>
                <Button variant={"link"} className={"cursor-pointer px-3"}>Logout</Button>
               </div>
             </div>
            </PopoverContent>
          </Popover>
            )
          }
          
        </div>

        
      </div>
    </div>
  );
}

export default Navbar;
