// Store/useMaintenanceStore.js
import { create } from "zustand";

const useMaintenanceStore = create((set) => ({
  maintenances: [],
  addMaintenance: (maintenance) =>
    set((state) => ({ maintenances: [...state.maintenances, maintenance] })),
  deleteMaintenance: (id) =>
    set((state) => ({
      maintenances: state.maintenances.filter((m) => m.id !== id),
    })),
}));

export default useMaintenanceStore;