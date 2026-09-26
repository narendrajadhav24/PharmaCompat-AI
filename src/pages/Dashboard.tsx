import {
  FolderKanban,
  FlaskConical,
  FileText,
  Plus,
  ArrowUpRight,
  Activity
} from "lucide-react";

const stats = [
  {
    title: "Projects",
    value: "24",
    icon: FolderKanban,
  },
  {
    title: "Analyses",
    value: "87",
    icon: FlaskConical,
  },
  {
    title: "Reports",
    value: "32",
    icon: FileText,
  },
];

export default function Dashboard() {

  return (
    <div className="mx-auto max-w-7xl space-y-8">

      {/* Welcome */}
      <section>

        <p
          className="
            text-sm
            font-semibold
            text-blue-600
          "
        >
          Pharmaceutical Intelligence
        </p>

        <div
          className="
            mt-1
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >

          <div>

            <h1
              className="
                text-2xl
                font-bold
                tracking-tight
                text-slate-900
                sm:text-3xl
              "
            >
              Welcome to PharmaCompat AI
            </h1>

            <p
              className="
                mt-2
                max-w-2xl
                text-sm
                leading-6
                text-slate-500
              "
            >
              Analyze drug–excipient compatibility,
              formulation properties and analytical
              predictions from one platform.
            </p>

          </div>

          <button
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-blue-600
              px-4
              py-2.5
              text-sm
              font-semibold
              text-white
              shadow-sm
              transition
              hover:bg-blue-700
            "
          >
            <Plus size={18} />
            New Project
          </button>

        </div>

      </section>


      {/* Statistics */}
      <section
        className="
          grid
          grid-cols-1
          gap-4
          sm:grid-cols-3
        "
      >

        {stats.map((stat) => {

          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-sm
              "
            >

              <div
                className="
                  flex
                  items-start
                  justify-between
                "
              >

                <div>

                  <p
                    className="
                      text-sm
                      font-medium
                      text-slate-500
                    "
                  >
                    {stat.title}
                  </p>

                  <p
                    className="
                      mt-2
                      text-3xl
                      font-bold
                      text-slate-900
                    "
                  >
                    {stat.value}
                  </p>

                </div>

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-50
                    text-blue-600
                  "
                >
                  <Icon size={21} />
                </div>

              </div>

            </div>
          );

        })}

      </section>


      {/* Quick Actions */}
      <section>

        <div
          className="
            flex
            items-center
            justify-between
          "
        >

          <div>

            <h2
              className="
                text-lg
                font-bold
                text-slate-900
              "
            >
              Quick Analysis
            </h2>

            <p
              className="
                mt-1
                text-sm
                text-slate-500
              "
            >
              Start a pharmaceutical analysis.
            </p>

          </div>

        </div>


        <div
          className="
            mt-4
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >

          <QuickCard
            title="Compatibility"
            description="Analyze API and excipient compatibility."
            icon={<Activity size={20} />}
          />

          <QuickCard
            title="Solubility"
            description="Compare solvents and predicted solubility."
            icon={<FlaskConical size={20} />}
          />

          <QuickCard
            title="UV Prediction"
            description="Generate a predicted UV spectrum."
            icon={<Activity size={20} />}
          />

          <QuickCard
            title="FTIR Prediction"
            description="Generate a predicted FTIR spectrum."
            icon={<Activity size={20} />}
          />

        </div>

      </section>


      {/* Recent Projects */}
      <section>

        <div
          className="
            flex
            items-center
            justify-between
          "
        >

          <div>

            <h2
              className="
                text-lg
                font-bold
                text-slate-900
              "
            >
              Recent Projects
            </h2>

            <p
              className="
                mt-1
                text-sm
                text-slate-500
              "
            >
              Continue your recent analyses.
            </p>

          </div>

          <button
            className="
              text-sm
              font-semibold
              text-blue-600
              hover:text-blue-700
            "
          >
            View All
          </button>

        </div>


        <div
          className="
            mt-4
            overflow-hidden
            rounded-2xl
            border
            border-slate-200
            bg-white
            shadow-sm
          "
        >

          <div
            className="
              flex
              flex-col
              gap-4
              p-5
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >

            <div>

              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-50
                    text-blue-600
                  "
                >
                  <FlaskConical size={19} />
                </div>

                <div>

                  <h3
                    className="
                      font-semibold
                      text-slate-900
                    "
                  >
                    Ibuprofen + Lactose
                  </h3>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-slate-500
                    "
                  >
                    Compatibility Analysis
                  </p>

                </div>

              </div>

            </div>

            <button
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-lg
                border
                border-slate-200
                px-4
                py-2
                text-sm
                font-semibold
                text-slate-700
                hover:bg-slate-50
              "
            >
              Open
              <ArrowUpRight size={16} />
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}


function QuickCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {

  return (
    <button
      className="
        group
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-5
        text-left
        shadow-sm
        transition
        hover:-translate-y-0.5
        hover:border-blue-300
        hover:shadow-md
      "
    >

      <div
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          bg-blue-50
          text-blue-600
        "
      >
        {icon}
      </div>

      <h3
        className="
          mt-4
          font-semibold
          text-slate-900
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-1
          text-sm
          leading-5
          text-slate-500
        "
      >
        {description}
      </p>

    </button>
  );
}