import React from "react";
import { useLocale } from "next-intl";
import Image from "next/image";
import InfoTable from "./InfoTable";
import RaceTable from "./RaceTable";

const Overall_Rating = () => {
  const lang = useLocale();

  const firstTableRows = [
    { label: "الخط الصباحي", value: "5/2" },
    { label: "الجائزة", value: "32,000.00 ر.س" },
    { label: "المكونات", value: "LASIX" },
    { label: "الوزن", value: "120 كيلوغرام" },
    { label: "العمر", value: "3 سنوات" },
  ];

  const secondTableRows = [
    {
      label: "السجل",
      value: (
        <>
          10 بدايات <span className="mx-[2px]">1-1-1</span>
        </>
      ),
    },
    { label: "التربية", value: "نصية" },
    { label: "التصنيف", value: "غير متوفر" },
    { label: "المربي", value: "فلان الفلاني" },
    { label: "المالك", value: "اسم فلان الفلاني" },
  ];

  return (
    <section
      className="bg-[#F2F2F2] lg:py-16 py-12"
      dir={lang === "en" ? "ltr" : "rtl"}
    >
      <div className="container mx-auto grid grid-cols-4 gap-x-[18px]">
        <div className="w-full rounded-lg lg:col-span-1 col-span-4">
          <div className="flex items-center justify-between w-full md:w-fit lg:w-full mx-auto">
            <div className="lg:text-[22px] text-xl font-bold bg-[var(--main)] rounded-full text-[#FFBF00] lg:w-12 w-10 lg:h-12 h-10 flex justify-center items-center">
              <span className="-translate-y-0.5 translate-x-0.5 font-semibold">
                01
              </span>
            </div>
            <div className="text-black flex flex-col items-center text-[30px] font-[600] -translate-y-1 mx-0 md:mx-12  lg:mx-0">
              ساندي ستورم
            </div>
            <div className="text-black flex flex-col items-center text-[24px] font-[600] me-4">
              <div className="relative w-9">
                <Image
                  src="/images/icons/saoudi.svg"
                  alt="Logo"
                  height={70}
                  width={160}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-4 gap-x-[18px]">
        <InfoTable title="التقييم العام : 83" rows={firstTableRows} />
        <InfoTable title="سجل :" rows={secondTableRows} />
        <div className="w-full rounded-lg lg:col-span-2 col-span-4 overflow-x-auto">
          <RaceTable />
        </div>
      </div>
    </section>
  );
};

export default Overall_Rating;
