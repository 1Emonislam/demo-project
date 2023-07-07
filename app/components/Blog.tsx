import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import parse from 'html-react-parser';
import moment from "moment";

const Blog = ({ data }: any) => {
    const htmlDescription = parse(data.description)
    return <div className="h-[auto] shadow-md rounded-[20px] overflow-hidden ">
        <div className="h-[200px] bg-slate-300 ">use img</div>
        <div className="px-[7px] py-[7px]">
            <div className="flex items-center">
                <h1 className="text-green-600 text-[16px] mr-[8px]">{data.title}</h1>
                {data?.tags?.length !== 0 && data.tags.map((itm: any, i: number) => <span key={i} className="bg-slate-300 rounded-sm px-[3px] py-[1px] text-[10px] mr-2">
                    {itm}
                </span>)}

            </div>
            {
                htmlDescription
            }
            {/* <h1 className="text-[24px] mb-[4px] font-bold">10 Tips for first time Homebuyers</h1>
            <small className="mb-[15px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, eos architecto
                sed quasi maxime tempore unde alias quas ratione qui eligendi blanditiis omnis
                quisquam quis obcaecati iure quam assumenda accusamus.
            </small> */}
            <div className="flex items-center justify-between mt-[20px]">
                <div className="flex items-center ">
                    <div className="mr-[5px]">
                        <div className="w-[40px] h-[40px] rounded-[100px] bg-neutral-400"></div>
                    </div>
                    <div>
                        <h6>{data?.author?.name}</h6>
                        <small>Publish on {moment(data.createdAt).format('YY-MM-DD')}</small>
                    </div>
                </div>
                <div>
                    <AiOutlineEye className="inline"></AiOutlineEye> <small>{data.views}</small>
                </div>
            </div>
        </div>
    </div>

        ;
};

export default Blog;
