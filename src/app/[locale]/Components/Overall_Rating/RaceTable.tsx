import React from "react";

const RaceTable = () => {
  return (
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
        {[...Array(5)].map((_, idx) => (
          <tr key={idx} className="bg-white text-center text-[var(--main)]">
            <td className="py-2 rounded-s-full ps-5">المدرب</td>
            <td className="py-2">33</td>
            <td className="py-2">33</td>
            <td className="py-2">33</td>
            <td className="py-2">33</td>
            <td className="py-2">33</td>
            <td className="py-2 rounded-e-full">33</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RaceTable;
