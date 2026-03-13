import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const PortfolioUI = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "Hakkımda" },
    { id: "skills", label: "Yetenekler" },
    { id: "projects", label: "Projeler" },
  ];

  // Framer Motion için animasyon ayarları (Yukarıdan aşağı kayma ve fade)
  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -15 },
  };

  const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.3,
  };

  return (
    <div className="w-5xl h-160 bg-slate-50 rounded-md overflow-hidden flex flex-col pointer-events-auto shadow-[0_0_10px_rgba(0,0,0,0.5)] font-sans">
      {/* Tarayıcı Üst Barı ve Sekmeler */}
      <div className="bg-slate-800 flex flex-col z-10">
        <div className="h-10 flex items-center px-4 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <div className="flex-1 ml-4 bg-slate-700 rounded text-xs px-2 py-1 text-slate-300 text-center font-mono select-none">
            bio-os.local/{activeTab}
          </div>
        </div>

        <div className="flex px-2 mt-1 gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium rounded-t-md transition-colors relative ${
                activeTab === tab.id
                  ? "bg-slate-50 text-slate-900"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* İçerik Alanı - Animasyonlu Kısım */}
      <div className="flex-1 relative overflow-hidden bg-slate-50 text-slate-800">
        {/* AnimatePresence, bileşenler DOM'dan silinirken de animasyon oynamasını sağlar */}
        <AnimatePresence mode="wait">
          {activeTab === "about" && (
            <motion.div
              key="about"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              className="absolute inset-0 p-8 overflow-y-auto"
            >
              <h1 className="text-4xl font-bold mb-4 text-slate-900">
                Merhaba, Hoş Geldiniz!
              </h1>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Modern web teknolojileri ve ölçeklenebilir sistem mimarileri
                üzerine uzmanlaşmış bir Full Stack Geliştiriciyim. Sağlam
                backend yapılarından pürüzsüz frontend deneyimlerine kadar uçtan
                uca çözümler üretiyorum.
              </p>
              <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-blue-800">
                Şu anda <strong>BioOS</strong> masaüstü ortamında
                gezinmektesiniz. Diğer sekmelerden yeteneklerimi ve projelerimi
                inceleyebilirsiniz.
              </div>
            </motion.div>
          )}

          {activeTab === "skills" && (
            <motion.div
              key="skills"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              className="absolute inset-0 p-8 overflow-y-auto"
            >
              <h2 className="text-3xl font-bold mb-6 text-slate-900">
                Teknik Yetkinlikler
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-xl mb-3 border-b pb-2">
                    Backend & Mimari
                  </h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• C# & .NET Core</li>
                    <li>• SignalR (Real-time & Pull-model İletişim)</li>
                    <li>• Sistem Mimarisi Tasarımı</li>
                    <li>• API Geliştirme & Entegrasyon</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3 border-b pb-2">
                    Frontend & UI/UX
                  </h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• JavaScript / React</li>
                    <li>• Three.js & R3F (3D Web)</li>
                    <li>• Tailwind CSS</li>
                    <li>• Dinamik Form Validasyonları</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "projects" && (
            <motion.div
              key="projects"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              className="absolute inset-0 p-8 overflow-y-auto"
            >
              <h2 className="text-3xl font-bold mb-6 text-slate-900">
                Öne Çıkan Projeler
              </h2>

              <div className="p-5 border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow mb-4">
                <h3 className="text-xl font-bold text-blue-600">
                  Mülküm (Nexus)
                </h3>
                <p className="text-slate-600 mt-2 text-sm">
                  Gayrimenkul ve araç takip/varlık yönetim platformu. Yapay zeka
                  destekli güncel değer tahmini, kiralama sözleşmeleri yönetimi
                  ve detaylı satın alma geçmişi takibi özelliklerini barındırır.
                </p>
                <div className="mt-3 flex gap-2">
                  <span className="px-2 py-1 bg-slate-100 text-xs rounded font-mono">
                    .NET
                  </span>
                  <span className="px-2 py-1 bg-slate-100 text-xs rounded font-mono">
                    AI Integration
                  </span>
                </div>
              </div>

              <div className="p-5 border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow mb-4">
                <h3 className="text-xl font-bold text-blue-600">
                  SignalR Telemetry Hub
                </h3>
                <p className="text-slate-600 mt-2 text-sm">
                  Prometheus benzeri pull-model mimarisiyle çalışan, sunucular
                  arası gerçek zamanlı veri toplama ve bağlantı yönetimi
                  (TenantHub, InsightHub) sistemi.
                </p>
                <div className="mt-3 flex gap-2">
                  <span className="px-2 py-1 bg-slate-100 text-xs rounded font-mono">
                    C#
                  </span>
                  <span className="px-2 py-1 bg-slate-100 text-xs rounded font-mono">
                    SignalR
                  </span>
                </div>
              </div>

              <div className="p-5 border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow mb-4">
                <h3 className="text-xl font-bold text-blue-600">
                  HTML to PDF Render Engine
                </h3>
                <p className="text-slate-600 mt-2 text-sm">
                  Çoklu HTML dosyalarını birleştirip, page-break ve özel print
                  CSS ayarlarını koruyarak baskıya hazır hale getiren özel C#
                  modülü.
                </p>
                <div className="mt-3 flex gap-2">
                  <span className="px-2 py-1 bg-slate-100 text-xs rounded font-mono">
                    C#
                  </span>
                  <span className="px-2 py-1 bg-slate-100 text-xs rounded font-mono">
                    CSS Print
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PortfolioUI;
