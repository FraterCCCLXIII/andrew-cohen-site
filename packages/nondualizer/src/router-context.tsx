"use client";

import { createContext, useContext, type ReactNode } from "react";

type NondualizerRouterContextValue = {
  navigate: (path: string, options?: { replace?: boolean }) => void;
  basePath: string;
};

const NondualizerRouterContext = createContext<NondualizerRouterContextValue | null>(
  null,
);

export function NondualizerRouterProvider({
  children,
  navigate,
  basePath,
}: NondualizerRouterContextValue & { children: ReactNode }) {
  return (
    <NondualizerRouterContext.Provider value={{ navigate, basePath }}>
      {children}
    </NondualizerRouterContext.Provider>
  );
}

export function useNondualizerRouter() {
  const context = useContext(NondualizerRouterContext);
  if (!context) {
    throw new Error("useNondualizerRouter must be used within NondualizerRouterProvider");
  }
  return context;
}
