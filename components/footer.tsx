import Icons from "./icons";
import { Heart } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32">
      <div className="hidden lg:block absolute -top-1/3 -right-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>
      <div className="hidden lg:block absolute bottom-0 -left-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>

      <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
        <div className="flex flex-col items-start justify-start md:max-w-[200px]">
          <div className="flex items-start">
            <Icons.logo className="w-7 h-7" />
          </div>
          <p className="text-muted-foreground mt-4 text-sm text-start">
            بِعْ مُنْتَجَاتِكَ بِسُهُولَة وَفَعَّالية
          </p>
        </div>

        <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
          <div className="mt-10 md:mt-0 flex flex-col">
            <h3 className="text-base font-bold text-black">مَوَاقِعُنَا </h3>
            <ul className="mt-4 text-sm text-muted-foreground">
              <li className="">
                <Link
                  href=""
                  className="hover:text-foreground transition-all duration-300"
                >
                  فِيسْبُوك
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  href=""
                  className="hover:text-foreground transition-all duration-300"
                >
                  إِنْسْتَاجْرَام
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  href=""
                  className="hover:text-foreground transition-all duration-300"
                >
                  تِوِيتَر
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  href=""
                  className="hover:text-foreground transition-all duration-300"
                >
                  لِينْكِيدْ إِن
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-10 md:mt-0 flex flex-col">
            <h3 className="text-base font-medium text-black">الشَّرِكَة</h3>
            <ul className="mt-4 text-sm text-muted-foreground">
              <li className="">
                <Link
                  href=""
                  className="hover:text-foreground transition-all duration-300"
                >
                  عَنَّا
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  href=""
                  className="hover:text-foreground transition-all duration-300"
                >
                  سِيَاسَةُ الْخُصُوصِيَّة
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  href=""
                  className="hover:text-foreground transition-all duration-300"
                >
                  الشُّرُوطُ وَالأَحْكَام
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
        <p className="text-sm text-muted-foreground mt-8 md:mt-0">
          &copy; {new Date().getFullYear()} بالْمَصْرِيّ. جَمِيعُ الحُقُوقِ
          مَحْفُوظَة.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
