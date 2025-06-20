let currentLang = 'en';
const translations = {
  en: {
    title: "🔥 Heatwave Help Bot",
    subtitle: "Stay safe during Tucson’s extreme heat.",
    quickTips: "Quick Tips",
    centers: "Cooling Centers",
    viewMap: "View Map of Tucson Cooling Centers",
    panicBtn: "🚨 Emergency? What to Do",
    aidLink: "📞 Request City Water Help",
    intro: "☀️ Hi! I'm here to help you stay cool and safe. Ask me anything about heat safety in Tucson."
  },
  es: {
    title: "🔥 Bot de Calor Extremo",
    subtitle: "Mantente seguro durante el calor extremo en Tucson.",
    quickTips: "Consejos Rápidos",
    centers: "Centros de Enfriamiento",
    viewMap: "Ver Mapa de Centros de Enfriamiento",
    panicBtn: "🚨 ¿Emergencia? Qué Hacer",
    aidLink: "📞 Solicitar Ayuda de Agua",
    intro: "☀️ ¡Hola! Estoy aquí para ayudarte a mantenerte fresco y seguro. Pregúntame sobre seguridad en el calor."
  }
};

function toggleLang() {
  currentLang = currentLang === 'en' ? 'es' : 'en';
  const strings = translations[currentLang];
  for (const key in strings) {
    const el = document.querySelector(`[data-lang="${key}"]`);
    if (el) el.textContent = strings[key];
  }
  document.getElementById('title').textContent = strings.title;
  document.getElementById('subtitle').textContent = strings.subtitle;
}
