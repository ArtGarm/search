import convert from 'xml-js';
import config from '../config';
import generateUrl from './generateUrl';
import { formatPath } from '../ui/routes';

async function search(params) {
  try {
    const url = generateUrl(config.api.search, {
      query: { key: config.key, ...params },
    });
    const response = await fetch(url)
      .then((res) => res.text())
      .then((text) =>
        convert.xml2json(text, { compact: true, spaces: 0, textKey: 'text' })
      )
      .catch((error) => error);
    const data = JSON.parse(response).GoodreadsResponse.search;

    return {
      results: data.results,
      total: data['total-results'].text,
      end: data['results-end'].text,
      start: data['results-start'].text,
    };
  } catch (e) {
    return e;
  }
}

async function single({ id }) {
  try {
    const url = generateUrl(formatPath(config.api.single, { id }), {
      query: { key: config.key },
    });

    const response = await fetch(url)
      .then((res) => res.text())
      .then((text) =>
        convert.xml2json(text, { compact: true, spaces: 0, textKey: 'text' })
      )
      .catch((error) => error);
    const data = JSON.parse(response).GoodreadsResponse.book;

    return {
      results: data,
    };
  } catch (e) {
    return e;
  }
}

export default { search, single };
