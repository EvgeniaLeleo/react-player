import { FC } from 'react';

import style from './style.module.css';

type LogoMenuProps = {
  textColor: string;
};

export const LogoMenu: FC<LogoMenuProps> = ({ textColor }) => {
  return (
    <svg
      width="140"
      height="22"
      viewBox="0 0 140 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={style.Menu}
    >
      <path
        d="M3.87291 20.9307C1.61921 22.2325 0.000244141 21.1477 0.000244141 19.2181C0.000244141 17.164 0.000244141 11.0005 0.000244141 11.0005C0.000244141 11.0005 0.000244141 4.83711 0.000244141 2.78297C0.000244141 0.853385 1.61821 -0.231443 3.87291 1.07035C7.38302 3.09737 17.9123 9.18044 17.9123 9.18044C19.3124 9.98904 19.3124 12.011 17.9123 12.8196C17.9123 12.8206 7.38302 18.9037 3.87291 20.9307Z"
        fill="#00C1FF"
      />
      <path
        d="M15.462 20.9293C13.2083 22.2311 11.5894 21.1462 11.5894 19.2166C11.5894 17.1625 11.5894 10.9991 11.5894 10.9991C11.5894 10.9991 11.5894 4.83565 11.5894 2.78151C11.5894 0.85192 13.2073 -0.232908 15.462 1.06889C18.8948 3.05171 29.1931 9.00118 29.1931 9.00118C30.7308 9.88913 30.7308 12.109 29.1931 12.997C29.1921 12.997 18.8948 18.9464 15.462 20.9293Z"
        fill="#BCEC30"
      />
      <mask
        id="mask0_3302_9"
        maskUnits="userSpaceOnUse"
        x="11"
        y="0"
        width="20"
        height="22"
      >
        <path
          d="M15.462 20.9293C13.2083 22.2311 11.5894 21.1462 11.5894 19.2166C11.5894 17.1625 11.5894 10.9991 11.5894 10.9991C11.5894 10.9991 11.5894 4.83565 11.5894 2.78151C11.5894 0.85192 13.2073 -0.232908 15.462 1.06889C18.8948 3.05171 29.1931 9.00118 29.1931 9.00118C30.7308 9.88913 30.7308 12.109 29.1931 12.997C29.1921 12.997 18.8948 18.9464 15.462 20.9293Z"
          fill="#6FE4FF"
        />
      </mask>
      <g mask="url(#mask0_3302_9)">
        <g filter="url(#filter0_f_3302_9)">
          <path
            d="M3.87328 20.9307C1.61958 22.2325 0.000610352 21.1477 0.000610352 19.2181C0.000610352 17.164 0.000610352 11.0005 0.000610352 11.0005C0.000610352 11.0005 0.000610352 4.83711 0.000610352 2.78297C0.000610352 0.853385 1.61857 -0.231443 3.87328 1.07035C7.38339 3.09737 17.9127 9.18044 17.9127 9.18044C19.3127 9.98904 19.3127 12.011 17.9127 12.8196C17.9127 12.8206 7.38339 18.9037 3.87328 20.9307Z"
            fill="#99D100"
          />
        </g>
      </g>
      <path
        d="M37.6903 14.6675L38.0829 13.7735C38.3506 13.1656 38.8324 13.0047 39.4391 13.4517C40.5991 14.3099 42.5086 14.9357 45.0606 14.9357C47.2378 14.9357 48.1658 14.3814 48.1658 13.7199C48.1658 12.9689 47.3984 12.7722 46.1313 12.6113L43.2403 12.2358C39.7604 11.771 38.0115 10.5194 38.0115 8.33801C38.0115 5.99574 39.921 4.13623 44.3468 4.13623C46.8095 4.13623 48.3978 4.51171 49.4328 4.90507C50.5749 5.35206 50.7356 5.72754 50.7356 6.6573V7.87313C50.7356 8.62409 50.4679 8.87441 49.7362 8.87441H48.9153C48.1658 8.87441 47.9159 8.60621 47.9159 7.87313V7.47977C47.4341 7.31885 46.2384 7.08641 44.8464 7.08641C42.4016 7.08641 41.2237 7.53341 41.2237 8.28437C41.2237 8.83865 41.9376 9.16048 43.2403 9.33928L46.0778 9.71476C49.5042 10.1439 51.3245 11.1809 51.3245 13.6841C51.3245 16.223 48.9153 17.8501 44.6144 17.8501C41.4557 17.8501 38.9216 16.8488 37.9044 15.9191C37.5475 15.5615 37.494 15.1145 37.6903 14.6675Z"
        fill={textColor}
      />
      <path
        d="M69.0263 17.6352H67.5629C66.8491 17.6352 66.6171 17.5279 66.2602 16.9915L63.5119 12.9328C63.1193 12.3785 62.8159 12.2354 61.995 12.2354H59.2468V16.6339C59.2468 17.3849 58.9791 17.6352 58.2474 17.6352H57.1945C56.445 17.6352 56.1951 17.367 56.1951 16.6339V3.43854H55.2136C54.4641 3.43854 54.2142 3.17034 54.2142 2.43726V1.54327C54.2142 0.792311 54.4819 0.541992 55.2136 0.541992H58.2652C59.0148 0.541992 59.2646 0.810191 59.2646 1.54327V9.26738H61.7273C62.5482 9.26738 62.8338 9.14223 63.2442 8.57007L65.5463 5.01197C65.9211 4.45769 66.1531 4.35041 66.8669 4.35041H68.3303C69.1333 4.35041 69.2761 4.99409 68.83 5.65564L66.2602 9.55346C65.9925 9.92894 65.6713 10.3223 65.3679 10.6441C65.6891 10.9123 66.1352 11.3593 66.3137 11.6275L69.5259 16.3657C69.9721 16.9915 69.8115 17.6352 69.0263 17.6352Z"
        fill={textColor}
      />
      <path
        d="M74.248 20.0667V19.1906C74.248 18.4396 74.5157 18.1893 75.2474 18.1893H76.5144C77.2818 18.1893 77.6565 18.0284 77.9421 17.4205L78.1027 17.0808L72.0351 5.584C71.6603 4.88668 71.9637 4.36816 72.7489 4.36816H74.1231C74.8369 4.36816 75.1581 4.49332 75.4258 5.01184L77.9599 10.2328C78.5488 11.4307 79.2091 12.8075 79.7267 14.0054C80.262 12.8432 80.8688 11.5022 81.4399 10.3401L84.0275 5.01184C84.2595 4.5112 84.6164 4.36816 85.3302 4.36816H86.7044C87.5074 4.36816 87.793 4.90456 87.4182 5.584L80.5119 18.7257C79.7088 20.2455 78.7987 21.0859 76.7286 21.0859H75.2117C74.4978 21.0859 74.248 20.8177 74.248 20.0667Z"
        fill={textColor}
      />
      <path
        d="M106.08 11.0021C106.08 15.2218 102.957 17.8501 98.7456 17.8501C96.9253 17.8501 95.5333 17.4031 94.5518 16.8488V20.4606C94.5518 21.2115 94.2841 21.4619 93.5524 21.4619H92.4995C91.75 21.4619 91.5002 21.1937 91.5002 20.4606V7.26521H90.5187C89.7691 7.26521 89.5193 6.99701 89.5193 6.26394V5.36994C89.5193 4.61899 89.787 4.36867 90.5187 4.36867H93.0884C93.838 4.36867 94.0878 4.63687 94.0878 5.36994V5.44146C95.0872 4.77991 96.6041 4.13623 98.7456 4.13623C102.957 4.15411 106.08 6.78246 106.08 11.0021ZM102.904 11.0021C102.904 8.53469 100.923 7.15793 98.46 7.15793C96.6933 7.15793 95.2478 7.90889 94.5696 8.51681V13.5053C95.2656 14.1132 96.6933 14.8642 98.46 14.8642C100.923 14.8463 102.904 13.4695 102.904 11.0021Z"
        fill={textColor}
      />
      <path
        d="M122.705 9.96527C122.705 10.7162 122.438 10.9665 121.706 10.9665H120.653C119.904 10.9665 119.654 10.752 119.654 9.96527C119.654 7.99848 118.904 7.12236 117.12 7.12236C115.424 7.12236 114.015 8.17728 113.229 9.46463V16.6345C113.229 17.3854 112.962 17.6357 112.23 17.6357H111.177C110.428 17.6357 110.178 17.3675 110.178 16.6345V7.2654H109.196C108.447 7.2654 108.197 6.9972 108.197 6.26413V5.37013C108.197 4.61917 108.464 4.36886 109.196 4.36886H111.766C112.515 4.36886 112.765 4.63705 112.765 5.37013V6.22837C113.711 5.17345 115.157 4.1543 117.619 4.1543C121.224 4.1543 122.705 6.29989 122.705 9.96527Z"
        fill={textColor}
      />
      <path
        d="M124.6 11.0023C124.6 7.06872 127.919 4.1543 132.327 4.1543C136.699 4.1543 140.001 7.06872 140.001 11.0023C140.001 14.9538 136.681 17.8682 132.327 17.8682C127.919 17.8682 124.6 14.9538 124.6 11.0023ZM136.967 11.0023C136.967 8.71367 134.95 7.05084 132.327 7.05084C129.65 7.05084 127.634 8.73155 127.634 11.0023C127.634 13.3088 129.65 14.9895 132.327 14.9895C134.968 14.9895 136.967 13.3088 136.967 11.0023Z"
        fill={textColor}
      />
      <defs>
        <filter
          id="filter0_f_3302_9"
          x="-8.92884"
          y="-8.42799"
          width="36.8211"
          height="38.857"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="4.46473"
            result="effect1_foregroundBlur_3302_9"
          />
        </filter>
      </defs>
    </svg>
  );
};
