"use client";

import React, { createContext, useContext, useState } from "react";
import { sampleTasks } from "../utils/tasks";
import { Task } from "../utils/tasks";

interface TaskContextType {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  addNewTask: (newTask: Task) => void;
  removeTask: (id: number) => void;
  updateTask: (id: number, updatedFields: Partial<Task>) => void;
}

const TasksContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(sampleTasks); // Initialize with sampleTodo

  const addNewTask = (newTask: Task) => {
    setTasks((prev) => [...prev, newTask]); // Add new todo to the existing list
  };

  const removeTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id)); // Remove todo by id
  };

  const updateTask = (id: number, updatedFields: Partial<Task>) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, ...updatedFields } : task
      )
    );
  };

  return (
    <TasksContext.Provider
      value={{ tasks, setTasks, addNewTask, removeTask, updateTask }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return context;
};
