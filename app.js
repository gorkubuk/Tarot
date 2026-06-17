const CARDS = [
  {
    id: 0, name: 'Deli', en: 'The Fool',
    img: 'images/00_fool.jpg',
    keywords: ['Yeni baÅŸlangÄ±Ã§', 'Macera', 'Saf cesaret', 'Ã–zgÃ¼rlÃ¼k'],
    meaning: 'HayatÄ±nda tamamen yeni bir yolculuk baÅŸlÄ±yor. BilmediÄŸin bir yÃ¶ne adÄ±m atmaya hazÄ±rsÄ±n ve geÃ§miÅŸin yÃ¼klerini bÄ±rakmÄ±ÅŸsÄ±n. Saf bir merakla ilerle â€” bu adÄ±m dÃ¼ÅŸÃ¼ndÃ¼ÄŸÃ¼nden Ã§ok daha gÃ¼zel sonuÃ§lar doÄŸurabilir.',
    reversedMeaning: 'AdÄ±m atmaktan kaÃ§Ä±nÄ±yorsun â€” ya korku nedeniyle ya da henÃ¼z hazÄ±r olmadÄ±ÄŸÄ±n iÃ§in. BelirsizliÄŸe atlamak istiyorsun ama bir ÅŸey seni durduruyor. Neyin geri Ã§ektiÄŸini dÃ¼rÃ¼stÃ§e sorgula.'
  },
  {
    id: 1, name: 'Sihirbaz', en: 'The Magician',
    img: 'images/01_magician.jpg',
    keywords: ['Ä°rade', 'YaratÄ±cÄ±lÄ±k', 'GÃ¼Ã§', 'Odaklanma'],
    meaning: 'Elinizde hayallerinizi gerÃ§eÄŸe dÃ¶nÃ¼ÅŸtÃ¼rmek iÃ§in gereken tÃ¼m araÃ§lar mevcut. Potansiyeliniz zirve noktasÄ±nda, tek yapmanÄ±z gereken odaklanÄ±p harekete geÃ§mek. Enerjiyi doÄŸru yÃ¶ne kanalize edin.',
    reversedMeaning: 'Elindeki gÃ¼cÃ¼ veya araÃ§larÄ± yanlÄ±ÅŸ yÃ¶nde kullanÄ±yor olabilirsin. Kendini kandÄ±rma ya da potansiyeli boÅŸa harcama tehlikesi var. Enerjini daha doÄŸru bir odaÄŸa yÃ¶nlendir.'
  },
  {
    id: 2, name: 'YÃ¼ksek Rahibe', en: 'The High Priestess',
    img: 'images/02_priestess.jpg',
    keywords: ['Sezgi', 'Gizem', 'Ä°Ã§ ses', 'BilinÃ§dÄ±ÅŸÄ±'],
    meaning: 'Cevaplar dÄ±ÅŸarÄ±da deÄŸil, iÃ§inde. Ä°Ã§gÃ¼dÃ¼lerine kulak ver, sessizlikte dinle. Åžu an gÃ¶rÃ¼nmeyen ÅŸeyler yavaÅŸ yavaÅŸ aÃ§Ä±ÄŸa Ã§Ä±kacak â€” sabÄ±r ve sezgi seni doÄŸru yÃ¶ne gÃ¶tÃ¼recek.',
    reversedMeaning: 'Ä°Ã§ sesini bastÄ±rÄ±yor ya da sezgilerini gÃ¶rmezden geliyorsun. Gizlenen bir ÅŸey var â€” inkÃ¢r edilen bir duygu ya da fark edilmek istemeyen bir gerÃ§ek. Kendi derinliklerinle baÄŸlantÄ± kurmaya Ã§alÄ±ÅŸ.'
  },
  {
    id: 3, name: 'Ä°mparatoriÃ§e', en: 'The Empress',
    img: 'images/03_empress.jpg',
    keywords: ['Bereket', 'Bolluk', 'Annelik', 'YaratÄ±cÄ±lÄ±k'],
    meaning: 'DoÄŸanÄ±n gÃ¼cÃ¼ ve bereketin kapÄ±larÄ± sana aÃ§Ä±k. YaratÄ±cÄ±lÄ±ÄŸÄ±n zirvede, istediÄŸin ÅŸeyleri hayata geÃ§irmek iÃ§in mÃ¼kemmel bir dÃ¶nemdesin. Kendine ÅŸefkatle davran, bÃ¼yÃ¼me zamanÄ± geldi.',
    reversedMeaning: 'YaratÄ±cÄ± blok, baÄŸÄ±mlÄ±lÄ±k ya da Ã¶z sevgi eksikliÄŸi hissediyorsun. Kendinle ne kadar ÅŸefkatli davranÄ±yorsun? Ä°Ã§indeki bereketi bulmak iÃ§in Ã¶nce kendi ihtiyaÃ§larÄ±na kulak ver.'
  },
  {
    id: 4, name: 'Ä°mparator', en: 'The Emperor',
    img: 'images/04_emperor.jpg',
    keywords: ['Otorite', 'YapÄ±', 'Ä°stikrar', 'Disiplin'],
    meaning: 'HayatÄ±nda saÄŸlam bir yapÄ± kurmanÄ±n zamanÄ± geldi. KararlÄ± adÄ±mlar at, gÃ¼Ã§lÃ¼ ve istikrarlÄ± ol. Temeller ne kadar saÄŸlam olursa Ã¼zerine inÅŸa edeceÄŸin ÅŸey o kadar bÃ¼yÃ¼k olur.',
    reversedMeaning: 'Kontrol isteÄŸi saÄŸlÄ±klÄ± bir sÄ±nÄ±rÄ± aÅŸÄ±yor olabilir. Ya aÅŸÄ±rÄ± katÄ±lÄ±k ya da tam tersi â€” gerekli yapÄ±yÄ± kurmaktan kaÃ§Ä±nma. GerÃ§ek gÃ¼Ã§, dayatmayla deÄŸil iÃ§ olgunlukla kurulur.'
  },
  {
    id: 5, name: 'BaÅŸrahip', en: 'The Hierophant',
    img: 'images/05_hierophant.jpg',
    keywords: ['Gelenek', 'Ä°nanÃ§', 'Rehberlik', 'Bilgelik'],
    meaning: 'GÃ¼venilir bir rehberden veya kÃ¶klÃ¼ bir bilgelikten destek almanÄ±n vakti. Geleneksel deÄŸerlere ve manevi baÄŸlara yÃ¶nelen bir dÃ¶nemdesin. Deneyimli birisinin tavsiyesine kulak ver.',
    reversedMeaning: 'Mevcut kurallar ve gelenekler seni kÄ±sÄ±tlÄ±yor olabilir. Dogmalara kÃ¶rÃ¼ kÃ¶rÃ¼ne uymak yerine kendi iÃ§sel rehberliÄŸini dinle. Bu, alÄ±ÅŸÄ±lmÄ±ÅŸÄ±n dÄ±ÅŸÄ±na Ã§Ä±kmak iÃ§in bir iÅŸaret.'
  },
  {
    id: 6, name: 'AÅŸÄ±klar', en: 'The Lovers',
    img: 'images/06_lovers.jpg',
    keywords: ['AÅŸk', 'Uyum', 'SeÃ§im', 'BaÄŸlantÄ±'],
    meaning: 'Bu kart yalnÄ±zca romantik aÅŸkÄ± deÄŸil, kalbinle uyumlu kararlar almayÄ± da simgeler. DeÄŸerlerine sadÄ±k kal, hem kendinle hem baÅŸkalarÄ±yla gerÃ§ek bir uyum iÃ§inde ol. Ã–nemli bir seÃ§im kapÄ±da olabilir.',
    reversedMeaning: 'Bir iliÅŸkide ya da Ã¶nemli bir kararla uyumsuzluk var. DeÄŸerlerine aykÄ±rÄ± bir seÃ§im mi yapÄ±yorsun? GerÃ§ek uyumu aramak iÃ§in Ã¶nce kendinle dÃ¼rÃ¼st ol.'
  },
  {
    id: 7, name: 'SavaÅŸ ArabasÄ±', en: 'The Chariot',
    img: 'images/07_chariot.jpg',
    keywords: ['Zafer', 'Kontrol', 'Ä°rade', 'KararlÄ±lÄ±k'],
    meaning: 'Ä°radenin ve kararlÄ±lÄ±ÄŸÄ±n zirve noktasÄ±ndasÄ±n. Engeller olsa da bunlarÄ± aÅŸacak gÃ¼ce sahipsin. OdaklanmÄ±ÅŸ kal, disiplinden Ã¶dÃ¼n verme â€” zafer yakÄ±n.',
    reversedMeaning: 'YÃ¶n belirsiz, kontrol senden kaÃ§Ä±yor. Agresiflik veya irade eksikliÄŸi potansiyeli baltalÄ±yor. Dur, yeniden odaklan â€” hedefe ulaÅŸmak iÃ§in Ã¶nce iÃ§sel dengeyi bul.'
  },
  {
    id: 8, name: 'GÃ¼Ã§', en: 'Strength',
    img: 'images/08_strength.jpg',
    keywords: ['Cesaret', 'SabÄ±r', 'Ä°Ã§ gÃ¼Ã§', 'Merhamet'],
    meaning: 'GerÃ§ek gÃ¼Ã§ kaba kuvvetten deÄŸil, sabÄ±r ve iÃ§ten gelen cesaretten gelir. Zorluklarla nazikÃ§e ve kararlÄ±lÄ±kla yÃ¼zleÅŸ. Seni zorlayan ÅŸeyi sevgiyle kucaklamak en bÃ¼yÃ¼k gÃ¼Ã§ gÃ¶stergesidir.',
    reversedMeaning: 'Ã–z ÅŸÃ¼phe veya bastÄ±rÄ±lmÄ±ÅŸ duygular Ã¶n plana Ã§Ä±kÄ±yor. GÃ¼cÃ¼nÃ¼ iÃ§ten deÄŸil dÄ±ÅŸarÄ±dan aramak tÃ¼kenmiÅŸliÄŸe yol aÃ§ar. Kendine karÅŸÄ± nazik olmak da bir gÃ¼Ã§ gÃ¶stergesidir.'
  },
  {
    id: 9, name: 'MÃ¼nzevi', en: 'The Hermit',
    img: 'images/09_hermit.jpg',
    keywords: ['Ä°Ã§ yolculuk', 'YalnÄ±zlÄ±k', 'Bilgelik', 'ArayÄ±ÅŸ'],
    meaning: 'Ä°Ã§e dÃ¶nme ve Ã¶z farkÄ±ndalÄ±k zamanÄ±n geldi. CevaplarÄ±n dÄ±ÅŸarÄ±da deÄŸil, kendinle yaptÄ±ÄŸÄ±n yolculukta gizli. SessizliÄŸe Ã§ekil, kendi bilgeliÄŸinin Ä±ÅŸÄ±ÄŸÄ±nda yÃ¼rÃ¼.',
    reversedMeaning: 'YalnÄ±zlÄ±k seÃ§ilmiÅŸ deÄŸil, dayatÄ±lmÄ±ÅŸ hissettiriyor. Toplumdan kopukluk ya da tam tersi â€” iÃ§ yolculuktan kaÃ§Ä±nma. Ne zaman iÃ§e Ã§ekilip ne zaman baÄŸlantÄ± kuracaÄŸÄ±nÄ± dengele.'
  },
  {
    id: 10, name: 'Kader Ã‡arkÄ±', en: 'Wheel of Fortune',
    img: 'images/10_wheel.jpg',
    keywords: ['DeÄŸiÅŸim', 'DÃ¶ngÃ¼ler', 'Kader', 'Åžans'],
    meaning: 'Hayat sÃ¼rekli dÃ¶ngÃ¼ler iÃ§inde akar. DeÄŸiÅŸimler kaÃ§Ä±nÄ±lmazdÄ±r â€” hem zorluklar hem de gÃ¼zel anlar geÃ§icidir. Bu evrensel akÄ±ÅŸa teslim ol; seni bekleyen ÅŸeyler umduÄŸundan gÃ¼zel olabilir.',
    reversedMeaning: 'DÃ¶ngÃ¼ler kÄ±rÄ±lamÄ±yor gibi geliyor. Åžansa gÃ¼venmek yerine kendi eylemlerini gÃ¶zden geÃ§ir. HayatÄ±nÄ±n akÄ±ÅŸÄ±na karÅŸÄ± deÄŸil, onunla birlikte hareket etmeyi dene.'
  },
  {
    id: 11, name: 'Adalet', en: 'Justice',
    img: 'images/11_justice.jpg',
    keywords: ['Denge', 'Hakikat', 'DÃ¼rÃ¼stlÃ¼k', 'Sorumluluk'],
    meaning: 'AttÄ±ÄŸÄ±n adÄ±mlarÄ±n ve aldÄ±ÄŸÄ±n kararlarÄ±n sonuÃ§larÄ±nÄ± gÃ¶receksin. DoÄŸruluktan ayrÄ±lma, dÃ¼rÃ¼stlÃ¼ÄŸÃ¼nÃ¼ koru. Denge her ÅŸeyin temeli â€” hem dÄ±ÅŸarÄ±da hem iÃ§inde.',
    reversedMeaning: 'HaksÄ±zlÄ±k hissediyorsun ya da bir durumun sonuÃ§larÄ±ndan kaÃ§maya Ã§alÄ±ÅŸÄ±yorsun. DÃ¼rÃ¼stlÃ¼kten taviz vermek uzun vadede daha bÃ¼yÃ¼k sorunlara yol aÃ§ar. Dengeyi yeniden kur.'
  },
  {
    id: 12, name: 'AsÄ±lmÄ±ÅŸ Adam', en: 'The Hanged Man',
    img: 'images/12_hangedman.jpg',
    keywords: ['BekleyiÅŸ', 'Yeni bakÄ±ÅŸ', 'Teslimiyet', 'Duraklama'],
    meaning: 'DuraksayÄ±p farklÄ± bir perspektiften bakmanÄ±n zamanÄ±. Kontrol etmeyi bÄ±rak, akmaya bÄ±rak. Bu bekleyiÅŸ seni yavaÅŸlatmÄ±yor â€” seni daha bilge yapÄ±yor.',
    reversedMeaning: 'Bekleme sÃ¼reci anlamsÄ±z ya da zorunlu deÄŸil. Kurban rolÃ¼ne girme â€” deÄŸiÅŸim kendiliÄŸinden gelmeyecek. KÃ¼Ã§Ã¼k bir adÄ±m bile Ã§ok ÅŸeyi deÄŸiÅŸtirebilir.'
  },
  {
    id: 13, name: 'Ã–lÃ¼m', en: 'Death',
    img: 'images/13_death.jpg',
    keywords: ['DÃ¶nÃ¼ÅŸÃ¼m', 'Son', 'Yeniden doÄŸuÅŸ', 'BÄ±rakma'],
    meaning: 'Korkulacak bir ÅŸey deÄŸil bu kart â€” fiziksel Ã¶lÃ¼mÃ¼ deÄŸil kÃ¶klÃ¼ bir dÃ¶nÃ¼ÅŸÃ¼mÃ¼ simgeler. Eski bir ÅŸeyin sona ermesi, yeni ve Ã§ok daha gÃ¼zelin baÅŸlayacaÄŸÄ±nÄ±n habercisidir. BÄ±rak gitsin, yeniye yer aÃ§.',
    reversedMeaning: 'Bir dÃ¶nem bitmesine raÄŸmen bÄ±rakamÄ±yorsun. DeÄŸiÅŸime direnÃ§, bÃ¼yÃ¼meyi engelliyor. Ne kadar uzun tutunursan, yeniden doÄŸuÅŸ o kadar geÃ§ gelir â€” bÄ±rakmayÄ± Ã¶ÄŸren.'
  },
  {
    id: 14, name: 'Ã–lÃ§Ã¼lÃ¼lÃ¼k', en: 'Temperance',
    img: 'images/14_temperance.jpg',
    keywords: ['Denge', 'SabÄ±r', 'Uyum', 'Orta yol'],
    meaning: 'SabÄ±r, denge ve uyumun gÃ¼cÃ¼nÃ¼ keÅŸfetme zamanÄ±. AÅŸÄ±rÄ±lÄ±klardan kaÃ§Ä±n, orta yolu bul. Acele etmeden ilerlemek her ÅŸeyi olmasÄ± gereken ritimde ilerletecek.',
    reversedMeaning: 'SabÄ±rsÄ±zlÄ±k ya da aÅŸÄ±rÄ±lÄ±k Ã¶ne Ã§Ä±kÄ±yor. Her ÅŸeyin hÄ±zlÄ± olmasÄ±nÄ± bekliyorsun ama zorlama Ã§oÄŸu zaman geri adÄ±m attÄ±rÄ±r. Ritmi yeniden bul, orta yola geri dÃ¶n.'
  },
  {
    id: 15, name: 'Åžeytan', en: 'The Devil',
    img: 'images/15_devil.jpg',
    keywords: ['BaÄŸlanma', 'Korkular', 'Ä°llÃ¼zyon', 'FarkÄ±ndalÄ±k'],
    meaning: 'Seni tutan zincirleri fark et â€” bu zincirler Ã§oÄŸunlukla kendi koyduÄŸun sÄ±nÄ±rlar, korkular ya da alÄ±ÅŸkanlÄ±klardÄ±r. Kendini mahkum eden neyin illÃ¼zyon olduÄŸunu gÃ¶r. Ã–zgÃ¼rlÃ¼k senin elinde.',
    reversedMeaning: 'Seni baÄŸlayan ÅŸeylerden kurtulmaya baÅŸlÄ±yorsun. KorkularÄ±n ve eski alÄ±ÅŸkanlÄ±klarÄ±n Ã¼zerindeki etkisi azalÄ±yor. Bu Ã¶zgÃ¼rlÃ¼k gerÃ§ek â€” ve senden geliyor.'
  },
  {
    id: 16, name: 'Kule', en: 'The Tower',
    img: 'images/16_tower.jpg',
    keywords: ['Ani deÄŸiÅŸim', 'YÄ±kÄ±m', 'AÃ§Ä±ÄŸa Ã§Ä±kma', 'ArÄ±nma'],
    meaning: 'Ani ve sarsÄ±cÄ± bir deÄŸiÅŸim yakÄ±n olabilir. YanlÄ±ÅŸ temeller Ã¼zerine inÅŸa edilmiÅŸ ÅŸeyler yÄ±kÄ±lacak â€” ama bu yÄ±kÄ±m aslÄ±nda bir arÄ±nma. GerÃ§eÄŸin aÃ§Ä±ÄŸa Ã§Ä±kmasÄ± zamanla bÃ¼yÃ¼k bir rahatlama getirecek.',
    reversedMeaning: 'KaÃ§Ä±nÄ±lmaz bir yÄ±kÄ±m erteleniyor ama engellenemiyor. KÃ¼Ã§Ã¼k Ã§Ã¶kÃ¼ÅŸler belki bÃ¼yÃ¼ÄŸÃ¼nÃ¼ Ã¶nlÃ¼yor. DeÄŸiÅŸime kÃ¼Ã§Ã¼k adÄ±mlarla hazÄ±rlanmak, ÅŸoku azaltabilir.'
  },
  {
    id: 17, name: 'YÄ±ldÄ±z', en: 'The Star',
    img: 'images/17_star.jpg',
    keywords: ['Umut', 'Ä°lham', 'Yenilenme', 'Åžifa'],
    meaning: 'KaranlÄ±ktan sonra gelen umudun ve ÅŸifanÄ±n kartÄ±sÄ±n. Evren sana destek veriyor, inancÄ±nÄ± kaybetme. Hayallerine yÃ¶nel â€” iÃ§indeki Ä±ÅŸÄ±k seni doÄŸru yÃ¶ne gÃ¶tÃ¼recek.',
    reversedMeaning: 'Umut yerini hayal kÄ±rÄ±klÄ±ÄŸÄ±na bÄ±rakmÄ±ÅŸ olabilir. Seni besleyen ÅŸeyden kopmuÅŸsun. Umudu yeniden bulmak iÃ§in kÃ¼Ã§Ã¼k bir Ä±ÅŸÄ±ÄŸa odaklan â€” henÃ¼z tÃ¼kenmedi.'
  },
  {
    id: 18, name: 'Ay', en: 'The Moon',
    img: 'images/18_moon.jpg',
    keywords: ['Ä°llÃ¼zyon', 'Sezgi', 'BilinÃ§dÄ±ÅŸÄ±', 'Belirsizlik'],
    meaning: 'Her ÅŸey gÃ¶rÃ¼ndÃ¼ÄŸÃ¼ gibi olmayabilir. Sezgilerine gÃ¼ven ama duygularÄ±nÄ±n seni yanÄ±ltmamasÄ±na dikkat et. Belirsizlik geÃ§ici â€” karanlÄ±ktaki yolculuk seni aydÄ±nlatacak.',
    reversedMeaning: 'YanÄ±lsamalar daÄŸÄ±lÄ±yor, gerÃ§ek yÃ¼zeye Ã§Ä±kÄ±yor. Belirsizlik azalÄ±yor ve daha net bir gÃ¶rÃ¼ÅŸ geliyor. Sezgilerinle daha saÄŸlÄ±klÄ± bir iliÅŸki kuruyorsun.'
  },
  {
    id: 19, name: 'GÃ¼neÅŸ', en: 'The Sun',
    img: 'images/19_sun.jpg',
    keywords: ['Mutluluk', 'BaÅŸarÄ±', 'CanlÄ±lÄ±k', 'AydÄ±nlÄ±k'],
    meaning: 'En pozitif kartlardan biri. SevinÃ§, baÅŸarÄ± ve bolluk dÃ¶neminin kapÄ±da. Ä°Ã§indeki Ã§ocuÄŸu serbest bÄ±rak, hayatÄ±n gÃ¼zelliklerine aÃ§Ä±k ol. IÅŸÄ±klÄ± gÃ¼nler geliyor.',
    reversedMeaning: 'GeÃ§ici bir gÃ¶lge olsa da Ä±ÅŸÄ±k hÃ¢lÃ¢ orada. Engeller ya da aÅŸÄ±rÄ± iyimserlik seni raydan Ã§Ä±karabilir. SevinÃ§ kaybolmadÄ± â€” sadece iÃ§inde biraz daha derin bir yerde saklÄ±.'
  },
  {
    id: 20, name: 'YargÄ±', en: 'Judgement',
    img: 'images/20_judgement.jpg',
    keywords: ['UyanÄ±ÅŸ', 'Ã–zgÃ¼rlÃ¼k', 'DÃ¶nÃ¼ÅŸÃ¼m', 'BaÄŸÄ±ÅŸlama'],
    meaning: 'Derin bir uyanÄ±ÅŸ ve geÃ§miÅŸle hesaplaÅŸma zamanÄ±. Kendini ve baÅŸkalarÄ±nÄ± baÄŸÄ±ÅŸla â€” bu Ã¶zgÃ¼rlÃ¼k sana yeni bir sayfa aÃ§acak. Ä°Ã§sel bir Ã§aÄŸrÄ± duyuyorsun, ona kulak ver.',
    reversedMeaning: 'Ã–zeleÅŸtiri ya da geÃ§miÅŸin aÄŸÄ±rlÄ±ÄŸÄ± seni bloke ediyor. Kendinle yÃ¼zleÅŸmekten kaÃ§Ä±nÄ±yorsun. Ä°Ã§sel Ã§aÄŸrÄ±ya kulak vermek, bir ÅŸeylerin bitmesine izin vermeyi gerektirir.'
  },
  {
    id: 21, name: 'DÃ¼nya', en: 'The World',
    img: 'images/21_world.jpg',
    keywords: ['Tamamlanma', 'BÃ¼tÃ¼nleÅŸme', 'BaÅŸarÄ±', 'DÃ¶ngÃ¼nÃ¼n sonu'],
    meaning: 'Bir dÃ¶ngÃ¼ tamamlandÄ± ve gerÃ§ek bir baÅŸarÄ±ya ulaÅŸtÄ±n. YaptÄ±ÄŸÄ±n yolculuktan gurur duy, kazanÄ±mlarÄ±nÄ± kutla. Bu bir son deÄŸil â€” daha bÃ¼yÃ¼k bir yolculuÄŸun yeni baÅŸlangÄ±cÄ±.',
    reversedMeaning: 'Hedefe yakÄ±nsÄ±n ama tamamlanmamÄ±ÅŸ hissediyorsun. DÃ¶ngÃ¼yÃ¼ kapatmak iÃ§in eksik olan kÃ¼Ã§Ã¼k bir ÅŸeye dikkat et. BÃ¼yÃ¼k resmi gÃ¶rmek bazen son adÄ±mÄ± atmayÄ± gerektirir.'
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
    `${c.id} â€” BÃ¼yÃ¼k Arcana${c.isReversed ? '&nbsp;&nbsp;<span class="reversed-tag">â†“ TERS</span>' : ''}`;
  document.getElementById('single-name').textContent = c.name;
  document.getElementById('single-keywords').textContent = c.keywords.join('  Â·  ');
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

// Three card spread
function startSpread() {
  showScreen('spread-screen');
  drawSpread();
}

function drawSpread() {
  spreadCards = shuffle(CARDS).slice(0, 3).map(c => ({ ...c, isReversed: Math.random() < 0.33 }));

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
    ? `â†“ ${c.name} <span class="reversed-tag">TERS</span>`
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

  const labels = ['GeÃ§miÅŸ', 'Åžimdi', 'Gelecek'];
  const html = flipped.map(i => {
    const c = spreadCards[i];
    return `
    <div class="spread-meaning-block">
      <div class="spread-meaning-label">
        ${labels[i]} Â· ${c.name}${c.isReversed ? '&nbsp;<span class="reversed-tag">â†“ TERS</span>' : ''}
      </div>
      <div class="spread-meaning-keywords">${c.keywords.join(' Â· ')}</div>
      <div class="spread-meaning-text">${c.isReversed ? c.reversedMeaning : c.meaning}</div>
    </div>
  `;
  }).join('');

  document.getElementById('spread-meanings').innerHTML = html;
}

createStars();
