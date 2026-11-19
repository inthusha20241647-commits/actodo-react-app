import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import { useState } from "react";

function TodoContainer(){
     const [activityArray, setActivityArray] = useState([
    {
      id: 1,
      activity: "go for a walk",
    },
    {
      id: 2,
      activity: "have breakfast",
    },
  ]);
    return(
        <div className="flex flex-grow">
            <TodoAdd activityArray={activityArray} setActivityArray={setActivityArray}/>
            <TodoList activityArray={activityArray} setActivityArray={setActivityArray}/>
          
        </div>
    )

}
export default TodoContainer;