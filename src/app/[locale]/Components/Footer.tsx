import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FaSnapchat, FaInstagram, FaXTwitter, FaTiktok } from "react-icons/fa6";

export default function Footer() {
  const lang = useLocale();

  return (
    <footer
      className="bg-[#1E1E1E] text-white text-sm "
      dir={lang === "en" ? "ltr" : "rtl"}
    >
      {/* Top Section */}
      <div className=" py-10 px-4 grid grid-cols-1 lg:grid-cols-3 items-center md:gap-10 gap-6 container mx-auto">
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
            {/* Social Links */}
            <div className="flex justify-center items-center flex-wrap gap-5 text-2xl text-center md:text-right lg:ms-8 lg:mt-0 mt-7">
              <Link
                href="https://www.snapchat.com"
                target="_blank"
                className="hover:text-yellow-400 transition-colors"
              >
                <FaSnapchat />
              </Link>
              <Link
                href="https://www.instagram.com"
                target="_blank"
                className="hover:text-pink-500 transition-colors"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://x.com"
                target="_blank"
                className="hover:text-gray-400 transition-colors"
              >
                <FaXTwitter />
              </Link>
              <Link
                href="https://www.tiktok.com"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <FaTiktok />
              </Link>
            </div>
          </div>
          {/* Navigation Links */}
          <div className="flex justify-center flex-wrap md:gap-x-12 gap-6 text-[20px] text-center md:text-right lg:mt-6 mt-2 mb-4">
            <Link
              href="/about"
              className="hover:text-[#008062] transition-colors"
            >
              عن ميادين
            </Link>
            <Link
              href="/services"
              className="hover:text-[#008062] transition-colors"
            >
              الخدمات
            </Link>
            <Link
              href="/competitions"
              className="hover:text-[#008062] transition-colors"
            >
              المسابقات
            </Link>
            <Link
              href="/live"
              className="hover:text-[#008062] transition-colors"
            >
              البث المباشر
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#008062] transition-colors"
            >
              اتصل بنا
            </Link>
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
            <button className="bg-[#008062] hover:bg-[#008062]/70 transition-colors text-white px-9 py-2 rounded-md text-sm h-11">
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
            <Link href="/privacy" className="hover:text-white">
              سياسة الخصوصية
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-white">
              أحكام وشروط
            </Link>
            <span>|</span>
            <Link href="/charter" className="hover:text-white">
              ميثاق العملاء
            </Link>
            <span>|</span>
            <Link href="/tools" className="hover:text-white">
              أدوات الموقع
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
