import { create } from "zustand";
import { generateThread } from "../Utils/Generate-Data";

export const threadsStore = create((set) => ({
  threads: [],
  getThreads: () =>
    set((state) => {
      const threads = generateThread();
      return {
        threads,
      };
    }),
}));
