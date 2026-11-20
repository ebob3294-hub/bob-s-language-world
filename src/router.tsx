import { QueryClient } from "@tanstack/react-query";
import { Capacitor } from "@capacitor/core";
import { createHashHistory, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();
  const history =
    typeof window !== "undefined" && Capacitor.isNativePlatform()
      ? createHashHistory()
      : undefined;

  const router = createRouter({
    routeTree,
    context: { queryClient },
    history,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
