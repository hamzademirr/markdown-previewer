import { configureStore } from "@reduxjs/toolkit";
import convertMarkdownReducer from "./convertMarkdown";

export const store = configureStore({
  reducer: {
    convertMarkdown: convertMarkdownReducer,
  },
});
