
import TodoItem from "./TodoItem";

function TodoList(props) {
  const activityArray=props.activityArray;
  const setActivityArray=props.setActivityArray;
 
  return (
    <div className=" p-2 border rounded-md bg-[#BDB4EA] flex-grow mt-3 ">
      <h1 className="text-2xl font-medium">Today's Activity</h1>

      {activityArray.length === 0 ? <p>Tasks hasn't added yet!</p> : ""}

      {activityArray.map(function (item, index) {
        return (
          <TodoItem
            id={item.id}
            activity={item.activity}
            index={index}
            activityArray={activityArray}
            setActivityArray={setActivityArray}
          />
        );
      })}
    </div>
  );
}
export default TodoList;
