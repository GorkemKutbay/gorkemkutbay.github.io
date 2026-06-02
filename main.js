// --- CURSOR GLOW ---
const glow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

// --- i18n DATA ---
const translations = {
  tr: {
    'nav.projects': 'Projeler',
    'nav.skills': 'Yetenekler',
    'nav.contact': 'İletişim',
    'hero.tag': 'Software Developer',
    'hero.greeting': 'Merhaba, ben',
    'hero.desc': '<span>.NET</span> ve <span>C#</span> ile backend sistemler geliştiriyorum. Temiz mimari, katmanlı yapılar ve sürdürülebilir kod yazmaktan keyif alıyorum.',
    'hero.cta1': 'Projeleri Gör',
    'hero.cta2': 'İletişime Geç',
    'hero.scroll': 'aşağı kaydır',
    'projects.label': '// projeler',
    'projects.title': 'Ne Yaptım?',
    'skills.label': '// teknolojiler',
    'skills.title': 'Yetenekler',
    'contact.label': '// iletişim',
    'contact.title': 'Bana Ulaş',
    'contact.desc': 'Bir proje fikrin mi var, iş birliği yapmak mı istiyorsun, yoksa sadece merhaba demek mi? Her zaman açığım.',
    'contact.email': 'E-posta',
    'footer.made': 'Sevgiyle yapıldı',
  },
  en: {
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'hero.tag': 'Software Developer',
    'hero.greeting': "Hi, I'm",
    'hero.desc': 'I build backend systems with <span>.NET</span> and <span>C#</span>. I enjoy clean architecture, layered design patterns, and writing maintainable code.',
    'hero.cta1': 'View Projects',
    'hero.cta2': 'Get in Touch',
    'hero.scroll': 'scroll down',
    'projects.label': '// projects',
    'projects.title': 'What Have I Built?',
    'skills.label': '// technologies',
    'skills.title': 'Skills',
    'contact.label': '// contact',
    'contact.title': 'Get In Touch',
    'contact.desc': "Have a project idea, want to collaborate, or just want to say hello? I'm always open.",
    'contact.email': 'Email',
    'footer.made': 'Made with love',
  }
};

// --- PROJECTS DATA ---
const projectsData = {
  tr: [
    {
      icon: '🚗',
      name: 'CarRentalSystem',
      badge: 'N-Tier',
      shortDesc: '.NET 8 ile geliştirilen N-Tier mimarisine sahip araç kiralama sistemi.',
      desc: '.NET 8 ve C# kullanılarak geliştirilen N-Tier mimarisine sahip kapsamlı bir araç kiralama uygulamasıdır. Entity, DataAccess, Business ve MVC katmanlarından oluşur. Entity Framework Core ile SQL Server veritabanı yönetimi sağlanır.',
      features: [
        'N-Tier (Çok katmanlı) mimari yapısı',
        'Entity Framework Core ile veritabanı yönetimi',
        'Repository Pattern ile veri erişim katmanı',
        'ASP.NET MVC ile kullanıcı arayüzü',
        'Araç listeleme, rezervasyon ve yönetim ekranları',
        'SQL Server veritabanı entegrasyonu',
      ],
      tags: ['.NET 8', 'C#', 'N-Tier', 'MVC', 'EF Core', 'SQL Server'],
      github: 'https://github.com/GorkemKutbay/CarRentalSystem',
    },
    {
      icon: '🍽️',
      name: 'RestaurantApp',
      badge: 'MVC',
      shortDesc: '.NET MVC ile geliştirilmiş restoran yönetim ve sipariş uygulaması.',
      desc: 'ASP.NET MVC kullanılarak geliştirilen restoran yönetim uygulamasıdır. Menü yönetimi, sipariş takibi ve admin paneli içerir. Özel "Feane" teması ile tasarlanmış, koyu tonlu gold aksan renk paleti kullanan modern bir arayüze sahiptir.',
      features: [
        'Restoran menü yönetimi (CRUD işlemleri)',
        'Özel tasarımlı admin paneli',
        'Koyu tema + gold aksanlı premium UI',
        'Entity Framework Core ile veritabanı',
        'Ürün listeleme ve yönetim ekranları',
        'Duyarlı (responsive) tasarım',
      ],
      tags: ['ASP.NET MVC', 'C#', 'EF Core', 'SQL Server', 'Bootstrap'],
      github: 'https://github.com/GorkemKutbay/RestaurantApp',
    },
    {
      icon: '✅',
      name: 'ToDoApp',
      badge: 'Full-Stack',
      shortDesc: 'Kullanıcı bazlı görev yönetimi için geliştirilmiş full-stack ToDo uygulaması.',
      desc: 'ASP.NET MVC ile geliştirilmiş, kullanıcı kimlik doğrulama ve yetkilendirme içeren full-stack görev yönetimi uygulamasıdır. Her kullanıcı yalnızca kendi görevlerini görebilir ve yönetebilir. Frontend geliştirmede AI araçlarından yararlanılmıştır.',
      features: [
        'Kullanıcı kayıt ve giriş sistemi (ASP.NET Identity)',
        'Kullanıcıya özel görev erişim kontrolü',
        'Görev oluşturma, düzenleme ve silme',
        'Tamamlanma durumu takibi',
        'Güvenli veri erişimi (UserId filtreleme)',
        'AI destekli frontend geliştirme',
      ],
      tags: ['ASP.NET MVC', 'C#', 'Identity', 'EF Core', 'SQL Server'],
      github: 'https://github.com/GorkemKutbay/ToDoApp',
    },
    {
      icon: '🛍️',
      name: 'eTicaretUygulaması',
      badge: 'E-Commerce',
      shortDesc: '.NET ile geliştirilmiş kapsamlı e-ticaret platformu ve yönetim sistemi.',
      desc: 'ASP.NET MVC kullanılarak geliştirilen, ürün yönetimi, sepet işlemleri ve admin paneli içeren tam kapsamlı e-ticaret uygulamasıdır. Modern tasarım, güvenli ödeme entegrasyonu ve gelişmiş arama/filtreleme özellikleri sunar.',
      features: [
        'Ürün katalog ve yönetim sistemi (CRUD)',
        'Alışveriş sepeti ve ödeme işlemleri',
        'Kullanıcı hesap yönetimi ve sipariş takibi',
        'Admin paneli ile satış yönetimi',
        'Gelişmiş arama ve kategori filtreleme',
        'Entity Framework Core ile veritabanı',
      ],
      tags: ['ASP.NET MVC', 'C#', 'EF Core', 'SQL Server', 'Bootstrap', 'E-Commerce'],
      github: 'https://github.com/GorkemKutbay/eTicaretUygulamasi',
    },
  ],
  en: [
    {
      icon: '🚗',
      name: 'CarRentalSystem',
      badge: 'N-Tier',
      shortDesc: 'A car rental system built with .NET 8 using N-Tier Architecture.',
      desc: 'A comprehensive car rental application built with .NET 8 and C# using N-Tier Architecture. Consists of Entity, DataAccess, Business, and MVC layers. Database management is handled with Entity Framework Core and SQL Server.',
      features: [
        'N-Tier (Multi-layered) architecture',
        'Database management with Entity Framework Core',
        'Data access layer with Repository Pattern',
        'User interface with ASP.NET MVC',
        'Vehicle listing, reservation and management screens',
        'SQL Server database integration',
      ],
      tags: ['.NET 8', 'C#', 'N-Tier', 'MVC', 'EF Core', 'SQL Server'],
      github: 'https://github.com/GorkemKutbay/CarRentalSystem',
    },
    {
      icon: '🍽️',
      name: 'RestaurantApp',
      badge: 'MVC',
      shortDesc: 'A restaurant management and ordering app built with .NET MVC.',
      desc: 'A restaurant management application developed with ASP.NET MVC. Includes menu management, order tracking, and an admin panel. Features a modern UI with a custom "Feane" theme using a dark tone and gold accent color palette.',
      features: [
        'Restaurant menu management (CRUD operations)',
        'Custom-designed admin panel',
        'Dark theme + gold accent premium UI',
        'Database with Entity Framework Core',
        'Product listing and management screens',
        'Responsive design',
      ],
      tags: ['ASP.NET MVC', 'C#', 'EF Core', 'SQL Server', 'Bootstrap'],
      github: 'https://github.com/GorkemKutbay/RestaurantApp',
    },
    {
      icon: '✅',
      name: 'ToDoApp',
      badge: 'Full-Stack',
      shortDesc: 'A full-stack ToDo app built for user-based task management.',
      desc: 'A full-stack task management application developed with ASP.NET MVC, featuring user authentication and authorization. Each user can only see and manage their own tasks. AI tools were used to accelerate frontend development.',
      features: [
        'User registration and login (ASP.NET Identity)',
        'User-specific task access control',
        'Create, edit, and delete tasks',
        'Completion status tracking',
        'Secure data access (UserId filtering)',
        'AI-assisted frontend development',
      ],
      tags: ['ASP.NET MVC', 'C#', 'Identity', 'EF Core', 'SQL Server'],
      github: 'https://github.com/GorkemKutbay/ToDoApp',
    },
    {
      icon: '🛍️',
      name: 'eTicaretUygulaması',
      badge: 'E-Commerce',
      shortDesc: 'A comprehensive e-commerce platform and management system built with .NET.',
      desc: 'A full-featured e-commerce application developed with ASP.NET MVC, featuring product management, shopping cart operations, and admin panel. Offers modern design, secure payment integration, and advanced search/filtering capabilities.',
      features: [
        'Product catalog and management system (CRUD)',
        'Shopping cart and payment processing',
        'User account management and order tracking',
        'Admin panel for sales management',
        'Advanced search and category filtering',
        'Database management with Entity Framework Core',
      ],
      tags: ['ASP.NET MVC', 'C#', 'EF Core', 'SQL Server', 'Bootstrap', 'E-Commerce'],
      github: 'https://github.com/GorkemKutbay/eTicaretUygulamasi',
    },
  ]
};

const skillsList = [
  'C#', '.NET 8', 'ASP.NET MVC', 'Entity Framework Core',
  'N-Tier Architecture', 'Repository Pattern', 'REST API',
  'SQL Server', 'Git', 'GitHub', 'HTML/CSS', 'JavaScript'
];

// --- BUILD SKILLS ---
const sg = document.getElementById('skillsGrid');
skillsList.forEach(s => {
  sg.innerHTML += `<div class="skill-item"><div class="skill-dot"></div><span class="skill-name">${s}</span></div>`;
});

// --- MODAL ---
const modalOverlay = document.getElementById('modalOverlay');
const modalIcon = document.getElementById('modalIcon');
const modalTitle = document.getElementById('modalTitle');
const modalSubtitle = document.getElementById('modalSubtitle');
const modalDesc = document.getElementById('modalDesc');
const modalFeaturesList = document.getElementById('modalFeaturesList');
const modalTags = document.getElementById('modalTags');
const modalGithubBtn = document.getElementById('modalGithubBtn');
const modalGithubBtnLabel = document.getElementById('modalGithubBtnLabel');

function openModal(project) {
  modalIcon.textContent = project.icon;
  modalTitle.textContent = project.name;
  modalSubtitle.textContent = project.badge;
  modalDesc.textContent = project.desc;
  modalFeaturesList.innerHTML = project.features.map(f => `<li>${f}</li>`).join('');
  modalTags.innerHTML = project.tags.map(t => `<span class="tag">${t}</span>`).join('');
  modalGithubBtn.href = project.github;
  modalGithubBtnLabel.textContent = currentLang === 'tr' ? 'GitHub\'da İncele' : 'View on GitHub';
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// --- BUILD PROJECTS ---
function renderProjects(lang) {
  const pg = document.getElementById('projectsGrid');
  pg.innerHTML = '';
  projectsData[lang].forEach(p => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="project-header">
        <div class="project-icon">${p.icon}</div>
        <span class="project-badge">${p.badge}</span>
      </div>
      <div class="project-name">${p.name}</div>
      <div class="project-desc">${p.shortDesc}</div>
      <div class="project-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <div class="project-card-footer">
        <span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.6-4.04-1.6-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.01 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
          ${lang === 'tr' ? 'Detayları gör' : 'View details'}
        </span>
        <span style="color:var(--accent);">→</span>
      </div>`;
    card.addEventListener('click', () => openModal(p));
    pg.appendChild(card);
  });
}

// --- LANGUAGE ---
let currentLang = 'tr';

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent === lang.toUpperCase());
  });
  renderProjects(lang);
}

renderProjects('tr');
