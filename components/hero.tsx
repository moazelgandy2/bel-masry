import Image from "next/image";
import Container from "@/components/container";
import Wrapper from "@/components/wrapper";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";

export const HeroSection = () => {
  return (
    <>
      <Wrapper>
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] bg-[#F1FAFF] -z-10 h-[150vh]" />
        <Container>
          <div className="flex flex-col items-center justify-center py-20 h-full">
            <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
              <span>
                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
              </span>
              <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
              <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40"></span>
              <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
                <Image
                  src="/icons/sparkles-dark.svg"
                  alt="✨"
                  width={24}
                  height={24}
                  className="w-4 h-4"
                />
                اِكتِشِفْ بِالمِصرِي
                <ChevronLeft className="w-4 h-4" />
              </span>
            </button>

            <div className="flex flex-col items-center mt-8 max-w-3xl w-11/12 md:w-full">
              <h1 className="text-4xl md:text-6xl md:!leading-snug font-semibold text-center bg-clip-text bg-gradient-to-r from-gray-800 to-black text-transparent">
                نَمِّ عَمَلَكْ مَعَ أَفْضَلِ الفُرَصِ لِلعَلامَاتِ
                التِّجَارِيَّةِ المِصْرِيَّةِ
              </h1>
              <p className="text-base md:text-lg text-foreground/80 mt-6 text-center">
                حَقِّقْ النَّجَاحَ مَعَ أَفْضَلِ الفُرَصِ لِعَلامَتِكَ
                التِّجَارِيَّةِ، وَقَدِّمْ مُنْتَجَاتِكَ لِأَكْبَرِ عَدَدٍ مِنَ
                العُمَلَاءِ.
              </p>
              <div className="hidden md:flex relative items-center justify-center mt-8 md:mt-12 w-full">
                <Link
                  href="#"
                  className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 gap-2 md:gap-8 shadow-3xl shadow-background/40 cursor-pointer select-none"
                >
                  <p className="text-foreground text-sm text-center md:text-base font-medium pl-4 pr-4 lg:pr-0">
                    ✨ابدَأْ تَجْرِبَتَكَ مَعَنَا
                  </p>
                  <Button
                    size="sm"
                    className="rounded-full hidden lg:flex border border-foreground/20"
                  >
                    احْجِزْ مَكَانَكْ الآن
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative flex items-center py-10 md:py-20 w-full overflow-x-clip p-4">
              <div className="absolute  top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>
              <div className="-m-2 rounded-xl p-2 ring-1 ring-inset bg-white ring-foreground/20 lg:-m-4 lg:rounded-2xl backdrop-blur-3xl">
                <Image
                  src="/assets/hero.svg"
                  alt="banner image"
                  width={1200}
                  height={1200}
                  quality={100}
                  className="rounded-md lg:rounded-xl bg-foreground/10 shadow-2xl ring-1 ring-border bg-white"
                />

                <BorderBeam
                  size={320}
                  duration={9}
                  delay={9}
                />
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </>
  );
};
