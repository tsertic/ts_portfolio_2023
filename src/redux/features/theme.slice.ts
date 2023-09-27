import { Tthemestype } from "@/types/index.t";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  showThemeDrawer: boolean;
  themesType: Tthemestype[];
  currentTheme: Tthemestype;
}
const INITIAL_STATE: IInitialState = {
  showThemeDrawer: false,
  themesType: [
    "light",
    "dark",
    "pikachu's thunderbolt",
    "flames of charizard",
    "gengars hounting shadows",
    "classic pokeball",
    "viridian forest",
    "eevee's evolutions",
    "karp karp magikarp",
    "mewtwo's vengeance",
  ],
  currentTheme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState: INITIAL_STATE,
  reducers: {
    closeThemeDrawer: (state) => {
      state.showThemeDrawer = false;
    },
    toggleThemeDrawer: (state) => {
      state.showThemeDrawer = !state.showThemeDrawer;
    },
    setCurrentTheme: (state, { payload }) => {
      state.currentTheme = payload;
    },
  },
});

export const selectAllThemesType = (state: { theme: IInitialState }) =>
  state.theme.themesType;
export const selectCurrentTheme = (state: { theme: IInitialState }) =>
  state.theme.currentTheme;
export const selectShowDrawer = (state: { theme: IInitialState }) =>
  state.theme.showThemeDrawer;

export const { closeThemeDrawer, toggleThemeDrawer, setCurrentTheme } =
  themeSlice.actions;

export const themeReducer = themeSlice.reducer;
