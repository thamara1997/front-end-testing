"use-client";

import { useTaskContext } from "@/app/context/TaskContext";
import { Task } from "@/app/utils/tasks";
import { useState } from "react";

export default function Page({ selectedTask, setOpenEdit }: any) {
  const { updateTask } = useTaskContext();
  const [formData, setFormData] = useState<Task>({
    id: selectedTask.id,
    name: selectedTask.name,
    description: selectedTask.description,
    status: selectedTask.status,
    dueDate: selectedTask.dueDate,
    createdDate: new Date().toISOString().split("T")[0],
    assignTo: selectedTask.assignTo,
    important: selectedTask.important,
    userId: selectedTask.userId,
  });

  console.log(formData);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    updateTask(selectedTask.id, formData);
    setOpenEdit(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-2xl">
      <div className="h-auto rounded-lg border border-gray-700 p-10 shadow-lg w-[80%] ">
        <h2 className="text-2xl mb-4">UPDATE TASK</h2>
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
              defaultValue={formData.name}
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
              defaultValue={formData.description}
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
                <option defaultValue="completed">Completed</option>
                <option defaultValue="pending">Pending</option>
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
                defaultValue={formData.dueDate}
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
                <option defaultValue="true">Yes</option>
                <option defaultValue="false">No</option>
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
                className="h-[40px] p-2 rounded-lg border border-gray-300 bg-black"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => setOpenEdit(false)}
              className="p-2 rounded bg-gray-800 text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="p-2 rounded bg-cyan-500 text-black"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
