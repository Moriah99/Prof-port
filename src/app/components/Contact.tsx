import { Mail, Linkedin, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Get In Touch</h2>
        
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-slate-200">
          <p className="text-lg text-slate-700 text-center mb-12">
            Interested in automation solutions, AI integration, or discussing opportunities? 
            I'd love to hear from you!
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <a 
                href="mailto:afolabimoriah@gmail.com"
                className="flex items-center gap-4 p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Mail className="w-6 h-6 text-blue-600 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">Email</p>
                  <p className="font-medium text-slate-900">afolabimoriah@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+2348143653698"
                className="flex items-center gap-4 p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Phone className="w-6 h-6 text-blue-600 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">Phone</p>
                  <p className="font-medium text-slate-900">+234 814 365 3698</p>
                </div>
              </a>
            </div>

            <div className="space-y-6">
              <a 
                href="https://linkedin.com/in/moriah-afolabi-87950b1b6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Linkedin className="w-6 h-6 text-blue-600 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">LinkedIn</p>
                  <p className="font-medium text-slate-900">Moriah Afolabi</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-slate-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">Location</p>
                  <p className="font-medium text-slate-900">Ibadan, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="mailto:afolabimoriah@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
            >
              <Send className="w-5 h-5" />
              Send Email
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Reference Available</h3>
          <div className="bg-slate-50 rounded-lg p-6 inline-block border border-slate-200">
            <p className="font-medium text-slate-900">Dr. Abimbola Sojimi</p>
            <p className="text-slate-700">Consultant Radiologist, Rainbow Scans, Ibadan, Nigeria</p>
            <p className="text-slate-600 mt-2">+234 803 280 2181</p>
          </div>
        </div>
      </div>
    </section>
  );
}
