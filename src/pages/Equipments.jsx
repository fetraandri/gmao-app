import { useState } from "react";
import useEquipmentStore from "../Store/useEquipmentStore";

const Equipments = () => {
  const [name, setName] = useState("");
  const { equipments, addEquipment, deleteEquipment } = useEquipmentStore();

  const handleAdd = () => {
    if (!name) return;
    addEquipment({ id: Date.now(), name });
    setName("");
  };

  return (
    <div>
      <h1>Gestion des équipements</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nom de l'équipement"
      />
      <button onClick={handleAdd}>Ajouter</button>
      <ul>
        {equipments.map((eq) => (
          <li key={eq.id}>
            {eq.name} <button onClick={() => deleteEquipment(eq.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Equipments;
