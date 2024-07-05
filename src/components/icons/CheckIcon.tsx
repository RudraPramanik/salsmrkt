import { SVGProps } from "react";

const CheckIcon = ({
  ...props
}: SVGProps<SVGSVGElement> & { stroke?: string }) => (
  <svg
    width="11"
    height="10"
    viewBox="0 0 11 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.49501 1.15837L3.52834 6.9167L1.94501 5.22504C1.65334 4.95004 1.19501 4.93337 0.861678 5.1667C0.536678 5.40837 0.445011 5.83337 0.645011 6.17504L2.52001 9.22504C2.70334 9.50837 3.02001 9.68337 3.37834 9.68337C3.72001 9.68337 4.04501 9.50837 4.22834 9.22504C4.52834 8.83337 10.2533 2.00837 10.2533 2.00837C11.0033 1.2417 10.095 0.566703 9.49501 1.15004V1.15837Z"
      fill="#164C96"
    />
  </svg>
);

export default CheckIcon;
