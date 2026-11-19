import { useState } from "react";
function TodoAdd(props){
   const activityArray=props.activityArray;
  const setActivityArray=props.setActivityArray;

  const [newActivity,setNewActivity]=useState("");

  function handleChange(evt){
    setNewActivity(evt.target.value);

  }
  function addActivity(){
       setActivityArray([...activityArray,{id:activityArray.length+1,activity:newActivity}])
       setNewActivity("")
  }

   return (
    <div className="mt-3 mr-5 " >
        <h1 className="text-2xl font-medium">Add Activity</h1>

        <input
            value={newActivity}
            onChange={handleChange}
            className="border border-black p-2 mt-3 focus:outline-none"
            placeholder="Enter an activity"
            
        />

        <button onClick={addActivity}className="bg-black border border-black text-white p-2">
            Add
        </button>
    </div>
);
          
   
}
export default TodoAdd;