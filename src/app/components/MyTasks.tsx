"use client";

import { useEffect, useState } from "react";
import { useTaskContext } from "../context/TaskContext";
import Singletask from "./task/Singletask";
import { Task } from "../utils/tasks";
import moment from "moment";
export default function Page({
  removeTask,
  setSelectedTask,
  setOpenEdit,
}: any) {
  const { tasks, setTasks } = useTaskContext();
  const [sortedTasks, setSortedTasks] = useState<Task[]>([]);

  useEffect(() => {
    return setSortedTasks(
      tasks.sort((a: any, b: any) => b.dueDate - a.dueDate)
    );
  });

  const dates = ["2024–05–27", "2023–12–31", "2024–01–01"];

  const sortedDates = dates.sort((a, b) => {
    return moment(b, "YYYY-MM-DD").diff(moment(a, "YYYY-MM-DD"));
  });

  console.log(sortedDates);
  // Output: ["2024-05-27", "2024-01-01", "2023-12-31"]

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
