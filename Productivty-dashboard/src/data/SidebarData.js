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
        label: "Assignment",
        icon: "ri-file-list-line",
        route: "/assignment",
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
      {
        label: "Notion",
        icon: "ri-notion-line",
        route: "/notion",
      },
      {
        label: "Google",
        icon: "ri-google-line",
        route: "/google",
      },
    ],
  },

  {
    title: "Theme",
    items: [
      {
        label: "Dark",
        icon: "ri-moon-line",
        theme: "dark",
      },
      {
        label: "Light",
        icon: "ri-sun-line",
        theme: "light",
      },
      {
        label: "Custom",
        icon: "ri-palette-line",
        theme: "custom",
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