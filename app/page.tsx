/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="py-[100px] px-[150px]">
        <div className="mb-[40px]">
          <p className="text-black font-bold mb-[3px]">Editor's Pick</p>
          <div className="grid grid-cols-2 gap-[20px]">
            <div className="rounded-xl border-[1px] border-solid overflow-hidden shadow-sm">
              <div className="">
                <div className="flex flex-row h-[auto] items-center ">
                  <div className="basis-1/3 bg-slate-300 mr-[10px] h-[100%]">use ing here</div>
                  <div className="basis-1/2 py-[5px]">
                    <div className="flex items-center ">
                      <h1 className="text-green-600 text-[16px] mr-[8px]">Homebuyers Tips</h1>
                      <span className="bg-slate-300 rounded-sm px-[3px] py-[1px] text-[10px]">
                        catagory
                      </span>
                    </div>
                    <h1 className="text-[24px] mb-[4px] font-bold">
                      10 Tips for first time Homebuyers
                    </h1>
                    <div className="flex items-center ">
                      <div className="mr-[5px]">
                        <div className="w-[40px] h-[40px] rounded-[100px] bg-neutral-400"></div>
                      </div>
                      <div>
                        <p>Rayn</p>
                        <small>Publish on 2023</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
            <div className="rounded-xl border-[1px] border-solid overflow-hidden shadow-sm">
              <div className="">
                <div className="flex flex-row h-[auto] items-center ">
                  <div className="basis-1/3 bg-slate-300 mr-[10px] h-[100%]">use ing here</div>
                  <div className="basis-1/2 py-[5px]">
                    <div className="flex items-center ">
                      <h1 className="text-green-600 text-[16px] mr-[8px]">Selling your hom</h1>
                      <span className="bg-slate-300 rounded-sm px-[3px] py-[1px] text-[10px]">
                        catagory
                      </span>
                    </div>
                    <h1 className="text-[24px] mb-[4px] font-bold">
                      10 Tips for first time Homebuyers
                    </h1>
                    <div className="flex items-center ">
                      <div className="mr-[5px]">
                        <div className="w-[40px] h-[40px] rounded-[100px] bg-neutral-400"></div>
                      </div>
                      <div>
                        <p>Rayn</p>
                        <small>Publish on 2023</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-[30px]">
          <h2 className="font-bold">Discover more topics</h2>
          <div className="grid grid-cols-6 gap-[20px] ">
            <button className="border-[1px] border-solid rounded-lg text-green-500 px-[10px] py-[5px]">
              All
            </button>
            <button className="border-[1px] border-solid rounded-lg px-[5px] py-[5px]">
              Homebuying tips
            </button>
            <button className="border-[1px] border-solid  rounded-lg px-[5px] py-[5px]">
              Homebuying tips
            </button>
            <button className="border-[1px] border-solid rounded-lg  px-[5px] py-[5px]">
              Homebuying tips
            </button>
            <button className="border-[1px] border-solid rounded-lg  px-[5px] py-[5px]">
              Homebuying tips
            </button>
            <button className="border-[1px] border-solid rounded-lg px-[5px] py-[5px]">
              Homebuying tips
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-[20px]">
          <div className="h-[auto] shadow-md rounded-[20px] overflow-hidden ">
            <div className="h-[200px] bg-slate-300 ">use img</div>
            <div className="px-[7px] py-[7px]">
              <div className="flex items-center">
                <h1 className="text-green-600 text-[16px] mr-[8px]">Selling your hom</h1>
                <span className="bg-slate-300 rounded-sm px-[3px] py-[1px] text-[10px]">
                  catagory
                </span>
              </div>
              <h1 className="text-[24px] mb-[4px] font-bold">10 Tips for first time Homebuyers</h1>
              <small className="mb-[15px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, eos architecto
                sed quasi maxime tempore unde alias quas ratione qui eligendi blanditiis omnis
                quisquam quis obcaecati iure quam assumenda accusamus.
              </small>
              <div className="flex items-center justify-between mt-[20px]">
                <div className="flex items-center ">
                  <div className="mr-[5px]">
                    <div className="w-[40px] h-[40px] rounded-[100px] bg-neutral-400"></div>
                  </div>
                  <div>
                    <p>Rayn</p>
                    <small>Publish on 2023</small>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
