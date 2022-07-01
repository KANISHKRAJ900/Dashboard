import {
  AddBox,
  CalendarMonth,
  ContactPage,
  Facebook,
  Home,
  Mail,
  Settings,
  Twitter,
} from "@mui/icons-material";

export const mainHeader = [
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: <Home />,
  },
  {
    name: "Products",
    link: "/products",
    icon: <AddBox />,
  },
  {
    name: "Social",
    link: "/social",
    icon: <Mail />,
  },
  {
    name: "Campaigns",
    link: "/campaigns",
    icon: <AddBox />,
  },
  {
    name: "Calendar",
    link: "/calendar",
    icon: <CalendarMonth />,
  },
  {
    name: "Contacts",
    link: "/contacts",
    icon: <ContactPage />,
  },
  {
    name: "Settings",
    link: "/settings",
    icon: <Settings />,
  },
];
export const socialHeader = [
  {
    name: "Facebook",
    link: "/facebook",
    icon: <Facebook />,
  },
  {
    name: "Twitter",
    link: "/twitter",
    icon: <Twitter />,
  },
];
