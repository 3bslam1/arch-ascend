import { useState, useEffect, useCallback } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import projectRiyadh from "@/assets/project-riyadh.jpg";
import projectCollege from "@/assets/project-college.jpg";
import projectFactory from "@/assets/project-factory.jpg";
import projectTraffic from "@/assets/project-traffic.jpg";
import projectHotel from "@/assets/project-hotel.jpg";
import projectMall from "@/assets/project-mall.jpg";

const ProjectsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const projects = [
    {
      title: "برج الأعمال التجاري",
      category: "تجاري",
      location: "الرياض",
      image: projectRiyadh,
    },
    {
      title: "الكليات التقنية",
      category: "تعليمي",
      location: "الأحساء / الليث",
      image: projectCollege,
    },
    {
      title: "المجمع الصناعي",
      category: "صناعي",
      location: "المنطقة الشرقية",
      image: projectFactory,
    },
    {
      title: "الدراسات المرورية",
      category: "بنية تحتية",
      location: "مكة المكرمة",
      image: projectTraffic,
    },
    {
      title: "فندق الواجهة البحرية",
      category: "ضيافة",
      location: "جدة",
      image: projectHotel,
    },
    {
      title: "المجمع التجاري",
      category: "تجاري",
      location: "الدمام",
      image: projectMall,
    },
  ];

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider mb-4 block">
            مشاريعنا
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            إنجازات تتحدث عن نفسها
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            نفخر بمشاريعنا المتنوعة التي تعكس خبرتنا العميقة في مختلف القطاعات
          </p>
        </div>

        {/* Projects Carousel */}
        <div className="relative px-4 md:px-12">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              direction: "rtl",
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {projects.map((project, index) => (
                <CarouselItem
                  key={project.title}
                  className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <div className="group relative overflow-hidden rounded-xl cursor-pointer h-80 md:h-96">
                    {/* Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 transition-all duration-500 bg-gradient-to-t from-background/90 via-background/30 to-transparent group-hover:bg-background/80" />

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <span className="text-primary text-xs font-semibold tracking-wider mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold transition-all duration-500 text-foreground group-hover:text-gradient">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-2 transition-all duration-500 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                        {project.location}
                      </p>

                      {/* View More Indicator */}
                      <div className="absolute top-6 left-6 w-10 h-10 rounded-full bg-primary flex items-center justify-center transition-all duration-500 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100">
                        <svg
                          className="w-5 h-5 text-primary-foreground rotate-45"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 bg-primary text-primary-foreground hover:bg-primary/90 border-none" />
            <CarouselNext className="hidden md:flex -right-4 bg-primary text-primary-foreground hover:bg-primary/90 border-none" />
          </Carousel>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  current === index
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
