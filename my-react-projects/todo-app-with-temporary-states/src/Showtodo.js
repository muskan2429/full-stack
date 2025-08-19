function Showtodo(props) {
  const Arr = props.todo;

  function handleClick(e, todoId) {
    const completedTodo = Arr.find(todo => todo.id === todoId);
    completedTodo.status = "completed";
    completedTodo.completeDate = new Date();
    const updatedArr = Arr.filter(todo => todo.id !== todoId);
    props.setTodo(updatedArr);
    props.setDone(prev => [...prev, completedTodo]);

    alert("Todo Completed");
  }

  return (
    <div className="bg-purple-100 min-h-[300px] flex justify-center items-center py-10">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-purple-300 text-white">
            <tr>
              <th className="py-3 px-4 text-left border border-gray-300">Todo Title</th>
              <th className="py-3 px-4 text-left border border-gray-300">Due Date</th>
              <th className="py-3 px-4 text-center border border-gray-300">Mark Done</th>
            </tr>
          </thead>
          <tbody>
            {
              Arr.length === 0 ? (
                <tr>
                  <td colSpan="3" className="text-center py-4 text-gray-500">No todos available</td>
                </tr>
              ) : (
                Arr.map((value, index) => (
                  <tr key={index} className="hover:bg-purple-50">
                    <td className="py-3 px-4 border border-gray-300">{value.todoTitle}</td>
                    <td className="py-3 px-4 border border-gray-300">{value.dueDate}</td>
                    <td className="py-3 px-4 border border-gray-300 text-center">
                      <button
                        onClick={(e) => handleClick(e, value.id)}
                        className="text-green-600 hover:text-green-800 text-xl"
                        title="Mark as Done"
                      >
                        ✅
                      </button>
                    </td>
                  </tr>
                ))
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Showtodo;