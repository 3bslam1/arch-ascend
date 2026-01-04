import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "تم إرسال طلبك بنجاح",
      description: "سيتواصل معك فريقنا في أقرب وقت ممكن",
    });
    setFormData({ name: "", phone: "", inquiryType: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const branches = [
    {
      city: "مكة المكرمة",
      address: "حي بطحاء قريش",
      phone: "+966 XX XXX XXXX",
    },
    {
      city: "الرس",
      address: "المنطقة الصناعية",
      phone: "+966 XX XXX XXXX",
    },
  ];

  const inquiryTypes = [
    "استشارة هندسية",
    "إشراف على مشروع",
    "تصميم معماري",
    "دراسة مرورية",
    "أنظمة السلامة",
    "أخرى",
  ];

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Contact Form */}
          <div>
            <span className="text-primary text-sm font-semibold tracking-wider mb-4 block">
              تواصل معنا
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              ابدأ مشروعك معنا
            </h2>
            <p className="text-muted-foreground mb-10">
              فريقنا من المهندسين والخبراء جاهز لتحويل رؤيتك إلى واقع ملموس
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    الاسم الكامل
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="أدخل اسمك"
                    required
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    رقم الهاتف
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="05XXXXXXXX"
                    required
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium mb-2">
                  نوع الاستفسار
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  required
                  className="w-full h-10 rounded-md bg-secondary border border-border px-3 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="">اختر نوع الاستفسار</option>
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  رسالتك (اختياري)
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="أخبرنا المزيد عن مشروعك..."
                  rows={4}
                  className="bg-secondary border-border focus:border-primary resize-none"
                />
              </div>

              <Button type="submit" variant="hero" size="xl" className="w-full">
                إرسال الطلب
              </Button>
            </form>
          </div>

          {/* Right: Branch Info */}
          <div className="lg:pr-8">
            <div className="bg-secondary/50 rounded-2xl p-8 border border-border h-full">
              <h3 className="text-2xl font-bold mb-8 text-gradient">فروعنا</h3>

              <div className="space-y-8">
                {branches.map((branch) => (
                  <div
                    key={branch.city}
                    className="flex gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{branch.city}</h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        {branch.address}
                      </p>
                      <a
                        href={`tel:${branch.phone.replace(/\s/g, "")}`}
                        className="text-primary hover:underline text-sm"
                        dir="ltr"
                      >
                        {branch.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative Element */}
              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-muted-foreground text-sm mb-4">
                  ساعات العمل
                </p>
                <p className="text-foreground">
                  الأحد - الخميس: 8:00 ص - 5:00 م
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
