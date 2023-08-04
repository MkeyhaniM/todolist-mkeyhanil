export let initial = [
  {
    taskId: 0,
    taskName: "Do homework",
    taskStatus: "Active",
    DoThat: false,
    disabled: false,
  },
];

export function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      let lastIndex = state[state.length - 1];

      return [
        ...state,
        {
          taskId: lastIndex.taskId + 1,
          taskName: action.payload,
          taskStatus: "Active",
          DoThat: true,
        },
      ];

      break;
    case "DONE_TODO":
      return [
        (state[action.payload] = {
          ...state[action.payload],
          taskStatus: "Done",
          disabled: true,
        }),
      ];
      break;
    case "DELETE_TODO":
      const fil = state.filter((f) => {
        if (f.taskId !== action.payload) {
          return f;
        }
      });
      return [fil];
      break;
    default:
      break;
  }
}
