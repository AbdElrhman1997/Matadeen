"use client";

import React from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { FaArrowLeft } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";

const LiveSection = () => {
  const lang = useLocale();

  return (
    <section
      className="bg-[#008062] lg:py-20 py-12 mt-20"
      dir={lang == "en" ? "ltr" : "rtl"}
    >
      <div className="container mx-auto">
        <div className="bg-[#FCFCFC] rounded-full flex justify-between items-center py-4 px-6 overflow-hidden md:gap-12 gap-3">
          {/* Scrollable button list */}
          <div className="flex-1 overflow-x-auto scrollbar-hide">
            <div className="flex flex-row gap-4 text-black min-w-max">
              <div className="rounded-full text-lg pb-1 px-3 border-2 border-[#E3E3E3] flex items-center gap-x-10 whitespace-nowrap">
                ميدان الفروسية
                <TiArrowSortedDown className="text-[#FFBF00] translate-y-1" />
              </div>
              <div className="rounded-full text-lg pb-1 px-3 border-2 border-[#E3E3E3] flex items-center gap-x-2 whitespace-nowrap">
                سباق 5
                <TiArrowSortedDown className="text-[#FFBF00] translate-y-1 -rotate-90" />
              </div>
              <div className="rounded-full text-lg pb-1 px-3 border-2 border-[#E3E3E3] flex items-center gap-x-2 whitespace-nowrap">
                سباق 6
                <TiArrowSortedDown className="text-[#FFBF00] translate-y-1" />
              </div>
              <div className="rounded-full text-lg pb-1 px-3 border-2 border-[#E3E3E3] flex items-center gap-x-2 whitespace-nowrap">
                سباق 7
                <TiArrowSortedDown className="text-[#FFBF00] translate-y-1 rotate-90" />
              </div>
              <div className="rounded-full bg-[#FFBF00] py-2 px-5 flex items-center gap-3 whitespace-nowrap">
                <div className="text-lg">تأكيد</div>
                <FaArrowLeft className="translate-y-1" />
              </div>
            </div>
          </div>

          {/* بث مباشر button, stays at the end */}
          <div className="ml-4 flex-shrink-0 rounded-full bg-[#FF0000] text-lg text-white py-2 px-5 whitespace-nowrap">
            بث مباشر
          </div>
        </div>

        <div className="lg:grid grid-cols-3 mt-10">
          <div className="lg:col-span-2">
            <video
              className="w-full mlg:in-h-[100%] min-h-1/2 rounded-2xl"
              controls
            >
              <source src="your-video-file.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="overflow-y-scroll lg:max-h-[400px] max-h-[300px] live-section-bar pe-6 mt-8">
            <div className="flex items-center justify-center lg:ms-12 bg-[#5A9949] rounded-full p-4 border-[3px] border-white">
              <div className="relative lg:h-20 h-14 pe-2  bg-[#A2C77C] w-full rounded-full flex items-center justify-between text-white border-[2px] border-white">
                <TiArrowSortedDown className="text-black -rotate-90 text-5xl" />
                <div className="text-black flex flex-col items-center text-[13px] font-bold">
                  <span>1 متر</span>
                  <span>صلبة</span>
                </div>
                <div className="text-black flex flex-col items-center text-[13px] font-bold">
                  <span>مضمار</span>
                  <span>عشب</span>
                </div>
                <div className="text-black flex flex-col items-center text-[13px] font-bold">
                  <span>3+</span>
                  <span>22000$</span>
                </div>
                <div className="lg:text-3xl text-lg font-bold bg-white rounded-full text-black lg:w-14 w-10 lg:h-14 h-10 flex justify-center items-center">
                  <span className="-translate-y-0.5 translate-x-0.5 font-semibold ">
                    81
                  </span>
                </div>

                {/* <div className="absolute bottom-4 left-1/4 transform -translate-x-1/2">
                  <button className="bg-red-500 text-white px-4 py-2 rounded-full">
                    الأحمر
                  </button>
                </div>
                <div className="absolute bottom-4 right-1/4 transform translate-x-1/2">
                  <button className="bg-green-500 text-white px-4 py-2 rounded-full">
                    الأخضر
                  </button>
                </div> */}
              </div>
            </div>
            <div className="relative lg:h-20 h-16 ps-6 pe-10  bg-[#EA3323] mt-4 rounded-full flex items-center justify-between text-white lg:ms-12">
              <div className="flex items-center justify-start gap-x-3 ">
                <div className="lg:text-3xl text-xl font-bold bg-black rounded-full text-white lg:w-14 w-10 lg:h-14 h-10 flex justify-center items-center">
                  <span className="-translate-y-0.5 translate-x-0.5 font-semibold">
                    01
                  </span>
                </div>
                <div className="text-black flex flex-col items-center text-[22px] font-[600] -translate-y-1">
                  بلاك هورس
                </div>
              </div>
              <div className="text-black flex flex-col items-center text-[24px] font-[600] me-4">
                2-1
              </div>
            </div>
            <div className="relative lg:h-20 h-16 ps-6 pe-10  bg-white mt-4 rounded-full flex items-center justify-between text-white lg:ms-12">
              <div className="flex items-center justify-start gap-x-3 ">
                <div className="lg:text-3xl text-xl font-bold bg-black rounded-full text-white lg:w-14 w-10 lg:h-14 h-10 flex justify-center items-center">
                  <span className="-translate-y-0.5 translate-x-0.5 font-semibold ">
                    02
                  </span>
                </div>
                <div className="text-black flex flex-col items-center text-[22px] font-[600] -translate-y-1">
                  ميزو ثيرا
                </div>
              </div>
              <div className="text-black flex flex-col items-center text-[24px] font-[600] me-4">
                2-1
              </div>
            </div>
            <div className="relative lg:h-20 h-16 ps-6 pe-10  bg-[#0000F5] mt-4 rounded-full flex items-center justify-between text-white lg:ms-12">
              <div className="flex items-center justify-start gap-x-3 ">
                <div className="lg:text-3xl text-xl font-bold bg-black rounded-full text-white lg:w-14 w-10 lg:h-14 h-10 flex justify-center items-center">
                  <span className="-translate-y-0.5 translate-x-0.5 font-semibold ">
                    03
                  </span>
                </div>
                <div className="text-white flex flex-col items-center text-[22px] font-[600] -translate-y-1">
                  بلاك هورس
                </div>
              </div>
              <div className="text-white flex flex-col items-center text-[24px] font-[600] me-4">
                2-1
              </div>
            </div>
            <div className="relative lg:h-20 h-16 ps-6 pe-10  bg-[#FFFF55] mt-4 rounded-full flex items-center justify-between text-white lg:ms-12">
              <div className="flex items-center justify-start gap-x-3 ">
                <div className="lg:text-3xl text-xl font-bold bg-black rounded-full text-white lg:w-14 w-10 lg:h-14 h-10 flex justify-center items-center">
                  <span className="-translate-y-0.5 translate-x-0.5 font-semibold ">
                    04
                  </span>
                </div>
                <div className="text-black flex flex-col items-center text-[22px] font-[600] -translate-y-1">
                  بلاك هورس
                </div>
              </div>
              <div className="text-black flex flex-col items-center text-[24px] font-[600] me-4">
                2-1
              </div>
            </div>
            <div className="relative lg:h-20 h-16 ps-6 pe-10  bg-[#377E23] mt-4 rounded-full flex items-center justify-between text-white lg:ms-12">
              <div className="flex items-center justify-start gap-x-3 ">
                <div className="lg:text-3xl text-xl font-bold bg-black rounded-full text-white lg:w-14 w-10 lg:h-14 h-10 flex justify-center items-center">
                  <span className="-translate-y-0.5 translate-x-0.5 font-semibold ">
                    05
                  </span>
                </div>
                <div className="text-black flex flex-col items-center text-[22px] font-[600] -translate-y-1">
                  ميزو ثيرا
                </div>
              </div>
              <div className="text-black flex flex-col items-center text-[24px] font-[600] me-4">
                2-1
              </div>
            </div>
            <div className="relative lg:h-20 h-16 ps-6 pe-10  bg-[#EA3323] mt-4 rounded-full flex items-center justify-between text-white lg:ms-12">
              <div className="flex items-center justify-start gap-x-3 ">
                <div className="lg:text-3xl text-xl font-bold bg-black rounded-full text-white lg:w-14 w-10 lg:h-14 h-10 flex justify-center items-center">
                  <span className="-translate-y-0.5 translate-x-0.5 font-semibold">
                    01
                  </span>
                </div>
                <div className="text-black flex flex-col items-center text-[22px] font-[600] -translate-y-1">
                  بلاك هورس
                </div>
              </div>
              <div className="text-black flex flex-col items-center text-[24px] font-[600] me-4">
                2-1
              </div>
            </div>
            <div className="relative lg:h-20 h-16 ps-6 pe-10  bg-white mt-4 rounded-full flex items-center justify-between text-white lg:ms-12">
              <div className="flex items-center justify-start gap-x-3 ">
                <div className="lg:text-3xl text-xl font-bold bg-black rounded-full text-white lg:w-14 w-10 lg:h-14 h-10 flex justify-center items-center">
                  <span className="-translate-y-0.5 translate-x-0.5 font-semibold ">
                    02
                  </span>
                </div>
                <div className="text-black flex flex-col items-center text-[22px] font-[600] -translate-y-1">
                  ميزو ثيرا
                </div>
              </div>
              <div className="text-black flex flex-col items-center text-[24px] font-[600] me-4">
                2-1
              </div>
            </div>
            <div className="relative lg:h-20 h-16 ps-6 pe-10  bg-[#0000F5] mt-4 rounded-full flex items-center justify-between text-white lg:ms-12">
              <div className="flex items-center justify-start gap-x-3 ">
                <div className="lg:text-3xl text-xl font-bold bg-black rounded-full text-white lg:w-14 w-10 lg:h-14 h-10 flex justify-center items-center">
                  <span className="-translate-y-0.5 translate-x-0.5 font-semibold ">
                    03
                  </span>
                </div>
                <div className="text-white flex flex-col items-center text-[22px] font-[600] -translate-y-1">
                  بلاك هورس
                </div>
              </div>
              <div className="text-white flex flex-col items-center text-[24px] font-[600] me-4">
                2-1
              </div>
            </div>
            <div className="relative lg:h-20 h-16 ps-6 pe-10  bg-[#FFFF55] mt-4 rounded-full flex items-center justify-between text-white lg:ms-12">
              <div className="flex items-center justify-start gap-x-3 ">
                <div className="lg:text-3xl text-xl font-bold bg-black rounded-full text-white lg:w-14 w-10 lg:h-14 h-10 flex justify-center items-center">
                  <span className="-translate-y-0.5 translate-x-0.5 font-semibold ">
                    04
                  </span>
                </div>
                <div className="text-black flex flex-col items-center text-[22px] font-[600] -translate-y-1">
                  بلاك هورس
                </div>
              </div>
              <div className="text-black flex flex-col items-center text-[24px] font-[600] me-4">
                2-1
              </div>
            </div>
            <div className="relative lg:h-20 h-16 ps-6 pe-10  bg-[#377E23] mt-4 rounded-full flex items-center justify-between text-white lg:ms-12">
              <div className="flex items-center justify-start gap-x-3 ">
                <div className="lg:text-3xl text-xl font-bold bg-black rounded-full text-white lg:w-14 w-10 lg:h-14 h-10 flex justify-center items-center">
                  <span className="-translate-y-0.5 translate-x-0.5 font-semibold ">
                    05
                  </span>
                </div>
                <div className="text-black flex flex-col items-center text-[22px] font-[600] -translate-y-1">
                  ميزو ثيرا
                </div>
              </div>
              <div className="text-black flex flex-col items-center text-[24px] font-[600] me-4">
                2-1
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveSection;
