import { CustomIconProps } from "../Icon";

const Close = ({ size, fill = "white" }: CustomIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.5 0C16.4455 0 12.482 1.2023 9.11082 3.45487C5.73961 5.70744 3.11207 8.9091 1.56048 12.655C0.00888233 16.4009 -0.397086 20.5227 0.393911 24.4993C1.18491 28.476 3.13734 32.1287 6.00432 34.9957C8.8713 37.8627 12.524 39.8151 16.5007 40.6061C20.4773 41.3971 24.5991 40.9911 28.345 39.4395C32.0909 37.8879 35.2926 35.2604 37.5451 31.8892C39.7977 28.518 41 24.5545 41 20.5C40.9896 15.0663 38.8264 9.85806 34.9842 6.01582C31.1419 2.17358 25.9337 0.0104195 20.5 0V0ZM27.9313 25.6841C28.2274 25.9831 28.3935 26.3869 28.3935 26.8077C28.3935 27.2285 28.2274 27.6323 27.9313 27.9312C27.6298 28.2227 27.227 28.3856 26.8077 28.3856C26.3884 28.3856 25.9856 28.2227 25.6841 27.9312L20.5 22.7274L15.3159 27.9312C15.0145 28.2227 14.6116 28.3856 14.1923 28.3856C13.773 28.3856 13.3702 28.2227 13.0688 27.9312C12.7726 27.6323 12.6065 27.2285 12.6065 26.8077C12.6065 26.3869 12.7726 25.9831 13.0688 25.6841L18.2726 20.5L13.0688 15.3159C12.8173 15.0095 12.6888 14.6205 12.7082 14.2246C12.7277 13.8287 12.8937 13.4542 13.174 13.1739C13.4542 12.8937 13.8287 12.7277 14.2246 12.7082C14.6205 12.6888 15.0095 12.8173 15.3159 13.0687L20.5 18.2726L25.6841 13.0687C25.9905 12.8173 26.3795 12.6888 26.7754 12.7082C27.1713 12.7277 27.5458 12.8937 27.8261 13.1739C28.1063 13.4542 28.2723 13.8287 28.2918 14.2246C28.3112 14.6205 28.1827 15.0095 27.9313 15.3159L22.7274 20.5L27.9313 25.6841Z"
        fill={fill}
      />
    </svg>
  );
};

export default Close;
