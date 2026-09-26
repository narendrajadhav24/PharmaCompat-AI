import type { ProjectStatus } from "../../data/projectData";

interface Props {
  status: ProjectStatus;
}

export default function ProjectStatusBadge({
  status,
}: Props) {
  const styles = {
    Draft: "bg-slate-100 text-slate-600",
    "In Progress": "bg-amber-50 text-amber-700",
    Completed: "bg-emerald-50 text-emerald-700",
  };

  return (
    <span
      className={`
        inline-flex items-center
        rounded-full
        px-2.5 py-1
        text-xs font-semibold
        ${styles[status]}
      `}
    >
      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}