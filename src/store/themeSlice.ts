import { createSlice } from '@reduxjs/toolkit';

type Theme = 'light' | 'dark' | 'blue' | 'green';

interface ThemeState {
  theme: Theme;
}

const initialState: ThemeState = {
  theme: (localStorage.getItem('theme') as Theme) || 'dark',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state.theme === 'light') state.theme = 'dark';
      else if (state.theme === 'dark') state.theme = 'blue';
      else if (state.theme === 'blue') state.theme = 'green';
      else state.theme = 'light';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;