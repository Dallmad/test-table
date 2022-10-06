import {
  getItems,
  initialState,
  setFiltration,
  setSort,
  tableReducer,
} from './table-reducer';
import { InitialStateType } from './types';

import { ARRAY_FOR_SELECT, headerTitles } from 'enums';

let startState: InitialStateType = initialState;

beforeEach(() => {
  startState = {
    sort: '0name',
    filtration: {
      field: '',
      term: '',
      filter: '',
    },
    table: [],
  };
});

test('correct change condition getItems', () => {
  const action = getItems([
    { id: 'ghj', date: new Date(), distance: 1414, name: 'test', number: 3242 },
  ]);

  const endState = tableReducer(startState, action);

  expect(endState.table.length).not.toEqual(startState.table.length);
  expect(endState.table.find(t => t.id === 'ghj')).not.toBeUndefined();
});

test('correct change condition setSort', () => {
  const action = setSort('1distance');

  const endState = tableReducer(startState, action);

  expect(endState.sort).toBe('1distance');
  expect(endState.sort).not.toBe('0name');
});

test('correct change condition setFiltration', () => {
  const action = setFiltration({
    field: headerTitles[1].titleRu,
    term: ARRAY_FOR_SELECT[3],
    filter: 'test',
  });

  const endState = tableReducer(startState, action);

  expect(endState.filtration.field).toBe(headerTitles[1].titleRu);
  expect(endState.filtration.term).toBe(ARRAY_FOR_SELECT[3]);
  expect(endState.filtration.filter).toBe('test');
});
