import { SVGProps } from "react";

const BookmarkIcon = ({
  stroke = "#D75951",
  ...props
}: SVGProps<SVGSVGElement> & { stroke?: string }) => (
  <svg
    width="14"
    height="18"
    viewBox="0 0 14 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.6608 1.76838C12.5775 1.87505 13.25 2.66588 13.25 3.58922V16.5L7 13.375L0.75 16.5V3.58922C0.75 2.66588 1.42167 1.87505 2.33917 1.76838C5.43599 1.40891 8.56401 1.40891 11.6608 1.76838Z"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default BookmarkIcon;