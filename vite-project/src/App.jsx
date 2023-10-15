import { useState } from "react";
import { Home,Task } from "./index";
import { v4 as uuidv4 } from "uuid";

const App = () => {

  // converting state components
  const [isTaskBtn, setIsTaskBtn] = useState(false);
   const [list, setList] = useState([]);
   const [title, setTitle] = useState(``);

  //  functions
   const deleteBtn = (id)=>{
    const anotherItem = list.filter((item)=>(item.id !== id));
    setList(anotherItem);
   }

   const clickHandler = () => {
     if (title) {
       const newItem = {
         id: uuidv4(),
         title: title,
       };
       setList([...list, newItem]);
       setTitle(``);
     }
   };

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
      list={list}
      deleteBtn={deleteBtn}
      />
      <Task
      isTaskBtn= {isTaskBtn}
      taskClose={taskClose}
      clickHandler={clickHandler}
      title={title}
      setTitle={setTitle}
      />
    </>
  );
};

export default App;
