/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
"use client";
import { useEffect, useState } from "react";

import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import EditorPick from "./components/EditorPick";
import Category from "./components/Category";
import Blog from "./components/Blog";
export default function Home() {
  const [editor, setEditor] = useState([]);
  const [blog, setBlog] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch(
      `https://homieebackend.herokuapp.com/blog/editor-picks`
    )
      .then((res) => res.json())
      .then((data) => setEditor(data?.data));
  }, []);
  useEffect(() => {
    fetch(
      `https://homieebackend.herokuapp.com/blog`
    )
      .then((res) => res.json())
      .then((data) => setBlog(data?.data));
  }, []);
  useEffect(() => {
    fetch(
      `https://homieebackend.herokuapp.com/categories`
    )
      .then((res) => res.json())
      .then((data) => setCategory(data?.data));
  }, []);
  return (
    <main className="">
      <div className="py-[100px] px-[150px]">
        <div className="mb-[40px]">
          <p className="text-black font-bold mb-[3px]">Editor's Pick</p>
          <div className="grid grid-cols-2 gap-[20px]">
            {Array.isArray(editor) && editor.length > 0 && editor.map((itm: any, i: number) => <EditorPick data={itm} key={i} />)
            }
          </div>
        </div>

        <div className="mb-[30px]">
          <h2 className="font-bold">Discover more topics</h2>


          {Array.isArray(category) && category.length > 0 && category.map((ct: any, i: number) => <Category data={ct} key={i} />)}

        </div>


        <div className="grid grid-cols-3 gap-[20px] mb-[50px]">
          {Array.isArray(
            blog
          ) && blog.length > 0 && blog.map((bl: any, i: number) => <Blog data={bl} key={i} />)}
        </div>

        <div className="flex justify-center">
          <div className="flex flex-row text-white">
            <button className="text-black">
              <AiOutlineLeft></AiOutlineLeft>
            </button>
            <button className="w-[20px] h-[20px] rounded-[100px] bg-green-700 flex justify-center items-center text-[12px] mx-[8px]">
              1
            </button>
            <button className="text-black">
              <AiOutlineRight></AiOutlineRight>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
