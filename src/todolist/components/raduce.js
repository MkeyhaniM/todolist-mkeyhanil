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
      const newState = state.map((e) => {
        if (e.taskId === action.payload) {
          return [
            {
              taskId: e.taskId,
              taskName: e.taskName,
              taskStatus: "Done",
              disabled: true,
              DoThat: true,
            },
          ];
        }
      });

      let final = state;
      final[action.payload] = newState;

      if (final) {
        return final;
      }

      return state;
      break;

    case "DELETE_TODO":
      return state.filter((index) => index.taskId !== action.payload);
      break;
    default:
      break;
  }
}
