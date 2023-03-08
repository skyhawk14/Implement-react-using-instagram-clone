function NotFound() {
  return <h1>Not Found</h1>;
}
// function createThunkMiddleware(extraArgument) {
//   return function ({ dispatch, getState }) {
//     return function (next) {
//       return function (action) {
//         if (typeof action === "function") {
//           return action(dispatch, getState, extraArgument);
//         }
//         return next(action);
//       };
//     };
//   };
// }

// const thunk = createThunkMiddleware();
// thunk.withExtraArgument = createThunkMiddleware;

// export { thunk };
export default NotFound;
