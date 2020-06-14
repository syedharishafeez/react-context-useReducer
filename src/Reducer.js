const reducer = (state, action)=> {
    console.log("state = ",state)
    switch (action.type) {
      case 'INCREMENT':
        return state+1;
      case 'DECREMENT':
        return state-1;
      default:
        throw new Error();
    }
  }
  export default reducer