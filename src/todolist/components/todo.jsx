import { useState, useRef, useReducer } from "react";
import { initial, reducer } from "./raduce";

export default function Todo() {
  const [text, setText] = useState("");
  const [showWarning, setShowWarning] = useState();
  const [check, setCheck] = useState(false);
  const inputV = useRef();
  const [state, dispatch] = useReducer(reducer, initial);
  const [blankToDo, setBlankToDo] = useState(false);

  const HandelTodo = (e) => {
    if (inputV.current.value) {
      setShowWarning(true);
      dispatch({ type: "ADD_TODO", payload: text });
      inputV.current.value = "";
      inputV.current.style.border = "none";
      setCheck(false);
    } else {
      setShowWarning(false);
    }
    setCheck(true);
  };

  const DoneTodo = (status, id) => {
    if (status !== "Done") {
      dispatch({ type: "DONE_TODO", payload: id });
    }
  };

  const DeleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const HandelCheck = () => {
    if (check) {
      if (showWarning) {
        return "border border-4 border-green-500";
      } else {
        return "border border-4 border-red-500";
      }
    } else {
      return null;
    }
  };

  const setValue = (e) => {
    if (!e) {
      setBlankToDo(true);
    }
  };

  return (
    <main className="h-screen bg-purple-600 text-4xl ">
      <div className="container pt-14">
        <h1 className="font-Caprasimo text-5xl mb-10 text-white">
          Todo-Mkeyhanil
        </h1>
        <table className="border-collapse border border-slate-500 bg-purple-300 w-full table-auto">
          <thead>
            <tr className="font-RobotoSlab">
              <th>Counter</th>
              <th className="border border-slate-600 p-2">Task</th>
              <th className="border border-slate-600 p-2">Status</th>
              <th className="border border-slate-600 p-2">Operations</th>
            </tr>
          </thead>
          <tbody>
            {state.length === 1
              ? setValue(blankToDo)
              : state.map((e, i) => {
                  if (e.DoThat) {
                    return (
                      <tr className="font-YsabeauOffice text-center" key={i}>
                        <td className="border border-slate-700 ">{i}</td>
                        <td className="border border-slate-700">
                          {e.taskName}
                        </td>
                        <td className="border border-slate-700">
                          {e.taskStatus}
                        </td>
                        <td className="border border-slate-700">
                          <button
                            onClick={() => DoneTodo(e.taskStatus, e.taskId)}
                            className={`bg-green-300 p-2 rounded-lg m-6 font-RobotoSlab shadow-xl hover:cursor-pointer active:scale-90 ${
                              e.disabled && "opacity-50 cursor-not-allowed"
                            }`}
                          >
                            Done
                          </button>
                          <button
                            onClick={() => DeleteTodo(e.taskId)}
                            className="bg-red-300 p-2 rounded-lg m-6 font-RobotoSlab shadow-xl hover:cursor-pointer active:scale-90"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  }
                })}
          </tbody>
        </table>
        <div className="flex justify-evenly mt-20">
          <div>
            <input
              type="text"
              ref={inputV}
              defaultValue={text}
              placeholder="Do an exam"
              onKeyUp={(e) => setText(e.target.value)}
              className={`rounded-lg font-RobotoSlab px-1 focus:outline-none p-1 ${HandelCheck()}`}
            />
          </div>
          <div>
            <button
              onClick={HandelTodo}
              className="font-Caprasimo text-white bg-sky-500 p-2  rounded-lg shadow-sm text-xl hover:cursor-pointer active:scale-90"
            >
              New
            </button>
          </div>
        </div>
        
        {blankToDo && <div className="w-[600px] p-6 text-center mx-auto my-40 font-RobotoSlab rounded-lg bg-red-500"><h3>There is no any Todo</h3></div>}
      </div>
    </main>
  );
}
