import "./navigationorb.css";

const sections = [
  { id: 'monkeypod', label: 'Trees' },
  { id: 'sky', label: 'Sky' },
  { id: 'city', label: 'City' },
  { id: 'chicago-city', label: 'Chicago City' },
];

export default function NavigationOrb() {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="nav-orb">
        <div className="orb-icon">☰</div>
        <div className="orb-panel">
            {sections.map((section) => (
            <div
                key={section.id}
                className="nav-item"
                onClick={() => scrollToSection(section.id)}
            >
                {section.label}
            </div>
            ))}
        </div>
        </div>
    )
}