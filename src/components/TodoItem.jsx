function TodoItem(props) {
  const activityArray = props.activityArray;
  const setActivityArray = props.setActivityArray;

  function handleDelete(deleteId) {
    const tempArr = activityArray.filter(function (item) {
      if (item.id === deleteId) {
        return false;
      } else {
        return true;
      }
    });
    setActivityArray(tempArr);
  }

  return (
    <div className="flex justify-between">
      <p>
        {props.index + 1}.{props.activity}
      </p>
      <button
        onClick={() => {
          handleDelete(props.id);
        }}
        className="text-red-500"
      >
        delete
      </button>
    </div>
  );
}
export default TodoItem;