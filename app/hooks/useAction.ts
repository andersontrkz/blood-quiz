import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

type ActionCreator<T extends (...args: any[]) => any> = T;

export const useAction = <T extends (...args: any[]) => any>(actionCreator: ActionCreator<T>) => {
  const dispatch = useDispatch();
  
  return useCallback(
    (...args: Parameters<T>) => dispatch(actionCreator(...args)),
    [dispatch, actionCreator]
  );
};
