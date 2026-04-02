import { GraduationCap, Award } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: "M.Sc. Public Health",
      specialization: "Reproductive & Family Health",
      institution: "University of Ibadan",
      period: "2023 – 2025",
      thesis: "Paternal Involvement in Complementary Feeding (Ongoing)"
    },
    {
      degree: "B.Sc. Physiology",
      specialization: "",
      institution: "University of Medical Sciences, Ondo State",
      period: "2019",
      thesis: ""
    }
  ];

  const certifications = [
    {
      title: "Project Management",
      provider: "Udemy",
      year: "2024"
    },
    {
      title: "Cybersecurity",
      provider: "Simplilearn",
      year: "2024"
    },
    {
      title: "ECG Technician Training",
      provider: "UCH Ibadan",
      year: "2018"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Education & Certifications</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-blue-600" />
              <h3 className="text-2xl font-semibold text-slate-900">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                  <h4 className="text-xl font-semibold text-slate-900">{edu.degree}</h4>
                  {edu.specialization && (
                    <p className="text-blue-600 mt-1">{edu.specialization}</p>
                  )}
                  <p className="text-slate-700 mt-2">{edu.institution}</p>
                  <p className="text-slate-600 text-sm mt-1">{edu.period}</p>
                  {edu.thesis && (
                    <p className="text-slate-600 text-sm mt-3 italic">Thesis: {edu.thesis}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-blue-600" />
              <h3 className="text-2xl font-semibold text-slate-900">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                  <h4 className="text-lg font-semibold text-slate-900">{cert.title}</h4>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-slate-700">{cert.provider}</p>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {cert.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
