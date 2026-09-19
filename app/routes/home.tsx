
import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Headings, Paragraph } from "../Components/UI";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}


export default function Home({ loaderData }: Route.ComponentProps) {
  return <>
    <div className="flex w-full h-[100Dvh] items-center justify-center">

      <div className="flex w-[402px] min-h-[433px] flex-col items-center justify-center gap-[16px] leading-[18px] p-[16px] border-[1px] border-solid border-[#FCFEFD] rounded-[24px] bg-[#FCFEFD]">

        <Headings>Publicly reply to comments</Headings>
        {/*  */}
        <div className="flex w-full flex-col gap-[12px] ">
          <div className="flex flex-col height-[36px] w-full">
            <Headings type="h2" color="secondary">Replies</Headings>
            <Paragraph>A variant will be selected at random to avoid repetition.</Paragraph>
          </div>
          <div className="flex flex-col gap-[14px] w-full min-h-[132px] h-[auto] border-[1.13px] border-solid border-[#D3D8D8] rounded-[22px] p-[14px]">
            <textarea className="w-full h-[100%] resize-none border-none outline-none rounded-[22px] p-[12px] text-[14px] text-[#1E2943]" placeholder="Write a comment..." defaultValue="If you’re still curious, don’t forget to tap the link"></textarea>
            <div className="flex w-full h-[40.57px] p-[14px 0px]">
              <div className="flex w-[342px] h-full items-center m-auto border-[1.13px] border-solid border-[#D3D8D8] rounded-[14px] px-[14px] py-[9px] gap-[17px] cursor-pointer">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_153_17)">
                    <rect width="18" height="18" rx="4.5" fill="#6A07E4" fill-opacity="0.1" />
                    <path d="M8.99766 5.99997V12M11.9977 8.99997H5.99766" stroke="#6A07E4" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1.05469 8.99927C1.05469 5.2583 1.05469 3.38782 2.21685 2.22564C3.37903 1.06348 5.24951 1.06348 8.99048 1.06348C12.7314 1.06348 14.6019 1.06348 15.7641 2.22564C16.9263 3.38782 16.9263 5.2583 16.9263 8.99927C16.9263 12.7402 16.9263 14.6107 15.7641 15.7729C14.6019 16.9351 12.7314 16.9351 8.99048 16.9351C5.24951 16.9351 3.37903 16.9351 2.21685 15.7729C1.05469 14.6107 1.05469 12.7402 1.05469 8.99927Z" stroke="#6A07E4" stroke-width="1.25302" />
                  </g>
                  <defs>
                    <clipPath id="clip0_153_17">
                      <rect width="18" height="18" rx="4.5" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <p className="text-[#6A07E4] text-[14px] font-semibold">Add Link</p>

              </div>

            </div>
          </div>
        </div>
        {/*  */}
        <div className="w-full border-[0.68px] border-[#CCCCCC]"></div>
        {/*  */}
        <div className="flex w-full flex-col gap-[12px] h-[154px] ">
          <div className="flex flex-col h-[54px] w-full ">
            <Headings type="h2" color="secondary">Limit public replies</Headings>
            <Paragraph>Some comments are skipped automatically to avoid spam detection</Paragraph>
          </div>
          <div className="flex w-full h-[40px] items-center justify-between p-[3px] border-[1.13px] border-solid border-[#D3D8D8] bg-[#F1F3F3] rounded-[14px]">
            <div className="flex flex-1 h-full items-center justify-center rounded-[11px] cursor-pointer text-[#8C919F] text-[16px] font-medium">50</div>
            <div className="flex flex-1 h-full items-center justify-center rounded-[11px] cursor-pointer text-[#8C919F] text-[16px] font-medium">200</div>
            <div className="flex flex-1 h-full items-center justify-center rounded-[11px] cursor-pointer bg-white text-black text-[16px] font-medium">400</div>
            <div className="flex flex-1 h-full items-center justify-center rounded-[11px] cursor-pointer text-[#8C919F] text-[16px] font-medium">800</div>
          </div>

          <div className="flex w-full h-[38px] py-[8px] px-[12px] flex-row items-center gap-[10px] border-[1px] border-dashed border-[#E4D3F8] rounded-[14px]">
            <div className="w-[16px] h-[16px] bg-[linear-gradient(135deg,#F73398_0%,#F5CDE2_34%,#CD8BFB_69%,#6A07E4_100%)]  overflow-hidden rounded-full"></div>
            <p className="text-[14px] font-semibold text-transparent bg-clip-text bg-[linear-gradient(90deg,#F73398_0%,#CD46D4_100%)]">Generate 3 Public Replies</p>
            <div className="ml-auto px-[8px] rounded-full text-white text-[12px] font-semibold bg-[linear-gradient(90deg,#F73398_0%,#CD8BFB_100%)]">250</div>
          </div>


        </div>

      </div>
    </div>

  </>;
}
