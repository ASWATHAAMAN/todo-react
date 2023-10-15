const Home = ({ taskOpen }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-100 ">
      <h1 className="text-[32px] font-semibold ">TODO LIST</h1>
      <div className="flex justify-center items-center gap-[13rem]">
        <div>
          <button
            className="bg-[dodgerblue] px-[1rem] py-[0.25rem] rounded-[5px] text-white text-[18px]"
            onClick={taskOpen}
          >
            Add Task
          </button>
        </div>
        <select
          name="choose"
          id="selection"
          className=" border-2 border-slate-800 px-[1rem] py-[0.25rem] bg-slate-400 text-[18px] w-[30%]"
        >
          <option>All</option>
          <option>Complete</option>
          <option>InComplete</option>
        </select>
      </div>
      <ul className="bg-slate-300 px-[15rem] py-[1rem] mt-[2rem] ">
        <li className="text-[22px] font-bold">hi</li>
      </ul>
    </div>
  );
};

export { Home };
