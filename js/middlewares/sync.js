export const syncMiddleware = store => next => action => {
  console.error('store', store);
  console.error('next', next);
  console.error('action', action);

  return next(action);
};
