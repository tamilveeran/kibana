/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { Observable } from 'rxjs';
import { ES_SEARCH_STRATEGY, IEsSearchResponse } from '../../../common/search';
import { SYNC_SEARCH_STRATEGY } from '../sync_search_strategy';
import { getEsPreference } from './get_es_preference';
import { ISearchContext, TSearchStrategyProvider, ISearchStrategy } from '../types';

export const esSearchStrategyProvider: TSearchStrategyProvider<typeof ES_SEARCH_STRATEGY> = (
  context: ISearchContext
): ISearchStrategy<typeof ES_SEARCH_STRATEGY> => {
  return {
    search: (request, options) => {
      if (typeof request.params.preference === 'undefined') {
        const setPreference = context.core.uiSettings.get('courier:setRequestPreference');
        const customPreference = context.core.uiSettings.get('courier:customRequestPreference');
        request.params.preference = getEsPreference(setPreference, customPreference);
      }
      const syncStrategyProvider = context.getSearchStrategy(SYNC_SEARCH_STRATEGY);
      return syncStrategyProvider(context).search(
        { ...request, serverStrategy: ES_SEARCH_STRATEGY },
        options
      ) as Observable<IEsSearchResponse>;
    },
  };
};
