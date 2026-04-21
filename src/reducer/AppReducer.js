const AppReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    case 'SET_DATA':
      return { ...state, data: action.payload, loading: false, error: null };
    case 'SET_FILTER':
      return { ...state, filterText: action.payload };
    case 'MARK_DELIVERED':
      return {
        ...state,
        data: state.data.map((order) =>
          order.orderId === action.payload
            ? { ...order, status: 'Delivered' }
            : order
        ),
      };
    default:
      return state;
  }
};

export default AppReducer;