export function About() {
  const competencies = [
    "AI Workflow Automation (n8n)",
    "API Integration & Orchestration",
    "Slack & Zoho CRM Automation",
    "Python (Automation & Scripting)",
    "AWS (Lambda, Cloud Services)",
    "Data Parsing & Validation Logic",
    "Upsert Logic & Duplicate Prevention",
    "Error Handling & Workflow Resilience",
    "Research & Analytical Thinking"
  ];

  const strengths = [
    "Systems Thinking",
    "Structured Problem Solving",
    "Data Accuracy & Validation",
    "Automation Design",
    "Technical Communication",
    "Cross-Functional Collaboration"
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Core Competencies</h3>
            <div className="space-y-3">
              {competencies.map((competency, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">{competency}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Professional Strengths</h3>
            <div className="space-y-3 mb-8">
              {strengths.map((strength, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">{strength}</span>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Background</h3>
              <p className="text-slate-700 leading-relaxed">
                Strong analytical foundation from public health research and diagnostics, bringing 
                systems thinking, precision, and data discipline into automation engineering. 
                I bridge the gap between technical execution and strategic business outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
