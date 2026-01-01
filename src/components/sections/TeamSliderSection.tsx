import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronRight, Users, Award, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";

const slides = [
  {
    badge: "Our people",
    icon: Users,
    title: "The team behind the technology",
    description: "Behind every server, control panel, and line of code is a team of skilled engineers, product specialists, and customer success managers. We hire for expertise and invest in our people so they can deliver the best for you.",
    bgGradient: "bg-gradient-to-br from-primary/40 via-secondary/30 to-light-dark",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
  },
  {
    badge: "Our values",
    icon: Award,
    title: "Built on trust and reliability",
    description: "We believe hosting should be as reliable as the technology behind it. Our commitment to uptime, security, and performance drives every decision we make. Your success is our priority.",
    bgGradient: "bg-gradient-to-br from-secondary/40 via-light/20 to-primary/30",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
  },
  {
    badge: "Our mission",
    icon: HeartHandshake,
    title: "Supporting businesses worldwide",
    description: "From first-time site owners to global enterprises, we've got the tech and the team to support you. We combine decades of industry experience with a forward-thinking approach to create solutions that work.",
    bgGradient: "bg-gradient-to-br from-light-dark via-primary/30 to-secondary/40",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
  },
];

export function TeamSliderSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  return (
    <section className="relative py-20 md:py-28 bg-dark overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div className="max-w-2xl mb-8 lg:mb-0">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              Who's behind the brand
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground"
            >
              Hosting.com is built by people who believe hosting should be as reliable as the technology behind it. We combine decades of industry experience with a forward-thinking approach, creating solutions that work for businesses of every size. From first-time site owners to global enterprises, we've got the tech and the team to support you.
            </motion.p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center text-foreground hover:bg-secondary hover:border-secondary hover:text-dark transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center text-foreground hover:bg-secondary hover:border-secondary hover:text-dark transition-all"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {slides.map((slide, index) => (
              <motion.div
                key={slide.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-[0_0_100%] md:flex-[0_0_80%] lg:flex-[0_0_45%] min-w-0"
              >
                <div className="flex flex-col md:flex-row bg-light-dark border border-border/30 rounded-2xl overflow-hidden h-full">
                  {/* Image Area */}
                  <div className={`${slide.bgGradient} w-full md:w-1/2 min-h-[250px] md:min-h-[350px] relative overflow-hidden`}>
                    <img 
                      src={slide.image} 
                      alt={slide.title}
                      className="w-full h-full object-cover absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
                    {/* Icon badge */}
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <slide.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                    {/* Badge */}
                    <span className="inline-flex items-center self-start px-3 py-1 rounded-full border border-border/50 text-sm text-foreground mb-4">
                      {slide.badge}
                    </span>

                    {/* Description */}
                    <p className="text-foreground leading-relaxed mb-6">
                      {slide.description}
                    </p>

                    {/* Button */}
                    <Button variant="hero" className="self-start">
                      Read more
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}