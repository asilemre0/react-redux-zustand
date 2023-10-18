import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: {
    course: {
      modules: [
        {
          id: "1",
          title: "Starting with React",
          lessons: [
            { id: "Jai8w6K_GnY", title: "CSS Modules", duration: "13:45" },
            {
              id: "w-DW4DhDfcw",
              title: "Post Styling",
              duration: "10:05",
            },
            {
              id: "D83-55LUdKE",
              title: "Component: Header",
              duration: "06:33",
            },
            {
              id: "W_ATsETujaY",
              title: "Component: Sidebar",
              duration: "09:12",
            },
            { id: "Pj8dPeameYo", title: "CSS Global", duration: "03:23" },
            {
              id: "8KBq2vhwbac",
              title: "Comment Form",
              duration: "11:34",
            },
          ],
        },
        {
          id: "2",
          title: "Application Structure",
          lessons: [
            {
              id: "gE48FQXRZ_o",
              title: "Component: Comment",
              duration: "13:45",
            },
            { id: "Ng_Vk4tBl0g", title: "Responsivity", duration: "10:05" },
            {
              id: "h5JA3wfuW1k",
              title: "JSX Interactions",
              duration: "06:33",
            },
            {
              id: "1G0vSTqWELg",
              title: "Using State",
              duration: "09:12",
            },
          ],
        },
      ],
    },
    currentModuleIndex: 0,
    currentLessonIndex: 0,
  },
  reducers: {
    play: (state, action) => {
      (state.currentModuleIndex = action.payload[0]),
        (state.currentLessonIndex = action.payload[1]);
    },
  },
});

export const player = playerSlice.reducer;
export const { play } = playerSlice.actions;
