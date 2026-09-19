
import { useState } from "react";
import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Headings, Paragraph } from "../Components/UI";
import Slider from "../Components/section/Slider/Slider";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}


const limits = [50, 200, 400, 800];

const growTextarea = (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
  const box = e.currentTarget;
  box.style.height = "auto";
  box.style.height = Math.min(box.scrollHeight, 300) + "px";
};

export default function Home({ loaderData }: Route.ComponentProps) {
  const [limit, setLimit] = useState(400);

  return <>
    <div className="flex w-full min-h-[100Dvh] items-center justify-center">

      <div className="flex w-[402px] min-h-[433px] flex-col items-center justify-center gap-[16px] leading-[18px] p-[16px] border-[1px] border-solid border-[#D3D8D8] rounded-[24px] bg-[#FCFEFD]">

        <Headings>Publicly reply to comments</Headings>
        {/*  */}
        <div className="flex w-full flex-col gap-[12px] ">
          <div className="flex flex-col height-[36px] w-full">
            <Headings type="h2" color="secondary">Replies</Headings>
            <Paragraph>A variant will be selected at random to avoid repetition.</Paragraph>
          </div>
          <div className="flex flex-col gap-[14px] w-full min-h-[132px] h-[auto] border-[1.13px] border-solid border-[#D3D8D8] rounded-[22px] p-[14px]">
            <textarea className="no-Scrollbar w-full h-[100%] resize-none border-none outline-none rounded-[22px] p-[12px] text-[14px] text-[#1E2943]" placeholder="Write a comment..." defaultValue="" onInput={growTextarea}></textarea>
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
        <div className="w-full h-[0.68px] bg-[#CCCCCC]"></div>
        {/*  */}
        <div className="flex w-full flex-col gap-[12px] h-[154px] ">
          <div className="flex flex-col h-[54px] w-full ">
            <Headings type="h2" color="secondary">Limit public replies</Headings>
            <Paragraph>Some comments are skipped automatically to avoid spam detection</Paragraph>
          </div>
          <Slider options={limits} value={limit} onChange={setLimit} />

          <div className="flex w-full h-[38px] py-[8px] px-[12px] flex-row items-center gap-[10px] border-x-[1px] border-b-[1px] border-t-0 border-dashed border-[#E4D3F8] rounded-[14px]">
            {/* <div className="flex w-[16px] h-[16px] rounded-full bg-[linear-gradient(66deg,#F73398_0%,#F5CDE2_45%,#CD8BFB_56%,#6A07E4_100%)]">
            
            </div> */}
           <svg width="16" height="16" viewBox="4.27179 1.14249 10.28321 10.28321" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="sparkleGradient" x1="3.212" y1="9.045" x2="15.614" y2="3.523" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#F73398"/>
      <stop offset="45%" stop-color="#F5CDE2"/>
      <stop offset="56%" stop-color="#CD8BFB"/>
      <stop offset="100%" stop-color="#6A07E4"/>
    </linearGradient>
  </defs>
  <path d="M9.41339 1.14249C12.2528 1.1427 14.555 3.44463 14.555 6.28409C14.5549 9.12347 12.2527 11.4255 9.41339 11.4257C6.57385 11.4257 4.27188 9.1236 4.27179 6.28409C4.27179 3.4445 6.5738 1.14249 9.41339 1.14249ZM9.62335 4.11417C9.52509 3.95975 9.29876 3.95975 9.2005 4.11417L8.91632 4.56143C8.60207 5.05509 8.1834 5.47372 7.68976 5.78799L7.24249 6.07315C7.08835 6.1715 7.08817 6.39682 7.24249 6.49503L7.68976 6.77921C8.18358 7.09356 8.60202 7.51288 8.91632 8.00674L9.2005 8.45303C9.29876 8.60746 9.52509 8.60746 9.62335 8.45303L9.90753 8.00674C10.2218 7.51289 10.6403 7.09356 11.1341 6.77921L11.5814 6.49503C11.7357 6.39682 11.7355 6.17149 11.5814 6.07315L11.1341 5.78799C10.6405 5.47372 10.2218 5.05509 9.90753 4.56143L9.62335 4.11417Z" fill="url(#sparkleGradient)"/>
</svg>
            <div className="flex flex-row items-center gap-[6px] justify-between w-[265px]">
              <p className="text-[14px] font-semibold text-transparent bg-clip-text bg-[linear-gradient(90deg,#F73398_0%,#CD46D4_100%)]">Generate 3 Public Replies</p>
              <div style={{borderRadius:"4px"}} className="w-[13px] h-[13px] bg-[#DCCAFF] text-[#A77BFF] flex items-center justify-center text-[10px] font-semibold">
                i
              </div>
            </div>
            <div className="ml-auto px-[8px] rounded-full text-white text-[12px] font-semibold bg-[linear-gradient(90deg,#F73398_0%,#CD8BFB_100%)] flex items-center gap-[8px] justify-center">
              <svg width="10.28321" height="10.28321" viewBox="4.27179 1.14249 10.28321 10.28321" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.41339 1.14249C12.2528 1.1427 14.555 3.44463 14.555 6.28409C14.5549 9.12347 12.2527 11.4255 9.41339 11.4257C6.57385 11.4257 4.27188 9.1236 4.27179 6.28409C4.27179 3.4445 6.5738 1.14249 9.41339 1.14249ZM9.62335 4.11417C9.52509 3.95975 9.29876 3.95975 9.2005 4.11417L8.91632 4.56143C8.60207 5.05509 8.1834 5.47372 7.68976 5.78799L7.24249 6.07315C7.08835 6.1715 7.08817 6.39682 7.24249 6.49503L7.68976 6.77921C8.18358 7.09356 8.60202 7.51288 8.91632 8.00674L9.2005 8.45303C9.29876 8.60746 9.52509 8.60746 9.62335 8.45303L9.90753 8.00674C10.2218 7.51289 10.6403 7.09356 11.1341 6.77921L11.5814 6.49503C11.7357 6.39682 11.7355 6.17149 11.5814 6.07315L11.1341 5.78799C10.6405 5.47372 10.2218 5.05509 9.90753 4.56143L9.62335 4.11417Z" fill="#FFFFFF"/>
</svg>
              
              <p className="text-[11.5px] font-semibold">
                250  
              </p>
              </div>
          </div>


        </div>

      </div>
    </div>

  </>;
}


