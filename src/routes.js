
import DashboardContainer from "containers/DashboardContainer";
import IconsContainer from "containers/IconsContainer";
import NotificationContainer from "containers/NotifationContainer";
import TableListContainer from "containers/TableListContainer";
import UserProfileContainer from "containers/UserProfileContainer";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: DashboardContainer,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfileContainer,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Table List",
    icon: "pe-7s-note2",
    component: TableListContainer,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "pe-7s-news-paper",
    component: TableListContainer,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "pe-7s-science",
    component: IconsContainer,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: NotificationContainer,
    layout: "/admin"
  },
];

export default dashboardRoutes;
