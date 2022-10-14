import get from 'lodash/get';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

const useReducerData = (reducerName, attr, defaultValue = {}) => {
  return useSelector(
    (state) => get(state, `${reducerName}.${attr}`) || defaultValue
  );
};

const useStoreActions = (actions) => {
  const dispatch = useDispatch();
  return useMemo(
    () => bindActionCreators(actions || {}, dispatch),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [actions]
  );
};

export { useStoreActions, useReducerData };
