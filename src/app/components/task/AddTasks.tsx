"use-client";

import { useTaskContext } from "@/app/context/TaskContext";
import { Task } from "@/app/utils/tasks";
import { useState } from "react";

export default function Page({ setSelectedTask, setOpenEdit }: any) {
  const { addNewTask } = useTaskContext();
  const [formData, setFormData] = useState<Task>({
    id: Date.now(),
    name: "",
    description: "",
    status: "pending",
    dueDate: "",
    createdDate: new Date().toISOString().split("T")[0],
    assignTo: "",
    important: false,
    userId: 1,
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addNewTask(formData);
  };

  return (
    <div className="flex items-center justify-center p-5 ">
      <div className=" p-8 rounded-lg shadow-lg w-[100%] bg-slate-900/50">
        <h2 className="text-2xl mb-4">Add New TASK</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              className="h-[40px] p-2 rounded-lg border border-gray-300 bg-black"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="description" className="mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              onChange={handleChange}
              value={formData.description}
              className="h-[100px] p-2 rounded-lg border border-gray-300 bg-black"
            />
          </div>
          <div className="flex  mb-4 w-[100%] justify-between gap-10">
            <div className="flex flex-col w-[50%]">
              <label htmlFor="description" className="mb-2">
                Status
              </label>
              <select
                id="status"
                name="status"
                onChange={handleChange}
                className="h-[40px] p-2 rounded-lg border border-gray-300 bg-black"
              >
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
              </select>
            </div>

            <div className="flex flex-col w-[50%]">
              <label htmlFor="dueDate" className="mb-2">
                Due Date
              </label>
              <input
                type="date"
                id="dueDate"
                name="dueDate"
                onChange={handleChange}
                value={formData.dueDate}
                className="h-[40px] p-2 rounded-lg border border-gray-300 bg-black"
              />
            </div>
            <div className="flex flex-col w-[50%]">
              <label htmlFor="description" className="mb-2">
                Important
              </label>
              <select
                id="important"
                name="important"
                onChange={handleChange}
                className="h-[40px] p-2 rounded-lg border border-gray-300 bg-black"
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
            <div className="flex flex-col w-[50%]">
              <label htmlFor="description" className="mb-2">
                Assign
              </label>
              <input
                id="assignTo"
                name="assignTo"
                onChange={handleChange}
                value={formData.assignTo}
                className="h-[40px] p-2 rounded-lg border border-gray-300 bg-black"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="p-2 rounded bg-cyan-500 text-white"
            >
              ADD TASK
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
