import React from "react";
import { useLocale } from "next-intl";
import { LuArrowRight } from "react-icons/lu";

const Important_Dates = () => {
  const lang = useLocale();

  return (
    <section className="lg:pt-8 pt-12 pb-20" dir={lang == "en" ? "ltr" : "rtl"}>
      <div className="container mx-auto">
        <div className="w-full rounded-lg overflow-x-auto scrollbar-hide">
          <p className="text-[#177245] text-[34px] mb-2 font-medium">49 يوم</p>
          <table className="w-full lg:min-w-full min-w-[1600px] text-start border-separate border-spacing-y-2 font-semibold whitespace-nowrap">
            <tbody>
              <tr className="bg-[#F2F2F2] text-start space-y-3">
                <td className="py-2 rounded-s-full ps-8">
                  <p>BHP</p>
                  <p>25 إبريل</p>
                </td>
                <td className="bg-[#F2F2F2] p-2">
                  <div className="bg-[#EA3323] inline-flex justify-between items-center gap-x-7 px-10 py-3 rounded-full text-black">
                    <div className="text-[14px]">
                      <p>1M</p>
                      <p>Yielding</p>
                    </div>
                    <div className="text-[14px]">
                      <p>Turf</p>
                      <p>Firecracker</p>
                    </div>
                    <div className="text-[14px]">
                      <p>3+</p>
                      <p>G2</p>
                    </div>
                  </div>
                </td>
                <td className="py-2 w-[130px]">
                  <p>M Gutierrez</p>
                  <p>117 | L | 12-1</p>
                </td>
                <td className="py-2 pe-6 ps-2 w-[130px]">
                  <p className="bg-white rounded-full p-1 px-1 text-[12px] flex items-center justify-center mb-2">
                    P3
                  </p>
                  <p className="bg-white rounded-full p-1 px-1 text-[13px] flex items-center justify-center">
                    P3
                  </p>
                </td>
                <td className="py-2 w-[90px]">
                  <p>4 بداية</p>
                  <p>-</p>
                </td>
                <td className="py-2 w-[90px]">
                  <p>
                    2<sup> 1 </sup>
                  </p>
                  <p>23.29</p>
                </td>
                <td className="py-2 w-[90px]">
                  <p>
                    {" "}
                    3<sup> 3 </sup>
                  </p>
                  <p>47.23</p>
                </td>
                <td className="py-2 w-[90px]">
                  <p>
                    {" "}
                    3<sup> 1/2 7 </sup>
                  </p>
                  <p>59.82</p>
                </td>
                <td className="py-2 w-[90px]">
                  <p>
                    6<sup> 11 </sup>
                  </p>
                  <p>1:12.71</p>
                </td>
                <td className="bg-[#F2F2F2] p-2 w-[110px]">
                  <div className="bg-[#EA3323] flex justify-center items-center w-16 h-16 rounded-full text-black text-[32px]">
                    <span className="-translate-y-1 translate-x-0.5">81</span>
                  </div>
                </td>
                <td className="py-2 text-[14px] w-[200px]">
                  <p>1 نص مكتوب للتوضيح</p>
                  <p>2 نص مكتوب للتوضيح</p>
                  <p>3 نص مكتوب للتوضيح</p>
                </td>
                <td className="py-2 rounded-e-full pe-4 text-[14px] w-[200px]">
                  <p>1 نص مكتوب للتوضيح</p>
                  <p>2 نص مكتوب للتوضيح</p>
                  <p>3 نص مكتوب للتوضيح</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full rounded-lg overflow-x-auto scrollbar-hide">
          <p className="text-[#177245] text-[34px] mb-2 font-medium">
            249 يوم - 2011
          </p>
          <table className="w-full lg:min-w-full min-w-[1600px] text-start border-separate border-spacing-y-2 font-semibold whitespace-nowrap">
            <tbody>
              <tr className="bg-[#F2F2F2] text-start space-y-3">
                <td className="py-2 rounded-s-full ps-8">
                  <p>BHP</p>
                  <p>25 إبريل</p>
                </td>
                <td className="bg-[#F2F2F2] p-2">
                  <div className="bg-white inline-flex justify-between items-center gap-x-7 px-10 py-3 rounded-full text-black">
                    <div className="text-[14px]">
                      <p>1M</p>
                      <p>Yielding</p>
                    </div>
                    <div className="text-[14px]">
                      <p>Turf</p>
                      <p>Firecracker</p>
                    </div>
                    <div className="text-[14px]">
                      <p>3+</p>
                      <p>G2</p>
                    </div>
                  </div>
                </td>
                <td className="py-2 w-[130px]">
                  <p>M Gutierrez</p>
                  <p>117 | L | 12-1</p>
                </td>
                <td className="py-2 pe-6 ps-2 w-[130px]">
                  <p className="bg-white rounded-full p-1 px-1 text-[12px] flex items-center justify-center mb-2">
                    P3
                  </p>
                  <p className="bg-white rounded-full p-1 px-1 text-[13px] flex items-center justify-center">
                    P3
                  </p>
                </td>
                <td className="py-2 w-[90px]">
                  <p>4 بداية</p>
                  <p>-</p>
                </td>
                <td className="py-2 w-[90px]">
                  <p>
                    2<sup> 1 </sup>
                  </p>
                  <p>23.29</p>
                </td>
                <td className="py-2 w-[90px]">
                  <p>
                    {" "}
                    3<sup> 3 </sup>
                  </p>
                  <p>47.23</p>
                </td>
                <td className="py-2 w-[90px]">
                  <p>
                    {" "}
                    3<sup> 1/2 7 </sup>
                  </p>
                  <p>59.82</p>
                </td>
                <td className="py-2 w-[90px]">
                  <p>
                    6<sup> 11 </sup>
                  </p>
                  <p>1:12.71</p>
                </td>
                <td className="bg-[#F2F2F2] p-2 w-[110px]">
                  <div className="bg-white flex justify-center items-center w-16 h-16 rounded-full text-black text-[32px]">
                    <span className="-translate-y-1 translate-x-0.5">61</span>
                  </div>
                </td>
                <td className="py-2 text-[14px] w-[200px]">
                  <p>1 نص مكتوب للتوضيح</p>
                  <p>2 نص مكتوب للتوضيح</p>
                  <p>3 نص مكتوب للتوضيح</p>
                </td>
                <td className="py-2 rounded-e-full pe-4 text-[14px] w-[200px]">
                  <p>1 نص مكتوب للتوضيح</p>
                  <p>2 نص مكتوب للتوضيح</p>
                  <p>3 نص مكتوب للتوضيح</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full rounded-lg overflow-x-auto scrollbar-hide">
          <p className="text-[#177245] text-[34px] mb-2 font-medium">49 يوم</p>
          <table className="w-full lg:min-w-full min-w-[1600px] text-start border-separate border-spacing-y-2 font-semibold whitespace-nowrap">
            <tbody>
              <tr className="bg-[#F2F2F2] text-start space-y-3">
                <td className="py-2 rounded-s-full ps-8">
                  <p>BHP</p>
                  <p>25 إبريل</p>
                </td>
                <td className="bg-[#F2F2F2] p-2">
                  <div className="bg-[#0122F5] inline-flex justify-between items-center gap-x-7 px-10 py-3 rounded-full text-black">
                    <div className="text-[14px]">
                      <p>1M</p>
                      <p>Yielding</p>
                    </div>
                    <div className="text-[14px]">
                      <p>Turf</p>
                      <p>Firecracker</p>
                    </div>
                    <div className="text-[14px]">
                      <p>3+</p>
                      <p>G2</p>
                    </div>
                  </div>
                </td>
                <td className="py-2 w-[130px]">
                  <p>M Gutierrez</p>
                  <p>117 | L | 12-1</p>
                </td>
                <td className="py-2 pe-6 ps-2 w-[130px]">
                  <p className="bg-white rounded-full p-1 px-1 text-[12px] flex items-center justify-center mb-2">
                    P3
                  </p>
                  <p className="bg-white rounded-full p-1 px-1 text-[13px] flex items-center justify-center">
                    P3
                  </p>
                </td>
                <td className="py-2 w-[90px]">
                  <p>4 بداية</p>
                  <p>-</p>
                </td>
                <td className="py-2 w-[90px]">
                  <p>
                    2<sup> 1 </sup>
                  </p>
                  <p>23.29</p>
                </td>
                <td className="py-2 w-[90px]">
                  <p>
                    {" "}
                    3<sup> 3 </sup>
                  </p>
                  <p>47.23</p>
                </td>
                <td className="py-2 w-[90px]">
                  <p>
                    {" "}
                    3<sup> 1/2 7 </sup>
                  </p>
                  <p>59.82</p>
                </td>
                <td className="py-2 w-[90px]">
                  <p>
                    6<sup> 11 </sup>
                  </p>
                  <p>1:12.71</p>
                </td>
                <td className="bg-[#F2F2F2] p-2 w-[110px]">
                  <div className="bg-[#0122F5] flex justify-center items-center w-16 h-16 rounded-full text-black text-[32px]">
                    <span className="-translate-y-1 translate-x-0.5">54</span>
                  </div>
                </td>
                <td className="py-2 text-[14px] w-[200px]">
                  <p>1 نص مكتوب للتوضيح</p>
                  <p>2 نص مكتوب للتوضيح</p>
                  <p>3 نص مكتوب للتوضيح</p>
                </td>
                <td className="py-2 rounded-e-full pe-4 text-[14px] w-[200px]">
                  <p>1 نص مكتوب للتوضيح</p>
                  <p>2 نص مكتوب للتوضيح</p>
                  <p>3 نص مكتوب للتوضيح</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full rounded-lg overflow-x-auto overflow-y-hidden mt-8 scrollbar-hide">
          <table className="w-full lg:min-w-full text-white min-w-[700px] text-start border-collapse whitespace-nowrap text-[14px]">
            <tbody>
              <tr className="bg-[#008062] text-start">
                <td className="py-4 ps-6 rounded-s-full cursor-pointer">
                  <p>
                    <LuArrowRight className="text-lg w-7 h-7 border-2 p-1 border-white rounded-full" />
                  </p>
                </td>

                <td className="py-2 px-4">
                  <p>Jul20 SAR Dirt Gd: 4F in 51 1\5 (23 of 34) B</p>
                </td>

                <td className="py-2 px-4">
                  <p>Jul27 SAR Turf tr.tFrm: 5F in 57 1\5 (1 of 2) B</p>
                </td>

                <td className="py-2 px-4">
                  <p>Aug3 SAR Dirt Gd: 4F in 49 2\5 (28 of 49) B</p>
                </td>

                <td className="py-2 pe-6 rounded-e-full text-[14px]">
                  WORKOUTS
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Important_Dates;
