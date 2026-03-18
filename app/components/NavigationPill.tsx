import React from "react";
import Image from "next/image";

interface NavigationPillProps {
  icon: string;
  label: string;
  onClick?: () => void;
}

export const NavigationPill: React.FC<NavigationPillProps> = ({
  icon,
  label,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      // Added 'group' for the arrow hover effect
      // Fluid padding replacing pl-[25px] pr-1.5 pt-1.5 pb-4
      className="bg-[#B1B2B0] shadow-md flex items-start 
                 pl-[6vw] md:pl-[1.5vw] 
                 pr-[1.5vw] md:pr-[0.4vw] 
                 pt-[1.5vw] md:pt-[0.4vw] 
                 pb-[4vw] md:pb-[1vw] 
                 rounded-full hover:bg-[#A7A8A6] transition-colors group"
    >
      {/* Icon & Label Container */}
      <div className="z-10 flex flex-col items-start pr-[1vw] md:pr-[0.5vw]">
        {/* Dynamic Icon */}
        <Image
          src={icon}
          alt={label}
          width={82}
          height={22} // Based on the aspect-[3.73] from original code
          className="object-contain w-[10vw] md:w-[2.5vw] h-auto mb-[0.5vh]"
        />

        {/* Fluid Text Label */}
        <div className="text-[4vw] md:text-[1vw] text-black font-medium tracking-[-0.04vw] leading-[1.4] whitespace-nowrap">
          {label}
        </div>
      </div>

      {/* Static Arrow Image */}
      {/* Arrow aligns top-right, animated slightly on hover */}
      <div className="shrink-0 mt-[0.5vw] md:mt-[0.2vw]">
        <Image
          src="https://api.builder.io/api/v1/image/assets/6a87a99b14594aa7ad16acbeeed4d4ac/cb9267e443009b566aee9249e5483f74427dd350?placeholderIfAbsent=true"
          alt="Arrow"
          width={28}
          height={24} // Based on aspect-[1.17] from original code
          className="object-contain w-[3.5vw] md:w-[0.9vw] h-auto 
                     transition-transform duration-300 ease-out 
                     group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
        />
      </div>
    </button>
  );
};
