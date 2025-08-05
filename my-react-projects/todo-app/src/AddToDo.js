import { useState } from 'react';

function AddToDo() {
  const [formData, setFormData] = useState({
    Title: "",
    DueDate: "",
    Status: "",
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
    alert(
      `Your title is ${formData.Title} on date ${formData.DueDate} and status is ${formData.Status}`
    );
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center">Add ToDo</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="font-bold">Add</label>
        <input
          type="text"
          name="Title"
          placeholder="Enter ToDo Title"
          value={formData.Title}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />

        <label className="font-bold">Due Date</label>
        <input
          type="date"
          name="DueDate"
          value={formData.DueDate}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />

        <label className="font-bold">Status</label>
        <input
          type="text"
          name="Status"
          placeholder="Enter Status"
          value={formData.Status}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddToDo;