import { IProjectData, TfilterOptions } from "@/types/index.t";
import { createSlice } from "@reduxjs/toolkit";
interface IInitialState {
  projects: IProjectData[] | null;
  filteredProjects: IProjectData[] | null;
  selectedProject: IProjectData | null;
  filter: TfilterOptions;
  show: number;
}
const initialState: IInitialState = {
  projects: null,
  filteredProjects: null,
  selectedProject: null,
  filter: "all",
  show: 4,
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    fillProjectsData: (state, action) => {
      if (!state.projects) {
        state.projects = action.payload;
      }
      if (!state.filteredProjects) {
        state.filteredProjects = action.payload;
      }
    },
    filterProjectsByCategory: (state, action: { payload: TfilterOptions }) => {
      if (!state.projects) return;
      let updatedProjects = state.projects;
      if (action.payload === "all") {
        updatedProjects = state.projects;
        state.filter = action.payload;
      } else {
        updatedProjects = state.projects.filter((project) => {
          let categoriesArr = Object.values(project.categories).map((cat) =>
            cat.title.toLowerCase()
          );
          if (categoriesArr.includes(action.payload)) {
            return project;
          }
        });
        state.filter = action.payload;
      }
      state.filteredProjects = updatedProjects;
    },
    showNextX: (state, action: { payload: number }) => {
      state.show += action.payload;
    },
  },
});

export const selectAllProjects = (state: { projects: IInitialState }) =>
  state.projects.filteredProjects;
export const selectProjectFilterOpt = (state: { projects: IInitialState }) =>
  state.projects.filter;
export const selectProjectShow = (state: { projects: IInitialState }) =>
  state.projects.show;

export const { fillProjectsData, filterProjectsByCategory, showNextX } =
  projectsSlice.actions;

export const projectsReducer = projectsSlice.reducer;
