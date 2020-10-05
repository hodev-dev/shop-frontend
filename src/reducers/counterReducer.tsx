// action types
interface I_Action {
  type: string,
  payload?: any
}
// initState types
export interface ICounterReducer {
  count: number;
}

// initState
const initState: ICounterReducer = {
  count: 0
};

const counterReducer = (state = initState, action: I_Action): ICounterReducer => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default counterReducer;