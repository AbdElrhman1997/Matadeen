"use client";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
const Header = () => {
  const t = useTranslations("NavBar");
  const lang = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header
      className="bg-[#008062] py-7 z-50"
      dir={lang == "en" ? "ltr" : "rtl"}
    >
      {/* Desktop Menu */}
      <div className="container mx-auto flex items-center justify-between">
        <div className="hidden lg:block relative w-44">
          <Link href={`/${lang}`}>
            <Image
              src="/images/logos/logo.svg"
              alt="Logo"
              height={70}
              width={160}
            />
          </Link>
        </div>

        <nav className="container mx-auto md:px-20 relative">
          <ul className="hidden lg:flex space-x-6 text-white items-center justify-center font-medium">
            <li>
              <Link href={`/${lang}`} className="hover:text-primary">
                {t("about_us")}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}`} className="hover:text-primary">
                {t("services")}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}`} className="hover:text-primary">
                {t("services")}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}`} className="hover:text-primary">
                {t("competitions")}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}`} className="hover:text-primary">
                {t("live")}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}`} className="hover:text-primary">
                {t("call_us")}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex gap-2 items-center">
          <div className="lg:flex hidden gap-[10px] mx-6">
            <div className="relative w-5 h-5  grid place-items-center rounded-full">
              <Image
                src="/images/logos/search.svg"
                alt="User Icon"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="text-white">{t("search")}</span>
          </div>
          <div className=" gap-[10px] lg:flex hidden">
            <div className="relative w-5 h-5  grid place-items-center rounded-full">
              <Image
                src="/images/logos/account.svg"
                alt="User Icon"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="text-white">{t("my_account")}</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="container mx-auto">
        <div className="lg:hidden flex justify-between items-center w-full">
          <div className="relative w-44">
            <Link href={`/${lang}`}>
              <Image
                src="/images/logos/logo.svg"
                alt="Logo"
                height={70}
                width={160}
              />
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-4 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <button onClick={() => setIsOpen(false)}>
                <FaTimes className="text-2xl text-white" />
              </button>
            ) : (
              <FaBars className="text-2xl text-white" />
            )}
          </button>
        </div>

        {isOpen && (
          <nav
            className={`lg:hidden fixed top-[112px] inset-x-0 z-50 bg-white max-h-[calc(100vh-112px)] overflow-y-auto transition-all duration-300 ease-in-out shadow-xl border-t border-gray-100 rounded-b-2xl ${
              isOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0 pointer-events-none"
            }`}
          >
            <ul className="p-6 space-y-8 py-10">
              {[
                { label: "عن ميادين", href: `/${lang}` },
                { label: "الخدمات", href: `/${lang}` },
                { label: "المسابقات", href: `/${lang}` },
                { label: "البث المباشر", href: `/${lang}` },
                { label: "اتصل بنا", href: `/${lang}` },
                { label: "بحث", href: `/${lang}` },
                { label: "حسابي", href: `/${lang}` },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="block text-[#008062] font-semibold text-2xl text-center hover:text-[#008062]/80 transform transition-transform hover:scale-105"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
