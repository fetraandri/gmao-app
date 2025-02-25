// Maintenance.jsx
import { useState } from "react";
import useMaintenanceStore from "../Store/useMaintenanceStore";
import useEquipmentStore from "../Store/useEquipmentStore";
import "./styles/Maintenance.css";

const Maintenance = () => {
  const [title, setTitle] = useState("");
  const [equipmentId, setEquipmentId] = useState("");
  const { maintenances, addMaintenance, deleteMaintenance } = useMaintenanceStore();
  const { equipments } = useEquipmentStore();

  const handleAdd = () => {
    if (!title || !equipmentId) return;
    addMaintenance({ id: Date.now(), title, equipmentId });
    setTitle("");
    setEquipmentId("");
  };

  return (
    <div className="container">
      <h1 className="title">Gestion des Interventions</h1>
      
      <form className="maintenance-form">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Nom de l’intervention"
          className="form-input"
        />
        <select
          value={equipmentId}
          onChange={(e) => setEquipmentId(e.target.value)}
          className="form-select"
        >
          <option value="">Sélectionner un équipement</option>
          {equipments.map((eq) => (
            <option key={eq.id} value={eq.id}>
              {eq.name}
            </option>
          ))}
        </select>
        <button type="button" onClick={handleAdd} className="btn btn-primary">
          Ajouter
        </button>
      </form>

      <div className="cards-grid">
        {maintenances.map((m) => (
          <div key={m.id} className="card">
            <h3 className="card-title">{m.title}</h3>
            <p className="card-text">
              Équipement : {equipments.find((e) => e.id === m.equipmentId)?.name || "Inconnu"}
            </p>
            <button
              onClick={() => deleteMaintenance(m.id)}
              className="btn btn-danger"
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Maintenance;