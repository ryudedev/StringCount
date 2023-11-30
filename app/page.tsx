"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [length, setLength] = useState({ min: 0, max: 0 });
  const textColor =
    count >= length.min && count <= length.max ? "bg-white" : "bg-red-700";
  return (
    <div
      className={`h-screen w-screen flex flex-col items-center justify-center text-black ${textColor} gap-4`}
    >
      <h1 className={`text-3xl font-bold `}>{count}</h1>
      <p>min:max</p>
      <div className="flex flex-row gap-4">
        <input
          type="number"
          onChange={(e) =>
            setLength({ ...length, min: Number(e.target.value) })
          }
          className="w-[32px] h-[16px] border-2 border-black"
        />
        <input
          type="number"
          onChange={(e) =>
            setLength({ ...length, max: Number(e.target.value) })
          }
          className="w-[32px] h-[16px] border-2 border-black"
        />
      </div>
      <form>
        <textarea
          className="border-2 border-black w-[500px]"
          onChange={(e) => setCount(e.target.value.length)}
        />
      </form>
    </div>
  );
}
