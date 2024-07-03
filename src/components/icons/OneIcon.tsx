import * as React from "react";
import { SVGProps } from "react";

interface OneIconProps extends SVGProps<SVGSVGElement> {
    customStroke?: string; 
}

const OneIcon = ({ customStroke = "#E3E3E3", ...props }: OneIconProps) => (
    <svg
        className="absolute w-[23px] h-[19px] pointer-events-none hidden peer-checked:flex justify-center stroke-white ml-1 md:ml-2  xl:ml-4 mt-1 outline-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 19 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path
            d="M1 7.6L7.03451 12.9672C7.05497 12.9854 7.08626 12.9837 7.10470 12.9635L18 1"
            stroke={customStroke} 
            strokeLinecap="round"
        />
    </svg>
);

export default OneIcon;