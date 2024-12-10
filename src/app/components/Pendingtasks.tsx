"use client";

import { useEffect, useState } from "react";
import { useTaskContext } from "../context/TaskContext";
import Singletask from "./task/Singletask";
import { Task } from "../utils/tasks";

export default function Page({
  removeTask,
  setSelectedTask,
  setOpenEdit,
}: any) {
  const { tasks, setTasks } = useTaskContext();
  const [sortedTasks, setSortedTasks] = useState<Task[]>([]);

  //filter task by status
  useEffect(() => {
    if (tasks) {
      setSortedTasks(
        tasks
          .filter((task: Task) => task.status === "pending")
          .sort((a: any, b: any) => b.dueDate - a.dueDate)
      );
    }
  }, [tasks]);

  console.log(sortedTasks);
  return (
    <div>
      {sortedTasks.map((task: any, key: any) => (
        <Singletask
          task={task}
          removetask={removeTask}
          key={task.id}
          setSelectedTask={setSelectedTask}
          setOpenEdit={setOpenEdit}
        />
      ))}
    </div>
  );
}
