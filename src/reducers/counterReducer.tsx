// action types
interface I_Action {
  type: string,
  payload?: any
}
// initState types
export interface I_CounterReducer {
  count: number;
}

// initState
const initState: I_CounterReducer = {
  count: 0
};

const counterReducer = (state = initState, action: I_Action): I_CounterReducer => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export { counterReducer }