const CARDS = [
  {
    id: 0, name: 'Deli', en: 'The Fool',
    img: 'images/00_fool.jpg',
    keywords: ['Yeni başlangıç', 'Macera', 'Saf cesaret', 'Özgürlük'],
    meaning: 'Hayatında tamamen yeni bir yolculuk başlıyor. Bilmediğin bir yöne adım atmaya hazırsın ve geçmişin yüklerini bırakmışsın. Saf bir merakla ilerle — bu adım düşündüğünden çok daha güzel sonuçlar doğurabilir.',
    reversedMeaning: 'Adım atmaktan kaçınıyorsun — ya korku nedeniyle ya da henüz hazır olmadığın için. Belirsizliğe atlamak istiyorsun ama bir şey seni durduruyor. Neyin geri çektiğini dürüstçe sorgula.'
  },
  {
    id: 1, name: 'Sihirbaz', en: 'The Magician',
    img: 'images/01_magician.jpg',
    keywords: ['İrade', 'Yaratıcılık', 'Güç', 'Odaklanma'],
    meaning: 'Elinizde hayallerinizi gerçeğe dönüştürmek için gereken tüm araçlar mevcut. Potansiyeliniz zirve noktasında, tek yapmanız gereken odaklanıp harekete geçmek. Enerjiyi doğru yöne kanalize edin.',
    reversedMeaning: 'Elindeki gücü veya araçları yanlış yönde kullanıyor olabilirsin. Kendini kandırma ya da potansiyeli boşa harcama tehlikesi var. Enerjini daha doğru bir odağa yönlendir.'
  },
  {
    id: 2, name: 'Yüksek Rahibe', en: 'The High Priestess',
    img: 'images/02_priestess.jpg',
    keywords: ['Sezgi', 'Gizem', 'İç ses', 'Bilinçdışı'],
    meaning: 'Cevaplar dışarıda değil, içinde. İçgüdülerine kulak ver, sessizlikte dinle. Şu an görünmeyen şeyler yavaş yavaş açığa çıkacak — sabır ve sezgi seni doğru yöne götürecek.',
    reversedMeaning: 'İç sesini bastırıyor ya da sezgilerini görmezden geliyorsun. Gizlenen bir şey var — inkâr edilen bir duygu ya da fark edilmek istemeyen bir gerçek. Kendi derinliklerinle bağlantı kurmaya çalış.'
  },
  {
    id: 3, name: 'İmparatoriçe', en: 'The Empress',
    img: 'images/03_empress.jpg',
    keywords: ['Bereket', 'Bolluk', 'Annelik', 'Yaratıcılık'],
    meaning: 'Doğanın gücü ve bereketin kapıları sana açık. Yaratıcılığın zirvede, istediğin şeyleri hayata geçirmek için mükemmel bir dönemdesin. Kendine şefkatle davran, büyüme zamanı geldi.',
    reversedMeaning: 'Yaratıcı blok, bağımlılık ya da öz sevgi eksikliği hissediyorsun. Kendinle ne kadar şefkatli davranıyorsun? İçindeki bereketi bulmak için önce kendi ihtiyaçlarına kulak ver.'
  },
  {
    id: 4, name: 'İmparator', en: 'The Emperor',
    img: 'images/04_emperor.jpg',
    keywords: ['Otorite', 'Yapı', 'İstikrar', 'Disiplin'],
    meaning: 'Hayatında sağlam bir yapı kurmanın zamanı geldi. Kararlı adımlar at, güçlü ve istikrarlı ol. Temeller ne kadar sağlam olursa üzerine inşa edeceğin şey o kadar büyük olur.',
    reversedMeaning: 'Kontrol isteği sağlıklı bir sınırı aşıyor olabilir. Ya aşırı katılık ya da tam tersi — gerekli yapıyı kurmaktan kaçınma. Gerçek güç, dayatmayla değil iç olgunlukla kurulur.'
  },
  {
    id: 5, name: 'Başrahip', en: 'The Hierophant',
    img: 'images/05_hierophant.jpg',
    keywords: ['Gelenek', 'İnanç', 'Rehberlik', 'Bilgelik'],
    meaning: 'Güvenilir bir rehberden veya köklü bir bilgelikten destek almanın vakti. Geleneksel değerlere ve manevi bağlara yönelen bir dönemdesin. Deneyimli birisinin tavsiyesine kulak ver.',
    reversedMeaning: 'Mevcut kurallar ve gelenekler seni kısıtlıyor olabilir. Dogmalara körü körüne uymak yerine kendi içsel rehberliğini dinle. Bu, alışılmışın dışına çıkmak için bir işaret.'
  },
  {
    id: 6, name: 'Aşıklar', en: 'The Lovers',
    img: 'images/06_lovers.jpg',
    keywords: ['Aşk', 'Uyum', 'Seçim', 'Bağlantı'],
    meaning: 'Bu kart yalnızca romantik aşkı değil, kalbinle uyumlu kararlar almayı da simgeler. Değerlerine sadık kal, hem kendinle hem başkalarıyla gerçek bir uyum içinde ol. Önemli bir seçim kapıda olabilir.',
    reversedMeaning: 'Bir ilişkide ya da önemli bir kararla uyumsuzluk var. Değerlerine aykırı bir seçim mi yapıyorsun? Gerçek uyumu aramak için önce kendinle dürüst ol.'
  },
  {
    id: 7, name: 'Savaş Arabası', en: 'The Chariot',
    img: 'images/07_chariot.jpg',
    keywords: ['Zafer', 'Kontrol', 'İrade', 'Kararlılık'],
    meaning: 'İradenin ve kararlılığın zirve noktasındasın. Engeller olsa da bunları aşacak güce sahipsin. Odaklanmış kal, disiplinden ödün verme — zafer yakın.',
    reversedMeaning: 'Yön belirsiz, kontrol senden kaçıyor. Agresiflik veya irade eksikliği potansiyeli baltalıyor. Dur, yeniden odaklan — hedefe ulaşmak için önce içsel dengeyi bul.'
  },
  {
    id: 8, name: 'Güç', en: 'Strength',
    img: 'images/08_strength.jpg',
    keywords: ['Cesaret', 'Sabır', 'İç güç', 'Merhamet'],
    meaning: 'Gerçek güç kaba kuvvetten değil, sabır ve içten gelen cesaretten gelir. Zorluklarla nazikçe ve kararlılıkla yüzleş. Seni zorlayan şeyi sevgiyle kucaklamak en büyük güç göstergesidir.',
    reversedMeaning: 'Öz şüphe veya bastırılmış duygular ön plana çıkıyor. Gücünü içten değil dışarıdan aramak tükenmişliğe yol açar. Kendine karşı nazik olmak da bir güç göstergesidir.'
  },
  {
    id: 9, name: 'Münzevi', en: 'The Hermit',
    img: 'images/09_hermit.jpg',
    keywords: ['İç yolculuk', 'Yalnızlık', 'Bilgelik', 'Arayış'],
    meaning: 'İçe dönme ve öz farkındalık zamanın geldi. Cevapların dışarıda değil, kendinle yaptığın yolculukta gizli. Sessizliğe çekil, kendi bilgeliğinin ışığında yürü.',
    reversedMeaning: 'Yalnızlık seçilmiş değil, dayatılmış hissettiriyor. Toplumdan kopukluk ya da tam tersi — iç yolculuktan kaçınma. Ne zaman içe çekilip ne zaman bağlantı kuracağını dengele.'
  },
  {
    id: 10, name: 'Kader Çarkı', en: 'Wheel of Fortune',
    img: 'images/10_wheel.jpg',
    keywords: ['Değişim', 'Döngüler', 'Kader', 'Şans'],
    meaning: 'Hayat sürekli döngüler içinde akar. Değişimler kaçınılmazdır — hem zorluklar hem de güzel anlar geçicidir. Bu evrensel akışa teslim ol; seni bekleyen şeyler umduğundan güzel olabilir.',
    reversedMeaning: 'Döngüler kırılamıyor gibi geliyor. Şansa güvenmek yerine kendi eylemlerini gözden geçir. Hayatının akışına karşı değil, onunla birlikte hareket etmeyi dene.'
  },
  {
    id: 11, name: 'Adalet', en: 'Justice',
    img: 'images/11_justice.jpg',
    keywords: ['Denge', 'Hakikat', 'Dürüstlük', 'Sorumluluk'],
    meaning: 'Attığın adımların ve aldığın kararların sonuçlarını göreceksin. Doğruluktan ayrılma, dürüstlüğünü koru. Denge her şeyin temeli — hem dışarıda hem içinde.',
    reversedMeaning: 'Haksızlık hissediyorsun ya da bir durumun sonuçlarından kaçmaya çalışıyorsun. Dürüstlükten taviz vermek uzun vadede daha büyük sorunlara yol açar. Dengeyi yeniden kur.'
  },
  {
    id: 12, name: 'Asılmış Adam', en: 'The Hanged Man',
    img: 'images/12_hangedman.jpg',
    keywords: ['Bekleyiş', 'Yeni bakış', 'Teslimiyet', 'Duraklama'],
    meaning: 'Duraksayıp farklı bir perspektiften bakmanın zamanı. Kontrol etmeyi bırak, akmaya bırak. Bu bekleyiş seni yavaşlatmıyor — seni daha bilge yapıyor.',
    reversedMeaning: 'Bekleme süreci anlamsız ya da zorunlu değil. Kurban rolüne girme — değişim kendiliğinden gelmeyecek. Küçük bir adım bile çok şeyi değiştirebilir.'
  },
  {
    id: 13, name: 'Ölüm', en: 'Death',
    img: 'images/13_death.jpg',
    keywords: ['Dönüşüm', 'Son', 'Yeniden doğuş', 'Bırakma'],
    meaning: 'Korkulacak bir şey değil bu kart — fiziksel ölümü değil köklü bir dönüşümü simgeler. Eski bir şeyin sona ermesi, yeni ve çok daha güzelin başlayacağının habercisidir. Bırak gitsin, yeniye yer aç.',
    reversedMeaning: 'Bir dönem bitmesine rağmen bırakamıyorsun. Değişime direnç, büyümeyi engelliyor. Ne kadar uzun tutunursan, yeniden doğuş o kadar geç gelir — bırakmayı öğren.'
  },
  {
    id: 14, name: 'Ölçülülük', en: 'Temperance',
    img: 'images/14_temperance.jpg',
    keywords: ['Denge', 'Sabır', 'Uyum', 'Orta yol'],
    meaning: 'Sabır, denge ve uyumun gücünü keşfetme zamanı. Aşırılıklardan kaçın, orta yolu bul. Acele etmeden ilerlemek her şeyi olması gereken ritimde ilerletecek.',
    reversedMeaning: 'Sabırsızlık ya da aşırılık öne çıkıyor. Her şeyin hızlı olmasını bekliyorsun ama zorlama çoğu zaman geri adım attırır. Ritmi yeniden bul, orta yola geri dön.'
  },
  {
    id: 15, name: 'Şeytan', en: 'The Devil',
    img: 'images/15_devil.jpg',
    keywords: ['Bağlanma', 'Korkular', 'İllüzyon', 'Farkındalık'],
    meaning: 'Seni tutan zincirleri fark et — bu zincirler çoğunlukla kendi koyduğun sınırlar, korkular ya da alışkanlıklardır. Kendini mahkum eden neyin illüzyon olduğunu gör. Özgürlük senin elinde.',
    reversedMeaning: 'Seni bağlayan şeylerden kurtulmaya başlıyorsun. Korkuların ve eski alışkanlıkların üzerindeki etkisi azalıyor. Bu özgürlük gerçek — ve senden geliyor.'
  },
  {
    id: 16, name: 'Kule', en: 'The Tower',
    img: 'images/16_tower.jpg',
    keywords: ['Ani değişim', 'Yıkım', 'Açığa çıkma', 'Arınma'],
    meaning: 'Ani ve sarsıcı bir değişim yakın olabilir. Yanlış temeller üzerine inşa edilmiş şeyler yıkılacak — ama bu yıkım aslında bir arınma. Gerçeğin açığa çıkması zamanla büyük bir rahatlama getirecek.',
    reversedMeaning: 'Kaçınılmaz bir yıkım erteleniyor ama engellenemiyor. Küçük çöküşler belki büyüğünü önlüyor. Değişime küçük adımlarla hazırlanmak, şoku azaltabilir.'
  },
  {
    id: 17, name: 'Yıldız', en: 'The Star',
    img: 'images/17_star.jpg',
    keywords: ['Umut', 'İlham', 'Yenilenme', 'Şifa'],
    meaning: 'Karanlıktan sonra gelen umudun ve şifanın kartısın. Evren sana destek veriyor, inancını kaybetme. Hayallerine yönel — içindeki ışık seni doğru yöne götürecek.',
    reversedMeaning: 'Umut yerini hayal kırıklığına bırakmış olabilir. Seni besleyen şeyden kopmuşsun. Umudu yeniden bulmak için küçük bir ışığa odaklan — henüz tükenmedi.'
  },
  {
    id: 18, name: 'Ay', en: 'The Moon',
    img: 'images/18_moon.jpg',
    keywords: ['İllüzyon', 'Sezgi', 'Bilinçdışı', 'Belirsizlik'],
    meaning: 'Her şey göründüğü gibi olmayabilir. Sezgilerine güven ama duygularının seni yanıltmamasına dikkat et. Belirsizlik geçici — karanlıktaki yolculuk seni aydınlatacak.',
    reversedMeaning: 'Yanılsamalar dağılıyor, gerçek yüzeye çıkıyor. Belirsizlik azalıyor ve daha net bir görüş geliyor. Sezgilerinle daha sağlıklı bir ilişki kuruyorsun.'
  },
  {
    id: 19, name: 'Güneş', en: 'The Sun',
    img: 'images/19_sun.jpg',
    keywords: ['Mutluluk', 'Başarı', 'Canlılık', 'Aydınlık'],
    meaning: 'En pozitif kartlardan biri. Sevinç, başarı ve bolluk döneminin kapıda. İçindeki çocuğu serbest bırak, hayatın güzelliklerine açık ol. Işıklı günler geliyor.',
    reversedMeaning: 'Geçici bir gölge olsa da ışık hâlâ orada. Engeller ya da aşırı iyimserlik seni raydan çıkarabilir. Sevinç kaybolmadı — sadece içinde biraz daha derin bir yerde saklı.'
  },
  {
    id: 20, name: 'Yargı', en: 'Judgement',
    img: 'images/20_judgement.jpg',
    keywords: ['Uyanış', 'Özgürlük', 'Dönüşüm', 'Bağışlama'],
    meaning: 'Derin bir uyanış ve geçmişle hesaplaşma zamanı. Kendini ve başkalarını bağışla — bu özgürlük sana yeni bir sayfa açacak. İçsel bir çağrı duyuyorsun, ona kulak ver.',
    reversedMeaning: 'Özeleştiri ya da geçmişin ağırlığı seni bloke ediyor. Kendinle yüzleşmekten kaçınıyorsun. İçsel çağrıya kulak vermek, bir şeylerin bitmesine izin vermeyi gerektirir.'
  },
  {
    id: 21, name: 'Dünya', en: 'The World',
    img: 'images/21_world.jpg',
    keywords: ['Tamamlanma', 'Bütünleşme', 'Başarı', 'Döngünün sonu'],
    meaning: 'Bir döngü tamamlandı ve gerçek bir başarıya ulaştın. Yaptığın yolculuktan gurur duy, kazanımlarını kutla. Bu bir son değil — daha büyük bir yolculuğun yeni başlangıcı.',
    reversedMeaning: 'Hedefe yakınsın ama tamamlanmamış hissediyorsun. Döngüyü kapatmak için eksik olan küçük bir şeye dikkat et. Büyük resmi görmek bazen son adımı atmayı gerektirir.'
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

function applySingleInfo() {
  const c = currentSingle;
  const img = document.getElementById('single-img');
  if (c.isReversed) {
    img.classList.add('reversed');
  } else {
    img.classList.remove('reversed');
  }
  document.getElementById('single-number').innerHTML =
    `${c.id} — Büyük Arcana${c.isReversed ? '&nbsp;&nbsp;<span class="reversed-tag">↓ TERS</span>' : ''}`;
  document.getElementById('single-name').textContent = c.name;
  document.getElementById('single-keywords').textContent = c.keywords.join('  ·  ');
  document.getElementById('single-meaning').textContent = c.isReversed ? c.reversedMeaning : c.meaning;
}

// Single card
function startSingle() {
  showScreen('single-screen');
  drawNewCard();
}

function drawNewCard() {
  const shuffled = shuffle(CARDS);
  currentSingle = { ...shuffled[0], isReversed: Math.random() < 0.33 };

  const cardEl = document.getElementById('single-card');
  const card = cardEl.querySelector('.card');
  const img = document.getElementById('single-img');
  const info = document.getElementById('single-info');

  document.getElementById('single-number').textContent = '';
  document.getElementById('single-name').textContent = '';
  document.getElementById('single-keywords').textContent = '';
  document.getElementById('single-meaning').textContent = '';

  card.classList.remove('flipped');
  img.classList.remove('reversed');
  info.classList.add('hidden');

  img.src = currentSingle.img;
  img.alt = currentSingle.name;
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('single-card').addEventListener('click', () => {
    const card = document.getElementById('single-card').querySelector('.card');
    card.classList.toggle('flipped');
    const info = document.getElementById('single-info');
    setTimeout(() => {
      if (card.classList.contains('flipped')) {
        applySingleInfo();
        info.classList.remove('hidden');
      } else {
        info.classList.add('hidden');
      }
    }, 350);
  });
});

// Daily card
function startDaily() {
  showScreen('daily-screen');

  const today = new Date().toISOString().slice(0, 10);
  const stored = localStorage.getItem('tarot_daily');
  let daily;

  if (stored) {
    const parsed = JSON.parse(stored);
    if (parsed.date === today) {
      daily = { ...CARDS[parsed.cardId], isReversed: parsed.isReversed };
    }
  }

  if (!daily) {
    const card = shuffle(CARDS)[0];
    daily = { ...card, isReversed: Math.random() < 0.33 };
    localStorage.setItem('tarot_daily', JSON.stringify({
      date: today, cardId: card.id, isReversed: daily.isReversed
    }));
  }

  const img = document.getElementById('daily-img');
  img.src = daily.img;
  img.alt = daily.name;
  if (daily.isReversed) { img.classList.add('reversed'); } else { img.classList.remove('reversed'); }

  document.getElementById('daily-date').textContent = new Date().toLocaleDateString('tr-TR', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
  document.getElementById('daily-number').innerHTML =
    `${daily.id} — Büyük Arcana${daily.isReversed ? '&nbsp;&nbsp;<span class="reversed-tag">↓ TERS</span>' : ''}`;
  document.getElementById('daily-name').textContent = daily.name;
  document.getElementById('daily-keywords').textContent = daily.keywords.join('  ·  ');
  document.getElementById('daily-meaning').textContent = daily.isReversed ? daily.reversedMeaning : daily.meaning;

  const card = document.getElementById('daily-card').querySelector('.card');
  card.classList.remove('flipped');
  document.getElementById('daily-info').classList.add('hidden');

  setTimeout(() => {
    card.classList.add('flipped');
    setTimeout(() => { document.getElementById('daily-info').classList.remove('hidden'); }, 350);
  }, 500);
}

// Three card spread
let pickDeck = [];
let pickedCards = [];
const PICK_LABELS = ['Geçmiş', 'Şimdi', 'Gelecek'];

function startSpread() {
  showScreen('spread-screen');
  resetSpread();
}

function resetSpread() {
  pickedCards = [];
  pickDeck = shuffle(CARDS).map(c => ({ ...c, isReversed: Math.random() < 0.33 }));

  document.getElementById('spread-pick-phase').style.display = 'flex';
  document.getElementById('spread-reveal-phase').style.display = 'none';

  updatePickInstruction();
  const grid = document.getElementById('pick-grid');
  grid.innerHTML = pickDeck.map((_, i) => `
    <div class="pick-card" id="pick-card-${i}" onclick="pickCard(${i})">
      <div class="pick-back-design"></div>
    </div>
  `).join('');
}

function updatePickInstruction() {
  const idx = pickedCards.length;
  document.getElementById('pick-instruction').textContent =
    `${PICK_LABELS[idx]} için bir kart seç  (${idx + 1} / 3)`;
}

function pickCard(i) {
  if (pickedCards.some(p => p === i)) return;
  pickedCards.push(i);

  const el = document.getElementById(`pick-card-${i}`);
  el.classList.add('picked');
  el.querySelector('.pick-back-design').textContent = PICK_LABELS[pickedCards.length - 1];

  if (pickedCards.length === 3) {
    setTimeout(showSpreadReveal, 500);
  } else {
    updatePickInstruction();
  }
}

function showSpreadReveal() {
  spreadCards = pickedCards.map(i => pickDeck[i]);

  document.getElementById('spread-pick-phase').style.display = 'none';
  document.getElementById('spread-reveal-phase').style.display = 'flex';

  for (let i = 0; i < 3; i++) {
    const card = document.getElementById(`spread-card-${i}`);
    card.classList.remove('flipped');
    const img = document.getElementById(`spread-img-${i}`);
    img.src = spreadCards[i].img;
    img.alt = spreadCards[i].name;
    img.classList.remove('reversed');
    document.getElementById(`spread-name-${i}`).innerHTML = '';
    document.getElementById(`spread-name-${i}`).style.opacity = '0';
  }
  document.getElementById('spread-meanings').innerHTML = '';

  for (let i = 0; i < 3; i++) {
    setTimeout(() => flipSpreadCard(i), 700 + i * 550);
  }
}

function flipSpreadCard(idx) {
  const card = document.getElementById(`spread-card-${idx}`);
  if (card.classList.contains('flipped')) return;
  card.classList.add('flipped');

  const c = spreadCards[idx];
  const img = document.getElementById(`spread-img-${idx}`);
  if (c.isReversed) img.classList.add('reversed');

  const nameEl = document.getElementById(`spread-name-${idx}`);
  nameEl.innerHTML = c.isReversed
    ? `↓ ${c.name} <span class="reversed-tag">TERS</span>`
    : c.name;
  setTimeout(() => nameEl.style.opacity = '1', 300);

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
  const html = flipped.map(i => {
    const c = spreadCards[i];
    return `
    <div class="spread-meaning-block">
      <div class="spread-meaning-label">
        ${labels[i]} · ${c.name}${c.isReversed ? '&nbsp;<span class="reversed-tag">↓ TERS</span>' : ''}
      </div>
      <div class="spread-meaning-keywords">${c.keywords.join(' · ')}</div>
      <div class="spread-meaning-text">${c.isReversed ? c.reversedMeaning : c.meaning}</div>
    </div>
  `;
  }).join('');

  document.getElementById('spread-meanings').innerHTML = html;
}

// Celtic Cross
const CELTIC_LABELS = [
  'Merkez · Şimdiki Durum',
  'Engel · Karşındaki Güç',
  'Temel · Altındaki Kökler',
  'Geçmiş · Yakın Geçmiş',
  'Taç · Potansiyel',
  'Gelecek · Yakın Gelecek',
  'Sen · Kendi Bakışın',
  'Çevre · Dış Etkiler',
  'Umutlar · Beklentiler',
  'Sonuç · Olası Son'
];

let celticCards = [];

function startCeltic() {
  showScreen('celtic-screen');
  drawCeltic();
}

function drawCeltic() {
  celticCards = shuffle(CARDS).slice(0, 10).map(c => ({ ...c, isReversed: Math.random() < 0.33 }));

  for (let i = 0; i < 10; i++) {
    const cardEl = document.getElementById(`cc-${i}`).querySelector('.card');
    cardEl.classList.remove('flipped');
    const img = document.getElementById(`cc-img-${i}`);
    img.src = celticCards[i].img;
    img.alt = celticCards[i].name;
    img.classList.remove('reversed');
  }
  document.getElementById('celtic-meanings').innerHTML = '';
}

function flipCelticCard(idx) {
  const cardEl = document.getElementById(`cc-${idx}`).querySelector('.card');
  if (cardEl.classList.contains('flipped')) return;
  cardEl.classList.add('flipped');

  const c = celticCards[idx];
  const img = document.getElementById(`cc-img-${idx}`);
  if (c.isReversed) img.classList.add('reversed');

  setTimeout(() => renderCelticMeanings(), 400);
}

function renderCelticMeanings() {
  const flipped = [];
  for (let i = 0; i < 10; i++) {
    if (document.getElementById(`cc-${i}`).querySelector('.card').classList.contains('flipped')) {
      flipped.push(i);
    }
  }
  if (flipped.length === 0) return;

  const html = flipped.map(i => {
    const c = celticCards[i];
    return `
    <div class="spread-meaning-block">
      <div class="spread-meaning-label">
        ${CELTIC_LABELS[i]}${c.isReversed ? '&nbsp;<span class="reversed-tag">↓ TERS</span>' : ''}
      </div>
      <div class="spread-meaning-keywords">${c.name} · ${c.keywords.join(' · ')}</div>
      <div class="spread-meaning-text">${c.isReversed ? c.reversedMeaning : c.meaning}</div>
    </div>`;
  }).join('');

  document.getElementById('celtic-meanings').innerHTML = html;
}

// Kart Sözlüğü
function startDictionary() {
  showScreen('dict-screen');
  const grid = document.getElementById('dict-grid');
  grid.innerHTML = CARDS.map(c => `
    <div class="dict-card" onclick="openCardModal(${c.id})">
      <div class="dict-card-img"><img src="${c.img}" alt="${c.name}"></div>
      <div class="dict-card-num">${c.id}</div>
      <div class="dict-card-name">${c.name}</div>
    </div>
  `).join('');
}

function openCardModal(id) {
  const c = CARDS[id];
  document.getElementById('modal-img').src = c.img;
  document.getElementById('modal-img').classList.remove('reversed');
  document.getElementById('modal-number').textContent = `${c.id} — Büyük Arcana`;
  document.getElementById('modal-name').textContent = c.name;
  document.getElementById('modal-en').textContent = c.en;
  document.getElementById('modal-keywords').textContent = c.keywords.join('  ·  ');
  document.getElementById('modal-meaning').textContent = c.meaning;
  document.getElementById('modal-reversed').textContent = c.reversedMeaning;
  document.getElementById('card-modal').style.display = 'flex';
}

function closeCardModal() {
  document.getElementById('card-modal').style.display = 'none';
}

createStars();
