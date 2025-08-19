function DoneTodopage(props) {
  let Arr = props.todo;

  return (
    <div className="bg-purple-100 min-h-[300px] flex justify-center items-center py-10">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-purple-300 text-white">
            <tr>
              <th className="py-3 px-4 text-left border border-gray-300">Todo Title</th>
              <th className="py-3 px-4 text-left border border-gray-300">Status</th>
              <th className="py-3 px-4 text-center border border-gray-300">Completed On</th>
            </tr>
          </thead>
          <tbody>
            {
              Arr
              .filter(todo => todo.status === 'completed')
              .map((todo, index) => {
                  return (
                    <tr key={todo.todoId}>
                      <td className="py-3 px-4 border border-gray-300">{todo.todoTitle}</td>
                      <td className="py-3 px-4 border border-gray-300">{todo.status}</td>
                      <td className="py-3 px-4 border border-gray-300 text-center">{new Date(todo.completionDate).toLocaleDateString()}</td>
                    </tr>
                  );
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DoneTodopage;