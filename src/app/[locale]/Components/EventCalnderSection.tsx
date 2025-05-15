"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

// Dummy events mapped by date
const Event_Data = {
  "2025-05-28": [
    {
      title: "حدث السباق الأول",
      time: "09:00 AM - 11:00 AM",
      date: "28 مايو 2025",
      type: "green",
    },
    {
      title: "حدث السباق الثاني",
      time: "02:00 PM - 04:00 PM",
      date: "28 مايو 2025",
      type: "yellow",
    },
  ],
  "2025-05-13": [
    {
      title: "حدث السباق الأول",
      time: "09:00 AM - 11:00 AM",
      date: "13 مايو 2025",
      type: "green",
    },
    {
      title: "حدث السباق الثاني",
      time: "02:00 PM - 04:00 PM",
      date: "13 مايو 2025",
      type: "yellow",
    },
    {
      title: "حدث السباق الثالث",
      time: "01:00 PM - 05:00 PM",
      date: "13 مايو 2025",
      type: "yellow",
    },
  ],
};

const Ar_Day_Names = [
  "الأحد",
  "الإثنين",
  "الثلاثاء",
  "الأربعاء",
  "الخميس",
  "الجمعة",
  "السبت",
];

const Ar_Month_Names = [
  "يناير",
  "فبراير",
  "مارس",
  "أبريل",
  "مايو",
  "يونيو",
  "يوليو",
  "أغسطس",
  "سبتمبر",
  "أكتوبر",
  "نوفمبر",
  "ديسمبر",
];

const EventCalnderSection = () => {
  const lang = useLocale();

  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [modalOpened, setModalOpened] = useState(false);

  const [currentMonth, setCurrentMonth] = useState(4);
  const [currentYear, setCurrentYear] = useState(2025);
  const [days, setDays] = useState<any[]>([]);

  // Generate days and match with events
  useEffect(() => {
    const firstDay = new Date(currentYear, currentMonth, 1);
    const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();

    const daysArray = [];

    for (let day = 1; day <= totalDays; day++) {
      const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(
        2,
        "0"
      )}-${String(day).padStart(2, "0")}`;
      const weekdayIndex =
        (new Date(currentYear, currentMonth, day).getDay() + 3) % 7;

      daysArray.push({
        number: String(day).padStart(2, "0"),
        label: Ar_Day_Names[weekdayIndex],
        hasEvents: Boolean(Event_Data[dateStr]?.length),
        eventTypes: Event_Data[dateStr]?.map((e) => e.type) || [],
      });
    }

    setDays(daysArray);
  }, [currentMonth, currentYear]);

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  const handleEventClick = (event: any) => {
    setSelectedDate(event.date);
    setSelectedEvent(event);
    setModalOpened(true);
  };

  const closeModal = () => {
    setSelectedDate(null);
    setSelectedEvent(null);
    setModalOpened(false);
  };

  return (
    <div
      className="w-full container mx-auto relative min-h-2/3"
      dir={lang === "en" ? "ltr" : "rtl"}
    >
      <h2 className="lg:text-[61px] md:text-4xl text-3xl lg:leading-[136px] font-bold text-[#177245] text-start mt-8">
        رزنامة السباقات
      </h2>

      <div className="flex lg:mt-8 md:mt-14 mt-10">
        {/* Sidebar */}
        <div className="lg:-translate-y-[19px] md:-translate-y-[47px] -translate-y-[35.5px]">
          <div className="lg:pe-32 md:pe-16 pe-7">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <span className="mr-2 text-black font-semibold mt-3">
                  <div className="lg:text-[22px] text-base lg:leading-9 lg:mb-1">
                    {currentYear}
                  </div>
                  <div className="lg:text-[36px] md:text-[26px] text-lg lg:leading-9">
                    {Ar_Month_Names[currentMonth]}
                  </div>
                </span>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="flex lg:mt-6 mt-2">
              <div
                className="relative lg:w-9 w-5 md:ms-3 cursor-pointer hover:scale-110 duration-300 transition"
                onClick={goToPreviousMonth}
              >
                <Image
                  src="/images/logos/right-arrow-circle.svg"
                  alt="Previous"
                  height={70}
                  width={160}
                />
              </div>
              <div
                className="relative lg:w-9 w-5 ms-3 cursor-pointer hover:scale-110 duration-300 transition"
                onClick={goToNextMonth}
              >
                <Image
                  src="/images/logos/left-arrow-circle.svg"
                  alt="Next"
                  height={70}
                  width={160}
                />
              </div>
            </div>
          </div>

          <div className="text-[var(--main)] lg:text-[25px] md:text-[19px] text-[15px] border-t border-[#E3E3E3] mt-4 pt-6">
            الأحداث
          </div>
        </div>

        {/* Day cards */}
        <div className="flex overflow-x-auto pb-2">
          {days.map((day, index) => {
            const dateKey = `${currentYear}-${String(currentMonth + 1).padStart(
              2,
              "0"
            )}-${day.number}`;

            return (
              <div
                key={index}
                className="flex-shrink-0 lg:w-36 w-20 rounded text-center"
                onClick={() => day.hasEvents && setModalOpened(true)}
              >
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border border-[#E3E3E3]">
                      <td className="pb-1 border border-[#E3E3E3]">
                        <div className="lg:h-36 h-20 flex flex-col items-center justify-center">
                          <div className="text-lg font-bold lg:text-[57px] text-[#177245]">
                            {day.number}
                          </div>
                          <div className="text-xs text-[#000E5A] lg:text-[21px] leading-10">
                            {day.label}
                          </div>
                        </div>
                        <div className="p-1 lg:min-h-32 min-h-20 bg-white flex items-center justify-center border-t border-[#E3E3E3]">
                          {day.hasEvents && (
                            <div className="flex flex-col items-center">
                              {Event_Data[dateKey]?.map((event, idx) => {
                                const isSelectedEvent =
                                  selectedEvent?.title === event.title;
                                const circleColor = isSelectedEvent
                                  ? "#FFC107"
                                  : "#177245";

                                return (
                                  <div
                                    key={idx}
                                    className="cursor-pointer"
                                    onClick={() => handleEventClick(event)}
                                  >
                                    <svg
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mt-[6px] w-4 h-4 lg:w-7 lg:h-7"
                                    >
                                      <circle
                                        cx="10"
                                        cy="10"
                                        r="10"
                                        fill={circleColor}
                                      />
                                      <circle
                                        cx="10"
                                        cy="10"
                                        r="5"
                                        fill="white"
                                      />
                                    </svg>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Modal */}
                {modalOpened && selectedEvent && (
                  <div className="absolute z-40 top-4/5 left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-xl w-80 text-right p-4 border-2 border-gray-200">
                    <button
                      className="absolute top-1 left-3 text-black text-2xl cursor-pointer"
                      onClick={closeModal}
                    >
                      ×
                    </button>
                    <h3 className="text-[var(--main)] text-[24px] font-bold mb-1">
                      {selectedEvent.title}
                    </h3>
                    <p className="text-[var(--main)] text-[18px] mb-2">
                      التصنيف{" "}
                    </p>

                    <div className="flex items-center text-sm text-black mb-3">
                      <span className="me-1 text-[14px]">📅</span>
                      {selectedEvent.date}
                      <span className="mx-1 text-[14px]">🕒</span>
                      {selectedEvent.time}
                    </div>

                    <div className="text-sm text-black grid grid-cols-3 w-full font-semibold">
                      <div className="space-y-2 text-right">
                        <div>المسافة</div>
                        <div>النوع</div>
                        <div>العمر</div>
                        <div>الجائزة</div>
                      </div>
                      <div className="space-y-2 text-[var(--main)] font-medium text-right">
                        <div>4 كم</div>
                        <div>رملي</div>
                        <div>3 سنوات</div>
                        <div>100,000 ر.س</div>
                      </div>
                      <div className="space-y-2 text-[var(--main)] font-medium text-right">
                        <div className="opacity-0">1</div>
                        <div className="opacity-0">2</div>
                        <div className="opacity-0">3</div>
                        <div className="flex justify-end mt-4 -translate-y-2">
                          <button className="flex items-center bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold hover:bg-yellow-500 transition">
                            تفاصيل
                            <FaArrowLeft className="translate-y-1 mx-2" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventCalnderSection;
