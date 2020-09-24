const routes = {
  search: '',
  results: '/results',
  single: '/single/:id',
};

export function formatPath(path, values) {
  return Object.keys(values).reduce(
    (p, key) => p.replace(`:${key}`, values[key]),
    path
  );
}

export default routes;
