import { Building2, Flame, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import abaadImage from "@/assets/abaad-company.jpg";
import samaImage from "@/assets/sama-safety.jpg";

const VisionSection = () => {
  const companies = [
    {
      name: "أبعاد الارتقاء",
      nameEn: "Abaad Al-Erteqaa",
      description: "استشارات هندسية عالمية المستوى، تخطيط عمراني، وتصاميم سلامة معتمدة",
      descriptionEn: "World-class engineering consultation, urban planning, and certified safety designs.",
      icon: Building2,
      image: abaadImage,
    },
    {
      name: "سما للسلامة",
      nameEn: "Sama Safety",
      description: "رائدة في توريد وتركيب وصيانة أنظمة مكافحة الحرائق المتطورة",
      descriptionEn: "Leader in supply, installation, and maintenance of cutting-edge firefighting systems.",
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
                رؤيتنا | OUR VISION
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
                  className="group p-6 rounded-xl bg-card/50 border border-border/30 hover:border-primary/40 hover:bg-card transition-all duration-300"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                      <company.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">
                        {company.name}
                      </h3>
                      <p className="text-sm text-muted-foreground/70 mb-2">{company.nameEn}</p>
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
              className="group bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              تعرف على تحالفنا
              <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </Button>
          </div>

          {/* Right Side - Images */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={abaadImage}
                  alt="Abaad Al-Erteqaa Engineering"
                  className="w-full h-80 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4 left-4">
                  <p className="text-foreground font-semibold">أبعاد الارتقاء</p>
                  <p className="text-muted-foreground text-sm">الاستشارات الهندسية</p>
                </div>
              </div>

              {/* Secondary Image - Offset */}
              <div className="absolute -bottom-8 -left-8 w-2/3 rounded-2xl overflow-hidden shadow-2xl border-4 border-background z-20">
                <img
                  src={samaImage}
                  alt="Sama Safety Systems"
                  className="w-full h-56 md:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4 left-4">
                  <p className="text-foreground font-semibold">سما للسلامة</p>
                  <p className="text-muted-foreground text-sm">أنظمة مكافحة الحرائق</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
              <div className="absolute top-1/2 -right-8 w-16 h-16 bg-primary/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
