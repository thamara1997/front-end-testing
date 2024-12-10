"use client";

import { useState } from "react";
import MyTasks from "./MyTasks";
import AddTasks from "./task/AddTasks";
import EditTask from "./task/EditTask";
import Pendingtasks from "./Pendingtasks";

export default function Page({ selected }: any) {
  const [selectedTask, setSelectedTask] = useState(null);
  const [openEdit, setOpenEdit] = useState(false);

  console.log(selectedTask);
  return (
    <div>
      <div>
        {selected === "tasks" && (
          <div>
            <MyTasks
              setSelectedTask={setSelectedTask}
              setOpenEdit={setOpenEdit}
            />
          </div>
        )}
        {selected === "addTask" && (
          <div className="">
            <AddTasks />
          </div>
        )}
        {selected === "pendingTask" && (
          <div className="">
            <Pendingtasks
              setSelectedTask={setSelectedTask}
              setOpenEdit={setOpenEdit}
            />
          </div>
        )}
      </div>

      {openEdit && (
        <div>
          <EditTask
            setOpenEdit={setOpenEdit}
            selectedTask={selectedTask}
            setSelectedTask={setSelectedTask}
          />
        </div>
      )}
    </div>
  );
}
