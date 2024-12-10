export default function Page({ setSelected, selected }: any) {
  console.log(selected);
  return (
    <div className=" flex flex-col bg-slate-900  h-[100%] relative">
      <h3
        className={`hover:bg-gray-700 p-5 m-2 border border-gray-700 rounded-xl text-xl ${
          selected === "tasks" ? "bg-cyan-700" : ""
        }`}
        onClick={() => setSelected("tasks")}
      >
        All Tasks
      </h3>

      <h3
        className={`hover:bg-gray-700 p-5 m-2 border border-gray-700 rounded-xl text-xl ${
          selected === "pendingTask" ? "bg-cyan-700" : ""
        }`}
        onClick={() => setSelected("pendingTask")}
      >
        Pending Task
      </h3>
      <h3
        className={`hover:bg-gray-700 p-5 m-2 border bg-black border-gray-700 rounded-xl text-xl ${
          selected === "addTask" ? "bg-cyan-700" : ""
        }`}
        onClick={() => setSelected("addTask")}
      >
        Add Task
      </h3>
    </div>
  );
}
