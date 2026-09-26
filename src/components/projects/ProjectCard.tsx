import {
  FlaskConical,
  MoreHorizontal,
  ArrowUpRight,
} from "lucide-react";

import type { Project } from "../../data/projectData";
import ProjectStatusBadge from "./ProjectStatusBadge";

interface Props {
  project: Project;
}

export default function ProjectCard({
  project,
}: Props) {
  return (
    <div
      className="
        group
        rounded-2xl
        border border-slate-200
        bg-white
        p-5
        shadow-sm
        transition
        hover:-translate-y-0.5
        hover:border-blue-200
        hover:shadow-md
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between">

        <div className="flex items-center gap-3">

          <div
            className="
              flex h-11 w-11
              items-center justify-center
              rounded-xl
              bg-blue-50
              text-blue-600
            "
          >
            <FlaskConical size={20} />
          </div>

          <div>
            <p className="text-xs text-slate-400">
              {project.id}
            </p>

            <h3
              className="
                mt-0.5
                font-semibold
                text-slate-900
              "
            >
              {project.name}
            </h3>
          </div>

        </div>

        <button
          className="
            rounded-lg
            p-1.5
            text-slate-400
            hover:bg-slate-100
            hover:text-slate-700
          "
        >
          <MoreHorizontal size={19} />
        </button>

      </div>

      {/* Status */}
      <div className="mt-5">
        <ProjectStatusBadge
          status={project.status}
        />
      </div>

      {/* Information */}
      <div
        className="
          mt-5
          grid grid-cols-2
          gap-4
        "
      >

        <div>
          <p className="text-xs text-slate-400">
            API / Drug
          </p>

          <p
            className="
              mt-1
              text-sm
              font-medium
              text-slate-700
            "
          >
            {project.drug}
          </p>
        </div>

        <div>
          <p className="text-xs text-slate-400">
            Dosage Form
          </p>

          <p
            className="
              mt-1
              text-sm
              font-medium
              text-slate-700
            "
          >
            {project.dosageForm}
          </p>
        </div>

      </div>

      {/* Excipients */}
      <div className="mt-4">

        <p className="text-xs text-slate-400">
          Excipients
        </p>

        <div className="mt-2 flex flex-wrap gap-1.5">

          {project.excipients.map((excipient) => (
            <span
              key={excipient}
              className="
                rounded-md
                bg-slate-100
                px-2
                py-1
                text-xs
                text-slate-600
              "
            >
              {excipient}
            </span>
          ))}

        </div>

      </div>

      {/* Progress */}
      <div className="mt-5">

        <div
          className="
            mb-2
            flex
            items-center
            justify-between
          "
        >
          <span className="text-xs text-slate-400">
            Analysis progress
          </span>

          <span
            className="
              text-xs
              font-semibold
              text-slate-600
            "
          >
            {project.progress}%
          </span>
        </div>

        <div
          className="
            h-1.5
            overflow-hidden
            rounded-full
            bg-slate-100
          "
        >
          <div
            className="
              h-full
              rounded-full
              bg-blue-600
            "
            style={{
              width: `${project.progress}%`,
            }}
          />
        </div>

      </div>

      {/* Footer */}
      <div
        className="
          mt-5
          flex
          items-center
          justify-between
          border-t
          border-slate-100
          pt-4
        "
      >

        <span className="text-xs text-slate-400">
          Updated {project.updatedAt}
        </span>

        <button
          className="
            flex
            items-center
            gap-1
            text-xs
            font-semibold
            text-blue-600
            hover:text-blue-700
          "
        >
          Open
          <ArrowUpRight size={14} />
        </button>

      </div>

    </div>
  );
}