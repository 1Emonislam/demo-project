import moment from "moment";
import React from "react";

const EditorPick = ({ data }: any) => {
    return <div className="rounded-xl border-[1px] border-solid overflow-hidden shadow-sm">
        <div className="">
            <div className="flex flex-row h-[auto] items-center ">
                <div className="basis-1/3 bg-slate-300 mr-[10px] h-[100%]">use img here</div>
                <div className="basis-1/2 py-[5px]">
                    <div className="flex items-center ">
                        <h1 className="text-green-600 text-[16px] mr-[8px]">{data?.title}</h1>
                        {data.tags.map((itm: any, i: number) => <span key={i} className="bg-slate-300 rounded-sm px-[3px] py-[1px] text-[10px] mr-2">
                            {itm}
                        </span>)}
                    </div>
                    <h1 className="text-[24px] mb-[4px] font-bold">
                        {data.meta_description
                        }
                    </h1>
                    <div className="flex items-center ">
                        <div className="mr-[5px]">
                            <div className="w-[40px] h-[40px] rounded-[100px] bg-neutral-400"></div>
                        </div>
                        <div>
                            <p>{data?.author?.name}</p>
                            <small>Publish on {moment(data.createdAt).format('YY-MM-DD')}</small>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>

        </div>
    </div>
};

export default EditorPick;
