import { WithThemeColor } from '../types';
import IconDefaultImage from 'src/components/Sidebar/NavContent/icons/images/NFT/active.png';

interface Props extends WithThemeColor {}
const IconDefaultNFT = ({ color }: Props) => {
  return (
    <img src={IconDefaultImage} />
    // <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    //   <path
    //     d="M10.2524 9.45271C10.3088 9.139 10.4688 8.85325 10.7067 8.64115C10.9447 8.42905 11.2468 8.30285 11.5649 8.28271C11.8817 8.30446 12.1822 8.43139 12.4186 8.64336C12.655 8.85532 12.8139 9.14018 12.8699 9.45271C12.8699 9.88021 11.8874 10.2477 11.5649 10.2477C11.2424 10.2477 10.2524 9.88021 10.2524 9.45271Z"
    //     fill={color}
    //     stroke={color}
    //   />
    //   <path
    //     d="M14.0774 12.3398C13.7943 12.4141 13.4984 12.4256 13.2103 12.3737C12.9223 12.3217 12.6491 12.2074 12.4098 12.0388C12.1705 11.8702 11.9709 11.6514 11.825 11.3977C11.6791 11.144 11.5903 10.8614 11.5649 10.5698"
    //     stroke={color}
    //     stroke-linecap="round"
    //     stroke-linejoin="round"
    //   />
    //   <path
    //     d="M9.05225 12.3398C9.33537 12.4141 9.6313 12.4256 9.91935 12.3737C10.2074 12.3217 10.4806 12.2074 10.7199 12.0388C10.9592 11.8702 11.1588 11.6514 11.3047 11.3977C11.4506 11.144 11.5394 10.8614 11.5647 10.5698"
    //     stroke={color}
    //     stroke-linecap="round"
    //     stroke-linejoin="round"
    //   />
    //   <path
    //     d="M21.5025 8.23014C21.6937 8.08334 21.8532 7.89933 21.9714 7.68922C22.0895 7.4791 22.1639 7.24722 22.19 7.00758C22.2161 6.76793 22.1934 6.52548 22.1233 6.29485C22.0531 6.06422 21.937 5.85019 21.7818 5.66567C21.6267 5.48115 21.4358 5.32996 21.2207 5.22122C21.0055 5.11248 20.7706 5.04844 20.53 5.03298C20.2895 5.01751 20.0483 5.05093 19.821 5.13122C19.5937 5.21151 19.385 5.33701 19.2075 5.50014"
    //     stroke={color}
    //     stroke-width="1.5"
    //     stroke-linecap="round"
    //   />
    //   <path
    //     d="M2.54994 8.23026C2.37069 8.07907 2.22297 7.89406 2.11521 7.68579C2.00746 7.47751 1.94178 7.25006 1.92194 7.0164C1.90209 6.78274 1.92845 6.54747 1.99953 6.324C2.07061 6.10054 2.18501 5.89326 2.33619 5.71401C2.48738 5.53475 2.67239 5.38703 2.88066 5.27928C3.08894 5.17152 3.31639 5.10585 3.55005 5.086C3.7837 5.06615 4.01898 5.09252 4.24245 5.1636C4.46591 5.23467 4.67319 5.34907 4.85244 5.50026"
    //     stroke={color}
    //     stroke-width="1.5"
    //     stroke-linecap="round"
    //   />
    //   <path
    //     d="M21.4723 8.26025C23.1148 12.0478 20.9248 15.7603 20.9248 15.7603C21.3621 17.9073 21.7469 19.9956 21.9589 22.0002"
    //     stroke={color}
    //     stroke-width="1.5"
    //     stroke-linecap="round"
    //     stroke-linejoin="round"
    //   />
    //   <path
    //     d="M2.52752 8.26025C0.892524 12.0478 3.07502 15.7603 3.07502 15.7603C2.64058 17.9073 2.25641 19.9956 2.04427 22.0002"
    //     stroke={color}
    //     stroke-width="1.5"
    //     stroke-linecap="round"
    //     stroke-linejoin="round"
    //   />
    //   <path
    //     d="M19.2075 5.50006C17.895 4.24006 15.66 2.93506 12.0375 2.93506C8.41496 2.93506 6.37496 4.13506 4.89746 5.50006"
    //     stroke={color}
    //     stroke-width="1.5"
    //     stroke-linecap="round"
    //     stroke-linejoin="round"
    //   />
    //   <path
    //     d="M15.8776 8.82986C16.0889 8.82986 16.2601 8.58474 16.2601 8.28236C16.2601 7.97999 16.0889 7.73486 15.8776 7.73486C15.6664 7.73486 15.4951 7.97999 15.4951 8.28236C15.4951 8.58474 15.6664 8.82986 15.8776 8.82986Z"
    //     stroke={color}
    //     stroke-linecap="round"
    //     stroke-linejoin="round"
    //   />
    //   <path
    //     d="M7.25262 8.82986C7.46387 8.82986 7.63512 8.58474 7.63512 8.28236C7.63512 7.97999 7.46387 7.73486 7.25262 7.73486C7.04137 7.73486 6.87012 7.97999 6.87012 8.28236C6.87012 8.58474 7.04137 8.82986 7.25262 8.82986Z"
    //     stroke={color}
    //     stroke-linecap="round"
    //     stroke-linejoin="round"
    //   />
    //   <path d="M18.8848 9.45996C19.3516 9.55817 19.798 9.73575 20.2048 9.98496" stroke={color} stroke-linecap="round" />
    //   <path
    //     d="M4.89738 9.30273C4.44243 9.44341 4.01407 9.65886 3.62988 9.94024"
    //     stroke={color}
    //     stroke-linecap="round"
    //   />
    //   <path d="M19 11C19.4475 11.1384 19.8758 11.3325 20.275 11.5775" stroke={color} stroke-linecap="round" />
    //   <path d="M5.2 11C4.77715 11.1664 4.37457 11.3802 4 11.6375" stroke={color} stroke-linecap="round" />
    // </svg>
  );
};

export default IconDefaultNFT;
