import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useSelectedStore = create(
  persist((set) => ({
    selectedTasks: [],
    addTask: (task) =>
      set((state) => ({
        selectedTasks: state.selectedTasks.some((item) => item.id === task.id)
          ? state.selectedTasks
          : [...state.selectedTasks, task],
      })),
    removeTask: (task) =>
      set((state) => ({
        selectedTasks: state.selectedTasks.filter(
          (item) => item.id !== task.id,
        ),
      })),
    clearAll: () => set({ selectedTasks: [] }),
  })),
  {
    name: "selected-tasks",
  },
);

//   (set) =>
//     persist({

//     }),
//   {
//     name: "selected-tasks",
//   },
