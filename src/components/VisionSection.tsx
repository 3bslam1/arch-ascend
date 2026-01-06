import { Building2, Flame, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import abaadImage from "@/assets/abaad-company.jpg";
import samaImage from "@/assets/sama-safety.jpg";

const VisionSection = () => {
  const companies = [
    {
      name: "أبعاد الارتقاء",
      description: "استشارات هندسية عالمية المستوى، تخطيط عمراني، وتصاميم سلامة معتمدة",
      icon: Building2,
      image: abaadImage,
    },
    {
      name: "سما للسلامة",
      description: "رائدة في توريد وتركيب وصيانة أنظمة مكافحة الحرائق المتطورة",
      icon: Flame,
      image: samaImage,
    },
  ];

  return (
    <section id="vision" className="section-padding bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1">
            {/* Section Header */}
            <div className="mb-10">
              <span className="text-primary text-sm font-semibold tracking-wider mb-4 block">
                رؤيتنا
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                شركتان.
                <br />
                <span className="text-gradient">رؤية واحدة لمستقبل أكثر أماناً</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                نحن تحالف رائد مكرس لتطوير وحماية البنية التحتية في المملكة العربية السعودية
              </p>
            </div>

            {/* Companies */}
            <div className="space-y-6 mb-10">
              {companies.map((company, index) => (
                <div
                  key={company.name}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/30 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-500">
                      <company.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                        {company.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {company.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              تعرف على تحالفنا
              <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </Button>
          </div>

          {/* Right Side - Creative Image Layout */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative h-[500px] md:h-[600px]">
              {/* Main Image - Abaad */}
              <div className="absolute top-0 right-0 w-[75%] h-[65%] rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 group">
                <img
                  src={abaadImage}
                  alt="أبعاد الارتقاء"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-6 right-6 left-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-bold">أبعاد الارتقاء</p>
                      <p className="text-muted-foreground text-xs">الاستشارات الهندسية</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Image - Sama */}
              <div className="absolute bottom-0 left-0 w-[70%] h-[55%] rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border-4 border-background group z-10">
                <img
                  src={samaImage}
                  alt="سما للسلامة"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-6 right-6 left-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-destructive/20 backdrop-blur-sm flex items-center justify-center">
                      <Flame className="w-5 h-5 text-destructive" />
                    </div>
                    <div>
                      <p className="text-foreground font-bold">سما للسلامة</p>
                      <p className="text-muted-foreground text-xs">أنظمة مكافحة الحرائق</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 border-2 border-primary/20 rounded-3xl" />
              <div className="absolute top-1/3 -right-8 w-4 h-24 bg-gradient-to-b from-primary/40 to-transparent rounded-full" />
              <div className="absolute bottom-1/4 -left-6 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-primary rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
