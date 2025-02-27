// Home.jsx
import "./styles/Home.css";
import factoryImage from "../assets/image.jpg"; 

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Optimisez Votre Maintenance avec GMAO Pro</h1>
          <p className="hero-subtitle">
            Une solution complète pour gérer vos équipements, planifier vos interventions et améliorer votre productivité.
          </p>
          <button className="btn btn-primary">Découvrir les fonctionnalités</button>
        </div>
        <div className="hero-image">
          <img
            src={factoryImage}
            alt="Usine moderne avec technologie GMAO"
            className="factory-image"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Fonctionnalités Clés</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <div className="icon-placeholder">
                <span>Icône: Équipement industriel</span>
              </div>
            </div>
            <h3>Gestion des Équipements</h3>
            <p>Suivez et organisez tous vos actifs industriels en un seul endroit.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <div className="icon-placeholder">
                <span>Icône: Calendrier de maintenance</span>
              </div>
            </div>
            <h3>Planification</h3>
            <p>Planifiez efficacement vos interventions de maintenance préventive.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <div className="icon-placeholder">
                <span>Icône: Graphique analytique</span>
              </div>
            </div>
            <h3>Analyse et Rapports</h3>
            <p>Obtenez des insights précieux pour optimiser vos opérations.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2 className="cta-title">Prêt à transformer votre maintenance ?</h2>
        <p className="cta-text">
          Rejoignez des centaines d'entreprises qui optimisent leur GMAO avec notre solution.
        </p>
        <button className="btn btn-primary">Commencer maintenant</button>
      </section>
    </div>
  );
};

export default Home;