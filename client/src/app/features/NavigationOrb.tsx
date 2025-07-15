import "./navigationorb.css";

const sections = [
  { id: 'about', label: '🧠 About' },
  { id: 'gallery', label: '🖼️ Gallery' },
  { id: 'projects', label: '⚙️ Projects' },
  { id: 'contact', label: '📬 Contact' },
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