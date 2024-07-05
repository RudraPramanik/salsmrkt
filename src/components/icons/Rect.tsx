import { SVGProps } from "react";

interface RectProps extends SVGProps<SVGSVGElement> {
}

export const RectDown = ({  }: RectProps) => (
    <svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.34539 0.714286L2.6727 5L0 0.714286H5.34539Z" fill="#393939"/>
    </svg>
    
);

export const RectUp = ({  }: RectProps) => (
    <svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.34539 4.28571L2.6727 0L0 4.28571H5.34539Z" fill="#393939"/>
</svg>

    
);
