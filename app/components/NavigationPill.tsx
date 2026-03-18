import React from 'react';

interface NavigationPillProps {
  icon: string;
  label: string;
  onClick?: () => void;
}

export const NavigationPill: React.FC<NavigationPillProps> = ({ icon, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[rgba(177,178,176,1)] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex items-start pl-[25px] pr-1.5 pt-1.5 pb-4 rounded-[48px] hover:bg-[rgba(167,168,166,1)] max-md:pl-5"
    >
      <div className="z-10 flex flex-col max-md:-mr-0.5">
        <img
          src={icon}
          alt={label}
          className="aspect-[3.73] object-contain w-[41px]"
        />
        <div className="text-base text-black font-medium tracking-[-0.64px] leading-[1.4]">
          {label}
        </div>
      </div>
      <img
        src="https://api.builder.io/api/v1/image/assets/6a87a99b14594aa7ad16acbeeed4d4ac/cb9267e443009b566aee9249e5483f74427dd350?placeholderIfAbsent=true"
        alt="Arrow"
        className="aspect-[1.17] object-contain w-3.5 shrink-0 mt-1.5"
      />
    </button>
  );
};
