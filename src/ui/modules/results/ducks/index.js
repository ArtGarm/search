export const results = {
  requested: 'results.requested',
  success: 'results.success',
  failed: 'results.failed',
};

const initialState = {
  list: [],
  loading: false,
  error: false,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case results.requested:
      return {
        ...state,
        list: [],
        loading: true,
      };
    case results.success:
      return {
        ...state,
        list: payload.results,
        loading: false,
        error: false,
      };

    case results.failed:
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

export const fetchResults = (payload) => ({
  type: results.requested,
  payload,
});
