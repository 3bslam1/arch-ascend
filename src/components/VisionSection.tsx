import { Target, Eye, Award } from "lucide-react";

const VisionSection = () => {
  const visionItems = [
    {
      icon: Eye,
      title: "رؤيتنا",
      description:
        "أن نكون الشريك الهندسي الأول والأكثر ثقة في المملكة العربية السعودية، نقود التحول في قطاع البناء والتطوير من خلال الابتكار والجودة والالتزام بأعلى المعايير العالمية",
    },
    {
      icon: Target,
      title: "رسالتنا",
      description:
        "تقديم خدمات هندسية واستشارية متكاملة بأعلى معايير الجودة والسلامة، مع الالتزام بتحقيق رؤية عملائنا وتجاوز توقعاتهم من خلال فريق من الخبراء المتخصصين",
    },
    {
      icon: Award,
      title: "قيمنا",
      description:
        "النزاهة والشفافية في جميع تعاملاتنا، التميز في الأداء، الابتكار المستمر، والمسؤولية الاجتماعية تجاه مجتمعنا وبيئتنا",
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
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider mb-4 block">
            من نحن
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            رؤيتنا <span className="text-gradient">ورسالتنا</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            نسعى لتحقيق التميز في كل مشروع نتولاه، مع الالتزام بأعلى معايير الجودة والسلامة
          </p>
        </div>

        {/* Vision Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {visionItems.map((item, index) => (
            <div
              key={item.title}
              className="group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover-lift"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-4 text-gradient">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden rounded-2xl">
                <div className="absolute top-0 right-0 w-16 h-1 bg-gradient-to-l from-primary to-transparent" />
                <div className="absolute top-0 right-0 h-16 w-1 bg-gradient-to-b from-primary to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
