function Showtodo() {
  return (
    <div className="flex justify-center mt-20 mb-20">
     
        <table className="table-auto border border-black">
          
            <tr>
              <th className="border border-black px-4 py-2">Todo Title</th>
              <th className="border border-black px-4 py-2">Due Date</th>
              <th className="border border-black px-4 py-2">Mark Done</th>
            </tr>
         
          
            <tr>
              <td className="border border-black px-4 py-2">Meditate for 10 mins</td>
              <td className="border border-black px-4 py-2">4/aug/2025</td>
              <td className="border border-black px-4 py-2"><input type="checkbox" checked /></td>
            </tr>
            <tr>
              <td className="border border-black px-4 py-2">Watch React Tutorial</td>
              <td className="border border-black px-4 py-2">6/aug/2025</td>
              <td className="border border-black px-4 py-2"><input type="checkbox" checked /></td>
            </tr>
            <tr>
              <td className="border border-black px-4 py-2">Buy Groceries</td>
              <td className="border border-black px-4 py-2">1/August/2025</td>
              <td className="border border-black px-4 py-2"><input type="checkbox" checked /></td>
            </tr>
            <tr>
              <td className="border border-black px-4 py-2">Drink 2L water</td>
              <td className="border border-black px-4 py-2">10/sep/2025</td>
              <td className="border border-black px-4 py-2"><input type="checkbox" checked /></td>
            </tr>
            <tr>
              <td className="border border-black px-4 py-2">Stretch After Work</td>
              <td className="border border-black px-4 py-2">15/dec/2025</td>
              <td className="border border-black px-4 py-2"><input type="checkbox" checked /></td>
            </tr>
          
        </table>
      </div>
   
  );
}

export default Showtodo;