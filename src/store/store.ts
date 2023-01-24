import { configureStore } from "@reduxjs/toolkit";
import { reducer as formReducer, FormStateMap } from "redux-form";

export interface AppState {
  form: FormStateMap;
}

export const store = configureStore<AppState>({
  reducer: {
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
