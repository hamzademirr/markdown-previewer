import { createSlice } from "@reduxjs/toolkit";
import { marked } from 'marked';

export const convertMarkdownSlice = createSlice({
  name: "convertMarkdown",
  initialState: {
    markdown: "",
  },
  reducers: {
    setMarkdown: (state, action) => {
      state.markdown = marked(action.payload, { sanitize: true });
    },
  },
});

export const { setMarkdown } = convertMarkdownSlice.actions;
export const selectMarkdown = (state) => state.convertMarkdown.markdown;

export default convertMarkdownSlice.reducer;
