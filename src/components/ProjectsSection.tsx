import { useState } from "react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "مبنى نقور الدولي",
      category: "تجاري",
      location: "مكة المكرمة",
      image: project1,
    },
    {
      title: "الكليات التقنية",
      category: "تعليمي",
      location: "الأحساء / الليث",
      image: project2,
    },
    {
      title: "تصميم المصانع",
      category: "صناعي",
      location: "المملكة العربية السعودية",
      image: project3,
    },
    {
      title: "الدراسات المرورية",
      category: "بنية تحتية",
      location: "مكة المكرمة",
      image: project4,
    },
  ];

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

        {/* Projects Masonry Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-500 ${
                index === 0 || index === 3 ? "md:col-span-2 lg:col-span-2" : ""
              } ${index === 0 ? "h-80 md:h-96" : "h-80"}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  hoveredIndex === index ? "scale-110" : "scale-100"
                }`}
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 transition-all duration-500 ${
                  hoveredIndex === index
                    ? "bg-background/80"
                    : "bg-gradient-to-t from-background/90 via-background/30 to-transparent"
                }`}
              />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-primary text-xs font-semibold tracking-wider mb-2">
                  {project.category}
                </span>
                <h3
                  className={`text-xl md:text-2xl font-bold transition-all duration-500 ${
                    hoveredIndex === index ? "text-gradient" : "text-foreground"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-muted-foreground text-sm mt-2 transition-all duration-500 ${
                    hoveredIndex === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  {project.location}
                </p>

                {/* View More Indicator */}
                <div
                  className={`absolute top-6 left-6 w-10 h-10 rounded-full bg-primary flex items-center justify-center transition-all duration-500 ${
                    hoveredIndex === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-50"
                  }`}
                >
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
