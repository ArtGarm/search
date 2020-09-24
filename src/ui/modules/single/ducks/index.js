export const single = {
  requested: 'single.requested',
  success: 'single.success',
  failed: 'single.failed',
};

const initialState = {
  single: null,
  loading: true,
  error: false,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case single.requested:
      return {
        ...state,
        loading: true,
      };
    case single.success:
      return {
        ...state,
        single: payload.results,
        loading: false,
        error: false,
      };

    case single.failed:
      return {
        ...state,
        single: null,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
}

export const fetchSingle = (payload) => ({
  type: single.requested,
  payload,
});
