import DashboardIcon from "@mui/icons-material/Dashboard";
import EmailIcon from "@mui/icons-material/Email";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import HourglassFullIcon from "@mui/icons-material/HourglassFull";
const clientItems = [
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
        link: "/view-sessions",
      },

      {
        name: "Become a Therapist",
        Icon: PersonIcon,
        link: "/client/be-a-therapist",
      },
      {
        name: "Book a Private Session",
        Icon: BookOnlineIcon,
        link: "/client/appointments",
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
    ],
  },
];

const counsellorItems = [
  {
    name: "",
    items: [
      {
        name: "Dashboard",
        Icon: DashboardIcon,
        link: "/counsellor",
      },
    ],
  },
  {
    name: "Sessions",
    items: [
      {
        name: "Available Sessions",
        Icon: EmailIcon,
        link: "/view-sessions",
      },
      {
        name: "Create A Session",
        Icon: EmailIcon,
        link: "/counsellor/create-session",
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
    ],
  },
];
const AdminItems = [
  {
    name: "",
    items: [
      {
        name: "Dashboard",
        Icon: DashboardIcon,
        link: "/admin",
      },
    ],
  },
  {
    name: "sessions",
    items: [
      {
        name: "Counsellors",
        Icon: EmailIcon,
        link: "/admin/be-counsellor",
      },

      {
        name: "All Sessions",
        Icon: BookOnlineIcon,
        link: "/view-sessions",
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
    ],
  },
];
export { clientItems, counsellorItems, AdminItems };
