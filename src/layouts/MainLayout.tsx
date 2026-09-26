import { Outlet } from "react-router-dom";
import {
  Home,
  FolderKanban,
  Database,
  FlaskConical,
  FileText,
  Settings,
  Menu,
  User
} from "lucide-react";

const navigation = [
  {
    name: "Dashboard",
    icon: Home,
    path: "/",
  },
  {
    name: "Projects",
    icon: FolderKanban,
    path: "/projects",
  },
  {
    name: "Database",
    icon: Database,
    path: "/database",
  },
  {
    name: "Analysis",
    icon: FlaskConical,
    path: "/analysis",
  },
  {
    name: "Reports",
    icon: FileText,
    path: "/reports",
  },
];

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Desktop Sidebar */}
      <aside
        className="
          fixed left-0 top-0 z-40
          hidden h-screen w-64
          border-r border-slate-200
          bg-white
          lg:block
        "
      >

        {/* Logo */}
        <div
          className="
            flex h-20 items-center
            border-b border-slate-100
            px-6
          "
        >

          <div className="flex items-center gap-3">

            <div
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-xl
                bg-blue-600
                text-white
              "
            >
              <FlaskConical size={21} />
            </div>

            <div>
              <h1
                className="
                  text-sm font-bold
                  text-slate-900
                "
              >
                PharmaCompat
              </h1>

              <p
                className="
                  text-xs
                  font-medium
                  text-blue-600
                "
              >
                AI Platform
              </p>
            </div>

          </div>

        </div>

        {/* Navigation */}
        <nav className="space-y-1 px-3 py-5">

          <p
            className="
              mb-3 px-3
              text-[11px]
              font-semibold
              uppercase
              tracking-wider
              text-slate-400
            "
          >
            Workspace
          </p>

          {navigation.map((item) => {

            const Icon = item.icon;

            return (
              <a
                key={item.name}
                href={item.path}
                className="
                  flex items-center
                  gap-3
                  rounded-xl
                  px-3 py-3
                  text-sm
                  font-medium
                  text-slate-600
                  transition
                  hover:bg-blue-50
                  hover:text-blue-700
                "
              >

                <Icon size={19} />

                {item.name}

              </a>
            );
          })}

        </nav>

        {/* Bottom Settings */}
        <div
          className="
            absolute
            bottom-4
            left-0
            w-full
            px-3
          "
        >

          <button
            className="
              flex w-full
              items-center
              gap-3
              rounded-xl
              px-3 py-3
              text-sm
              font-medium
              text-slate-600
              hover:bg-slate-100
            "
          >
            <Settings size={19} />
            Settings
          </button>

        </div>

      </aside>


      {/* Main Area */}
      <div className="lg:ml-64">

        {/* Header */}
        <header
          className="
            sticky top-0 z-30
            flex h-16
            items-center
            justify-between
            border-b
            border-slate-200
            bg-white/90
            px-4
            backdrop-blur
            sm:px-6
          "
        >

          {/* Mobile Menu */}
          <button
            className="
              rounded-lg
              p-2
              text-slate-600
              hover:bg-slate-100
              lg:hidden
            "
          >
            <Menu size={22} />
          </button>

          {/* Header Text */}
          <div className="hidden sm:block">

            <p
              className="
                text-sm
                font-medium
                text-slate-800
              "
            >
              Pharmaceutical Intelligence Platform
            </p>

          </div>

          {/* Profile */}
          <button
            className="
              flex h-9 w-9
              items-center
              justify-center
              rounded-full
              bg-blue-50
              text-blue-700
            "
          >
            <User size={19} />
          </button>

        </header>


        {/* Page Content */}
        <main
          className="
            min-h-[calc(100vh-4rem)]
            p-4
            pb-24
            sm:p-6
            sm:pb-24
            lg:p-8
            lg:pb-8
          "
        >
          <Outlet />
        </main>

      </div>


      {/* Mobile Bottom Navigation */}
      <nav
        className="
          fixed bottom-0
          left-0 right-0
          z-50
          border-t
          border-slate-200
          bg-white
          lg:hidden
        "
      >

        <div className="grid grid-cols-5">

          {navigation.map((item) => {

            const Icon = item.icon;

            return (
              <a
                key={item.name}
                href={item.path}
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-1
                  py-2
                  text-[10px]
                  font-medium
                  text-slate-500
                "
              >

                <Icon size={19} />

                {item.name}

              </a>
            );

          })}

        </div>

      </nav>

    </div>
  );
}