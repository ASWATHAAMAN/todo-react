import { AiOutlineClose } from "react-icons/ai";
const Task = ({ isTaskBtn, taskClose }) => {
  return (
    <>
      <div className={`${isTaskBtn ? `task-overlay show` : `none`}`}>
        <AiOutlineClose
          className=" w-[2%] ml-[22rem] mb-[-17rem] cursor-pointer bg-slate-300"
          onClick={taskClose}
        />
        <div className="bg-slate-300 w-[30%] mx-auto p-[1rem] flex flex-col gap-[1rem] mb-[5rem]">
          <div className="">
            <h1>ADD TODO</h1>
            <label htmlFor="title">Title</label> <br />
            <input type="text" id="title" className="bg-white " /> <br />
            <label htmlFor="status">status</label> <br />
            <select id="status" className="pr-[5rem]">
              <option>All</option>
              <option>complete</option>
              <option>InComplete</option>
            </select>
          </div>
          <div className="flex gap-[1rem]">
            <button className="bg-[dodgerblue] px-[1rem] py-[0.25rem] rounded-[5px] text-white text-[16px]">
              Add Task
            </button>
            <button className="bg-gray-400 px-[1rem] py-[0.25rem] rounded-[5px] text-white text-[16px]">
              cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { Task };
