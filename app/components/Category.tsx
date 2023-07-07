import React from "react";

const Category = ({data}:any) => {

    return <div className="grid grid-cols-6 gap-[20px] ">
        <button className="border-[1px] border-solid rounded-lg text-green-500 px-[5px] py-[5px]">
            {data?.name}
        </button>
    </div>;
};

export default Category;
