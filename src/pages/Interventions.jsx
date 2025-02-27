// Interventions.jsx
import { useState } from "react";
import useMaintenanceStore from "../Store/useMaintenanceStore";
import useEquipmentStore from "../Store/useEquipmentStore";
import "./styles/Interventions.css";

const Interventions = () => {
  const [filterStatus, setFilterStatus] = useState("Tous"); // Filtre par statut
  const [searchTerm, setSearchTerm] = useState(""); // Recherche par titre
  const [sortByDate, setSortByDate] = useState("desc"); // Tri par date (descendant par défaut)

  const { maintenances, deleteMaintenance } = useMaintenanceStore(); // Utilisation du store
  const { equipments } = useEquipmentStore();

  // Filtrer et trier les interventions
  const filteredInterventions = maintenances
    .filter((intervention) => {
      const matchesStatus =
        filterStatus === "Tous" || intervention.status === filterStatus;
      const matchesSearch = intervention.titre
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesStatus && matchesSearch;
    })
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortByDate === "desc" ? dateB - dateA : dateA - dateB;
    });

  return (
    <div className="container">
      <h1 className="title">Liste des Interventions</h1>

      {/* Filtres */}
      <div className="filters">
        <div className="filter-group">
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
        <div className="filter-group">
          <label htmlFor="search-filter">Rechercher par titre :</label>
          <input
            id="search-filter"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Rechercher une intervention..."
            className="form-input"
          />
        </div>
        <div className="filter-group">
          <label htmlFor="sort-filter">Trier par date :</label>
          <select
            id="sort-filter"
            value={sortByDate}
            onChange={(e) => setSortByDate(e.target.value)}
            className="form-select"
          >
            <option value="desc">Plus récent</option>
            <option value="asc">Plus ancien</option>
          </select>
        </div>
      </div>

      {/* Tableau des interventions */}
      <div className="interventions-table">
        <div className="table-header">
          <span className="header-item">Titre</span>
          <span className="header-item">Équipement</span>
          <span className="header-item">Date</span>
          <span className="header-item">Statut</span>
          <span className="header-item">Action</span>
        </div>
        <ul className="interventions-list">
          {filteredInterventions.length > 0 ? (
            filteredInterventions.map((intervention) => (
              <li key={intervention.id} className="intervention-item">
                <span className="intervention-title">{intervention.titre}</span>
                <span className="intervention-equipment">
                  {equipments.find((e) => e.id === intervention.equipmentId)?.name || "Inconnu"}
                </span>
                <span className="intervention-date">{intervention.date}</span>
                <span
                  className={`intervention-status status-${intervention.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {intervention.status}
                </span>
                <button
                  onClick={() => deleteMaintenance(intervention.id)}
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

export default Interventions;