import { config } from '~shared/config';
import { Response } from '~shared/response';

import { skipToken, useQuery } from '@tanstack/react-query';

import { superheroKeys } from './keys';

import { Superhero } from '../superhero';

type ResponsePayload = {
  'results-for': string;
  results: Superhero[];
};

export type SearchSuperherosResponse = Response<ResponsePayload>;

export type Params = {
  query: string;
};

export function useSearchSuperheros(params: Params) {
  const { query } = params;

  return useQuery({
    queryKey: superheroKeys.search(query ?? ''),
    queryFn: query
      ? async (): Promise<SearchSuperherosResponse> => {
          const res = await fetch(
            `${config.apiHost}/api/${config.apiToken}/search/${query}`,
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );

          if (!res.ok) {
            throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
          }

          return res.json();
        }
      : skipToken,
  });
}
