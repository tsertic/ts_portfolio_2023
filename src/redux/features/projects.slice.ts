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
  show: 20,
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
      if (action.payload === "all") {
        state.filteredProjects = state.projects;
        state.filter = action.payload;
        return;
      }
      if (state.projects) {
        state.filteredProjects = state.projects.filter((project) => {
          let categoriesArr = Object.values(project.categories).map((cat) =>
            cat.title.toLowerCase()
          );
          if (categoriesArr.includes(action.payload)) {
            return project;
          }
        });
        state.filter = action.payload;
      }
    },
  },
});

export const selectAllProjects = (state: { projects: IInitialState }) =>
  state.projects.filteredProjects;
export const selectProjectFilterOpt = (state: { projects: IInitialState }) =>
  state.projects.filter;

export const { fillProjectsData, filterProjectsByCategory } =
  projectsSlice.actions;

export const projectsReducer = projectsSlice.reducer;
