import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { FaSnapchat, FaInstagram, FaXTwitter, FaTiktok } from "react-icons/fa6";

export default function Footer() {
  const lang = useLocale();

  const socialLinks = [
    {
      href: "https://www.snapchat.com",
      icon: <FaSnapchat />,
      color: "hover:text-yellow-400",
    },
    {
      href: "https://www.instagram.com",
      icon: <FaInstagram />,
      color: "hover:text-pink-500",
    },
    {
      href: "https://x.com",
      icon: <FaXTwitter />,
      color: "hover:text-gray-400",
    },
    {
      href: "https://www.tiktok.com",
      icon: <FaTiktok />,
      color: "hover:text-white",
    },
  ];

  const navLinks = [
    { href: "/about", label: "عن ميادين" },
    { href: "/services", label: "الخدمات" },
    { href: "/competitions", label: "المسابقات" },
    { href: "/live", label: "البث المباشر" },
    { href: "/contact", label: "اتصل بنا" },
  ];

  const policyLinks = [
    { href: "/privacy", label: "سياسة الخصوصية" },
    { href: "/terms", label: "أحكام وشروط" },
    { href: "/charter", label: "ميثاق العملاء" },
    { href: "/tools", label: "أدوات الموقع" },
  ];

  return (
    <footer
      className="bg-[#1E1E1E] text-white text-sm"
      dir={lang === "en" ? "ltr" : "rtl"}
    >
      {/* Top Section */}
      <div className="py-10 px-4 grid grid-cols-1 lg:grid-cols-3 items-center md:gap-10 gap-6 container mx-auto">
        {/* Logo & Social */}
        <div className="flex flex-col items-center lg:items-start gap-4 lg:col-span-2">
          <div className="lg:flex mt-8">
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
            <div className="flex justify-center items-center flex-wrap gap-5 text-2xl text-center md:text-right lg:ms-8 lg:mt-0 mt-7">
              {socialLinks.map(({ href, icon, color }, i) => (
                <Link
                  key={i}
                  href={href}
                  target="_blank"
                  className={`${color} transition-colors`}
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center flex-wrap md:gap-x-12 gap-6 text-[20px] text-center md:text-right lg:mt-6 mt-2 mb-4">
            {navLinks.map(({ href, label }, i) => (
              <Link
                key={i}
                href={href}
                className="hover:text-[var(--main)] transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="space-y-3 text-center lg:text-start">
          <h3 className="text-2xl font-semibold">النشرة البريدية</h3>
          <p className="text-[17px] mb-4 -mt-1">النص أو الوصف يُكتب هنا</p>
          <form className="flex flex-col sm:flex-row gap-3 items-center justify-center lg:justify-start">
            <input
              type="email"
              placeholder="name@domain.com"
              className="bg-[#E3E3E3] px-4 py-2 rounded-md text-sm w-full sm:w-64 text-black placeholder-gray-400 h-11 outline-none"
            />
            <button className="bg-[var(--main)] hover:bg-[var(--main)]/70 transition-colors text-white px-9 py-2 rounded-md text-sm h-11">
              اشترك
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-black md:h-14 border-t-2 border-[#000000E6]">
        <div className="py-5 text-xs flex flex-col gap-2 md:flex-row justify-between items-center container mx-auto">
          <p className="sm:mt-2 md:mt-0 text-center">جميع الحقوق محفوظة</p>
          <div className="text-center md:text-right space-x-2">
            {policyLinks.map(({ href, label }, i) => (
              <Fragment key={i}>
                <Link href={href} className="hover:text-white">
                  {label}
                </Link>
                {i < policyLinks.length - 1 && <span>|</span>}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
