import React from "react";

const VrSet = ({svgW,svgH}) => {
  return (
    <svg
      width={svgW}
      height={svgH}
      viewBox="0 0 66 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.5"
        d="M17.387 44.0001C16.711 44.0001 16.051 43.9771 15.427 43.9311C14.748 43.8811 14.095 43.8621 13.464 43.8431C11.7286 43.9116 9.99751 43.6247 8.37697 43.0001C6.53997 42.1741 4.87697 40.5731 3.13597 37.9621C1.75653 35.8156 0.831829 33.409 0.418967 30.8911C0.065412 28.8601 -0.0660284 26.7966 0.0269673 24.7371C0.322846 24.9266 0.6666 25.0279 1.01797 25.0291H1.04897C1.36089 25.0156 1.66546 24.9302 1.93887 24.7794C2.21227 24.6287 2.44709 24.4167 2.62497 24.1601C3.05337 23.567 3.27252 22.8483 3.24797 22.1171C3.22097 20.5551 2.20297 19.2841 0.979967 19.2841H0.912967C1.42685 18.4054 2.20474 17.7112 3.13597 17.3001C5.49997 16.2001 9.73597 16.0351 12.048 16.0351C12.748 16.0351 13.192 16.0511 13.196 16.0511H13.938C13.976 16.0511 17.827 16.1601 22.698 16.8171C27.188 17.4231 33.479 18.6341 37.951 20.9591C39.6876 21.8108 41.2641 22.9559 42.611 24.3441C43.4416 25.2103 44.0619 26.2559 44.424 27.4001C44.7503 28.3975 44.7433 29.474 44.404 30.4671C44.2999 31.7614 43.9135 33.0172 43.272 34.1461C42.6 35.3638 41.7134 36.4499 40.655 37.3521C39.1571 38.6071 37.4454 39.582 35.602 40.2301C27.133 43.3461 21.023 44.0001 17.387 44.0001ZM19.725 37.9271C19.3267 37.922 18.9371 38.0431 18.612 38.2731C18.4043 38.4275 18.2299 38.6222 18.0994 38.8456C17.9688 39.069 17.8846 39.3164 17.852 39.5731C17.7485 40.4071 17.9781 41.2483 18.491 41.9141C18.7615 42.3094 19.1193 42.6372 19.5366 42.8723C19.9539 43.1074 20.4197 43.2435 20.898 43.2701C21.2962 43.2753 21.6859 43.1542 22.011 42.9241C22.2185 42.7697 22.3927 42.5749 22.5231 42.3515C22.6535 42.1282 22.7375 41.8807 22.77 41.6241C22.8732 40.7901 22.6436 39.949 22.131 39.2831C21.8608 38.8879 21.5035 38.56 21.0865 38.3249C20.6694 38.0898 20.204 37.9537 19.726 37.9271H19.725ZM4.74497 37.4391C4.61068 37.4328 4.47873 37.4759 4.37397 37.5601C4.31789 37.6134 4.27313 37.6774 4.24237 37.7484C4.21162 37.8193 4.19549 37.8958 4.19497 37.9731C4.30767 38.9182 4.74112 39.796 5.42297 40.4601C6.00026 41.2488 6.84354 41.8019 7.79697 42.0171C7.93169 42.0232 8.06399 41.9798 8.16897 41.8951C8.22505 41.8418 8.2698 41.7778 8.30056 41.7068C8.33132 41.6359 8.34744 41.5594 8.34797 41.4821C8.23308 40.5383 7.79827 39.6623 7.11597 39.0001C6.54023 38.2104 5.69796 37.6558 4.74497 37.4391ZM25.524 19.2391C24.9253 19.2435 24.3412 19.425 23.8455 19.7607C23.3498 20.0965 22.9646 20.5716 22.7385 21.126C22.5124 21.6804 22.4555 22.2893 22.5749 22.876C22.6944 23.4627 22.9849 24.0009 23.4098 24.4227C23.8347 24.8445 24.375 25.1311 24.9625 25.2464C25.55 25.3616 26.1585 25.3003 26.7113 25.0701C27.264 24.84 27.7363 24.4514 28.0685 23.9533C28.4007 23.4552 28.578 22.8698 28.578 22.2711C28.5732 21.4643 28.2485 20.6923 27.6752 20.1246C27.1019 19.557 26.3268 19.2399 25.52 19.2431L25.524 19.2391ZM63.385 30.3861C63.3197 30.3854 63.2552 30.3721 63.195 30.3471C62.602 30.1111 62.714 28.8471 62.715 28.8371V26.5721C61.6296 24.9957 60.3626 23.5525 58.94 22.2721C55.4954 19.1038 51.4243 16.6936 46.99 15.1971C37.655 12.0321 23.967 11.7861 19.99 11.7861C19.433 11.7861 19.114 11.7911 19.111 11.7911C18.7748 11.8467 18.4347 11.8745 18.094 11.8741C17.033 11.8741 15.723 11.6021 15.505 10.3061C15.092 8.7301 17.939 5.3631 17.967 5.3291C19.6071 3.51314 21.5601 2.00655 23.733 0.881104C25.1699 0.284022 26.713 -0.015676 28.269 0.000103981C28.8042 -0.0044518 29.339 0.0309801 29.869 0.106104C32.2497 0.42422 34.6092 0.884374 36.935 1.4841C41.6621 2.60566 46.1862 4.45542 50.345 6.9671C54.1591 9.56256 57.494 12.8003 60.201 16.5361C61.5048 18.2687 62.6793 20.095 63.715 22.0001C63.7146 21.9978 63.7146 21.9954 63.715 21.9931C63.809 21.8131 64.307 20.9131 64.871 20.9131C64.9124 20.913 64.9536 20.9177 64.994 20.9271C65.667 21.0851 65.714 23.2511 65.715 23.2721C65.7711 24.3529 65.6765 25.4363 65.434 26.4911C65.1248 27.5884 64.6808 28.6431 64.112 29.6311C64.113 29.6391 63.855 30.3861 63.385 30.3861Z"
        fill="white"
      />
    </svg>
  );
};

export default VrSet;
