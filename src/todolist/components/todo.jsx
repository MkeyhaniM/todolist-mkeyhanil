export default function Todo() {
  return (
    <main className="h-screen bg-purple-600 text-4xl ">
      <div className="container pt-14">
        <h1 className="font-Caprasimo text-5xl mb-10 text-white">
          Todo-Mkeyhanil
        </h1>
        <table className="border-collapse border border-slate-500 bg-purple-300 w-full table-auto">
          <thead>
            <tr className="font-RobotoSlab">
              <th>counter</th>
              <th className="border border-slate-600 p-2">Task</th>
              <th className="border border-slate-600 p-2">Status</th>
              <th className="border border-slate-600 p-2">Operations</th>
            </tr>
          </thead>
          <tbody>
            <tr className="font-YsabeauOffice">
              <td className="border border-slate-700 p-2">Indiana</td>
              <td className="border border-slate-700 p-2">Indianapolis</td>
              <td className="border border-slate-700 p-2">Indianapolis</td>
              <td className="border border-slate-700 p-2">Indianapolis</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
