// Equipments.jsx
import { useState } from "react";
import useEquipmentStore from "../Store/useEquipmentStore";
import "./styles/Equipments.css";

const Equipments = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState(""); // Nouvelle donnée : localisation
  const [status, setStatus] = useState("Opérationnel"); // Nouvelle donnée : état
  const [searchTerm, setSearchTerm] = useState(""); // Filtre de recherche
  const { equipments, addEquipment, deleteEquipment } = useEquipmentStore();

  const handleAdd = () => {
    if (!name || !location) return; // Vérifie les champs obligatoires
    addEquipment({ id: Date.now(), name, location, status, interventions: 0 }); // Ajoute interventions
    setName("");
    setLocation("");
    setStatus("Opérationnel");
  };

  // Filtrer les équipements par nom
  const filteredEquipments = equipments.filter((eq) =>
    eq.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="title">Gestion des Équipements</h1>

      {/* Formulaire d’ajout */}
      <div className="equipment-form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nom de l’équipement"
          className="form-input"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Localisation (ex. Atelier 1)"
          className="form-input"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="form-select"
        >
          <option value="Opérationnel">Opérationnel</option>
          <option value="En panne">En panne</option>
          <option value="Maintenance">Maintenance</option>
        </select>
        <button onClick={handleAdd} className="btn btn-primary">
          Ajouter
        </button>
      </div>

      {/* Filtre de recherche */}
      <div className="search-filter">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Rechercher un équipement..."
          className="form-input"
        />
      </div>

      {/* Tableau des équipements */}
      <div className="equipments-table">
        <div className="table-header">
          <span className="header-item">Nom</span>
          <span className="header-item">Localisation</span>
          <span className="header-item">État</span>
          <span className="header-item">Interventions</span>
          <span className="header-item">Action</span>
        </div>
        <ul className="equipments-list">
          {filteredEquipments.length > 0 ? (
            filteredEquipments.map((eq) => (
              <li key={eq.id} className="equipment-item">
                <span className="equipment-name">{eq.name}</span>
                <span className="equipment-location">{eq.location}</span>
                <span
                  className={`equipment-status status-${eq.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {eq.status}
                </span>
                <span className="equipment-interventions">{eq.interventions}</span>
                <button
                  onClick={() => deleteEquipment(eq.id)}
                  className="btn btn-delete"
                >
                  ×
                </button>
              </li>
            ))
          ) : (
            <li className="no-results">Aucun équipement trouvé</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Equipments;