import React from "react";

const InfoTable = ({ title, rows }) => {
  return (
    <div className="w-full rounded-lg lg:col-span-1 col-span-4">
      <div
        className={`relative text-center text-[22px] py-3 rounded-full mt-4 font-semibold ${
          title === "التقييم العام : 83"
            ? "bg-black text-white"
            : "bg-white text-[var(--main)] py-2"
        }`}
      >
        {title.includes("سجل") ? (
          <>
            <p className="text-[14px] mb-1">
              <span className="text-black">سجل :</span>
              <span className=""> 23 بداية </span>
              <span className="mx-1"> 16-1-0 </span>
              <span className="mx-1">4.16 مليون دولار</span>
            </p>
            <p className="text-[11px]">
              حصان مخصي | عمره 6 سنوات | فبراير | مولود في ولاية كنتاكي
            </p>
          </>
        ) : (
          title
        )}
      </div>
      <table className="w-full text-start border-separate border-spacing-y-2 font-semibold">
        <tbody>
          {rows.map(({ label, value }, idx) => (
            <tr key={idx} className="bg-white">
              <td className="py-2 rounded-s-full ps-5 w-[150px]">{label}</td>
              <td className="py-2 rounded-e-full text-[var(--main)]">
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InfoTable;
