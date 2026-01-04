import consultancyImage from "@/assets/consultancy-card.jpg";
import executionImage from "@/assets/execution-card.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "الاستشارات الهندسية",
      description: "التخطيط العمراني، تصميم البنية التحتية، والتصميم الصناعي",
      image: consultancyImage,
      features: [
        "التخطيط العمراني والمعماري",
        "تصميم البنية التحتية",
        "الدراسات المرورية",
        "التصميم الصناعي",
      ],
    },
    {
      title: "التنفيذ والسلامة",
      description: "الإشراف على المشاريع، مراقبة الجودة، وأنظمة السلامة المتخصصة",
      image: executionImage,
      features: [
        "الإشراف على التنفيذ",
        "مراقبة الجودة",
        "أنظمة الإطفاء والسلامة",
        "إدارة المشاريع",
      ],
    },
  ];

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider mb-4 block">
            خدماتنا
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            ركيزتان للتميز الهندسي
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            نقدم حلولاً متكاملة تجمع بين الاستشارات الهندسية المتقدمة والتنفيذ الاحترافي
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl bg-card hover-lift"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-8 -mt-20">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gradient">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Decorative Line */}
                <div className="absolute top-0 right-8 w-1 h-16 bg-gradient-to-b from-primary to-transparent rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
