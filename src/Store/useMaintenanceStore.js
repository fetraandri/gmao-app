import { create } from "zustand";

const useMaintenanceStore = create((set) => ({
  maintenances: [],
  addMaintenance: (newItem) => set((state) => ({ maintenances: [...state.maintenances, newItem] })),
}));

export default useMaintenanceStore;