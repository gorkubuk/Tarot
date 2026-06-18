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
  },

  // --- MINOR ARCANA: KADEHLER (CUPS) ---
  {
    id: 22, name: 'Kadehlerin Ası', en: 'Ace of Cups', suit: 'cups',
    img: 'images/cups01.jpg',
    keywords: ['Yeni aşk', 'Duygusal açılış', 'Sezgi', 'Bolluk'],
    meaning: 'Kadehlerin Ası, duygusal ve ruhsal bir yenilenmenin habercisidir. Yüreğinin kapılarını sonuna kadar açma zamanı; yeni bir aşk, derin bir bağ ya da içsel bir huzur yaklaşıyor olabilir. Sezgilerine güven ve duygularının akmasına izin ver.',
    reversedMeaning: 'Duygusal tıkanıklık ya da bastırılmış hisler söz konusu olabilir. Kendini ifade etmekte zorlanıyor, sevgiyi almaktan kaçınıyor olabilirsin. İçindeki kapıları yeniden açmak için önce kendine karşı dürüst ol.'
  },
  {
    id: 23, name: 'Kadehlerin İkisi', en: 'Two of Cups', suit: 'cups',
    img: 'images/cups02.jpg',
    keywords: ['Birlik', 'Ortaklık', 'Karşılıklı çekim', 'Bağ'],
    meaning: 'İki kadeh, iki ruh arasındaki derin ve dengeli bağı simgeler. Romantik bir ilişki, güçlü bir dostluk ya da iş ortaklığı gelişiyor olabilir. Karşılıklı saygı ve anlayışın temeli atılıyor.',
    reversedMeaning: 'İlişkide dengesizlik ya da iletişim kopukluğu var. Bir taraf daha fazla veriyor ya da beklentiler örtüşmüyor. Dürüst bir konuşma durumu kurtarabilir.'
  },
  {
    id: 24, name: 'Kadehlerin Üçü', en: 'Three of Cups', suit: 'cups',
    img: 'images/cups03.jpg',
    keywords: ['Kutlama', 'Dostluk', 'Neşe', 'Topluluk'],
    meaning: 'Üç kadeh, sevinç dolu bir araya gelişi ve ortak başarıyı kutlamayı simgeler. Sevdiklerinle geçireceğin güzel anlar, bir başarının kutlanması ya da yeni bir çevreyle kaynaşma dönemindesin.',
    reversedMeaning: 'Sosyal çevrenizdeki dedikodu ya da rekabet seni yıpratıyor olabilir. Aşırı eğlence odaklanmanı engelliyor. Gerçek dostlukları yüzeysel ilişkilerden ayırt etme zamanı.'
  },
  {
    id: 25, name: 'Kadehlerin Dördü', en: 'Four of Cups', suit: 'cups',
    img: 'images/cups04.jpg',
    keywords: ['Hayal kırıklığı', 'İçe kapanma', 'Değerlendirme', 'Kayıtsızlık'],
    meaning: 'Dört kadeh, mevcut olanaklara karşı kayıtsızlığı ve durgunluğu simgeler. Önüne uzatılan fırsatı görmezden gelebilirsin; bir adım geri çekilip gerçekte ne istediğini sorgulamanın zamanı.',
    reversedMeaning: 'Uzun süren durgunluktan uyandığını ve yeniden ilgi duymaya başladığını hissediyorsun. Dışarıdan gelen bir teklifi ya da daveti değerlendirmeye hazırsın.'
  },
  {
    id: 26, name: 'Kadehlerin Beşi', en: 'Five of Cups', suit: 'cups',
    img: 'images/cups05.jpg',
    keywords: ['Kayıp', 'Üzüntü', 'Pişmanlık', 'Yas'],
    meaning: 'Beş kadeh, yaşanan bir kaybın ya da hayal kırıklığının ağırlığını taşır. Dökülen kadehlere odaklanmak yerine geride duran iki dolu kadehi de görmeye çalış; her kayıp bir şeyleri de geride bırakır.',
    reversedMeaning: 'Yas sürecinin sonuna yaklaşıyorsun. Geçmişi bırakmaya ve ileriye bakmaya hazır olduğunu hissediyorsun. İçindeki iyileşme başlıyor.'
  },
  {
    id: 27, name: 'Kadehlerin Altısı', en: 'Six of Cups', suit: 'cups',
    img: 'images/cups06.jpg',
    keywords: ['Nostalji', 'Çocukluk', 'Masumiyet', 'Anılar'],
    meaning: 'Altı kadeh, geçmişin sıcaklığına ve masum anılara yolculuğu simgeler. Eski bir dost ya da aşk yeniden hayatına girebilir; ya da çocukluğundan taşınan bir şeyin izlerini bugününde keşfedebilirsin.',
    reversedMeaning: 'Geçmişe takılıp kalmak seni bugünden alıkoyuyor. Nostalji bir sığınak olmaktan çıkıp bir hapishaneye dönüşmüş olabilir. İlerlemenin zamanı geldi.'
  },
  {
    id: 28, name: 'Kadehlerin Yedisi', en: 'Seven of Cups', suit: 'cups',
    img: 'images/cups07.jpg',
    keywords: ['Hayal', 'Yanılsama', 'Seçim bolluğu', 'Kaçış'],
    meaning: 'Yedi kadeh, çok sayıda seçenek ve hayal arasında kaybolmayı simgeler. Her şey mümkün görünebilir ama çoğu yanılsamadan ibaret. Gerçekçi adımlar atmak için hayallerini süzgeçten geçir.',
    reversedMeaning: 'Yanılsamalardan sıyrılıp gerçekçi bir bakış açısı kazanıyorsun. Neyin gerçek, neyin hayal ürünü olduğunu daha net görüyorsun. Somut adımlar atmaya hazırsın.'
  },
  {
    id: 29, name: 'Kadehlerin Sekizi', en: 'Eight of Cups', suit: 'cups',
    img: 'images/cups08.jpg',
    keywords: ['Terk etmek', 'Yolculuk', 'Arayış', 'Bırakmak'],
    meaning: 'Sekiz kadeh, bir şeyi geride bırakıp daha derin bir anlam arayışına çıkmayı simgeler. Dışarıdan iyi görünen ama içten boş hissettiren bir şeyi terk etme cesareti gerekiyor. Ruhunun seni çektiği yöne git.',
    reversedMeaning: 'Gitmek istediğin halde kalıyorsun; bir durumdan ya da ilişkiden kopamıyorsun. Korkuların ya da sorumluluk duygun seni tutuyor. Kendine dürüst ol.'
  },
  {
    id: 30, name: 'Kadehlerin Dokuzu', en: 'Nine of Cups', suit: 'cups',
    img: 'images/cups09.jpg',
    keywords: ['Memnuniyet', 'Dilek', 'Mutluluk', 'Tatmin'],
    meaning: '"Dilek kartı" olarak bilinen dokuz kadeh, duygusal doyumu ve hayallerin gerçekleşmesini simgeler. Bir süreliğine kendinle barışık ve hayatından memnun olacaksın. İçten gelen bir dilekle bağlantı kur.',
    reversedMeaning: 'Dış görünüşe rağmen içte bir boşluk hissediyorsun. Maddi ya da sosyal başarı ruhsal tatmini sağlamıyor. Gerçekte ne istediğini yeniden keşfet.'
  },
  {
    id: 31, name: 'Kadehlerin Onu', en: 'Ten of Cups', suit: 'cups',
    img: 'images/cups10.jpg',
    keywords: ['Mutlu son', 'Aile huzuru', 'Uyum', 'Tamamlanma'],
    meaning: 'On kadeh, duygusal açıdan tam bir tamamlanmayı ve aile içindeki derin huzuru simgeler. Sevdiklerinle kurduğun bağlar güçlü, yaşamında bir uyum ve bereket dönemi var. Minnetle kucakla.',
    reversedMeaning: 'Aile içi ya da yakın ilişkilerde gerilim ve uyumsuzluk söz konusu. Beklentiler gerçeklikle örtüşmüyor. Sevdiklerinle açık bir iletişim kurmaya çalış.'
  },
  {
    id: 32, name: 'Kadehlerin Paçı', en: 'Page of Cups', suit: 'cups',
    img: 'images/cups11.jpg',
    keywords: ['Hayal gücü', 'Sezgi', 'Duygusal mesaj', 'Yaratıcılık'],
    meaning: 'Kadehlerin Paçı, duygusal açıdan açık ve meraklı bir enerjiyi temsil eder. Beklenmedik bir haber, romantik bir mesaj ya da yaratıcı bir ilham kapıda olabilir. Sezgilerine kulak ver ve içindeki çocuğu serbest bırak.',
    reversedMeaning: 'Duygusal olgunluktan yoksun davranışlar ya da hayal dünyasına aşırı kaçış görülebilir. İçsel sesini duymakta zorlanıyor ya da mesajları yanlış yorumluyorsun.'
  },
  {
    id: 33, name: 'Kadehlerin Şövalyesi', en: 'Knight of Cups', suit: 'cups',
    img: 'images/cups12.jpg',
    keywords: ['Romantizm', 'Teklif', 'Duygusal açılım', 'İdealizm'],
    meaning: 'Kadehlerin Şövalyesi, kalbiyle hareket eden, romantik ve idealist bir enerjiyi temsil eder. Duygusal bir teklif, romantik bir jest ya da yaratıcı bir davet yaklaşıyor olabilir. Hislerini eyleme dönüştürme zamanı.',
    reversedMeaning: 'Duygusal manipülasyon, aşırı romantizm ya da kıskançlık söz konusu olabilir. Sözler eylemle örtüşmüyor; gerçekten hissedilip hissedilmediğini sorgulamanın zamanı.'
  },
  {
    id: 34, name: 'Kadehlerin Kraliçesi', en: 'Queen of Cups', suit: 'cups',
    img: 'images/cups13.jpg',
    keywords: ['Sezgi', 'Şefkat', 'Empati', 'Duygusal derinlik'],
    meaning: 'Kadehlerin Kraliçesi, derin bir sezgiye ve koşulsuz şefkate sahip, duygusal olarak olgun bir enerjiyi temsil eder. Hem kendine hem çevrene karşı anlayışlı ve nazik bir dönemdesin. Sezgilerine güven.',
    reversedMeaning: 'Duygusal bağımlılık, aşırı hassasiyet ya da sınırları koruyamamak söz konusu olabilir. Kendi ihtiyaçlarını göz ardı ederek başkalarına hizmet etmekten yorulmuş olabilirsin.'
  },
  {
    id: 35, name: 'Kadehlerin Kralı', en: 'King of Cups', suit: 'cups',
    img: 'images/cups14.jpg',
    keywords: ['Duygusal denge', 'Olgunluk', 'Bilgelik', 'Kontrol'],
    meaning: 'Kadehlerin Kralı, duygularını yönetebilen, hem mantıklı hem de şefkatli olan olgun bir enerjiyi temsil eder. Çevrenize rehberlik edecek, hem kalbinle hem aklınla karar verebileceksin. Denge güçlü yanın.',
    reversedMeaning: 'Duygusal baskı, manipülasyon ya da içsel çalkantıları bastırma eğilimi görülebilir. Dışarıda sakin görünürken içte fırtınaların estiği bir dönem.'
  },

  // --- MINOR ARCANA: ASALAR (WANDS) ---
  {
    id: 36, name: 'Asaların Ası', en: 'Ace of Wands', suit: 'wands',
    img: 'images/wands01.jpg',
    keywords: ['İlham', 'Yaratıcılık', 'Enerji', 'Yeni başlangıç'],
    meaning: 'Asaların Ası, yakıcı bir ilham ve yaratıcı enerjinin patlamasını simgeler. Yeni bir proje, girişim ya da tutku dolu bir yolculuğa başlamak için mükemmel bir an. Ateşini alevlendir ve cesaretli adımlar at.',
    reversedMeaning: 'Gecikme, tıkanma ya da motivasyon eksikliği söz konusu. İçindeki ateş sönmeye başlamış olabilir. Kendini yeniden ateşleyecek küçük bir adım at.'
  },
  {
    id: 37, name: 'Asaların İkisi', en: 'Two of Wands', suit: 'wands',
    img: 'images/wands02.jpg',
    keywords: ['Planlama', 'Vizyon', 'Ufuk', 'Karar'],
    meaning: 'Asaların İkisi, gelecek için büyük planlar yapma ve cesur kararlar verme aşamasını simgeler. Dünya ayaklarının önünde; hangi yöne gideceğini belirle. Vizyonunu somut adımlara dönüştürmeye hazırsın.',
    reversedMeaning: 'Belirsizlik ve kararsızlık içindesin. Büyük hayaller kuruyorsun ama ilk adımı atmaktan çekiniyorsun. Korkularını tanı ve küçük bir hamle yap.'
  },
  {
    id: 38, name: 'Asaların Üçü', en: 'Three of Wands', suit: 'wands',
    img: 'images/wands03.jpg',
    keywords: ['Genişleme', 'Beklenti', 'İlerleme', 'Büyüme'],
    meaning: 'Asaların Üçü, ilk adımların ötesine geçip ilk meyvelerin görünmeye başladığı aşamayı simgeler. Attığın adımlar karşılığını vermeye başlıyor; ufkunu genişletme ve işlerini büyütme zamanı.',
    reversedMeaning: 'Hayal kırıklığı ya da beklentilerin ertelenmesi söz konusu. Planlar beklendiği gibi ilerlemiyor. Stratejini gözden geçir ve sabırlı ol.'
  },
  {
    id: 39, name: 'Asaların Dördü', en: 'Four of Wands', suit: 'wands',
    img: 'images/wands04.jpg',
    keywords: ['Kutlama', 'Ev', 'İstikrar', 'Başarı'],
    meaning: 'Asaların Dördü, bir aşamanın başarıyla tamamlanmasını ve bunun kutlanmasını simgeler. Ev, aile ya da toplulukla ilgili mutlu haberler gelebilir. Temeller sağlam, kutlamaya hakkın var.',
    reversedMeaning: 'Ev ya da aile ortamındaki huzursuzluk ya da ertelenmiş kutlama. İçsel bir huzur ve denge arayışındasın.'
  },
  {
    id: 40, name: 'Asaların Beşi', en: 'Five of Wands', suit: 'wands',
    img: 'images/wands05.jpg',
    keywords: ['Çatışma', 'Rekabet', 'Tartışma', 'Enerji'],
    meaning: 'Asaların Beşi, farklı görüşlerin çarpıştığı rekabetçi bir dönemin içindesin. Bu çatışmalar seni güçlendirmek için bir fırsat da olabilir; ama enerjiyi doğru yönlendirmek önemli.',
    reversedMeaning: 'Uzun süren çatışmaların sona ermesi ya da kaçınılan bir yüzleşme. Uzlaşmaya açık ol; her savaşı tek başına kazanmak zorunda değilsin.'
  },
  {
    id: 41, name: 'Asaların Altısı', en: 'Six of Wands', suit: 'wands',
    img: 'images/wands06.jpg',
    keywords: ['Zafer', 'Takdir', 'Başarı', 'Tanınma'],
    meaning: 'Asaların Altısı, hak edilen bir başarı ve toplumsal takdir anını simgeler. Emeklerin görülüyor ve takdir ediliyor. Özgüvenir yüksek; bu zaferi hakkıyla sahiplen.',
    reversedMeaning: 'Başarının gölgelendiği ya da takdir görmediğin bir dönem. Başkalarının onayına olan bağımlılığını sorgulamanın zamanı.'
  },
  {
    id: 42, name: 'Asaların Yedisi', en: 'Seven of Wands', suit: 'wands',
    img: 'images/wands07.jpg',
    keywords: ['Savunma', 'Kararlılık', 'Direniş', 'Meydan okuma'],
    meaning: 'Asaların Yedisi, her taraftan gelen baskılara karşın konumunu koruma kararlılığını simgeler. Bir zorlukla yüzleşiyorsun ama doğruluğuna inanıyorsun. Tutumundan vazgeçme.',
    reversedMeaning: 'Tükenmişlik ya da gereksiz yere çok fazla şeyle mücadele etme hissi. Hangi savaşların gerçekten senin savaşın olduğunu seç.'
  },
  {
    id: 43, name: 'Asaların Sekizi', en: 'Eight of Wands', suit: 'wands',
    img: 'images/wands08.jpg',
    keywords: ['Hız', 'Hareket', 'İlerleme', 'İletişim'],
    meaning: 'Asaların Sekizi, hızla ilerleyen olayları ve ani gelişmeleri simgeler. Her şey çok hızlı oluyor; gelen mesajlara, seyahate ya da fırsatlara hazır ol. Akışa kapıl.',
    reversedMeaning: 'Gecikmeler, engellemeler ya da anlaşmazlıklar söz konusu. Planlar beklendiği gibi gitmiyor; sabırsızlık durumu daha da zorlaştırabilir.'
  },
  {
    id: 44, name: 'Asaların Dokuzu', en: 'Nine of Wands', suit: 'wands',
    img: 'images/wands09.jpg',
    keywords: ['Dayanıklılık', 'Sınırlar', 'Yorgunluk', 'Direnç'],
    meaning: 'Asaların Dokuzu, uzun bir mücadelenin ardından yorgun ama ayakta durmanın kararlılığını simgeler. Son engelin yaklaştığını hissediyorsun. Biraz daha dayan; sınırlarını korurken devam et.',
    reversedMeaning: 'Tükenmişlik ve pes etme dürtüsü güçlenmiş. Sınırlarını aşmış, artık devam etmek istemiyorsun. İyi bir dinlenme ve destek alma zamanı olabilir.'
  },
  {
    id: 45, name: 'Asaların Onu', en: 'Ten of Wands', suit: 'wands',
    img: 'images/wands10.jpg',
    keywords: ['Yük', 'Sorumluluk', 'Tükenmişlik', 'Baskı'],
    meaning: 'Asaların Onu, çok fazla yükü tek başına taşımanın eziciliğini simgeler. Üzerine aldığın sorumluluklar artık omuzlarını eziyor. Yükü paylaşmayı ya da bir kısmını bırakmayı öğren.',
    reversedMeaning: 'Yükten kurtulma ve sorumluluklardan bir kısmını devretme zamanı. Tükenmişliğin son evresinden çıkış başlıyor.'
  },
  {
    id: 46, name: 'Asaların Paçı', en: 'Page of Wands', suit: 'wands',
    img: 'images/wands11.jpg',
    keywords: ['Merak', 'Macera', 'Enerji', 'Cesaret'],
    meaning: 'Asaların Paçı, yeni bir fikir ya da maceraya atılmaya hazır, enerjik ve meraklı bir ruhun habercisidir. Girişimci ruhun uyanıyor; küçük de olsa cesur bir adım at.',
    reversedMeaning: 'Düşüncesizce hareket etme ya da enerjiyi odaklayamama söz konusu. Heyecan gerçekçi planların önüne geçiyor. Biraz duraksayıp yönünü netleştir.'
  },
  {
    id: 47, name: 'Asaların Şövalyesi', en: 'Knight of Wands', suit: 'wands',
    img: 'images/wands12.jpg',
    keywords: ['Macera', 'Tutku', 'Cesaret', 'Dürtüsellik'],
    meaning: 'Asaların Şövalyesi, ateşli, enerjik ve cesaretli bir ruhla harekete geçmeyi simgeler. Hızlı ilerleyen ve heyecan verici bir dönemin içindesin. Tutkunuzu eyleme dönüştür ama sabırsızlıktan kaçın.',
    reversedMeaning: 'Dürtüsel kararlar, dağınık enerji ya da yarım bırakılan projeler. Yavaşlayıp planını netleştirmeden hareket etmek riskli.'
  },
  {
    id: 48, name: 'Asaların Kraliçesi', en: 'Queen of Wands', suit: 'wands',
    img: 'images/wands13.jpg',
    keywords: ['Özgüven', 'Karizma', 'Yaratıcılık', 'Güç'],
    meaning: 'Asaların Kraliçesi, doğal bir lider, özgüveni ve enerjisiyle çevresini aydınlatan güçlü bir enerjiyi temsil eder. Hem içten hem dışarıdan ışıl ışıl parlıyorsun. Bu gücü iyi amaçlar için kullan.',
    reversedMeaning: 'İçsel güvensizlik ya da dışarıya yansıyan baskınlık. Kendi ışığından korkar gibi davranıyor ya da çevrenize hükmetmeye çalışıyor olabilirsin.'
  },
  {
    id: 49, name: 'Asaların Kralı', en: 'King of Wands', suit: 'wands',
    img: 'images/wands14.jpg',
    keywords: ['Liderlik', 'Vizyon', 'Girişimcilik', 'Otorite'],
    meaning: 'Asaların Kralı, güçlü bir vizyona sahip, doğal lider ve karizmatik bir enerjiyi temsil eder. Büyük hedefler için ilham verici adımlar atabilirsin. İnsanları ortak bir amaç etrafında toplayabilirsin.',
    reversedMeaning: 'Baskıcı liderlik, ego ya da kontrolcülük söz konusu olabilir. Güç, hizmet için değil kontrol için kullanılıyor olabilir. Vizyonunu yeniden gözden geçir.'
  },

  // --- MINOR ARCANA: KILICLAR (SWORDS) ---
  {
    id: 50, name: 'Kılıçların Ası', en: 'Ace of Swords', suit: 'swords',
    img: 'images/swords01.jpg',
    keywords: ['Netlik', 'Gerçek', 'Zihinsel keskinlik', 'Zafer'],
    meaning: 'Kılıçların Ası, zihinsel bir aydınlanma ve kristal berraklığında bir gerçeğin ortaya çıkmasını simgeler. Keskin bir karar alma ya da net bir iletişim anında doğruyu söylemek için cesaret buluyorsun. Gerçek özgürleştirir.',
    reversedMeaning: 'Zihinsel karmaşa, yanıltıcı iletişim ya da gerçeği söylemekten kaçınma. Bir durum hakkında kendine ya da başkasına dürüst olmaktan çekiniyorsun.'
  },
  {
    id: 51, name: 'Kılıçların İkisi', en: 'Two of Swords', suit: 'swords',
    img: 'images/swords02.jpg',
    keywords: ['Çıkmaz', 'Kararsızlık', 'Denge', 'Kör nokta'],
    meaning: 'Kılıçların İkisi, iki seçenek arasında sıkışıp kalmanın yol açtığı zorlu bir duraksama anını simgeler. Gözlerini kapatmak durumu ortadan kaldırmaz; bilinçli bir seçim yapman gerekiyor.',
    reversedMeaning: 'Kilitlenme çözülmeye başladığını hissediyorsun. Zorlu bir kararı artık erteleyemiyorsun; gerçeği görmek için perde aralanıyor.'
  },
  {
    id: 52, name: 'Kılıçların Üçü', en: 'Three of Swords', suit: 'swords',
    img: 'images/swords03.jpg',
    keywords: ['Kalp kırıklığı', 'Acı', 'İhanet', 'Kayıp'],
    meaning: 'Kılıçların Üçü, yüreği derinden yaralayan bir ayrılık, ihanet ya da acı gerçeği simgeler. Bu acı geçici; ama yaşanması ve kabul edilmesi gerekiyor. Gözyaşları zayıflık değil, iyileşmenin başlangıcıdır.',
    reversedMeaning: 'İyileşme sürecinin başladığını ya da acının hafiflemekte olduğunu hissediyorsun. Eski yaraları deşmek yerine bırakmayı öğrenme zamanı.'
  },
  {
    id: 53, name: 'Kılıçların Dördü', en: 'Four of Swords', suit: 'swords',
    img: 'images/swords04.jpg',
    keywords: ['Dinlenme', 'Geri çekilme', 'İyileşme', 'Meditasyon'],
    meaning: 'Kılıçların Dördü, zihinsel yorgunluğu gidermek için gereken sessizliği ve dinlenmeyi simgeler. Bir adım geri çekilip yeniden enerji toplamak gerekiyor. Hareketsizlik bazen en güçlü stratejidir.',
    reversedMeaning: 'Zorunlu dinlenmeden kaçınıyor ya da fazla uzun süren bir durgunluktan çıkmak istiyorsun. Yavaş yavaş yeniden harekete geçme zamanı.'
  },
  {
    id: 54, name: 'Kılıçların Beşi', en: 'Five of Swords', suit: 'swords',
    img: 'images/swords05.jpg',
    keywords: ['Çatışma', 'Yenilgi', 'Onur', 'Zayiat'],
    meaning: 'Kılıçların Beşi, her ne pahasına olursa olsun kazanmak ya da kaybetmenin acısını simgeler. Bir çatışmada galip gelmek mümkün olsa da geriye kalan zarar ilişkiyi zedeler. Neyi kazanıp neyi kaybettiğini dürüstçe değerlendir.',
    reversedMeaning: 'Geçmişteki bir çatışmayla yüzleşme ya da pişmanlık. Uzlaşma ve barış aramanın zamanı. Eski yaraları sarmak için adım atmaya hazırsın.'
  },
  {
    id: 55, name: 'Kılıçların Altısı', en: 'Six of Swords', suit: 'swords',
    img: 'images/swords06.jpg',
    keywords: ['Geçiş', 'İyileşme', 'Uzaklaşmak', 'İlerleme'],
    meaning: 'Kılıçların Altısı, zorlu bir dönemden daha sakin sulara doğru yapılan geçişi simgeler. Geride bıraktıklarının izleri hâlâ var ama artık ileriye doğru yol alıyorsun. Geçiş hem fiziksel hem zihinsel olabilir.',
    reversedMeaning: 'Geçişi zorlaştıran direniş ya da geri dönme isteği. Bilinçsizce eski sorunları yanında taşıyor olabilirsin. Bırakmadan ilerleyemezsin.'
  },
  {
    id: 56, name: 'Kılıçların Yedisi', en: 'Seven of Swords', suit: 'swords',
    img: 'images/swords07.jpg',
    keywords: ['Aldatma', 'Strateji', 'Kaçış', 'Gizlilik'],
    meaning: 'Kılıçların Yedisi, gizli planları, taktiksel geri çekilmeleri ya da aldatıcı davranışları simgeler. Birinin dürüst olmadığını sezebilirsin ya da kendin bir şeyi açık etmekten kaçınıyorsundur. Dikkatli ol.',
    reversedMeaning: 'Gizlenen bir gerçeğin yüzeye çıkması ya da aldatmacayı fark etme. Dürüstlüğe dönme zamanı; gizliden ilerlemek artık işe yaramıyor.'
  },
  {
    id: 57, name: 'Kılıçların Sekizi', en: 'Eight of Swords', suit: 'swords',
    img: 'images/swords08.jpg',
    keywords: ['Tuzak', 'Kısıtlama', 'Çaresizlik', 'Zihinsel baskı'],
    meaning: 'Kılıçların Sekizi, büyük ölçüde kendi zihnimizin yarattığı bir hapishane içinde hissetmeyi simgeler. Bağlar gerçek gibi görünse de kafandaki sınırlamalar asıl kısıtlayan. Gözlerini aç; kaçış yolu düşündüğünden yakın.',
    reversedMeaning: 'Zihinsel baskıdan kurtulma ve sınırlamalardan sıyrılma süreci başlıyor. Kendi koyduğun duvarların farkına varıyorsun. Özgürlük içeriden geliyor.'
  },
  {
    id: 58, name: 'Kılıçların Dokuzu', en: 'Nine of Swords', suit: 'swords',
    img: 'images/swords09.jpg',
    keywords: ['Kaygı', 'Kabus', 'Pişmanlık', 'Zihinsel yük'],
    meaning: 'Kılıçların Dokuzu, uykusuz geceleri, aşırı düşünmeyi ve kaygıyla boğuşmayı simgeler. Zihinsel acılar genellikle olduğundan büyük görünür. Bu karanlık geçecek; biriyle konuşmak ya da yardım istemek zayıflık değildir.',
    reversedMeaning: 'Kaygı ve korkuların yavaş yavaş dağıldığını hissediyorsun. En kötüsünü geride bırakıyorsun. Yeni bir perspektifle bakabiliyorsun.'
  },
  {
    id: 59, name: 'Kılıçların Onu', en: 'Ten of Swords', suit: 'swords',
    img: 'images/swords10.jpg',
    keywords: ['Son', 'Yenilgi', 'Kriz', 'Yeni başlangıç'],
    meaning: 'Kılıçların Onu, zorlu bir dönemin en dip noktasını simgeler; ama her son yeni bir başlangıcın habercisidir. Artık daha aşağı inemezsin; bu, bir şeylerin sona erdiği ama yeni bir sayfanın açıldığı andır.',
    reversedMeaning: 'Felaketten kurtulma ve yenilenme süreci başlıyor. En zor kısım geçti; bu deneyimden güçlenmiş olarak çıkıyorsun.'
  },
  {
    id: 60, name: 'Kılıçların Paçı', en: 'Page of Swords', suit: 'swords',
    img: 'images/swords11.jpg',
    keywords: ['Merak', 'Zekâ', 'Haberci', 'Keskinlik'],
    meaning: 'Kılıçların Paçı, keskin zekâlı, meraklı ve gözlemci bir enerjiyi simgeler. Yeni fikirler, haberler ya da tartışmalar gündemde. Gerçeği araştırma isteğin güçlü ama sabırsızlıktan kaçın.',
    reversedMeaning: 'Düşüncesiz konuşmalar, dedikodu ya da abartılı eleştiriler söz konusu olabilir. Kırıcı olmadan dürüst olunabilir; sözcüklerin gücünü hafife alma.'
  },
  {
    id: 61, name: 'Kılıçların Şövalyesi', en: 'Knight of Swords', suit: 'swords',
    img: 'images/swords12.jpg',
    keywords: ['Hız', 'Kararlılık', 'Cesaret', 'Dürtüsel hareket'],
    meaning: 'Kılıçların Şövalyesi, büyük bir hızla harekete geçen, cesur ve kararlı bir enerjiyi simgeler. Doğru olanı söylemek ve savunmaktan çekinmiyorsun. Ama hızın seni düşüncesizliğe sürüklemesin.',
    reversedMeaning: 'Saldırganlık, çok hızlı hareket etme ya da başkalarını dinlememe. Düşünceli olmadan ileri atılmak zarar verebilir. Frene bas.'
  },
  {
    id: 62, name: 'Kılıçların Kraliçesi', en: 'Queen of Swords', suit: 'swords',
    img: 'images/swords13.jpg',
    keywords: ['Bağımsızlık', 'Keskinlik', 'Dürüstlük', 'Netlik'],
    meaning: 'Kılıçların Kraliçesi, keskin zekâlı, dürüst ve bağımsız bir enerjiyi temsil eder. Duygulardan etkilenmeden net bir şekilde değerlendirebiliyorsun. Gerçeği söylemek ve sınır koymak konusunda kararlısın.',
    reversedMeaning: 'Soğukluk, acımasızlık ya da duygusal uzaklaşma. Zekânı kalkan olarak kullanıyor, gerçek bağlantıdan kaçıyor olabilirsin.'
  },
  {
    id: 63, name: 'Kılıçların Kralı', en: 'King of Swords', suit: 'swords',
    img: 'images/swords14.jpg',
    keywords: ['Otorite', 'Adalet', 'Akıl', 'Etik'],
    meaning: 'Kılıçların Kralı, adaletli, akılcı ve etik ilkeler doğrultusunda hareket eden güçlü bir enerjiyi temsil eder. Karmaşık durumları net bir zihinle değerlendirip doğru kararlar alabilirsin. Gerçek ve adalet rehberin.',
    reversedMeaning: 'Baskıcı otorite, manipülatif mantık ya da adaletsiz kararlar söz konusu olabilir. Güç, insanları yönetmek için değil, doğruyu korumak için kullanılmalı.'
  },

  // --- MINOR ARCANA: DISKLER (PENTACLES) ---
  {
    id: 64, name: 'Disklerin Ası', en: 'Ace of Pentacles', suit: 'pentacles',
    img: 'images/pents01.jpg',
    keywords: ['Fırsat', 'Bolluk', 'Maddi başlangıç', 'Güvenlik'],
    meaning: 'Disklerin Ası, maddi ya da profesyonel alanda yeni ve verimli bir başlangıcı simgeler. İş teklifi, finansal fırsat ya da somut bir proje kapıda. Elindeki kaynakları akıllıca kullanarak temeli sağlam at.',
    reversedMeaning: 'Maddi fırsatı kaçırmak ya da mali konularda ihtiyatsız davranmak. Paranındaki ya da kariyerindeki bir güvensizlik endişe yaratıyor.'
  },
  {
    id: 65, name: 'Disklerin İkisi', en: 'Two of Pentacles', suit: 'pentacles',
    img: 'images/pents02.jpg',
    keywords: ['Denge', 'Çoklu görev', 'Esneklik', 'Adaptasyon'],
    meaning: 'Disklerin İkisi, hayatın farklı alanlarını dengede tutmaya çalışmayı simgeler. Birden fazla sorumluluk ya da öncelik arasında gidip geliyorsun. Esneklik ve mizah dengeyi korumanın anahtarı.',
    reversedMeaning: 'Dengesizlik ve kapasitenin üzerinde yüklenme. Bir şeyler elden kayıyor; öncelikleri yeniden belirlemeniz gerekiyor.'
  },
  {
    id: 66, name: 'Disklerin Üçü', en: 'Three of Pentacles', suit: 'pentacles',
    img: 'images/pents03.jpg',
    keywords: ['Ekip çalışması', 'Ustalık', 'Planlama', 'İşbirliği'],
    meaning: 'Disklerin Üçü, farklı yeteneklerin bir araya gelerek yarattığı güçlü işbirliğini simgeler. Ekip halinde çalışmak ya da bir ustanın rehberliğinde öğrenmek bu dönemde sana çok şey kazandırır.',
    reversedMeaning: 'Ekip içi uyumsuzluk, süreci baltalayan ego ya da işbirliğinin zorlandığı bir ortam. Herkes kendi yolunu çiziyor ve ortak hedef kayboluyor.'
  },
  {
    id: 67, name: 'Disklerin Dördü', en: 'Four of Pentacles', suit: 'pentacles',
    img: 'images/pents04.jpg',
    keywords: ['Güvenlik', 'Tutumlu olmak', 'Kontrol', 'Koruma'],
    meaning: 'Disklerin Dördü, kazanılanı koruma ve güvence altına alma isteğini simgeler. Finansal güvenlik önemlidir; ama aşırı tutumlu olmak ya da kaybetme korkusunun yönetmesine izin vermek seni sınırlayabilir.',
    reversedMeaning: 'Cömertleşme ya da paranın yönettiği bir hayat tarzından kurtulma başlıyor. Ya da kontrolünü kaybettiğini hissedip sıkı tutmaya çalışıyorsun.'
  },
  {
    id: 68, name: 'Disklerin Beşi', en: 'Five of Pentacles', suit: 'pentacles',
    img: 'images/pents05.jpg',
    keywords: ['Maddi zorluk', 'Yalnızlık', 'Yoksunluk', 'Sıkıntı'],
    meaning: 'Disklerin Beşi, mali güçlük ya da dışlanmışlık hissini simgeler. Zor bir dönemden geçiyor olabilirsin; ama yardım kapıda, görmeyi seçmen yeterli. Yalnız değilsin.',
    reversedMeaning: 'Zorlu bir dönemden çıkmaya başlamak. Yardım kabul etmeye ya da durumu iyileştirmeye hazırsın. İlk adımlar atılıyor.'
  },
  {
    id: 69, name: 'Disklerin Altısı', en: 'Six of Pentacles', suit: 'pentacles',
    img: 'images/pents06.jpg',
    keywords: ['Cömertlik', 'Denge', 'Verme-alma', 'Paylaşım'],
    meaning: 'Disklerin Altısı, kaynakların adil biçimde paylaşılmasını ve yardımlaşmanın gücünü simgeler. Bir dönem veren, bir dönem alan taraf olabilirsin. Cömertlik döngüsel bir güçtür.',
    reversedMeaning: 'Eşitsiz güç dengesi ya da beklentiyle yapılan yardım. Yardım ederken kontrolcü ya da başkasına aşırı bağımlı hissedebilirsin.'
  },
  {
    id: 70, name: 'Disklerin Yedisi', en: 'Seven of Pentacles', suit: 'pentacles',
    img: 'images/pents07.jpg',
    keywords: ['Sabır', 'Değerlendirme', 'Uzun vadeli vizyon', 'Bekleme'],
    meaning: 'Disklerin Yedisi, uzun süre emek verilen bir şeyin meyvelerini bekleme anını simgeler. Hemen sonuç gelmeyebilir; ama sabreden elde ediyor. Bu duraksama, ilerlemenin değerini ölçme anıdır.',
    reversedMeaning: 'Çabalar karşılıksız kalıyor ya da sabırsızlık kötü kararlar aldırıyor. Yatırılan emeğin geri dönüşü görünmüyor; stratejiyi gözden geçir.'
  },
  {
    id: 71, name: 'Disklerin Sekizi', en: 'Eight of Pentacles', suit: 'pentacles',
    img: 'images/pents08.jpg',
    keywords: ['Ustalık', 'Öğrenme', 'Çalışkanlık', 'Gelişim'],
    meaning: 'Disklerin Sekizi, bir işte ya da alanda ustalaşmak için gösterilen özveriyi ve titizliği simgeler. Tekrar tekrar pratik yaparak mükemmelleşiyorsun. Bu dönem kariyer ya da kişisel gelişimde önemli ilerlemeler vaat ediyor.',
    reversedMeaning: 'İşi yarıda bırakma, öğrenmeden kaçma ya da mükemmeliyetçilik tuzağına düşme. Çaba var ama yön ya da motivasyon eksik.'
  },
  {
    id: 72, name: 'Disklerin Dokuzu', en: 'Nine of Pentacles', suit: 'pentacles',
    img: 'images/pents09.jpg',
    keywords: ['Bağımsızlık', 'Başarı', 'Öz yeterlilik', 'Lüks'],
    meaning: 'Disklerin Dokuzu, kendi emeğiyle kazanılan refahı ve özgürlüğü simgeler. Kendi ayakları üzerinde duran, maddi açıdan güvende ve kendisiyle barışık bir dönemin içindesin. Bu başarını kutla.',
    reversedMeaning: 'Bağımsızlığı riske atan kararlar ya da maddi güvenliği tehdit eden durumlar. Ya da sahip olduklarına rağmen içten bir boşluk hissediyorsun.'
  },
  {
    id: 73, name: 'Disklerin Onu', en: 'Ten of Pentacles', suit: 'pentacles',
    img: 'images/pents10.jpg',
    keywords: ['Miras', 'Aile zenginliği', 'Kalıcılık', 'Uzun vadeli güvenlik'],
    meaning: 'Disklerin Onu, nesiller boyunca aktarılan bir zenginliği, güvenli bir aile ortamını ve uzun vadeli refahı simgeler. Kurduğun şeyler kalıcı; bu bolluk sadece para değil, sevgi ve güven de içeriyor.',
    reversedMeaning: 'Aile içi gerilim ya da mirasla ilgili anlaşmazlıklar. Uzun vadeli güvenlik tehdit altında ya da kuşaklar arası kopukluk var.'
  },
  {
    id: 74, name: 'Disklerin Paçı', en: 'Page of Pentacles', suit: 'pentacles',
    img: 'images/pents11.jpg',
    keywords: ['Öğrenme', 'Planlama', 'Yeni beceri', 'Pratiklik'],
    meaning: 'Disklerin Paçı, yeni bir alanda öğrenmeye başlama ve hayalleri somut adımlara dönüştürme enerjisini simgeler. Bir eğitim, yeni bir iş ya da pratik bir proje için atılan ilk adımlar meyve verecek.',
    reversedMeaning: 'Hayaller var ama plan yok. Başlamak için gereken somut adım atılamıyor. Öğrenme süreci gecikiyor ya da dikkat dağınık.'
  },
  {
    id: 75, name: 'Disklerin Şövalyesi', en: 'Knight of Pentacles', suit: 'pentacles',
    img: 'images/pents12.jpg',
    keywords: ['Çalışkanlık', 'Sabır', 'Güvenilirlik', 'Kararlılık'],
    meaning: 'Disklerin Şövalyesi, yavaş ama emin adımlarla, azimle ve güvenilirlikle ilerleyen bir enerjiyi simgeler. Hızlı değil ama istikrarlısın. Verilen sözler tutulur; bu dönemde emek en büyük silahın.',
    reversedMeaning: 'Monotonluk ya da değişime karşı direnç. Aşırı ihtiyatlılık ilerlemeyi yavaşlatıyor. Ya da rutin dışına çıkma korkusunu yeniyorsun.'
  },
  {
    id: 76, name: 'Disklerin Kraliçesi', en: 'Queen of Pentacles', suit: 'pentacles',
    img: 'images/pents13.jpg',
    keywords: ['Pratiklik', 'Şefkat', 'Bolluk', 'Güvenlik'],
    meaning: 'Disklerin Kraliçesi, hem pratik hem şefkatli, hem güvenli hem de cömert bir enerjiyi temsil eder. Çevrendekilere hem maddi hem duygusal destek sunuyorsun. Ev, aile ve sağlık konularında güçlü bir dönem.',
    reversedMeaning: 'Maddi kaygılar ya da öz bakımın ihmal edilmesi. Herkese bakan ama kendisine bakamayan bir enerji. Sınırlarını belirle.'
  },
  {
    id: 77, name: 'Disklerin Kralı', en: 'King of Pentacles', suit: 'pentacles',
    img: 'images/pents14.jpg',
    keywords: ['Başarı', 'Güvenilirlik', 'Liderlik', 'Maddi güç'],
    meaning: 'Disklerin Kralı, çalışkanlık ve azimle kazanılmış maddi gücü ve olgun bir liderliği temsil eder. Finansal ve pratik konularda güvenilir bir rehbersin. Yatırımlar ve uzun vadeli planlama konusunda sağlam kararlar verebilirsin.',
    reversedMeaning: 'Maddi güce aşırı odaklanma, açgözlülük ya da güvenilmezlik. Para ve güç amaca değil araca dönüşmüş. Değerlerini yeniden gözden geçir.'
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
