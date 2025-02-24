import { useState } from "react";
import { interventions as initialData } from "../data/interventions";

const Interventions = () => {
  const [interventions, setInterventions] = useState(initialData);

  return (
    <div>
      <h2>Liste des interventions</h2>
      <ul>
        {interventions.map((intervention) => (
          <li key={intervention.id}>
            <strong>{intervention.titre}</strong> - {intervention.date} - 
            <span style={{ color: intervention.status === "En cours" ? "orange" : "green" }}>
              {intervention.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Interventions;
