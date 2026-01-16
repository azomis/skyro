import { config } from '~shared/config';
import { Response } from '~shared/response';

import { skipToken, useQuery } from '@tanstack/react-query';

import { superheroKeys } from './keys';

import { Superhero } from '../superhero';

export type GetSuperheroResponse = Response<Superhero>;

export type Params = {
  id?: string;
};

export function useSuperhero(params: Params) {
  const { id } = params;

  return useQuery({
    queryKey: superheroKeys.superhero(id ?? ''),
    queryFn: id
      ? async (): Promise<GetSuperheroResponse> => {
          const res = await fetch(
            `${config.apiHost}/api/${config.apiToken}/${id}`,
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