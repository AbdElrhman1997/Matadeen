"use client";

import React from "react";
import Image from "next/image";
import { useLocale } from "next-intl";

const BannerSection = () => {
  const lang = useLocale();

  return (
    <div className="w-full relative" dir={lang == "en" ? "ltr" : "rtl"}>
      <div className="relative w-full min-h-[90vh] md:min-h-[70vh] lg:min-h-[770px] 2xl:h-[70vh]">
        <Image
          src="/images/home_page/main-img.svg"
          alt="Banner"
          fill
          className="object-cover"
        />
        {/* Overlay Text */}
        <div className="absolute lg:top-[120px] md:top-[65px] inset-0 text-white container mx-auto text-start">
          <h1 className="font-bold lg:text-[72px] md:text-[36px] text-4xl lg:leading-[120px] md:leading-[60px] sm:mt-0 mt-10">
            عنوان رئيسي
          </h1>
          <p className="text-lg lg:text-[40px] md:text-[20px] lg:leading-[89px] md:leading-[44px] sm:mt-0 mt-5">
            العنوان الفرعي هنا او التفاصيل
          </p>
          <button className="md:mt-6 mt-8 w-[141px] flex items-center h-[36px] bg-[#FFBF00] text-[#000E5A] px-4 py-2 rounded-[28px] sm:my-0 my-6">
            <span className="bold">اذهب إلى</span>
            <div className="relative w-5 ms-3">
              <Image
                src="/images/logos/left-arrow.svg"
                alt="Logo"
                height={70}
                width={160}
              />
            </div>
          </button>
          <div className=" lg:mt-28 md:mt-10 left-0 right-0 flex flex-wrap justify-between text-white gap-4">
            <div className="bg-[#008062]/55 lg:px-6 md:px-3 p-3  lg:w-[24%] md:w-[45%] w-[90%]  lg:min-h-[187px] md:min-h-[130px] text-start flex flex-col justify-center">
              <p className="text-[#F8F8F8] lg:text-[21px] md:text-[16px]">
                20/3/2025
              </p>
              <p className="text-[#F8F8F8] lg:text-[34px] md:text-[24px] mb-[2px]">
                عنوان رئيسي
              </p>
              <p className="text-[#F8F8F8] lg:text-[21px] md:text-[16px]">
                العنوان الفرعي هنا او التفاصيل
              </p>
            </div>
            <div className="bg-[#008062]/55 lg:px-6 md:px-3 p-3  lg:w-[24%] md:w-[45%] w-[90%]  lg:min-h-[187px] md:min-h-[130px]  text-start flex flex-col justify-center">
              <p className="text-[#F8F8F8] lg:text-[21px] md:text-[16px]">
                20/3/2025
              </p>
              <p className="text-[#F8F8F8] lg:text-[34px] md:text-[24px] mb-[2px]">
                عنوان رئيسي
              </p>
              <p className="text-[#F8F8F8] lg:text-[21px] md:text-[16px]">
                العنوان الفرعي هنا او التفاصيل
              </p>
            </div>
            <div className="bg-[#008062]/55 lg:px-6 md:px-3 p-3  lg:w-[24%] md:w-[45%] w-[90%]  lg:min-h-[187px] md:min-h-[130px] text-start flex flex-col justify-center">
              <p className="text-[#F8F8F8] lg:text-[21px] md:text-[16px]">
                20/3/2025
              </p>
              <p className="text-[#F8F8F8] lg:text-[34px] md:text-[24px] mb-[2px]">
                عنوان رئيسي
              </p>
              <p className="text-[#F8F8F8] lg:text-[21px] md:text-[16px]">
                العنوان الفرعي هنا او التفاصيل
              </p>
            </div>
            <div className="bg-[#008062]/55 lg:px-6 md:px-3 p-3  lg:w-[24%] md:w-[45%] w-[90%]  lg:min-h-[187px] md:min-h-[130px] text-start flex flex-col justify-center">
              <p className="text-[#F8F8F8] lg:text-[21px] md:text-[16px]">
                20/3/2025
              </p>
              <p className="text-[#F8F8F8] lg:text-[34px] md:text-[24px] mb-[2px]">
                عنوان رئيسي
              </p>
              <p className="text-[#F8F8F8] lg:text-[21px] md:text-[16px]">
                العنوان الفرعي هنا او التفاصيل
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
