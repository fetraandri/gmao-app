// Store/useEquipmentStore.js
import { create } from "zustand";

const useEquipmentStore = create((set) => ({
  equipments: [],
  addEquipment: (equipment) =>
    set((state) => ({ equipments: [...state.equipments, equipment] })),
  deleteEquipment: (id) =>
    set((state) => ({
      equipments: state.equipments.filter((eq) => eq.id !== id),
    })),
  updateEquipmentInterventions: (equipmentId) =>
    set((state) => ({
      equipments: state.equipments.map((eq) =>
        eq.id === equipmentId
          ? { ...eq, interventions: (eq.interventions || 0) + 1 }
          : eq
      ),
    })),
}));

export default useEquipmentStore;