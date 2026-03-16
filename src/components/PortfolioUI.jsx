import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next"; // Imported the translation hook

const PortfolioUI = () => {
  // Initialize the translation hook
  const { t, i18n } = useTranslation();

  // State to track the currently open application
  const [activeApp, setActiveApp] = useState(null);

  // Real-time clock state for the taskbar
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update the clock every minute
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // Language toggle handler
  const toggleLanguage = () => {
    const nextLang = i18n.language === "tr" ? "en" : "tr";
    i18n.changeLanguage(nextLang);
  };

  // Desktop applications configuration (Now using dynamic translations)
  const apps = [
    {
      id: "about",
      label: t("desktop.about"),
      icon: "👤",
      color: "bg-blue-500",
    },
    {
      id: "skills",
      label: t("desktop.skills"),
      icon: "⚡",
      color: "bg-yellow-500",
    },
    {
      id: "projects",
      label: t("desktop.projects"),
      icon: "📁",
      color: "bg-green-500",
    },
    {
      id: "aimtest",
      label: t("desktop.aimtest"),
      icon: "🎯",
      color: "bg-red-500",
    },
  ];

  return (
    // Main OS Desktop Container
    <div className="w-5xl h-160 bg-slate-800 relative overflow-hidden font-sans select-none text-white shadow-[0_0_10px_rgba(0,0,0,0.5)] bg-[url('/wallpaper.jpg')] bg-cover bg-center bg-no-repeat">
      {/* 🌟 DESKTOP ICONS (Grid Layout) */}
      <div className="absolute inset-0 p-6 flex flex-col flex-wrap gap-6 content-start z-10">
        {apps.map((app) => (
          <button
            key={app.id}
            onDoubleClick={() => setActiveApp(app.id)}
            className="group flex flex-col items-center gap-2 w-20 hover:bg-white/10 p-2 rounded-lg transition-colors focus:bg-white/20 outline-none"
          >
            <div
              className={`w-12 h-12 ${app.color} rounded-xl shadow-lg flex items-center justify-center text-2xl group-active:scale-95 transition-transform`}
            >
              {app.icon}
            </div>
            <span className="text-xs font-medium text-slate-100 drop-shadow-md text-center">
              {app.label}
            </span>
          </button>
        ))}
      </div>

      {/* 🌟 WINDOW MANAGER (Renders the active application window) */}
      <AnimatePresence>
        {activeApp && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
            className="absolute inset-x-20 inset-y-10 bg-slate-50 rounded-lg shadow-2xl flex flex-col overflow-hidden z-30 border border-slate-300"
          >
            {/* Window Title Bar */}
            <div className="h-10 bg-slate-200 flex items-center justify-between px-4 border-b border-slate-300">
              <div className="flex items-center gap-2">
                <span className="text-xl">
                  {apps.find((a) => a.id === activeApp)?.icon}
                </span>
                <span className="text-sm font-semibold text-slate-700">
                  {apps.find((a) => a.id === activeApp)?.label}
                </span>
              </div>

              {/* Window Close Button */}
              <button
                onClick={() => setActiveApp(null)}
                className="w-4 h-4 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center group"
              >
                <span className="text-[10px] text-red-900 opacity-0 group-hover:opacity-100 font-bold">
                  ✕
                </span>
              </button>
            </div>

            {/* Window Content Area */}
            <div className="flex-1 overflow-y-auto p-8 text-slate-800">
              {/* About Section */}
              {activeApp === "about" && (
                <div>
                  <h1 className="text-3xl font-bold mb-4">
                    {t("about.title")}
                  </h1>
                  <p className="text-lg text-slate-600 mb-6">
                    {t("about.description")}
                  </p>
                </div>
              )}

              {/* Skills Section */}
              {activeApp === "skills" && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    {t("skills.title")}
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded border shadow-sm">
                      <h3 className="font-bold text-blue-600 mb-2">
                        {t("skills.backend_title")}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {t("skills.backend_desc")}
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded border shadow-sm">
                      <h3 className="font-bold text-blue-600 mb-2">
                        {t("skills.frontend_title")}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {t("skills.frontend_desc")}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Projects Section */}
              {activeApp === "projects" && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    {t("projects.title")}
                  </h2>
                  <div className="bg-white p-4 rounded border shadow-sm mb-4">
                    <h3 className="font-bold text-slate-800">
                      {t("projects.p1_title")}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                      {t("projects.p1_desc")}
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded border shadow-sm">
                    <h3 className="font-bold text-slate-800">
                      {t("projects.p2_title")}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                      {t("projects.p2_desc")}
                    </p>
                  </div>
                </div>
              )}

              {/* Aim Test Easter Egg Section */}
              {activeApp === "aimtest" && (
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <h2 className="text-2xl font-bold mb-2">
                    {t("aimtest.title")}
                  </h2>
                  <p className="text-slate-500 mb-6">{t("aimtest.loading")}</p>
                  <div className="w-16 h-16 border-4 border-dashed border-slate-300 rounded-full animate-spin"></div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🌟 TASKBAR (Bottom Navigation) */}
      <div className="absolute bottom-0 w-full h-12 bg-slate-900/80 backdrop-blur-md flex items-center justify-between px-4 z-40 border-t border-slate-700">
        <div className="flex items-center gap-2">
          {/* Start Menu Button equivalent */}
          <button className="px-3 py-1 bg-blue-600 text-white text-sm font-bold rounded hover:bg-blue-500 transition-colors">
            {t("taskbar.start")}
          </button>

          {/* Currently open app indicator */}
          {activeApp && (
            <div className="px-3 py-1 bg-white/10 text-white text-sm font-medium rounded flex items-center gap-2">
              <span>{apps.find((a) => a.id === activeApp)?.icon}</span>
              {apps.find((a) => a.id === activeApp)?.label}
            </div>
          )}
        </div>

        {/* Right side: Language Toggle and Clock */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="px-2 py-1 rounded bg-slate-700 hover:bg-slate-600 text-xs font-bold text-white transition-colors uppercase"
            aria-label="Toggle Language"
          >
            {i18n.language}
          </button>
          <div className="text-sm text-slate-300 font-mono">
            {currentTime.toLocaleTimeString(
              i18n.language === "tr" ? "tr-TR" : "en-US",
              { hour: "2-digit", minute: "2-digit" },
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioUI;
