import { useState } from "react";
import useMaintenanceStore from "../Store/useMaintenanceStore";
import useEquipmentStore from "../Store/useEquipmentStore";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

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
    <Container>
      <h1 className="text-center my-4">Gestion des Interventions</h1>
      
      <Form className="mb-3 d-flex">
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Nom de l’intervention"
        />
        <Form.Select value={equipmentId} onChange={(e) => setEquipmentId(e.target.value)}>
          <option value="">Sélectionner un équipement</option>
          {equipments.map((eq) => (
            <option key={eq.id} value={eq.id}>{eq.name}</option>
          ))}
        </Form.Select>
        <Button variant="primary" onClick={handleAdd} className="ms-2">Ajouter</Button>
      </Form>

      <Row>
        {maintenances.map((m) => (
          <Col md={4} key={m.id} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{m.title}</Card.Title>
                <Card.Text>
                  Équipement : {equipments.find((e) => e.id === m.equipmentId)?.name || "Inconnu"}
                </Card.Text>
                <Button variant="danger" onClick={() => deleteMaintenance(m.id)}>Supprimer</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Maintenance;
