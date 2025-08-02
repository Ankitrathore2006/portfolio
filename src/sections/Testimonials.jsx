import GradientSpheres from "../components/GradientSpheres";
import TestimonialCard from "../components/TestimonialCard";
import TitleHeader from "../components/TitleHeader";
import { testimonials } from "../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Testimonials = () => {

      useGSAP(() => {
        gsap.from("#testimonial-card", {
          y: 50,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: "#testimonials",
            start: "top center",
            end: "bottom center",
            scrub: true,
            toggleActions: "play none none reverse",
          },
        });
      });

  return (
    <section id="testimonials" className="flex-center relative md:p-0 px-5">
      <GradientSpheres
        sphere1Class="testimonial-gradient-sphere testimonial-sphere-1"
        sphere2Class="testimonial-gradient-sphere testimonial-sphere-2"
      />

      <div className="w-full h-full container relative z-10 md:my-40 my-20">
        <TitleHeader
          title="TESTIMONIALS"
          number="03"
          text="Watch our clients are saying about us"
        />
        <div className="mt-20">
          <div className="grid md:grid-cols-2 gap-5">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard id="testimonial-card" key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
