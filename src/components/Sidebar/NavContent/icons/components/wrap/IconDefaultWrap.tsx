import { WithThemeColor } from '../types';
import IconActiveWrapImage from 'src/components/Sidebar/NavContent/icons/images/wrap/active.png';

interface Props extends WithThemeColor {}
const IconDefaultWrap = ({ color }: Props) => {
  return (
    <img src={IconActiveWrapImage} />
    // <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    //   <path
    //     d="M16.5 15.3578C19.2046 12.6532 21.7829 8.8141 21.6014 7.36815C21.309 5.03847 16.4355 3 12.0006 3C7.56563 3 2.69209 5.03847 2.39967 7.36815C2.21818 8.8141 4.79648 12.6532 7.50112 15.3578"
    //     stroke={color}
    //     stroke-width="1.5"
    //     stroke-linecap="round"
    //   />
    //   <path
    //     d="M9.98319 3.12012C9.54665 3.71725 9.56684 7.10178 10.2651 11.2811M6.01166 4.71164C5.60381 6.08825 6.48152 10.8121 8.76208 14.6246"
    //     stroke={color}
    //     stroke-linecap="round"
    //     stroke-linejoin="round"
    //   />
    //   <path
    //     d="M14.0174 3.12012C14.4557 3.71976 14.4335 7.13027 13.7266 11.3338M17.9889 4.71164C18.3952 6.08291 17.5258 10.7755 15.2649 14.5802"
    //     stroke={color}
    //     stroke-linecap="round"
    //     stroke-linejoin="round"
    //   />
    //   <path
    //     d="M2.04004 16.5601C2.23344 17.5841 3.39383 19.6321 5.32781 19.6321C5.32781 19.6321 6.1014 20.5921 9.29247 20.5921C9.29247 20.5921 10.0661 21.3601 12 21.3601C13.934 21.3601 14.7076 20.5921 14.7076 20.5921C17.8987 20.5921 18.6723 19.6321 18.6723 19.6321C20.6063 19.6321 21.7666 17.5841 21.96 16.5601"
    //     stroke={color}
    //     stroke-width="1.5"
    //     stroke-linecap="round"
    //     stroke-linejoin="round"
    //   />
    //   <path
    //     d="M9 15.3008C4.96534 15.4695 2.04004 15.9694 2.04004 16.5598C2.04004 17.2889 6.49928 17.8798 12 17.8798C17.5008 17.8798 21.96 17.2889 21.96 16.5598C21.96 15.9694 19.0347 15.4695 15.0001 15.3008"
    //     stroke={color}
    //     stroke-width="1.5"
    //   />
    //   <ellipse cx="11.9998" cy="14.0998" rx="3.24" ry="3.3" stroke={color} stroke-width="1.5" />
    // </svg>
  );
};

export default IconDefaultWrap;
