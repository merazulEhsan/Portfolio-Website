/* eslint-disable jsx-a11y/alt-text */
import Glide from "@glidejs/glide";
import { useEffect } from "react";
import data from "../../data.json";

export default function CarouselLogo() {
  useEffect(() => {
    const slider = new Glide(".glide-09", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 10000,
      animationTimingFunc: "linear",
      perView: 4,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
          gap: 36,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      {/*<!-- Component: Testimonial carousel --> */}
      <div className="glide-09 relative w-full">
        {/* <!-- Slides --> */}
        <div data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-4">
            {data.skills.map((skill, i) => (
              <li key={i} className="flex items-center gap-4 justify-center">
                <img
                  className="border border-slate-600 p-4 w-16 h-16 rounded-full bg-[#1d3347] mb-1"
                  src={skill.image}
                  alt={skill.name}
                />

                <span className="font-grotesk font-semibold text-base tracking-wider text-gray-300">
                  {skill.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/*<!-- End Testimonial carousel --> */}
    </>
  );
}
