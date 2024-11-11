import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Wrapper from "./wrapper";
import Container from "./container";
import { LampContainer } from "./ui/lamp";
import { ArrowLeft } from "lucide-react";

export const NewsLetter = () => {
  return (
    <>
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <Container>
          <LampContainer>
            <div className="flex flex-col items-center justify-center relative w-full text-center">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug font-semibold mt-8 bg-clip-text bg-gradient-to-r from-gray-800 to-black text-transparent">
                نَمِّ قُدُرَاتِك التِّجَارِيَّةِ
                <br /> بِسُرْعَةٍ وَفَعَالِيَّة
              </h2>
              <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                تَفَوَّقْ فِي إِدَارَةِ عَلامَتِكَ التِّجَارِيَّةِ مَعَ
                أَدَوَاتِنا وَمِيَزَاتِنا السَّهْلَة
              </p>
              <Button
                className="mt-6"
                asChild
              >
                <Link href="#">
                  تَواصَلْ مَعَنَا لِمَعْلُومَاتٍ أَكْثَر
                  <ArrowLeft className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </LampContainer>
        </Container>
        <Container className="relative z-[999999]">
          <div className="flex items-center justify-center w-full -mt-40">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full px-4 md:px-8 rounded-lg lg:rounded-2xl border border-border/80 py-4 md:py-8">
              <div className="flex flex-col items-start gap-4 w-full">
                <h4 className="text-xl md:text-2xl font-semibold">
                  تواصَل معَنا
                </h4>
                <p className="text-base text-muted-foreground">
                  تَوَاصَلْ مَعَنَا لِمَزِيدٍ مِنَ الْمَعْلُومَاتِ عَنْ
                  &apos;بالْمَصْرِيّ&apos;
                </p>
              </div>
              <div className="flex flex-col items-start gap-2 md:min-w-80 mt-5 md:mt-0 w-full md:w-max">
                <form
                  action="#"
                  className="flex flex-col md:flex-row items-center gap-2 w-full md:max-w-xs"
                >
                  <Input
                    required
                    type="email"
                    placeholder="أَدْخِلْ رَقَمَ هَاتِفِكَ"
                    className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-primary duration-300 w-full"
                  />
                  <Button
                    type="submit"
                    size="sm"
                    variant="secondary"
                    className="w-full md:w-max"
                  >
                    إِرْسَال
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </>
  );
};
