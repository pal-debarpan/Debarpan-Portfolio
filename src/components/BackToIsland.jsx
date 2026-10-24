import { Link, useLocation } from "react-router-dom";

const BackToIsland = () => {
  const location = useLocation();

  return (
    <Link
      to="/"
      state={{
        returnStage: location.state?.returnStage,
        guideDismissed: location.state?.guideDismissed,
      }}
      className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/80 px-3.5 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:-translate-x-0.5 hover:border-blue-200 hover:text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      aria-label="Back to the interactive island"
    >
      <span aria-hidden="true">←</span>
      Back to island
    </Link>
  );
};

export default BackToIsland;
