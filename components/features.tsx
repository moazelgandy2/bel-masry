import Container from "@/components/container";
import Icons from "@/components/icons";
import Wrapper from "@/components/wrapper";
import SectionBadge from "@/components/ui/section-badge";
import { features } from "@/lib/constants";

export const FeaturesSection = () => {
  return (
    <>
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-10"></div>
        <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-10"></div>
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center">
            <SectionBadge title="المُمَيِّزَاتُ" />
            <h2 className="text-3xl lg:text-4xl font-semibold mt-6 bg-clip-text bg-gradient-to-r from-gray-800 to-black text-transparent">
              اِكْتِشِفْ حُلُولَنَا لِعَلامَتِكَ التِّجَارِيَّةِ
            </h2>
            <p className="text-muted-foreground mt-6">
              بِالمِصْرِيّ يُوَفِّرُ لَكَ مَجْمُوعَةً مِنَ المُمَيِّزَاتِ
              الَّتِي تُعَزِّزُ تَجْرِبَتَكَ التِّجَارِيَّةَ بِسُرْعَةٍ
              وَفَعَّالِيَّةٍ.
            </p>
          </div>
        </Container>
        <Container>
          <div className="flex items-center justify-center mx-auto mt-8">
            <Icons.feature className="w-auto h-80" />
          </div>
        </Container>
        <Container>
          <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col items-start lg:items-start px-0 md:px-0"
                >
                  <div className="flex items-center justify-center">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-medium mt-4">{feature.title}</h3>
                  <p className="text-muted-foreground mt-2 text-start lg:text-start">
                    {feature.info}
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
