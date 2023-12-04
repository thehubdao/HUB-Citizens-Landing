'use client';

import { configureStore } from "@reduxjs/toolkit";
import campaignsReducer from "@/redux/campaignsSlice";

export const store = configureStore({
  reducer: {
    campaigns: campaignsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;