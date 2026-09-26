import {
  Plus,
  Search,
  SlidersHorizontal,
} from "lucide-react";

import { projects } from "../data/projectData";
import ProjectCard from "../components/projects/ProjectCard";

export default function Projects() {

  return (
    <div className="mx-auto max-w-7xl space-y-7">

      {/* Page Header */}
      <section>

        <div
          className="
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <div>

            <p
              className="
                text-sm
                font-semibold
                text-blue-600
              "
            >
              Workspace
            </p>

            <h1
              className="
                mt-1
                text-2xl
                font-bold
                text-slate-900
                sm:text-3xl
              "
            >
              Projects
            </h1>

            <p
              className="
                mt-2
                text-sm
                text-slate-500
              "
            >
              Manage your formulation and compatibility
              analysis projects.
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
              hover:bg-blue-700
            "
          >
            <Plus size={18} />
            New Project
          </button>

        </div>

      </section>


      {/* Search and Filter */}
      <section
        className="
          flex
          flex-col
          gap-3
          sm:flex-row
        "
      >

        <div
          className="
            relative
            flex-1
          "
        >

          <Search
            size={18}
            className="
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
          />

          <input
            type="text"
            placeholder="Search projects..."
            className="
              h-11
              w-full
              rounded-xl
              border
              border-slate-200
              bg-white
              pl-10
              pr-4
              text-sm
              outline-none
              transition
              placeholder:text-slate-400
              focus:border-blue-400
              focus:ring-2
              focus:ring-blue-100
            "
          />

        </div>

        <button
          className="
            flex
            h-11
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-slate-200
            bg-white
            px-4
            text-sm
            font-medium
            text-slate-600
            hover:bg-slate-50
          "
        >
          <SlidersHorizontal size={17} />
          Filter
        </button>

      </section>


      {/* Project Count */}
      <div className="flex items-center justify-between">

        <p className="text-sm text-slate-500">
          <span className="font-semibold text-slate-800">
            {projects.length}
          </span>{" "}
          projects
        </p>

        <select
          className="
            rounded-lg
            border
            border-slate-200
            bg-white
            px-3
            py-2
            text-xs
            text-slate-600
            outline-none
          "
        >
          <option>Recently updated</option>
          <option>Name</option>
          <option>Status</option>
        </select>

      </div>


      {/* Projects */}
      <section
        className="
          grid
          grid-cols-1
          gap-5
          md:grid-cols-2
          xl:grid-cols-3
        "
      >

        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}

      </section>

    </div>
  );
}