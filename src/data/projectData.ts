export type ProjectStatus =
  | "Draft"
  | "In Progress"
  | "Completed";

export interface Project {
  id: string;
  name: string;
  drug: string;
  excipients: string[];
  dosageForm: string;
  status: ProjectStatus;
  updatedAt: string;
  progress: number;
}

export const projects: Project[] = [
  {
    id: "PRJ-001",
    name: "Ibuprofen Compatibility Study",
    drug: "Ibuprofen",
    excipients: ["Lactose", "Magnesium Stearate"],
    dosageForm: "Tablet",
    status: "In Progress",
    updatedAt: "2 hours ago",
    progress: 65,
  },
  {
    id: "PRJ-002",
    name: "Paracetamol Formulation",
    drug: "Paracetamol",
    excipients: ["MCC", "Crospovidone"],
    dosageForm: "Tablet",
    status: "Completed",
    updatedAt: "Yesterday",
    progress: 100,
  },
  {
    id: "PRJ-003",
    name: "Simvastatin Nanoparticle",
    drug: "Simvastatin",
    excipients: ["PEG 400"],
    dosageForm: "Nanoparticle",
    status: "Draft",
    updatedAt: "3 days ago",
    progress: 20,
  },
];