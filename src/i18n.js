import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// --------------------------------------------------------
// 🌐 TRANSLATION DICTIONARIES
// Contains all text content for the BioOS interface.
// --------------------------------------------------------
const resources = {
    en: {
        translation: {
            desktop: {
                about: "About Me",
                skills: "Skills",
                projects: "Projects",
                aimtest: "Aim Test"
            },
            taskbar: {
                start: "BioOS"
            },
            about: {
                title: "Welcome to BioOS System",
                description: "I am a Full Stack Developer specializing in modern web technologies and system architectures. This desktop experience was designed to showcase my projects."
            },
            skills: {
                title: "System Hardware (Skills)",
                backend_title: "Backend Core",
                backend_desc: "C#, .NET Core, SignalR, Microservices",
                frontend_title: "Interface Modules",
                frontend_desc: "React, Three.js, Tailwind CSS"
            },
            projects: {
                title: "Executed Projects",
                p1_title: "Mülküm (Nexus)",
                p1_desc: "AI-supported real estate and vehicle tracking/asset management platform.",
                p2_title: "SignalR Telemetry Hub",
                p2_desc: "Real-time data collection system working with a Prometheus-like pull-model architecture."
            },
            aimtest: {
                title: "CS: Aim Training",
                loading: "Loading assets..."
            }
        }
    },
    tr: {
        translation: {
            desktop: {
                about: "Hakkımda",
                skills: "Yetenekler",
                projects: "Projeler",
                aimtest: "Aim Test"
            },
            taskbar: {
                start: "BioOS"
            },
            about: {
                title: "BioOS Sistemine Hoş Geldiniz",
                description: "Ben modern web teknolojileri ve sistem mimarileri üzerine uzmanlaşmış bir Full Stack Geliştiriciyim. Bu masaüstü deneyimi, projelerimi sergilemek için tasarlandı."
            },
            skills: {
                title: "Sistem Donanımı (Yetenekler)",
                backend_title: "Backend Çekirdeği",
                backend_desc: "C#, .NET Core, SignalR, Microservices",
                frontend_title: "Arayüz Modülleri",
                frontend_desc: "React, Three.js, Tailwind CSS"
            },
            projects: {
                title: "Çalıştırılan Projeler",
                p1_title: "Mülküm (Nexus)",
                p1_desc: "Yapay zeka destekli gayrimenkul ve araç takip/varlık yönetim platformu.",
                p2_title: "SignalR Telemetry Hub",
                p2_desc: "Prometheus benzeri pull-model mimarisiyle çalışan gerçek zamanlı veri toplama sistemi."
            },
            aimtest: {
                title: "CS: Aim Antrenmanı",
                loading: "Yükleniyor..."
            }
        }
    }
};

i18n
    .use(initReactI18next) // Passes i18n down to react-i18next
    .init({
        resources,
        lng: "tr", // Initial default language
        fallbackLng: "en", // Fallback language if translation is missing
        interpolation: {
            escapeValue: false // React already escapes by default
        }
    });

export default i18n;