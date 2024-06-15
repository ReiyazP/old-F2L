import {AppDispatch, useAppDispatch, useAppSelector, RootState} from 'store';
import {ActionsT, actions} from 'store/reducers';

const composeAction = <T extends Record<string, (...args: any[]) => any>>(
  a: T,
  dispatch: AppDispatch,
) => {
  return Object.keys(a).reduce((acc, val) => {
    acc = {...acc, [val]: (arg: any) => dispatch(a[val](arg))};
    return acc;
  }, {});
};

export const useRedux = <T extends keyof RootState>(slice: T) => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(s => s[slice]) as Object;
  const reducerActions = actions[slice];
  return {
    ...state,
    ...composeAction(reducerActions, dispatch),
  } as RootState[T] & ActionsT[T];
};
