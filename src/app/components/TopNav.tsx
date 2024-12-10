import { useUserContext } from "../context/userContext";

export default function Page() {
  const user = useUserContext();
  const { logoutUser } = useUserContext();
  return (
    <div>
      <nav className="w-full bg-gray-800 h-[80px] flex justify-between items-center px-10">
        <h1 className="text-2xl font-bold">TASK MANAGER</h1>
        <h1>{user.user.email}</h1>
        <button
          className=" bg-cyan-400 h-[40px] px-8 text-black rounded-full"
          onClick={() => logoutUser(user.user.id)}
        >
          Logout
        </button>
      </nav>
    </div>
  );
}
