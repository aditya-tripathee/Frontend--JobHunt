import React, { useState } from "react";
import Navbar from "../components Lite/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/data.js";
import { toast } from "sonner";

function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [role,setRole] = useState("Student");
  const navigate = useNavigate();
  const submitHandler = async (e)=>{
    e.preventDefault();
    try {
      const response = await axios.post(`${USER_API_ENDPOINT}/login`,{email,password,role},{
        headers:{
          "Content-Type" : "application/json",
        },
        withCredentials:true
      });
         if(response.data.success){
           navigate("/");
           toast.success(response.data.message);
         }
        else{
         toast.error(response.data.error);
         }
         console.log("User-data",response.data)

    } catch (error) {
      console.error(error);
    }
    
    // console.log({email,password,role})
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex justify-center items-center max-w-7xl py-7  mx-auto ">
        <form 
          onSubmit={submitHandler}
          // action={""}
          className="md:w-[40%] w-[90%] h-[55vh] border border-gray-700 rounded-md md:p-7 p-4 my-10 "
        >
          <h1 className="font-bold text-2xl text-red-600 mb-5 text-center ">
            Login to Your Account
          </h1>

          <div className="my-2">
            <Label className={"mb-2"}>Email</Label>
            <Input
              type={"email"}
              placeholder="steve@gmail.com"
              className={"border border-black"}
              onChange={(e)=>setEmail(e.target.value)} value={email}
            ></Input>
          </div>
          <div className="my-2">
            <Label className={"mb-2"}>Password</Label>
            <Input
              type={"password"}
              placeholder="******"
              className={"border border-black"}
              onChange={(e)=>setPassword(e.target.value)} value={password}
            ></Input>
          </div>

          <div className="my-1 flex justify-between items-center  ">
            <RadioGroup
              defaultValue="Student"
              className={"flex my-2 items-center gap-4"}
            >
              <div className="flex gap-2">
                <Input
                  type={"radio"}
                  name="role"
                  value="Student"
                  id="r1"
                  className={"cursor-pointer"}
                  checked={role==="Student"}
                  onChange={(e)=>setRole(e.target.value)} 
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex gap-2">
                <Input
                  type={"radio"}
                  name="role"
                  value="Recruiter"
                  id="r2"
                  className={"cursor-pointer"}
                  checked={role==="Recruiter"}
                  onChange={(e)=>setRole(e.target.value)}
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>

          <Button 
            type="submit"
            className={
              "flex items-center my-4 w-full bg-primary hover:bg-primary/90 rounded-md cursor-pointer"
            }
          
          >
            Sign In
          </Button>

          {/* already account  */}
          <p className="text-gray-700 text-sm my-2 cursor-pointer text-right px-2">
            Don’t have an account?
            <Link className="text-sm font-bold  text-red-600" to={"/register"}>
              {" "}
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
