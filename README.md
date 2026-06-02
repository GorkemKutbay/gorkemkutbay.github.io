# Görkem Kutbay — Software Developer Portfolio

Modern ve interaktif bir kişisel portfolio web sitesi. .NET ve C# backend geliştirici olarak işlerini sergileyen profesyonel bir internet sayfası.

## 📋 İçerik

- **Hero Bölümü** - Hoşgeldin mesajı ve CTA butonları
- **Projeler Galerisi** - Tamamlanan projelerin dinamik liste
- **Yetenekler** - Kullanılan teknolojiler ve beceriler
- **İletişim** - GitHub, LinkedIn ve email bağlantıları
- **Çok Dil Desteği** - Türkçe (TR) ve İngilizce (EN) dil seçeneği

## 🎨 Özellikler

✨ **Modern Tasarım**
- Koyu tema (#0b0e13) ile premium görünüm
- Grid arka plana sahip minimalist interface
- Gürültü dokusu ve smooth animasyonlar
- Responsive tasarım

🔌 **İnteraktif Öğeler**
- Fare glow efekti (cursor tracking)
- Dil değiştirme butonu (TR/EN)
- Smooth scroll animasyonları
- Dinamik i18n (uluslararasılaştırma) sistemi

🎯 **Projeler Bölümü**
- CarRentalSystem (N-Tier Architecture)
- RestaurantApp (MVC)
- ToDoApp (Full-Stack)
- Her proje için açıklama, özellikler ve GitHub linki

## 📁 Dosya Yapısı

```
.
├── index.html       # Ana HTML sayfası
├── main.js          # JavaScript (interaktivite ve i18n)
├── style.css        # Tüm CSS stilini
└── README.md        # Bu dosya
```

## 🚀 Kullanım

1. **index.html** dosyasını bir web tarayıcısında açın
2. Navigation menüsünden bölümlere git
3. Sağ üst köşedeki dil butonuyla Türkçe/İngilizce arasında geçiş yapın
4. Proyeler ve iletişim bağlantılarını keşfedin

### Hızlı Başlangıç

```bash
# Yerel sunucu ile çalıştır (opsiyonel)
python -m http.server 8000
# Sonra http://localhost:8000 adresine git
```

## 🛠️ Teknoloji Stack

### Frontend
- **HTML5** - Semantik yapı
- **CSS3** - Modern tasarım (Flexbox, Grid, CSS Variables)
- **JavaScript (ES6+)** - Interaktivite

### Tasarım Kaynakları
- **Google Fonts**: Inter, Syne, DM Mono
- **SVG Icons**: GitHub, LinkedIn, Email

## 📝 i18n Sistemi

Proje çok dilli desteğe sahiptir. `main.js` içerisindeki `translations` nesnesi her dil için tercümeleri tutar:

```javascript
const translations = {
  tr: { /* Türkçe tercümeler */ },
  en: { /* İngilizce tercümeler */ }
}
```

`setLang()` fonksiyonu ile dil değiştirilir.

## 🎨 Renk Paleti

| Renk | Hex Kodu | Kullanım |
|------|----------|---------|
| Arka Plan | `#0b0e13` | Ana arka plan |
| Surface | `#13181f` | Kart ve bölümler |
| Accent (Primary) | `#4af0a8` | Ana renkler |
| Accent (Secondary) | `#3dd9f5` | İkincil renkler |
| Metin | `#e8edf3` | Ana metin rengi |
| Muted | `#5a6880` | Soluk metin (nav, etiketler) |

## 📱 Responsive Tasarım

- Masaüstü, tablet ve mobil cihazlara uyumlu
- Mobile-first yaklaşım
- Viewport ayarları yapılandırılmış

## 🔗 Sosyal Bağlantılar

- **GitHub**: https://github.com/GorkemKutbay
- **LinkedIn**: https://www.linkedin.com/in/görkem-kutbay-48586839a/
- **Email**: kutbaygorkem2007@gmail.com

## 💡 Geliştirme İpuçları

### Proje Ekleme
`main.js` içerisinde `projectsData` nesnesine yeni proje ekleyin:

```javascript
{
  icon: '🔧',
  name: 'Yeni Projesi',
  badge: 'Technology',
  shortDesc: 'Kısa açıklama',
  desc: 'Detaylı açıklama',
  features: ['Özellik 1', 'Özellik 2'],
  tags: ['Tag1', 'Tag2'],
  github: 'https://github.com/...'
}
```

### Yetenek Ekleme
`main.js` içerisinde `skillsData` nesnesine yeni yetenek ekleyin.

### Stil Özelleştirmesi
`style.css` başında `:root` bölümündeki CSS değişkenlerini değiştirin:

```css
:root {
  --bg: #0b0e13;        /* Arka plan */
  --accent: #4af0a8;    /* Ana renk */
  --accent2: #3dd9f5;   /* İkincil renk */
  /* ... diğer renkler ... */
}
```

## 📄 Lisans

Bu proje kişisel portföy projesidir. Kullanımı Görkem Kutbay'ın izni ile mümkündür.

---

**Yapılan Tarih**: 2026  
**Son Güncelleme**: 2 Haziran 2026
