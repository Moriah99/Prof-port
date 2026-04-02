export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-slate-400">
          © {currentYear} Moriah Afolabi. All rights reserved.
        </p>
        <p className="text-slate-500 text-sm mt-2">
          AI Automation & Systems Engineer
        </p>
      </div>
    </footer>
  );
}
