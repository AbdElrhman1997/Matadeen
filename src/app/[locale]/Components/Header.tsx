"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const t = useTranslations("NavBar");
  const lang = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navLinks = [
    { key: "about_us", href: `/${lang}` },
    { key: "services", href: `/${lang}` },
    { key: "services", href: `/${lang}` },
    { key: "competitions", href: `/${lang}` },
    { key: "live", href: `/${lang}` },
    { key: "call_us", href: `/${lang}` },
  ];

  const mobileLinks = [
    { label: "عن ميادين", href: `/${lang}` },
    { label: "الخدمات", href: `/${lang}` },
    { label: "المسابقات", href: `/${lang}` },
    { label: "البث المباشر", href: `/${lang}` },
    { label: "اتصل بنا", href: `/${lang}` },
    { label: "بحث", href: `/${lang}` },
    { label: "حسابي", href: `/${lang}` },
  ];

  return (
    <header
      className="bg-[var(--main)] py-7 z-50"
      dir={lang === "en" ? "ltr" : "rtl"}
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
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="hover:text-primary">
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-2 items-center">
          <div className="lg:flex hidden gap-[10px] mx-6">
            <div className="relative w-5 h-5 grid place-items-center rounded-full">
              <Image
                src="/images/logos/search.svg"
                alt="Search Icon"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="text-white">{t("search")}</span>
          </div>
          <div className="gap-[10px] lg:flex hidden">
            <div className="relative w-5 h-5 grid place-items-center rounded-full">
              <Image
                src="/images/logos/account.svg"
                alt="Account Icon"
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
              <FaTimes className="text-2xl text-white" />
            ) : (
              <FaBars className="text-2xl text-white" />
            )}
          </button>
        </div>

        <nav
          className={`lg:hidden fixed top-[112px] h-[calc(100%-112px)] right-0 inset-x-0 z-50 bg-white max-h-[calc(100vh-112px)] overflow-y-auto transition-all duration-300 ease-in-out shadow-xl border-t border-gray-100 ${
            isOpen ? "clip-path-open" : "clip-path-closed"
          }`}
        >
          <ul className="p-6 space-y-10 py-10">
            {mobileLinks.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="block text-[var(--main)] font-semibold text-2xl text-center hover:text-[var(--main)]/80 transform transition-transform hover:scale-105"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
