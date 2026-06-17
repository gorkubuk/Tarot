const CARDS = [
  {
    id: 0, name: 'Deli', en: 'The Fool',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/RWS_Tarot_00_Fool.jpg/300px-RWS_Tarot_00_Fool.jpg',
    keywords: ['Yeni başlangıç', 'Macera', 'Saf cesaret', 'Özgürlük'],
    meaning: 'Hayatında tamamen yeni bir yolculuk başlıyor. Bilmediğin bir yöne adım atmaya hazırsın ve geçmişin yüklerini bırakmışsın. Saf bir merakla ilerle — bu adım düşündüğünden çok daha güzel sonuçlar doğurabilir.'
  },
  {
    id: 1, name: 'Sihirbaz', en: 'The Magician',
    img: 'images/01_magician.jpg',
    keywords: ['İrade', 'Yaratıcılık', 'Güç', 'Odaklanma'],
    meaning: 'Elinizde hayallerinizi gerçeğe dönüştürmek için gereken tüm araçlar mevcut. Potansiyeliniz zirve noktasında, tek yapmanız gereken odaklanıp harekete geçmek. Enerjiyi doğru yöne kanalize edin.'
  },
  {
    id: 2, name: 'Yüksek Rahibe', en: 'The High Priestess',
    img: 'images/02_priestess.jpg',
    keywords: ['Sezgi', 'Gizem', 'İç ses', 'Bilinçdışı'],
    meaning: 'Cevaplar dışarıda değil, içinde. İçgüdülerine kulak ver, sessizlikte dinle. Şu an görünmeyen şeyler yavaş yavaş açığa çıkacak — sabır ve sezgi seni doğru yöne götürecek.'
  },
  {
    id: 3, name: 'İmparatoriçe', en: 'The Empress',
    img: 'images/03_empress.jpg',
    keywords: ['Bereket', 'Bolluk', 'Annelik', 'Yaratıcılık'],
    meaning: 'Doğanın gücü ve bereketin kapıları sana açık. Yaratıcılığın zirvede, istediğin şeyleri hayata geçirmek için mükemmel bir dönemdesin. Kendine şefkatle davran, büyüme zamanı geldi.'
  },
  {
    id: 4, name: 'İmparator', en: 'The Emperor',
    img: 'images/04_emperor.jpg',
    keywords: ['Otorite', 'Yapı', 'İstikrar', 'Disiplin'],
    meaning: 'Hayatında sağlam bir yapı kurmanın zamanı geldi. Kararlı adımlar at, güçlü ve istikrarlı ol. Temeller ne kadar sağlam olursa üzerine inşa edeceğin şey o kadar büyük olur.'
  },
  {
    id: 5, name: 'Başrahip', en: 'The Hierophant',
    img: 'images/05_hierophant.jpg',
    keywords: ['Gelenek', 'İnanç', 'Rehberlik', 'Bilgelik'],
    meaning: 'Güvenilir bir rehberden veya köklü bir bilgelikten destek almanın vakti. Geleneksel değerlere ve manevi bağlara yönelen bir dönemdesin. Deneyimli birisinin tavsiyesine kulak ver.'
  },
  {
    id: 6, name: 'Aşıklar', en: 'The Lovers',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/RWS_Tarot_06_Lovers.jpg/300px-RWS_Tarot_06_Lovers.jpg',
    keywords: ['Aşk', 'Uyum', 'Seçim', 'Bağlantı'],
    meaning: 'Bu kart yalnızca romantik aşkı değil, kalbinle uyumlu kararlar almayı da simgeler. Değerlerine sadık kal, hem kendinle hem başkalarıyla gerçek bir uyum içinde ol. Önemli bir seçim kapıda olabilir.'
  },
  {
    id: 7, name: 'Savaş Arabası', en: 'The Chariot',
    img: 'images/07_chariot.jpg',
    keywords: ['Zafer', 'Kontrol', 'İrade', 'Kararlılık'],
    meaning: 'İradenin ve kararlılığın zirve noktasındasın. Engeller olsa da bunları aşacak güce sahipsin. Odaklanmış kal, disiplinden ödün verme — zafer yakın.'
  },
  {
    id: 8, name: 'Güç', en: 'Strength',
    img: 'images/08_strength.jpg',
    keywords: ['Cesaret', 'Sabır', 'İç güç', 'Merhamet'],
    meaning: 'Gerçek güç kaba kuvvetten değil, sabır ve içten gelen cesaretten gelir. Zorluklarla nazikçe ve kararlılıkla yüzleş. Seni zorlayan şeyi sevgiyle kucaklamak en büyük güç göstergesidir.'
  },
  {
    id: 9, name: 'Münzevi', en: 'The Hermit',
    img: 'images/09_hermit.jpg',
    keywords: ['İç yolculuk', 'Yalnızlık', 'Bilgelik', 'Arayış'],
    meaning: 'İçe dönme ve öz farkındalık zamanın geldi. Cevapların dışarıda değil, kendinle yaptığın yolculukta gizli. Sessizliğe çekil, kendi bilgeliğinin ışığında yürü.'
  },
  {
    id: 10, name: 'Kader Çarkı', en: 'Wheel of Fortune',
    img: 'images/10_wheel.jpg',
    keywords: ['Değişim', 'Döngüler', 'Kader', 'Şans'],
    meaning: 'Hayat sürekli döngüler içinde akar. Değişimler kaçınılmazdır — hem zorluklar hem de güzel anlar geçicidir. Bu evrensel akışa teslim ol; seni bekleyen şeyler umduğundan güzel olabilir.'
  },
  {
    id: 11, name: 'Adalet', en: 'Justice',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/RWS_Tarot_11_Justice.jpg/300px-RWS_Tarot_11_Justice.jpg',
    keywords: ['Denge', 'Hakikat', 'Dürüstlük', 'Sorumluluk'],
    meaning: 'Attığın adımların ve aldığın kararların sonuçlarını göreceksin. Doğruluktan ayrılma, dürüstlüğünü koru. Denge her şeyin temeli — hem dışarıda hem içinde.'
  },
  {
    id: 12, name: 'Asılmış Adam', en: 'The Hanged Man',
    img: 'images/12_hangedman.jpg',
    keywords: ['Bekleyiş', 'Yeni bakış', 'Teslimiyet', 'Duraklama'],
    meaning: 'Duraksayıp farklı bir perspektiften bakmanın zamanı. Kontrol etmeyi bırak, akmaya bırak. Bu bekleyiş seni yavaşlatmıyor — seni daha bilge yapıyor.'
  },
  {
    id: 13, name: 'Ölüm', en: 'Death',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/RWS_Tarot_13_Death.jpg/300px-RWS_Tarot_13_Death.jpg',
    keywords: ['Dönüşüm', 'Son', 'Yeniden doğuş', 'Bırakma'],
    meaning: 'Korkulacak bir şey değil bu kart — fiziksel ölümü değil köklü bir dönüşümü simgeler. Eski bir şeyin sona ermesi, yeni ve çok daha güzelin başlayacağının habercisidir. Bırak gitsin, yeniye yer aç.'
  },
  {
    id: 14, name: 'Ölçülülük', en: 'Temperance',
    img: 'images/14_temperance.jpg',
    keywords: ['Denge', 'Sabır', 'Uyum', 'Orta yol'],
    meaning: 'Sabır, denge ve uyumun gücünü keşfetme zamanı. Aşırılıklardan kaçın, orta yolu bul. Acele etmeden ilerlemek her şeyi olması gereken ritimde ilerletecek.'
  },
  {
    id: 15, name: 'Şeytan', en: 'The Devil',
    img: 'images/15_devil.jpg',
    keywords: ['Bağlanma', 'Korkular', 'İllüzyon', 'Farkındalık'],
    meaning: 'Seni tutan zincirleri fark et — bu zincirler çoğunlukla kendi koyduğun sınırlar, korkular ya da alışkanlıklardır. Kendini mahkum eden neyin illüzyon olduğunu gör. Özgürlük senin elinde.'
  },
  {
    id: 16, name: 'Kule', en: 'The Tower',
    img: 'images/16_tower.jpg',
    keywords: ['Ani değişim', 'Yıkım', 'Açığa çıkma', 'Arınma'],
    meaning: 'Ani ve sarsıcı bir değişim yakın olabilir. Yanlış temeller üzerine inşa edilmiş şeyler yıkılacak — ama bu yıkım aslında bir arınma. Gerçeğin açığa çıkması zamanla büyük bir rahatlama getirecek.'
  },
  {
    id: 17, name: 'Yıldız', en: 'The Star',
    img: 'images/17_star.jpg',
    keywords: ['Umut', 'İlham', 'Yenilenme', 'Şifa'],
    meaning: 'Karanlıktan sonra gelen umudun ve şifanın kartısın. Evren sana destek veriyor, inancını kaybetme. Hayallerine yönel — içindeki ışık seni doğru yöne götürecek.'
  },
  {
    id: 18, name: 'Ay', en: 'The Moon',
    img: 'images/18_moon.jpg',
    keywords: ['İllüzyon', 'Sezgi', 'Bilinçdışı', 'Belirsizlik'],
    meaning: 'Her şey göründüğü gibi olmayabilir. Sezgilerine güven ama duygularının seni yanıltmamasına dikkat et. Belirsizlik geçici — karanlıktaki yolculuk seni aydınlatacak.'
  },
  {
    id: 19, name: 'Güneş', en: 'The Sun',
    img: 'images/19_sun.jpg',
    keywords: ['Mutluluk', 'Başarı', 'Canlılık', 'Aydınlık'],
    meaning: 'En pozitif kartlardan biri. Sevinç, başarı ve bolluk döneminin kapıda. İçindeki çocuğu serbest bırak, hayatın güzelliklerine açık ol. Işıklı günler geliyor.'
  },
  {
    id: 20, name: 'Yargı', en: 'Judgement',
    img: 'images/20_judgement.jpg',
    keywords: ['Uyanış', 'Özgürlük', 'Dönüşüm', 'Bağışlama'],
    meaning: 'Derin bir uyanış ve geçmişle hesaplaşma zamanı. Kendini ve başkalarını bağışla — bu özgürlük sana yeni bir sayfa açacak. İçsel bir çağrı duyuyorsun, ona kulak ver.'
  },
  {
    id: 21, name: 'Dünya', en: 'The World',
    img: 'images/21_world.jpg',
    keywords: ['Tamamlanma', 'Bütünleşme', 'Başarı', 'Döngünün sonu'],
    meaning: 'Bir döngü tamamlandı ve gerçek bir başarıya ulaştın. Yaptığın yolculuktan gurur duy, kazanımlarını kutla. Bu bir son değil — daha büyük bir yolculuğun yeni başlangıcı.'
  }
];

// State
let currentSingle = null;
let spreadCards = [];

// Stars
function createStars() {
  const container = document.getElementById('stars');
  for (let i = 0; i < 120; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 4 + 's';
    star.style.animationDuration = (2 + Math.random() * 3) + 's';
    star.style.width = star.style.height = (1 + Math.random() * 2) + 'px';
    container.appendChild(star);
  }
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function goHome() { showScreen('main-screen'); }

// Single card
function startSingle() {
  showScreen('single-screen');
  drawNewCard();
}

function drawNewCard() {
  const shuffled = shuffle(CARDS);
  currentSingle = shuffled[0];

  const cardEl = document.getElementById('single-card');
  const img = document.getElementById('single-img');
  const info = document.getElementById('single-info');

  cardEl.classList.remove('flipped');
  info.classList.add('hidden');

  img.src = currentSingle.img;
  img.alt = currentSingle.name;

  document.getElementById('single-number').textContent = `${currentSingle.id} — Büyük Arcana`;
  document.getElementById('single-name').textContent = currentSingle.name;
  document.getElementById('single-keywords').textContent = currentSingle.keywords.join('  ·  ');
  document.getElementById('single-meaning').textContent = currentSingle.meaning;
}

function flipCard(el) {
  const card = el.closest ? el : document.getElementById('single-card');
  const cardInner = card.querySelector('.card') || card;
  cardInner.classList.toggle('flipped');
  setTimeout(() => {
    document.getElementById('single-info').classList.toggle('hidden', !cardInner.classList.contains('flipped'));
  }, 300);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('single-card').addEventListener('click', () => {
    const card = document.getElementById('single-card').querySelector('.card');
    card.classList.toggle('flipped');
    setTimeout(() => {
      document.getElementById('single-info').classList.toggle('hidden', !card.classList.contains('flipped'));
    }, 300);
  });
});

// Three card spread
function startSpread() {
  showScreen('spread-screen');
  drawSpread();
}

function drawSpread() {
  spreadCards = shuffle(CARDS).slice(0, 3);

  for (let i = 0; i < 3; i++) {
    const card = document.getElementById(`spread-card-${i}`);
    card.classList.remove('flipped');
    document.getElementById(`spread-img-${i}`).src = spreadCards[i].img;
    document.getElementById(`spread-img-${i}`).alt = spreadCards[i].name;
    document.getElementById(`spread-name-${i}`).textContent = '';
    document.getElementById(`spread-name-${i}`).style.opacity = '0';
  }

  document.getElementById('spread-meanings').innerHTML = '';
}

function flipSpreadCard(idx) {
  const card = document.getElementById(`spread-card-${idx}`);
  if (card.classList.contains('flipped')) return;
  card.classList.add('flipped');

  const nameEl = document.getElementById(`spread-name-${idx}`);
  nameEl.textContent = spreadCards[idx].name;
  setTimeout(() => nameEl.style.opacity = '1', 300);

  // Show meaning after flip
  setTimeout(() => {
    renderSpreadMeanings();
  }, 400);
}

function renderSpreadMeanings() {
  const flipped = [0, 1, 2].filter(i =>
    document.getElementById(`spread-card-${i}`).classList.contains('flipped')
  );
  if (flipped.length === 0) return;

  const labels = ['Geçmiş', 'Şimdi', 'Gelecek'];
  const html = flipped.map(i => `
    <div class="spread-meaning-block">
      <div class="spread-meaning-label">${labels[i]} · ${spreadCards[i].name}</div>
      <div class="spread-meaning-keywords">${spreadCards[i].keywords.join(' · ')}</div>
      <div class="spread-meaning-text">${spreadCards[i].meaning}</div>
    </div>
  `).join('');

  document.getElementById('spread-meanings').innerHTML = html;
}

createStars();
