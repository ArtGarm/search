export const search = {
  requested: 'search.requested',
  success: 'search.success',
  failed: 'search.failed',
};

const initialState = {
  list: [],
  loading: false,
  error: false,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case search.requested:
      return {
        ...state,
        list: [],
        loading: true,
      };
    case search.success:
      return {
        ...state,
        list: payload.results,
        loading: false,
        error: false,
      };

    case search.failed:
      return {
        ...state,
        list: [],
        loading: false,
        error: true,
      };

    default:
      return state;
  }
}

export const fetchSearch = (payload) => ({
  type: search.requested,
  payload,
});
