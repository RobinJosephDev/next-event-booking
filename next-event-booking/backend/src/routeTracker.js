export const routeTracker = {
  routes: [],
  add(path, methods) {
    this.routes.push({ path, methods });
  },
};
