// UI 翻譯字典
export const ui = {
  zh_tw: {
    // 頁面標題
    'portfolio.title': ' ',
    
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
    'keyboard.hint': '按下 <kbd>/</kbd> 開啟指令面板',
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
    
    // 時間格式
    'date.current': '目前',
    'date.format.year_month': '{year} 年 {month} 月',
    'date.format.year': '{year} 年',
    
    // 時間長度
    'duration.years': '{years} 年',
    'duration.months': '{months} 個月',
    'duration.years_months': '{years} 年 {months} 個月',
    'duration.less_than_month': '不到 1 個月',
    
    // 顯示更多功能
    'show_more': '顯示更多',
    'show_less': '顯示較少',

    'education.highlights_title': '經歷：',
    
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
    'keyboard.hint': 'Press <kbd>/</kbd> to open command palette',
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
    
    // Date format
    'date.current': 'Present',
    'date.format.year_month': '{month}/{year}',
    'date.format.year': '{year}',
    
    // Duration
    'duration.years': '{years} years',
    'duration.months': '{months} months',
    'duration.years_months': '{years} years {months} months',
    'duration.less_than_month': 'Less than 1 month',
    
    // Show more functionality
    'show_more': 'Show more',
    'show_less': 'Show less',
    
    'education.highlights_title': 'Experience:',
    
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
    'keyboard.hint': 'Presiona <kbd>/</kbd> para abrir la paleta de comandos',
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
    
    // Date format
    'date.current': 'Presente',
    'date.format.year_month': '{month}/{year}',
    'date.format.year': '{year}',
    
    // Duration
    'duration.years': '{years} años',
    'duration.months': '{months} meses',
    'duration.years_months': '{years} años {months} meses',
    'duration.less_than_month': 'Menos de 1 mes',
    
    // Show more functionality
    'show_more': 'Mostrar más',
    'show_less': 'Mostrar menos',
    
    'education.highlights_title': 'Experiencia:',
    
    // Other
    'loading': 'Cargando...',
  }
} as const;

// 匯出型別定義
export type UiLang = keyof typeof ui;
export type TranslationKey = keyof typeof ui[keyof typeof ui];
