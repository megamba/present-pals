import { SideNavItem } from "./types"
import { FaListUl, FaRegCheckCircle, FaRegCompass} from "react-icons/fa";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";




export const SIDENAV_ITEMS: SideNavItem[] = [
    {
      title: 'My Lists',
      path: '/',
      icon: <FaListUl size={15} />,
    },
    {
      title: 'Friends',
      path: '/friends',
      icon: <LiaUserFriendsSolid size={15} />,

    },
    {
      title: 'Claimed',
      path: '/claimed',
      icon: <FaRegCheckCircle size={15} />,
    },
    {
        title: 'Explore',
        path: '/explore',
        icon: <FaRegCompass size={15} />,
    },
    {
      title: 'Settings',
      path: '/settings',
      icon: <IoSettingsOutline size={15} />,
    },
  ];