import DashboardIcon from "@mui/icons-material/Dashboard";
import EmailIcon from "@mui/icons-material/Email";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import HourglassFullIcon from "@mui/icons-material/HourglassFull";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
const drawerItems = [
  {
    name: "",
    items: [
      {
        name: "Dashboard",
        Icon: DashboardIcon,
        link: "/client",
      },
    ],
  },
  {
    name: "Orders",
    items: [
      {
        name: "View Available Sessions",
        Icon: EmailIcon,
        link: "/",
      },
      {
        name: "Calendar",
        Icon: CalendarMonthIcon,
        link: "/",
      },
      {
        name: "Become a Therapist",
        Icon: PersonIcon,
        link: "/client/be-a-therapist",
      },
      {
        name: "Book a Private Session",
        Icon: BookOnlineIcon,
        link: "/",
      },
    ],
  },

  {
    name: "Account",
    items: [
      {
        name: "My Profile",
        Icon: HourglassFullIcon,
        link: "/client/profile",
      },
      {
        name: "Logout",
        Icon: PowerSettingsNewIcon,
        link: "/",
      },
    ],
  },
];
export { drawerItems };
