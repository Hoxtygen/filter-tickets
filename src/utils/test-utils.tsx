import type { PreloadedState } from "@reduxjs/toolkit";
import type { RenderOptions } from "@testing-library/react";
import { render } from "@testing-library/react";
import { PropsWithChildren, ReactElement } from "react";
import { Provider } from "react-redux";

import { AppStore, RootState, setupStore } from "../app/store";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProvider(
  ui: ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {

	function Wrapper({children}:PropsWithChildren<{}>): JSX.Element{
		return <Provider store={store} >{children}</Provider>
	}
	return {store, ...render(ui, {wrapper:Wrapper, ...renderOptions})}
}
