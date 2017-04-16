import { ConfiguresRouter, RouterConfiguration } from "aurelia-router";

export class App implements ConfiguresRouter {
  public configureRouter(config: RouterConfiguration) {
    config.map([
      {
        route: "",
        redirect: "create",
      },
      {
        route: "create",
        moduleId: "edit",
      },
      {
        route: "edit/:name",
        moduleId: "edit",
      },
      {
        route: "view/:name",
        moduleId: "view",
      },
    ]);
  }
}
