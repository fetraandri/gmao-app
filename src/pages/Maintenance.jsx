import useMaintenanceStore from "../Store/useMaintenanceStore";

const Maintenance = () => {
  const { maintenances, addMaintenance } = useMaintenanceStore();

  const handleAdd = () => {
    addMaintenance({ id: Date.now(), title: "Révision moteur" });
  };

  return (
    <div>
      <h1>Maintenance</h1>
      <button onClick={handleAdd}>Ajouter une maintenance</button>
      <ul>
        {maintenances.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Maintenance;
