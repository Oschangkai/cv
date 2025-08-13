// UI 翻譯字典
export const ui = {
  zh_tw: {
    // 頁面標題
    'portfolio.title': '作品集',
    
    // 區塊標題
    'about.title': '關於我',
    'experience.title': '工作經驗',
    'education.title': '教育背景', 
    'projects.title': '專案作品',
    'skills.title': '技能',
    
    // 按鈕與動作
    'language.switch': '切換語言',
    'actions.print': '列印',
    'actions.email': '發送電子郵件給',
    'actions.phone': '致電',
    'actions.visit': '前往',
    'actions.section': '操作',
    
    // 鍵盤快捷鍵
    'keyboard.hint': '按下 <kbd>Cmd</kbd> + <kbd>K</kbd> 開啟指令面板',
    'keyboard.search': '搜尋指令',
    
    // 社群媒體
    'social.visit': '前往',
    'social.section': '社群媒體',
    
    // 聯絡資訊
    'contact.email.title': '發送電子郵件給 {name}',
    'contact.phone.title': '致電給 {name}',
    'contact.profile.title': '前往 {name} 在 {network} 的個人檔案',
    
    // 專案相關
    'projects.view': '查看 {name} 專案',
    'projects.source': '查看 {name} 的原始碼',
    
    // 其他
    'loading': '載入中...',
  },
  en_us: {
    // Page title
    'portfolio.title': 'Portfolio of',
    
    // Section titles
    'about.title': 'About me',
    'experience.title': 'Work Experience',
    'education.title': 'Education',
    'projects.title': 'Projects', 
    'skills.title': 'Skills',
    
    // Buttons and actions
    'language.switch': 'Switch Language',
    'actions.print': 'Print',
    'actions.email': 'Send email to',
    'actions.phone': 'Call',
    'actions.visit': 'Visit',
    'actions.section': 'Actions',
    
    // Keyboard shortcuts
    'keyboard.hint': 'Press <kbd>Cmd</kbd> + <kbd>K</kbd> to open command palette',
    'keyboard.search': 'Search commands',
    
    // Social media
    'social.visit': 'Visit',
    'social.section': 'Social',
    
    // Contact information
    'contact.email.title': 'Send email to {name}',
    'contact.phone.title': 'Call {name}',
    'contact.profile.title': 'Visit {name} profile on {network}',
    
    // Project related
    'projects.view': 'View project {name}',
    'projects.source': 'View source code of {name}',
    
    // Other
    'loading': 'Loading...',
  },
  es_es: {
    // Page title
    'portfolio.title': 'Portafolio de',
    
    // Section titles
    'about.title': 'Sobre mí',
    'experience.title': 'Experiencia Laboral',
    'education.title': 'Educación',
    'projects.title': 'Proyectos', 
    'skills.title': 'Habilidades',
    
    // Buttons and actions
    'language.switch': 'Cambiar Idioma',
    'actions.print': 'Imprimir',
    'actions.email': 'Enviar email a',
    'actions.phone': 'Llamar',
    'actions.visit': 'Visitar',
    'actions.section': 'Acciones',
    
    // Keyboard shortcuts
    'keyboard.hint': 'Presiona <kbd>Cmd</kbd> + <kbd>K</kbd> para abrir la paleta de comandos',
    'keyboard.search': 'Buscar comandos',
    
    // Social media
    'social.visit': 'Visitar',
    'social.section': 'Social',
    
    // Contact information
    'contact.email.title': 'Enviar email a {name}',
    'contact.phone.title': 'Llamar a {name}',
    'contact.profile.title': 'Visitar perfil de {name} en {network}',
    
    // Project related
    'projects.view': 'Ver proyecto {name}',
    'projects.source': 'Ver código fuente de {name}',
    
    // Other
    'loading': 'Cargando...',
  }
} as const;

// 匯出型別定義
export type UiLang = keyof typeof ui;
export type TranslationKey = keyof typeof ui[keyof typeof ui];
