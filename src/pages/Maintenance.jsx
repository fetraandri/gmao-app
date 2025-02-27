// Maintenance.jsx
import { useState } from "react";
import useMaintenanceStore from "../Store/useMaintenanceStore";
import useEquipmentStore from "../Store/useEquipmentStore";
import "./styles/Maintenance.css";

const Maintenance = () => {
  const [title, setTitle] = useState("");
  const [equipmentId, setEquipmentId] = useState("");
  const [status, setStatus] = useState("En cours"); // Nouveau champ : statut
  const [filterStatus, setFilterStatus] = useState("Tous"); // Filtre par statut
  const { maintenances, addMaintenance, deleteMaintenance } = useMaintenanceStore();
  const { equipments, updateEquipmentInterventions } = useEquipmentStore(); // Nouvelle fonction

  const handleAdd = () => {
    if (!title || !equipmentId) return;
    const newMaintenance = {
      id: Date.now(),
      title,
      equipmentId,
      status,
      date: new Date().toISOString().split("T")[0], // Date actuelle (YYYY-MM-DD)
    };
    addMaintenance(newMaintenance);
    // Incrémente le compteur d’interventions pour l’équipement
    updateEquipmentInterventions(equipmentId);
    setTitle("");
    setEquipmentId("");
    setStatus("En cours");
  };

  // Filtrer les interventions par statut
  const filteredMaintenances = maintenances.filter(
    (m) => filterStatus === "Tous" || m.status === filterStatus
  );

  return (
    <div className="container">
      <h1 className="title">Gestion des Interventions</h1>

      {/* Formulaire d’ajout */}
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
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="form-select"
        >
          <option value="En cours">En cours</option>
          <option value="Terminé">Terminé</option>
        </select>
        <button type="button" onClick={handleAdd} className="btn btn-primary">
          Ajouter
        </button>
      </form>

      {/* Filtre par statut */}
      <div className="filter-section">
        <label htmlFor="status-filter">Filtrer par statut :</label>
        <select
          id="status-filter"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="form-select"
        >
          <option value="Tous">Tous</option>
          <option value="En cours">En cours</option>
          <option value="Terminé">Terminé</option>
        </select>
      </div>

      {/* Tableau des interventions */}
      <div className="maintenances-table">
        <div className="table-header">
          <span className="header-item">Titre</span>
          <span className="header-item">Équipement</span>
          <span className="header-item">Date</span>
          <span className="header-item">Statut</span>
          <span className="header-item">Action</span>
        </div>
        <ul className="maintenances-list">
          {filteredMaintenances.length > 0 ? (
            filteredMaintenances.map((m) => (
              <li key={m.id} className="maintenance-item">
                <span className="maintenance-title">{m.title}</span>
                <span className="maintenance-equipment">
                  {equipments.find((e) => e.id === m.equipmentId)?.name || "Inconnu"}
                </span>
                <span className="maintenance-date">{m.date}</span>
                <span
                  className={`maintenance-status status-${m.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {m.status}
                </span>
                <button
                  onClick={() => deleteMaintenance(m.id)}
                  className="btn btn-delete"
                >
                  ×
                </button>
              </li>
            ))
          ) : (
            <li className="no-results">Aucune intervention trouvée</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Maintenance;