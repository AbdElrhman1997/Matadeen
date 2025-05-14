import React from "react";
import { useLocale } from "next-intl";
import Image from "next/image";

const Overall_Rating = () => {
  const lang = useLocale();

  return (
    <section
      className="bg-[#F2F2F2] lg:py-16 py-12"
      dir={lang == "en" ? "ltr" : "rtl"}
    >
      <div className="container mx-auto grid grid-cols-4 gap-x-[18px]">
        <div className="w-full rounded-lg lg:col-span-1 col-span-4">
          <div className="flex items-center justify-between w-full md:w-fit lg:w-full mx-auto">
            <div className="lg:text-[22px] text-xl font-bold bg-[#008062] rounded-full text-[#FFBF00] lg:w-12 w-10 lg:h-12 h-10 flex justify-center items-center">
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
        <div className="w-full rounded-lg lg:col-span-1 col-span-4">
          <div className="relative text-center text-[22px] py-3  bg-black mt-4 rounded-full text-white">
            التقييم العام : 83
          </div>
          <table className="w-full text-start border-separate border-spacing-y-2 font-semibold">
            <tbody>
              <tr className="bg-white">
                <td className="py-2 rounded-s-full ps-5 w-[150px]">
                  الخط الصباحي
                </td>
                <td className="py-2 rounded-e-full text-[#008062]">5/2</td>
              </tr>
              <tr className="bg-white">
                <td className="py-2 rounded-s-full ps-5 w-[150px]">الجائزة</td>
                <td className="py-2 rounded-e-full text-[#008062]">
                  32,000.00 ر.س
                </td>
              </tr>
              <tr className="bg-white">
                <td className="py-2 rounded-s-full ps-5 w-[150px]">المكونات</td>
                <td className="py-2 rounded-e-full text-[#008062]">LASIX</td>
              </tr>
              <tr className="bg-white">
                <td className="py-2 rounded-s-full ps-5 w-[150px]">الوزن</td>
                <td className="py-2 rounded-e-full text-[#008062]">
                  120 كيلوغرام
                </td>
              </tr>
              <tr className="bg-white">
                <td className="py-2 rounded-s-full ps-5 w-[150px]">العمر</td>
                <td className="py-2 rounded-e-full text-[#008062]">3 سنوات</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full rounded-lg lg:col-span-1 col-span-4">
          <div className="relative text-center text-[22px] py-2  bg-white mt-4 rounded-full text-[#008062]">
            <p className="text-[14px] mb-1">
              <span className="text-black">سجل :</span>
              <span className=""> 23 بداية </span>
              <span className="mx-1"> 16-1-0 </span>
              <span className="mx-1">4.16 مليون دولار</span>
            </p>
            <p className="text-[11px]">
              حصان مخصي | عمره 6 سنوات | فبراير | مولود في ولاية كنتاكي
            </p>
          </div>
          <table className="w-full text-start border-separate border-spacing-y-2 font-semibold">
            <tbody>
              <tr className="bg-white">
                <td className="py-2 rounded-s-full ps-5 w-[150px]">السجل</td>
                <td className="py-2 rounded-e-full text-[#008062]">
                  10 بدايات <span className="mx-[2px]">1-1-1</span>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="py-2 rounded-s-full ps-5 w-[150px]">التربية</td>
                <td className="py-2 rounded-e-full text-[#008062]">نصية</td>
              </tr>
              <tr className="bg-white">
                <td className="py-2 rounded-s-full ps-5 w-[150px]">التصنيف</td>
                <td className="py-2 rounded-e-full text-[#008062]">
                  غير متوفر
                </td>
              </tr>
              <tr className="bg-white">
                <td className="py-2 rounded-s-full ps-5 w-[150px]">المربي</td>
                <td className="py-2 rounded-e-full text-[#008062]">
                  فلان الفلاني
                </td>
              </tr>
              <tr className="bg-white">
                <td className="py-2 rounded-s-full ps-5 w-[150px]">المالك</td>
                <td className="py-2 rounded-e-full text-[#008062]">
                  اسم فلان الفلاني
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full rounded-lg lg:col-span-2 col-span-4 overflow-x-auto">
          <table className="w-full lg:min-w-full min-w-[700px] text-start border-separate border-spacing-y-2 font-semibold whitespace-nowrap lg:pt-10 pt-4 pb-2">
            <thead>
              <tr>
                <th className=" text-lg text-black ">المعيار</th>
                <th className=" text-lg text-black ">التفاصيل</th>
                <th className=" text-lg text-black ">التقييم</th>
                <th className=" text-lg text-black ">العام الماضي</th>
                <th className=" text-lg text-black ">الفوز٪</th>
                <th className=" text-lg text-black ">1-2-3٪</th>
                <th className=" text-lg text-black ">معيار</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white text-center text-[#008062]">
                <td className="py-2 rounded-s-full ps-5">المدرب</td>
                <td className="py-2">33</td>
                <td className="py-2">33</td>
                <td className="py-2">33</td>
                <td className="py-2">33</td>
                <td className="py-2">33</td>
                <td className="py-2 rounded-e-full">33</td>
              </tr>
              <tr className="bg-white text-center text-[#008062]">
                <td className="py-2 rounded-s-full ps-5">المدرب</td>
                <td className="py-2">33</td>
                <td className="py-2">33</td>
                <td className="py-2">33</td>
                <td className="py-2">33</td>
                <td className="py-2">33</td>
                <td className="py-2 rounded-e-full">33</td>
              </tr>
              <tr className="bg-white text-center text-[#008062]">
                <td className="py-2 rounded-s-full ps-5">المدرب</td>
                <td className="py-2">33</td>
                <td className="py-2">33</td>
                <td className="py-2">33</td>
                <td className="py-2">33</td>
                <td className="py-2">33</td>
                <td className="py-2 rounded-e-full">33</td>
              </tr>
              <tr className="bg-white text-center text-[#008062]">
                <td className="py-2 rounded-s-full ps-5">المدرب</td>
                <td className="py-2">33</td>
                <td className="py-2">33</td>
                <td className="py-2">33</td>
                <td className="py-2">33</td>
                <td className="py-2">33</td>
                <td className="py-2 rounded-e-full">33</td>
              </tr>
              <tr className="bg-white text-center text-[#008062]">
                <td className="py-2 rounded-s-full ps-5">المدرب</td>
                <td className="py-2">33</td>
                <td className="py-2">33</td>
                <td className="py-2">33</td>
                <td className="py-2">33</td>
                <td className="py-2">33</td>
                <td className="py-2 rounded-e-full">33</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Overall_Rating;
