import { create } from "zustand";

const useEquipmentStore = create((set) => ({
  equipments: [],
  addEquipment: (newEquipment) =>
    set((state) => ({ equipments: [...state.equipments, newEquipment] })),
  deleteEquipment: (id) =>
    set((state) => ({
      equipments: state.equipments.filter((eq) => eq.id !== id),
    })),
}));

export default useEquipmentStore;
