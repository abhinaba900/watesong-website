import React from "react";

export const Footer: React.FC = () => {
  return (
    // Replaced rigid padding with fluid vw/vh padding
    <footer className="relative bg-transparent w-full overflow-hidden px-[5vw] lg:px-[8vw] pb-[5vh] lg:pb-[8vh] pt-[2vh]">
      <div className="flex flex-col relative w-full items-center">
        {/* Decorative line: Removed max-w, made it 100% width */}
        <img
          src="https://api.builder.io/api/v1/image/assets/6a87a99b14594aa7ad16acbeeed4d4ac/dbf218515fabad1de180a08aa3399065125cfbbf?placeholderIfAbsent=true"
          alt="Decorative line"
          className="w-full object-contain opacity-70"
        />

        {/* Footer Links & Copyright */}
        {/* Converted flex layout to stack on mobile, spread out on md/lg */}
        <div
          className="relative flex flex-col md:flex-row w-full justify-between items-center 
                        gap-[3vh] md:gap-[2vw] 
                        mt-[3vh] lg:mt-[4vh] 
                        text-white font-normal text-center 
                        text-[3.5vw] md:text-[1.8vw] lg:text-[1.2vw] leading-[1.4] tracking-[-0.02vw]"
        >
          {/* Copyright Section */}
          <div>© 2025 All Right Reserved by PRIVAE</div>

          {/* Links Section */}
          <div className="flex items-center gap-[2vw] md:gap-[1vw]">
            <a href="#terms" className="hover:text-blue-300 transition-colors">
              Terms and Conditions
            </a>
            <span className="text-white/50">|</span>
            <a
              href="#privacy"
              className="hover:text-blue-300 transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
