import { stringify } from 'qs';

export default function (url, params) {
  const { query } = params;
  return `${url}?${stringify(query)}`;
}
