import { useTaskContext } from "@/app/context/TaskContext";
import Link from "next/link";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";

export default function Page({ task, setSelectedTask, setOpenEdit }: any) {
  const { removeTask } = useTaskContext();
  return (
    <div
      className=" mx-5 flex flex-col items-stretch my-5 p-5 rounded-2xl border border-gray-700 bg-slate-900 hover:bg-black"
      key={task.id}
    >
      <div className="flex justify-between">
        <h1 className="text-3xl">{task.name}</h1>
        <div className="flex gap-5">
          <div onClick={() => removeTask(task?.id)} className="cursor-pointer">
            <MdDeleteOutline size={25} />
          </div>
          <div className="cursor-pointer">
            <AiOutlineEdit
              size={25}
              onClick={() => {
                setSelectedTask(task);
                setOpenEdit(true);
              }}
            />
          </div>
        </div>
      </div>
      <p className="mb-3">{task.description}</p>
      <div className="flex w-full justify-between text-gray-500">
        <p>
          Due Date : <span>{task.dueDate}</span>
        </p>
        <p
          className={`rounded-full border p-2 px-5 text-black ${
            task.status === "in-progress" && "bg-yellow-400"
          } ${task.status === "completed" && "bg-green-400"} ${
            task.status === "pending" && "bg-red-400"
          }`}
        >
          {task.status}
        </p>
      </div>
    </div>
  );
}
