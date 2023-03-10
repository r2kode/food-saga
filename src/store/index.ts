import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from '../data/rootReducer';
import rootSaga from '../sideeffects/rootSaga';

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
    preloadedState,
  });

  sagaMiddleware.run(rootSaga);

  return store;
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
