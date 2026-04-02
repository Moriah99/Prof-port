export function Skills() {
  const skillCategories = [
    {
      category: "Automation & Integration",
      skills: ["n8n", "Slack API", "Zoho CRM API", "Google APIs", "REST APIs"]
    },
    {
      category: "Programming & Cloud",
      skills: ["Python", "AWS Lambda", "Cloud Services", "Automation Scripting"]
    },
    {
      category: "Data & Analytics",
      skills: ["Data Parsing", "Validation Logic", "Predictive Modeling", "Data Engineering"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Microsoft Office Suite", "Workflow Optimization", "Error Handling"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">{category.category}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="text-slate-300">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
