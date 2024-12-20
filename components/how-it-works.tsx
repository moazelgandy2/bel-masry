import Container from "@/components/container";
import Wrapper from "@/components/wrapper";
import SectionBadge from "@/components/ui/section-badge";
import { perks } from "@/lib/constants";

export const HowItWorksSection = () => {
  return (
    <>
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center">
            <SectionBadge title="الْخُطُوَاتُ" />
            <h2 className="text-3xl lg:text-4xl font-semibold mt-6 bg-clip-text bg-gradient-to-r from-gray-800 to-black text-transparent">
              ثَلاثَ خُطُواتٍ لِتحْقِيقِ نَجَاحِكَ التِّجَارِيِّ
            </h2>
            <p className="text-muted-foreground mt-6">
              غَيِّرْ تَجْرِبَتَكَ التِّجَارِيَّةِ فِي ثَلاثَ خُطُواتٍ بَسِيطَةٍ
            </p>
          </div>
        </Container>
        <Container>
          <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 first:border-l-2 lg:first:border-none first:border-gray-900">
              {perks.map((perk) => (
                <div
                  key={perk.title}
                  className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4 border-l  border-black"
                >
                  <div className="flex items-center justify-center">
                    <perk.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-medium mt-4">{perk.title}</h3>
                  <p className="text-muted-foreground mt-2 text-start lg:text-start">
                    {perk.info}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Wrapper>
    </>
  );
};
