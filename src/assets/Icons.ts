import { FaMoon, FaSun, FaHome, FaUsers, FaUserTag } from "react-icons/fa";
import { IoIosNotifications, IoIosContacts } from "react-icons/io";
import { BsInfoCircleFill } from "react-icons/bs";
import { MdMiscellaneousServices } from "react-icons/md";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { FaUserCheck, FaUserMinus,  } from "react-icons/fa6";
import { AiOutlineLoading3Quarters, AiOutlineWarning } from "react-icons/ai";


const Icons = {
    lightMoodIcon: FaSun,
    darkModeIcon: FaMoon,
    notificationIcon: IoIosNotifications,
    homeIcons: FaHome,
    aboutIcons: BsInfoCircleFill,
    servicesIcons: MdMiscellaneousServices,
    contactIcons: IoIosContacts,
    leftIcons: SlArrowLeft,
    rightIcons: SlArrowRight,
    usersIcon: FaUsers,
    usersActiveIcon: FaUserCheck,
    usersInactiveIcon: FaUserMinus,
    usersPremiumIcon: FaUserTag,
    loadingIcon: AiOutlineLoading3Quarters,
    warningIcon: AiOutlineWarning,
}

export default Icons;
