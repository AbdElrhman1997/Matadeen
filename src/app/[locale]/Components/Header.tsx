"use client";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const t = useTranslations("NavBar");
  const lang = useLocale();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("auth_token");
      setIsAuthenticated(!!token);
    }
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);
  const [isMembershipsOpen, setIsMembershipsOpen] = useState(false);

  return (
    <header
      className="bg-[#008062] py-7 z-50"
      dir={lang == "en" ? "ltr" : "rtl"}
    >
      <div className="container mx-auto flex items-center justify-between">
        <nav
          className="flex justify-between items-center"
          dir={lang === "en" ? "ltr" : "rtl"}
        >
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
          <button className="lg:hidden p-4" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FaTimes className="text-2xl text-[#008062]" />
            ) : (
              <FaBars className="text-2xl text-gray-700" />
            )}
          </button>
          <div className="container mx-auto md:px-20 relative">
            {/* Desktop Menu */}
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
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <ul className="lg:hidden bg-white border-t p-4 space-y-3">
              <li>
                <Link
                  href={`/${lang}`}
                  className="block py-2 text-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <div
                  className="flex justify-between items-center py-2 cursor-pointer text-gray-700"
                  onClick={() => setIsAboutOpen(!isAboutOpen)}
                >
                  <span>{t("about")}</span>
                  {isAboutOpen ? (
                    <FaChevronUp className="text-gray-500" />
                  ) : (
                    <FaChevronDown className="text-gray-500" />
                  )}
                </div>
                {isAboutOpen && (
                  <ul className="pl-4 space-y-2">
                    <li>
                      <Link
                        href={`/${lang}/about`}
                        className="block py-2 text-gray-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {t("about_orgnization")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/${lang}/lists`}
                        className="block py-2 text-gray-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {t("lists")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/${lang}/structure`}
                        className="block py-2 text-gray-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {t("structure")}
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <div
                  className="flex justify-between items-center py-2 cursor-pointer text-gray-700"
                  onClick={() => setIsLibraryOpen(!isLibraryOpen)}
                >
                  <span>{t("library")}</span>
                  {isLibraryOpen ? (
                    <FaChevronUp className="text-gray-500" />
                  ) : (
                    <FaChevronDown className="text-gray-500" />
                  )}
                </div>
                {isLibraryOpen && (
                  <ul className="pl-4 space-y-2">
                    <li>
                      <Link
                        href={`/${lang}/data_library`}
                        className="block py-2 text-gray-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {t("data_library")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/${lang}/video_library`}
                        className="block py-2 text-gray-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {t("video_library")}
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <div
                  className="flex justify-between items-center py-2 cursor-pointer text-gray-700"
                  onClick={() => setIsMembershipsOpen(!isMembershipsOpen)}
                >
                  <span>{t("memberships")}</span>
                  {isMembershipsOpen ? (
                    <FaChevronUp className="text-gray-500" />
                  ) : (
                    <FaChevronDown className="text-gray-500" />
                  )}
                </div>
                {isMembershipsOpen && (
                  <ul className="pl-4 space-y-2">
                    <li>
                      <Link
                        href={`/${lang}/institutions`}
                        className="block py-2 text-gray-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {t("institutions")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/${lang}/individuals`}
                        className="block py-2 text-gray-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {t("individuals")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/${lang}/volunteers`}
                        className="block py-2 text-gray-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {t("volunteers")}
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <span
                  onClick={(e) => e.preventDefault()}
                  className="block py-2 text-gray-400 cursor-not-allowed"
                >
                  {t("training")}
                </span>
              </li>
              <li>
                <span
                  onClick={(e) => e.preventDefault()}
                  className="block py-2 text-gray-400 cursor-not-allowed"
                >
                  {t("jobs")}
                </span>
              </li>
              <li>
                <span
                  onClick={(e) => e.preventDefault()}
                  className="block py-2 text-gray-400 cursor-not-allowed"
                >
                  {t("actions")}
                </span>
              </li>
              <li>
                <span
                  onClick={(e) => e.preventDefault()}
                  className="block py-2 text-gray-400 cursor-not-allowed"
                >
                  {t("ads")}
                </span>
              </li>
            </ul>
          )}
        </nav>
        <div className="flex gap-2 items-center">
          {/* <LanguageSwitcher /> */}
        </div>
        <div className="flex gap-2 items-center">
          {/* <LanguageSwitcher /> */}
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
    </header>
  );
};

export default Header;
