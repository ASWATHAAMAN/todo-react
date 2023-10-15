import { useState } from "react";
import { Home,Task } from "./index";
const App = () => {
  const [isTaskBtn, setIsTaskBtn] = useState(false);

  const taskOpen = ()=>{
    setIsTaskBtn(true)
  }
  const taskClose = ()=>{
    setIsTaskBtn(false)
  }
  return (
    <>
      <Home 
      taskOpen ={taskOpen}
      />
      <Task
      isTaskBtn= {isTaskBtn}
      taskClose={taskClose}
      />
    </>
  );
};

export default App;
