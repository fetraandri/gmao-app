// Equipments.jsx
import { useState } from "react";
import useEquipmentStore from "../Store/useEquipmentStore";
import "./styles/Equipments.css";

const Equipments = () => {
  const [name, setName] = useState("");
  const { equipments, addEquipment, deleteEquipment } = useEquipmentStore();

  const handleAdd = () => {
    if (!name) return;
    addEquipment({ id: Date.now(), name });
    setName("");
  };

  return (
    <div className="container">
      <h1 className="title">Gestion des équipements</h1>
      
      <div className="equipment-form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nom de l'équipement"
          className="form-input"
        />
        <button onClick={handleAdd} className="btn btn-primary">
          Ajouter
        </button>
      </div>

      <ul className="equipment-list">
        {equipments.map((eq) => (
          <li key={eq.id} className="equipment-item">
            <span className="equipment-name">{eq.name}</span>
            <button
              onClick={() => deleteEquipment(eq.id)}
              className="btn btn-delete"
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Equipments;