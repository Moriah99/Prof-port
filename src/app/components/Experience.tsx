import { Calendar, MapPin } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      role: "AI & Data Project Intern / Automation Engineer",
      company: "Alluvium",
      location: "Remote",
      period: "Feb 2024 – Present",
      achievements: [
        "Designed and deployed automation workflows using n8n integrating Slack and Zoho CRM",
        "Built event-driven pipelines that transformed unstructured Slack inputs into structured CRM records",
        "Implemented validation logic, duplicate detection, and API-based upsert workflows",
        "Developed predictive models using Python",
        "Debugged and deployed AWS Lambda functions",
        "Contributed to data engineering pipelines and workflow optimization"
      ]
    },
    {
      role: "Research & Writing Assistant",
      company: "University of Ibadan",
      location: "Ibadan, Nigeria",
      period: "Apr 2023 – Present",
      achievements: [
        "Conducted structured data analysis and literature synthesis for public health research",
        "Designed survey tools and data collection frameworks",
        "Produced technical reports and presentations for academic and policy stakeholders"
      ]
    },
    {
      role: "Clinical Physiologist",
      company: "Rainbow Scan Diagnostic Centre",
      location: "Ibadan, Nigeria",
      period: "Mar 2022 – Apr 2023",
      achievements: [
        "Operated and calibrated ECG/EEG diagnostic equipment",
        "Analyzed patient data to support clinical decision-making",
        "Maintained high data accuracy and procedural precision in high-stakes environments"
      ]
    },
    {
      role: "Clinical Physiologist",
      company: "University College Hospital (UCH)",
      location: "Ibadan, Nigeria",
      period: "Aug 2018 – Sep 2019",
      achievements: [
        "Operated diagnostic equipment with precision and accuracy",
        "Supported clinical teams with reliable data analysis",
        "Demonstrated reliability in structured, high-pressure medical environments"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Professional Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">{exp.role}</h3>
                  <p className="text-xl text-blue-600 font-medium mt-1">{exp.company}</p>
                </div>
                <div className="flex flex-col gap-2 text-slate-600 md:text-right">
                  <div className="flex items-center gap-2 md:justify-end">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 md:justify-end">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-2 mt-6">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
