import Marquee from "@/components/ui/marquee";
import Wrapper from "@/components/wrapper";
import Container from "@/components/container";
import SectionBadge from "@/components/ui/section-badge";
import { reviews } from "@/lib/constants";
import { UserIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export const Testimonials = () => {
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  return (
    <>
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="hidden md:block absolute -top-1/4 -left-1/3 w-72 h-72 bg-indigo-500 rounded-full blur-[10rem] -z-10"></div>
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center">
            <SectionBadge title="شُرَكاؤُنَا" />
            <h2 className="text-3xl lg:text-4xl font-semibold mt-6 bg-clip-text bg-gradient-to-r from-gray-800 to-black text-transparent">
              ماذا يقول شُرَكاؤُنا؟
            </h2>
            <p className="text-muted-foreground mt-6">
              شَاهِدْ كَيْفَ يُحَسِّنُ &apos;بالمصري&apos; تَجْرِبَةَ
              العَلاَمَاتِ التِّجَارِيَّةِ. إِلَيْكَ مَا يَقُولُ الشُّرَكَاءُ.
            </p>
          </div>
        </Container>
        <Container>
          <div className="py-10 md:py-20 w-full">
            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-10">
              <Marquee
                pauseOnHover
                className="[--duration:20s] select-none"
              >
                {firstRow.map((review) => (
                  <figure
                    key={review.name}
                    className={cn(
                      "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                      "border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]"
                    )}
                  >
                    <div className="flex flex-row items-center gap-2">
                      <UserIcon className="w-6 h-6" />
                      <div className="flex flex-col">
                        <figcaption className="text-sm font-medium">
                          {review.name}
                        </figcaption>
                        <p className="text-xs font-medium text-muted-foreground">
                          {review.username}
                        </p>
                      </div>
                    </div>
                    <blockquote className="mt-2 text-sm">
                      {review.body}
                    </blockquote>
                  </figure>
                ))}
              </Marquee>
              <Marquee
                reverse
                pauseOnHover
                className="[--duration:20s] select-none"
              >
                {secondRow.map((review) => (
                  <figure
                    key={review.name}
                    className={cn(
                      "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                      "border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]"
                    )}
                  >
                    <div className="flex flex-row items-center gap-2">
                      <UserIcon className="w-6 h-6" />
                      <div className="flex flex-col">
                        <figcaption className="text-sm font-medium">
                          {review.name}
                        </figcaption>
                        <p className="text-xs font-medium text-muted-foreground">
                          {review.username}
                        </p>
                      </div>
                    </div>
                    <blockquote className="mt-2 text-sm">
                      {review.body}
                    </blockquote>
                  </figure>
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </>
  );
};
