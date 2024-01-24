import { v4 as uuidv4 } from "uuid";

const initaileState = {
  task: [
    {
      id: "64fbdfc1-3ffd-5f7c-bcd9-202177115df3",
      description: "learn javascript",
      isdone: false,
    },
    {
      id: "7bf4620e-904e-5e29-8a2e-8bf23865e7dc",
      description: "Go to gym",
      isdone: false,
    },
    {
      id: "45e1328f-f188-55c5-a518-a1189fd06acc",
      description: "Drink a cooffe",
      isdone: false,
    },
  ],
  filtervalue: "all",
};
const taskReducer = (state = initaileState, action) => {
  switch (action.type) {
    case "ADD-TASK":
      return {
        ...state,
        task: [
          ...state.task,
          { ...action.payload, id: uuidv4(), isdone: false },
        ],
      };
    case "EDIT-TASK":
      return {
        ...state,
        task: state.task.map((todos) =>
          todos.id === action.payload.id
            ? { ...todos, ...action.payload.newTasckData }
            : todos
        ),
      };
    case "DELETE-TASK":
      return {
        ...state,
        task: state.task.filter((todos) => todos.id !== action.payload),
      };
    case "IS-DONE":
      return {
        ...state,
        task: state.task.map((todos) =>
          todos.id === action.payload
            ? { ...todos, isdone: !todos.isdone }
            : todos
        ),
      };
    case "FILTER-TASKE":
      return {
        ...state,
        filtervalue: action.payload,
      };

    default:
      return state;
  }
};
export default taskReducer;
