export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <span className="font-semibold text-slate-200">TechConnect</span> &middot; Build together.
        </div>
        <div className="flex items-center gap-4">
          <span>Community-driven learning</span>
          <span>•</span>
          <span>Mentorship</span>
          <span>•</span>
          <span>Career support</span>
        </div>
      </div>
    </footer>
  );
}
