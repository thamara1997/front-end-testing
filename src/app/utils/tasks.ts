export interface Task {
  id: number | null | undefined;
  name: string;
  description: string;
  status: "pending" | "completed";
  dueDate?: string;
  createdDate?: string;
  assignTo?: string;
  important?: boolean;
  userId?: number;
}

export const sampleTasks: Task[] = [
  {
    id: 1,
    name: "Buy groceries",
    description: "Purchase milk, bread, and eggs from the store.",
    status: "pending",
    dueDate: "2024-06-21",
    createdDate: "2023-05-31",
    assignTo: "John Doe",
    important: true,
    userId: 1,
  },
  {
    id: 2,
    name: "Finish homework",
    description: "Complete the math and science assignments.",
    status: "completed",
    dueDate: "2024-05-22",
    createdDate: "2023-05-31",
    assignTo: "John Doe",
    important: true,
    userId: 1,
  },
  {
    id: 3,
    name: "Clean the house",
    description: "Vacuum the floors, dust the shelves, and mop the kitchen.",
    status: "completed",
    dueDate: "2024-05-31",
    createdDate: "2023-05-31",
    assignTo: "John Doe",
    important: true,
    userId: 1,
  },
];
