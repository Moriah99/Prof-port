import { Code2, ExternalLink, CheckCircle } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "AI Automation Workflow with Multi-Platform API Orchestration",
      description: "Engineered a comprehensive automation solution bridging conversational data with structured CRM systems, featuring complex API orchestration across multiple platforms including Slack, Zoho CRM, and Google APIs.",
      technologies: ["n8n", "Slack API", "Zoho CRM API", "REST APIs", "Python", "OAuth 2.0", "Google APIs"],
      features: [
        "Event-driven automation system using n8n workflows",
        "Parsed conversational Slack messages into structured CRM fields",
        "Search-before-create (upsert) logic to prevent duplicates",
        "Cross-platform data synchronization and real-time webhook processing",
        "Validation branches, error-handling flows, and automated confirmation feedback loops",
        "Rate limiting and error retry logic with automated token management"
      ],
      impact: "Reduced manual CRM data entry time by 80%, unified data across 5+ platforms, and improved data consistency across the organization",
      link: "https://drive.google.com/file/d/157ctqHd4tyg59l4AaYwrwP3qHkizTC8y/view?usp=sharing"
    },
    {
      title: "Frontend Development & Landing Pages",
      description: "Designed and developed responsive, modern landing pages and websites using React and contemporary frontend technologies, focusing on clean UI/UX and performance optimization.",
      technologies: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
      features: [
        "Fully responsive designs optimized for all devices",
        "Modern component-based architecture with React",
        "Performance-optimized with fast load times",
        "Clean, professional UI with attention to detail",
        "Cross-browser compatibility and accessibility standards"
      ],
      impact: "Delivered professional web solutions with modern design principles and excellent user experience",
      link: "https://landing-page-six-beta-93.vercel.app/"
    },
    {
      title: "Excel & Data Management Solutions",
      description: "Specialized in advanced Excel operations, data entry automation, and spreadsheet optimization with deep understanding of data structures, formulas, and efficient data management workflows.",
      technologies: ["Microsoft Excel", "Google Sheets", "Data Analysis", "VBA", "Power Query", "Pivot Tables"],
      features: [
        "Advanced Excel formulas and functions (VLOOKUP, INDEX-MATCH, complex nested formulas)",
        "Data validation, cleaning, and standardization processes",
        "Automated data entry workflows and template creation",
        "Pivot tables, charts, and dashboard creation for data visualization",
        "Large dataset management with performance optimization",
        "Data migration and transformation between different formats"
      ],
      impact: "Streamlined data entry processes by 70%, improved data accuracy, and created efficient spreadsheet systems for business operations"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Automation Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-200 hover:shadow-xl transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code2 className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                </div>
              </div>
              
              <p className="text-slate-700 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Key Features
                </h4>
                <ul className="space-y-1.5">
                  {project.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="text-blue-600 mt-0.5">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-white border border-blue-200 rounded-md text-xs font-medium text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                <p className="text-sm text-slate-700">
                  <span className="font-semibold text-slate-900">Impact:</span> {project.impact}
                </p>
              </div>

              {project.link && (
                <a 
                  href={project.link}
                  target={project.link.startsWith('http') ? '_blank' : '_self'}
                  rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors group-hover:shadow-lg"
                >
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 italic">
            More projects available upon request. Contact me to discuss specific automation solutions.
          </p>
        </div>
      </div>
    </section>
  );
}