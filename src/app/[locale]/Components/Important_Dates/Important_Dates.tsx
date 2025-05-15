import { useLocale } from "next-intl";
import RaceTable from "./RaceTable";
import { LuArrowRight } from "react-icons/lu";

const Important_Dates = () => {
  const lang = useLocale();

  return (
    <section
      className="lg:pt-8 pt-12 pb-20"
      dir={lang === "en" ? "ltr" : "rtl"}
    >
      <div className="container mx-auto">
        <RaceTable title="49 يوم" badgeColor="#EA3323" badgeNumber="81" />
        <RaceTable
          title="249 يوم - 2011"
          badgeColor="#FFFFFF"
          badgeNumber="61"
        />
        <RaceTable title="49 يوم" badgeColor="#0122F5" badgeNumber="54" />

        <div className="w-full rounded-lg overflow-x-auto overflow-y-hidden mt-8 scrollbar-hide">
          <table className="w-full lg:min-w-full text-white min-w-[700px] text-start border-collapse whitespace-nowrap text-[14px]">
            <tbody>
              <tr className="bg-[var(--main)] text-start">
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
