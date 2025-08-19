import { useState } from 'react';

function AddToDo(props) {
  const todo = props.todo;
  const settodo = props.setTodo;

  const [formData, setFormData] = useState({
    Title: "",
    DueDate: "",
  });

  function handleChange(e) {
    const inputTagName = e.target.name;
    const inputTagValue = e.target.value;

    setFormData((previousObject) => ({
      ...previousObject,
      [inputTagName]: inputTagValue,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      todoTitle: formData.Title,
      dueDate: formData.DueDate,
      completeDate: null,
      status: "pending",
    };

    settodo([...todo, newTask]);
    alert("Todo Added!");

    setFormData({
      Title: "",
      DueDate: "",
    });
  };

  return (
    <div className="min-h-screen bg-blue-200 flex items-center justify-center">
      <div className="max-w-md w-full p-4 border border-gray-300 bg-blue-100 rounded-lg shadow-2xl">
        <h2 className="text-xl font-semibold mb-4 text-center">Add ToDo</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="font-bold">Add</label>
          <input
            type="text"
            name="Title"
            placeholder="Enter ToDo Title"
            value={formData.Title}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-gray-800 rounded-md"
          />

          <label className="font-bold">Due Date</label>
          <input
            type="date"
            name="DueDate"
            value={formData.DueDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-gray-800 rounded-md"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddToDo;
