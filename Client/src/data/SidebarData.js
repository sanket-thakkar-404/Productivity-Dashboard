export const SidebarSection = [
  {
    title: "Main",
    items: [
      {
        label: "Dashboard",
        icon: "ri-dashboard-line",
        route: "/dashboard",
      },
      {
        label: "Calendar",
        icon: "ri-calendar-line",
        route: "/calendar",
      },
      {
        label: "Timer",
        icon: "ri-timer-line",
        route: "/timer",
      },
      {
        label: "Tasks",
        icon: "ri-task-line",
        route: "/task",
      },
      {
        label: "Motivation",
        icon: "ri-fire-line",
        route: "/motivation",
      },
    ],
  },

  {
    title: "Integration",
    items: [
      {
        label: "Weather",
        icon: "ri-cloud-line",
        route: "/weather",
      },
      
    ],
  },

  {
    title: "Theme",
    items: [
      {
        label: "Change Theme",
        icon: "ri-moon-line",
        theme: "dark",
        route: "/Theme",
      },
      {
        label: "Custom",
        icon: "ri-tools-line",
        theme: "custom",
        route: "/custom",
      },
    ],
  },

  {
    title: "Settings",
    items: [
      {
        label: "Profile",
        icon: "ri-user-line",
        route: "/profile",
      },
      {
        label: "Logout",
        icon: "ri-logout-box-line",
        action: "logout",
        route: "/logout",
      },
    ],
  },
];