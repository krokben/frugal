export default function appReducer(app = {}, action) {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return {
        ...app,
        menu: !app.menu,
      };
    default:
      return app;
  }
}
