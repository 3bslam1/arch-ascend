import { Building2, HardHat, Shield, Ruler, Users, CheckCircle } from "lucide-react";
import capabilitiesBg from "@/assets/capabilities-bg.jpg";

const CapabilitiesSection = () => {
  const capabilities = [
    {
      icon: Building2,
      title: "التصميم المعماري",
      description: "تصميمات معمارية مبتكرة تجمع بين الجمال والوظيفة",
    },
    {
      icon: Ruler,
      title: "التصميم الإنشائي",
      description: "حلول إنشائية متقدمة تضمن السلامة والاستدامة",
    },
    {
      icon: HardHat,
      title: "إدارة المشاريع",
      description: "إدارة احترافية للمشاريع من البداية حتى التسليم",
    },
    {
      icon: Shield,
      title: "أنظمة السلامة",
      description: "تصميم وتركيب أنظمة الإطفاء والسلامة المتكاملة",
    },
    {
      icon: Users,
      title: "الإشراف الهندسي",
      description: "إشراف متخصص لضمان جودة التنفيذ والالتزام بالمواصفات",
    },
    {
      icon: CheckCircle,
      title: "مراقبة الجودة",
      description: "اختبارات وفحوصات شاملة لضمان أعلى معايير الجودة",
    },
  ];

  return (
    <section id="capabilities" className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={capabilitiesBg}
          alt="البنية التحتية"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider mb-4 block">
            ما نقدمه
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            قدراتنا <span className="text-gradient">الأساسية</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            نمتلك فريقاً من الخبراء المتخصصين في مختلف المجالات الهندسية لتقديم حلول شاملة ومتكاملة
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="group relative p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border/30 hover:border-primary/40 hover:bg-card transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <capability.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </div>

              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
