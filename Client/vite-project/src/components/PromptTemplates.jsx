const templates = [
  {
    id: 1,
    icon: "💼",
    title: "Portfolio",
    prompt:
      "Create a modern professional portfolio website for a MERN Stack developer. Include a hero section, about section, skills, projects, experience, and contact section.",
  },
  {
    id: 2,
    icon: "🏢",
    title: "Business",
    prompt:
      "Create a professional business website for a modern technology company. Include a navbar, hero section, services, about us, testimonials, pricing, and contact section.",
  },
  {
    id: 3,
    icon: "🛒",
    title: "E-Commerce",
    prompt:
      "Create a modern e-commerce website with a navbar, product cards, product categories, search bar, shopping cart, offers section, and footer.",
  },
  {
    id: 4,
    icon: "🍔",
    title: "Restaurant",
    prompt:
      "Create a beautiful modern restaurant website with a hero section, menu, popular dishes, about section, testimonials, reservation section, and contact information.",
  },
  {
    id: 5,
    icon: "📚",
    title: "Education",
    prompt:
      "Create a modern education platform website with courses, instructors, categories, student testimonials, pricing plans, and a contact section.",
  },
  {
    id: 6,
    icon: "🎨",
    title: "Landing Page",
    prompt:
      "Create a modern high-converting landing page for a SaaS product. Include a navbar, hero section, features, benefits, testimonials, pricing, FAQ, and call-to-action section.",
  },
];

function PromptTemplates({ onSelect }) {
  return (
    <div className="templates-section">
      <div className="templates-header">
        <h3>Quick Templates</h3>
        <p>Start with a ready-made website idea.</p>
      </div>

      <div className="templates-grid">
        {templates.map((template) => (
          <button
            key={template.id}
            className="template-card"
            onClick={() => onSelect(template.prompt)}
          >
            <span className="template-icon">
              {template.icon}
            </span>

            <span className="template-title">
              {template.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default PromptTemplates;