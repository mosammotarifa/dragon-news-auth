import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";

const MixedDaynamic = () => {
  const handleSignIinGoogle=async()=>{
      const data =await signIn.social({
        provider:"google"
      })
      console.log(data)
    }
    const handleSignIinGithub=async()=>{
        const resdata =await signIn.social({
          provider:"github"
        })
        console.log(resdata)
      }
  return (
    <div>
      <div className="border border-gray-200 rounded-lg p-4 mt-4">
        <h2 className="text-xl font-bold mb-4">Login With</h2>

        <div className="flex flex-col gap-3">
          <Button
          onClick={handleSignIinGoogle}
            variant="bordered"
            className="w-full border-gray-300 rounded-md font-medium border"
          >
            Login with Google
          </Button>

          <Button
          onClick={handleSignIinGithub}
            variant="bordered"
            className="w-full border-gray-300 rounded-md font-medium border"
          >
            Login with Github
          </Button>
        </div>
      </div>
      <div className="border border-gray-200 rounded-lg p-4 mt-4 bg-white">
        <h2 className="text-xl font-bold mb-4">Find Us on</h2>
        <div className="flex flex-col gap-3">
          <div className="flex intem-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer border-b-2">
            <Image
              src={"/assets/fb.png"}
              width={10}
              height={40}
              alt="facebook"
            />
            <p className="text-gray-700 font-medium">Facebook</p>
          </div>
          <div className="flex intem-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer border-b-2">
            <Image
              src={"/assets/twitter.png"}
              width={10}
              height={40}
              alt="twitter"
            />
            <p className="text-gray-700 font-medium">Twitter</p>
          </div>
          <div className="flex intem-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer border-b-2">
            <Image
              src={"/assets/instagram.png"}
              width={10}
              height={40}
              alt="instrgram"
            />
            <p className="text-gray-700 font-medium">Instrgram</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 mt-2 p-3 rounded-md">
        <h2 className="text-xl font-bold mb-4 pl-2">Q-Zone</h2>

        <div className="flex flex-col items-center gap-4">
          <div>
            <Image
              src="/assets/swimming.png"
              width={400}
              height={200}
              alt="Swimming"
              className="w-full h-auto"
            />
          </div>

          <div>
            <Image
              src="/assets/playground.png"
              width={400}
              height={200}
              alt="Playground"
              className="w-full h-auto"
            />
          </div>

          <div>
            <Image
              src="/assets/class.png"
              width={400}
              height={200}
              alt="Class"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MixedDaynamic;
