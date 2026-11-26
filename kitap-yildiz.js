/* Yorum kitabı, ikinci cüz: Seyyâre-i seb'a (yedi yıldız), anâsır-ı erbaa, hurûf, menâzil, Ay'ın hâlleri, imtihanlar, esmâ.
   Dayanılan gelenek: Ebced-i kebîr; harflerin dört tabiatı (ateş: Elif He Tı Mim Fe Şın Zel; toprak: Be Vav Ye Nun Sad Te Dad;
   hava: Cim Ze Kef Sin Kaf Se Zı; su: Dal Ha Lâm Ayn Re Hı Gayın); Keldânî yıldız sırası ve gezegen saatleri;
   Bûnî'nin Şemsü'l-maârif'inde menzillerin sa'd ve nahs hükümleri; Batlamyus'un yaş devirleri ve yıldızların küçük yılları. */
window.KITAP = window.KITAP || {};

KITAP.GIRIS = ["Erbâb-ı cifir der ki","Kitaplarda mestûrdur ki","Kadîm müneccimlerin defterlerinde yazılıdır ki","Ehl-i hurûf şöyle hükmeder:","Eski yıldıznamelerde şu kayıt vardır:","Hâce-i nücûm şöyle beyan eder:","Bu ilmin üstatları der ki","Rivayet olunur ki"];

KITAP.YILDIZ = {
 Zuhal:{ ad:"Zühal", sad:"nahs-ı ekber", mizac:"soğuk ve kuru", gun:"Cumartesi", renk:"siyah ve koyu kurşunî", maden:"kurşun", tas:"oniks ve kara akik", yil:30, yas:"altmış sekizden sonra",
  saat:"Zühal saatinde doğan ağır bir emanetle dünyaya gelir. Bu saat sabrın, mihnetin ve gecikmenin saatidir. Ne istersen geç gelir; lâkin geç gelen, gitmez. Çocukluğunda bir eksiklik, bir soğukluk yahut bir yalnızlık yaşanmış olabilir. Ömrünün ilk yarısında yükü taşıyan, ikinci yarısında meyvesini toplayan sen olursun.",
  gunMetin:"Doğduğun gün Cumartesi'nin, yani Zühal'in hükmündedir; sabır ve sebat bu günün mührüdür.",
  yildiz:"İsminin yıldızı Zühal çıkmıştır. Bu yıldız ehli derin düşünür, az konuşur, geç güvenir. Yalnızlığı sever ama yalnızlıktan da korkar. Ağır bir hafıza taşır; ne iyiliği ne de kötülüğü unutur.",
  ask:"Zühal aşkta yavaştır. Geç sever, ama sevdi mi ömür boyu sever. Kendinden yaşça büyük yahut olgun birine meyil eder. Aşkı çoğu kez bir sınavla, bir engelle başlar.",
  meslek:"Zühal ehline toprak, maden, inşaat, idare, hukuk, tarih ve eski eşya işleri yakışır. Uzun sabır isteyen her sanat onun elinde olgunlaşır.",
  rizik:"Zühal rızkı yavaş yavaş, damla damla verir; ama mülk olarak, toprak olarak, kalıcı olarak verir.",
  imtihan:"Zühal'in imtihanı sabırdır: beklemek, kaybetmeden önce kaybetmeyi kabullenmek ve yükü şikâyetsiz taşımak.",
  nazar:"Zühal'in ağırlığı omuzlarda ve dizlerde hissedilir; sebepsiz bir yorgunluk, bir isteksizlik onun alâmetidir." },
 Musteri:{ ad:"Müşterî", sad:"sa'd-ı ekber", mizac:"sıcak ve nemli", gun:"Perşembe", renk:"mor, lacivert ve sandal rengi", maden:"kalay", tas:"lâcivert taşı ve sarı yakut", yil:12, yas:"elli altı ile altmış sekiz arası",
  saat:"Müşterî saatinde doğan bahtiyar bir saatte gözünü açmıştır. Bu saat ilmin, adaletin, bereketin ve hayır dualarının saatidir. Darda kaldığında beklenmedik bir yardım eli uzanır. Büyüklerin nazarına girer, hocalardan ve âlimlerden feyz alırsın.",
  gunMetin:"Doğduğun gün Perşembe'nin, yani Müşterî'nin hükmündedir; hayır işleri ve dualar bu günde kabule yakındır.",
  yildiz:"İsminin yıldızı Müşterî çıkmıştır. Bu yıldız ehli cömert, iyimser ve adil olur. İnsanlara nasihat etmeyi sever. Kalbi geniştir, ama bazen o genişlikte ölçüyü kaçırır.",
  ask:"Müşterî aşkta cömerttir. Sevdiğine her şeyini verir, onu yüceltir. İzdivacı mukaddes sayar; nikâhsız bir sevdaya gönlü razı olmaz.",
  meslek:"Müşterî ehline kadılık, hocalık, din ilimleri, hukuk, maliye, tabiplik ve büyük ticaret yakışır.",
  rizik:"Müşterî rızkı bol verir; kapı kapanırken bir başkası açılır. Hayır yaptıkça rızık genişler.",
  imtihan:"Müşterî'nin imtihanı ölçüdür: bolluk içinde şımarmamak, verdiğini minnet beklemeden vermek.",
  nazar:"Müşterî nazara karşı kalkandır; ama bolluğun göz önünde olduğu yerde haset eden çok olur." },
 Mirrih:{ ad:"Mirrîh", sad:"nahs-ı asgar", mizac:"sıcak ve kuru", gun:"Salı", renk:"kızıl ve al", maden:"demir", tas:"kırmızı mercan ve kan taşı", yil:15, yas:"kırk bir ile elli altı arası",
  saat:"Mirrîh saatinde doğan kılıç gibi keskin yaratılmıştır. Bu saat cesaretin, kavganın, hareketin ve kan dökmenin saatidir. Hakkını aramaktan çekinmezsin; zulme boyun eğmezsin. Lâkin hiddetin ilk düşmanı yine sensin. Hayatında ani olaylar, kazalar ve çatışmalar yaşanır; her biri seni bir derece daha çeliğe çevirir.",
  gunMetin:"Doğduğun gün Salı'nın, yani Mirrîh'in hükmündedir; cesaret ve hareket bu günün mührüdür.",
  yildiz:"İsminin yıldızı Mirrîh çıkmıştır. Bu yıldız ehli atılgan, cesur ve sabırsız olur. Mücadeleden kaçmaz, haksızlığa dayanamaz. Öfkesi çabuk parlar, çabuk söner.",
  ask:"Mirrîh aşkta ateş gibidir: bir anda tutuşur. Tutkulu, kıskanç ve sahiplenici sever. Sevdası çoğu kez bir kavga ile başlar yahut bir kavga ile sınanır.",
  meslek:"Mirrîh ehline askerlik, cerrahlık, demircilik, mühendislik, sporculuk, kasaplık ve ateşle çalışan her sanat yakışır.",
  rizik:"Mirrîh rızkı mücadeleyle verir; elini taşın altına koymadan kazanç gelmez. Ani kazançlar ve ani kayıplar onun işidir.",
  imtihan:"Mirrîh'in imtihanı hiddettir: öfkeyi yönetmek, kılıcı yerinde kullanmak.",
  nazar:"Mirrîh'in ağırlığı baş ağrısı, ateş basması ve sebepsiz bir gerginlik olarak görünür; evde sık kırılan eşyalar onun alâmetidir." },
 Sems:{ ad:"Şems", sad:"mümtezic", mizac:"sıcak ve kuru", gun:"Pazar", renk:"altın sarısı ve turuncu", maden:"altın", tas:"yakut ve kehribar", yil:19, yas:"yirmi iki ile kırk bir arası",
  saat:"Şems saatinde doğan bir nur halkasının içinde dünyaya gelmiştir. Bu saat izzetin, saltanatın ve şöhretin saatidir. İnsanlar seni fark eder; bir yere girdiğinde gözler sana döner. Büyüklerin himayesi, babanın yahut baba yerine geçen birinin izi kaderinde belirgindir. Gururun hem tacın hem de sınavındır.",
  gunMetin:"Doğduğun gün Pazar'ın, yani Şems'in hükmündedir; izzet ve itibar bu günün mührüdür.",
  yildiz:"İsminin yıldızı Şems çıkmıştır. Bu yıldız ehli vakarlı, cömert ve gururlu olur. Önde olmak ister. İtibarına dokunulmasına tahammül edemez.",
  ask:"Şems aşkta sadakat ve hayranlık ister. Sevdiğini yüceltir, ondan da takdir bekler. Gölgede kalan bir aşk ona göre değildir.",
  meslek:"Şems ehline idarecilik, devlet hizmeti, kuyumculuk, sanat ve göz önünde olan her mevki yakışır.",
  rizik:"Şems rızkı makamdan ve itibardan verir. Büyüklerin nazarı senin rızık kapındır.",
  imtihan:"Şems'in imtihanı kibirdir: nurunu başkasını karartmadan göstermek.",
  nazar:"Şems'in nurlu olanı haset çeker; göz önündeki başarı nazara en açık kapıdır. Kalp çarpıntısı ve sebepsiz bitkinlik bu nazarın alâmetidir." },
 Zuhre:{ ad:"Zühre", sad:"sa'd-ı asgar", mizac:"soğuk ve nemli", gun:"Cuma", renk:"yeşil ve gül pembesi", maden:"bakır", tas:"zümrüt ve pembe mercan", yil:8, yas:"on dört ile yirmi iki arası",
  saat:"Zühre saatinde doğan muhabbet ve ziynet yıldızının altında dünyaya gelmiştir. Bu saat sevginin, güzelliğin, musikinin ve izdivacın saatidir. Sevilirsin; insanlar yanında huzur bulur. Lâkin gönül işleri hayatının en büyük meşguliyeti olur ve kaderin çoğu kez bir sevda üzerinden döner.",
  gunMetin:"Doğduğun gün Cuma'nın, yani Zühre'nin hükmündedir; muhabbet ve bereket bu günün mührüdür.",
  yildiz:"İsminin yıldızı Zühre çıkmıştır. Bu yıldız ehli zarif, sevimli ve güzelliğe düşkün olur. Kavgadan kaçar, uyumu sever. Gönlü yumuşaktır; bu yüzden çabuk kırılır.",
  ask:"Zühre aşkın ta kendisidir. Bu yıldız ehli sevmeden yaşayamaz. Erken sever, çok sever; aşk hayatının merkezidir. Ama Zühre'nin bahşettiği her güzellik kıskançlık ve haset de çeker.",
  meslek:"Zühre ehline ziynet, terzilik, musiki, ressamlık, güzellik işleri, çiçekçilik, aşçılık ve misafirperverlik yakışır.",
  rizik:"Zühre rızkı tatlı dil ve güzel yüzle verir; ortaklıktan ve izdivaçtan da rızık gelir.",
  imtihan:"Zühre'nin imtihanı nefstir: lezzete, güzelliğe ve sevilme arzusuna esir olmamak.",
  nazar:"Zühre'nin güzelliği nazarın en çok değdiği yerdir. Güzel bir şey aldığında yahut sevindiğinde ardından gelen ani hüzün bu nazarın alâmetidir." },
 Utarid:{ ad:"Utârid", sad:"mümtezic", mizac:"karışık, kime yakınsa onun tabiatını alır", gun:"Çarşamba", renk:"sarı ve alaca", maden:"cıva", tas:"akik ve yeşim", yil:20, yas:"dört ile on dört arası",
  saat:"Utârid saatinde doğan kâtiplerin ve tüccarların yıldızı altında dünyaya gelmiştir. Bu saat aklın, kelâmın, hesabın ve yolculuğun saatidir. Zihnin çabuk işler, dilin tatlıdır. Lâkin Utârid mümtezicdir: iyiyle iyi, kötüyle kötü olur. Hangi dosta yakın durursan onun huyunu alırsın.",
  gunMetin:"Doğduğun gün Çarşamba'nın, yani Utârid'in hükmündedir; akıl ve ticaret bu günün mührüdür.",
  yildiz:"İsminin yıldızı Utârid çıkmıştır. Bu yıldız ehli zeki, meraklı, konuşkan ve hünerli olur. Birden fazla işle uğraşır. Kurnazlığı ile zekâsı arasındaki çizgi incedir.",
  ask:"Utârid aşkta kelimelere âşıktır. Mektup, söz, sohbet onun aşkının dilidir. Zihnine hitap etmeyen birine gönlü uzun süre bağlanmaz.",
  meslek:"Utârid ehline kâtiplik, hesap, ticaret, öğretmenlik, tercümanlık, hattatlık, haberleşme ve yolculuk işleri yakışır.",
  rizik:"Utârid rızkı alım satımdan, akıldan ve dilden verir. Birden fazla kapıdan gelen kazanç onun işidir.",
  imtihan:"Utârid'in imtihanı sözdür: yalandan, dedikodudan ve hileden uzak durmak.",
  nazar:"Utârid'in ağırlığı zihinde hissedilir: uykusuzluk, kuruntu, sebepsiz bir huzursuzluk." },
 Kamer:{ ad:"Kamer", sad:"mümtezic", mizac:"soğuk ve nemli", gun:"Pazartesi", renk:"beyaz ve gümüşî", maden:"gümüş", tas:"inci ve ay taşı", yil:25, yas:"doğumdan dört yaşına kadar",
  saat:"Kamer saatinde doğan Ay'ın gelgitine bağlı bir kalple dünyaya gelmiştir. Bu saat hissin, rüyanın, yolculuğun ve değişkenliğin saatidir. Annenin yahut anne yerine geçen birinin izi kaderinde derindir. Hâlin Ay gibi değişir; dolunay gibi taşar, hilâl gibi incelirsin. Rüyaların sana çok şey söyler.",
  gunMetin:"Doğduğun gün Pazartesi'nin, yani Kamer'in hükmündedir; his ve sezgi bu günün mührüdür.",
  yildiz:"İsminin yıldızı Kamer çıkmıştır. Bu yıldız ehli hassas, şefkatli ve değişken olur. Halkla iç içe yaşar. Hafızası kuvvetli, sezgisi derindir.",
  ask:"Kamer aşkta şefkat ve himaye ister. Sevdiğini hem çocuğu hem annesi gibi sever. Hâli değişken olduğu için aşkta da gelgitler yaşar.",
  meslek:"Kamer ehline denizcilik, yolculuk, aşçılık, hemşirelik, halka hizmet, ticaret ve su ile ilgili işler yakışır.",
  rizik:"Kamer rızkı Ay gibi artırıp eksiltir: bir ay bolluk, bir ay darlık. Halktan ve kadınlardan gelen kazanç onun işidir.",
  imtihan:"Kamer'in imtihanı istikrardır: hislerin gelgitine kapılmadan yolunda durmak.",
  nazar:"Kamer'in ağırlığı rüyalarda görünür: ağır, karışık rüyalar ve sabah kalkışta göğüste bir sıkışma." }
};

KITAP.UNSUR = {
 Ateş:{ hilt:"safrâ", tabiat:"sıcak ve kuru", yon:"doğu", tamamlayan:"Hava", karsit:"Su",
  mizac:"Harflerinde ateş galiptir. Bu, safrâvî bir mizaca delâlet eder: sıcak ve kuru. Böyle kimse çabuk tutuşur, çabuk karar verir, işini yarım bırakmaya tahammül edemez. Harfleri meftûh, yani açık harflerdir; cezb eden ve galip gelen tabiattadır.",
  sima:"Ateşî harflerin galip geldiği çehrede yanaklarda bir kızıllık, bakışta bir parıltı bulunur. Ten sıcak, hareketler çabuktur.",
  ic:"İç yapın bir ocak gibidir: sıcaklık verir, ama yaklaşanı da yakabilir. Haksızlığa karşı ilk ayağa kalkan sensin.",
  gizli:"Kimseye söylemediğin şey, aslında çok hızlı kırıldığındır. Öfke dediğin şey, yaranın üstüne çektiğin bir zırhtır.",
  sadakat:"Ateş tabiatı sadakatte doğrudur ama sabırsızdır. İlgisiz bırakıldığında gönlü başka ateşlere bakabilir; lâkin ihaneti kendine yakıştırmaz, gidecekse açıkça gider. Kıskançlığı alev gibidir: çabuk parlar, çabuk söner.",
  ebeveyn:"Ateş tabiatlı anne yahut baba evlâdına cesaret aşılar. Koruyucudur, ama çabuk sinirlenir; evlâdı onun gölgesinde değil, yanında büyümelidir.",
  para:"Ateş harfleri parayı yakıt gibi kullanır: gelir, yanar, gider. Kazanmayı bilirsin, tutmayı öğrenmen gerekir.",
  eksik:"Harflerinde ateş az olduğundan bazen başlamak için cesaret bulamazsın. Kararı başkasına bırakmak, bekleyip durmak senin darlığındır.",
  nazar:"Ateşî tabiat nazarı çabuk yakar ama üzerinde taşımaz; nazarın tesiri sende bir hiddet, bir sebepsiz gerginlik olarak görünür." },
 Hava:{ hilt:"dem", tabiat:"sıcak ve nemli", yon:"batı", tamamlayan:"Ateş", karsit:"Toprak",
  mizac:"Harflerinde hava galiptir. Bu, demevî bir mizaca delâlet eder: sıcak ve nemli. Böyle kimse hafif ruhlu, konuşkan, neşeli ve meraklı olur. Harfleri mağmûm, yani kapalı harflerdir; cezb eden ve galip gelen tabiattadır.",
  sima:"Havaî harflerin galip geldiği çehrede bir canlılık, bir hareket vardır. Yüz ifadesi sık değişir, eller konuşurken durmaz.",
  ic:"İç yapın bir rüzgâr gibidir: bir yerde duramaz, her yere ulaşır. Fikir senin ekmeğin, sohbet senin suyundur.",
  gizli:"Kimseye söylemediğin şey, derin bir bağlılıktan korktuğundur. Hafif görünmenin altında, kaybetme korkusu yatar.",
  sadakat:"Hava tabiatı sadakatte zihnine hitap edilmesini ister. Sıkıldığında uzaklaşır; ama aldatmaktan çok kaçmayı seçer. Kıskançlığı sözle çıkar, iğneleyici bir şaka olarak görünür.",
  ebeveyn:"Hava tabiatlı anne yahut baba evlâdıyla arkadaş gibidir. Onu konuşturur, ona öğretir; ama düzen ve sınır koymakta zorlanır.",
  para:"Hava harfleri parayı dolaştırır. Kazancın birden çok kapıdan gelir, ama bir yerde birikmez.",
  eksik:"Harflerinde hava az olduğundan hislerini söze dökmekte, kendini anlatmakta zorlanırsın. İçinde kalan sözler sende ağırlık yapar.",
  nazar:"Havaî tabiat nazarı zihninde taşır; kuruntu, uykusuzluk ve dağınıklık bunun alâmetidir." },
 Su:{ hilt:"balgam", tabiat:"soğuk ve nemli", yon:"kuzey", tamamlayan:"Toprak", karsit:"Ateş",
  mizac:"Harflerinde su galiptir. Bu, balgamî bir mizaca delâlet eder: soğuk ve nemli. Böyle kimse yumuşak, hassas, sezgili ve merhametli olur. Harfleri meksûr, yani kırık harflerdir; cezb olunan ve kabul eden tabiattadır.",
  sima:"Mâî harflerin galip geldiği çehrede gözler nemli ve derindir. Ten açık, ifade yumuşaktır; yüzünde bir hüzün gölgesi dolaşır.",
  ic:"İç yapın bir derya gibidir: yüzeyi sakin görünse de dibinde akıntılar vardır. Başkasının acısını kendi bedeninde hissedersin.",
  gizli:"Kimseye söylemediğin şey, kırgınlıklarını yıllarca sakladığındır. Affettim dersin, ama kalbin bir köşesinde hepsini muhafaza edersin.",
  sadakat:"Su tabiatı sadakatte derindir. Bir kere bağlandı mı kolay kopmaz. Kıskançlığı ise sessizdir; içten içe büyür ve günün birinde gözyaşı olarak taşar.",
  ebeveyn:"Su tabiatlı anne yahut baba evlâdına şefkatin denizini sunar. Onu korur, kollar; ama fazla korumak da evlâdın kanatlarını ağırlaştırabilir.",
  para:"Su harfleri parayı bir ihtiyaç sahibine akıtır. Merhametin kesene ağır gelir; ama verdiğin, başka bir yoldan sana döner.",
  eksik:"Harflerinde su az olduğundan hislerine yabancı kalırsın. Ağlaman gereken yerde susmak, merhamet göstermen gereken yerde katılaşmak senin imtihanındır.",
  nazar:"Mâî tabiat nazarı en çok çeken ve en uzun taşıyan tabiattır. Sebepsiz ağlama isteği, göğüste ağırlık ve başkalarının derdini üstlenme bunun alâmetidir." },
 Toprak:{ hilt:"sevdâ", tabiat:"soğuk ve kuru", yon:"güney", tamamlayan:"Su", karsit:"Hava",
  mizac:"Harflerinde toprak galiptir. Bu, sevdâvî bir mizaca delâlet eder: soğuk ve kuru. Böyle kimse ağırbaşlı, sabırlı, düşünceli ve sebatlı olur. Harfleri meczûm, yani kesik harflerdir; cezb olunan ve kabul eden tabiattadır.",
  sima:"Toprakî harflerin galip geldiği çehrede ağır bir ifade, sabit bir bakış bulunur. Ten esmerimsi, kemik yapısı belirgindir.",
  ic:"İç yapın bir dağ gibidir: sarsılmaz ama kolay da yerinden kalkmaz. Söz verdiğinde tutar, iş aldığında bitirirsin.",
  gizli:"Kimseye söylemediğin şey, değişimden korktuğundur. İnadın aslında güvende kalma arzusundur; ama içinde bir kara sevdâ, bir hüzün de taşırsın.",
  sadakat:"Toprak tabiatı sadakatin ta kendisidir. Aldatmak ona yabancıdır; ama aldatıldığında da affetmez. Kıskançlığı sahiplenme olarak görünür: benim olan benimdir.",
  ebeveyn:"Toprak tabiatlı anne yahut baba evlâdına sağlam bir zemin verir. Düzenlidir, korur, rızık getirir; ama sevgisini söze dökmekte zorlanır.",
  para:"Toprak harfleri parayı toprak gibi biriktirir. Kuruşun hesabını tutarsın; mülk, ev ve kalıcı mal senin kesendir.",
  eksik:"Harflerinde toprak az olduğundan bir işe sebat etmekte, bir yere kök salmakta zorlanırsın. Başladığın işi bitirmek senin imtihanındır.",
  nazar:"Toprakî tabiat nazarı geç alır ama ağır taşır; bedeninde, sırtında ve bacaklarında bir ağırlık, işlerinde ise bir tıkanıklık olarak görünür." }
};

/* Harfler: isim ilk harfi ve en çok tekrar eden harf için */
KITAP.HARF = {
 Elif:"Elif harflerin başıdır, vahdetin ve istikametin harfidir. Dimdik durur, hiçbir harfe bağlanmaz ama bütün harfler ondan doğar. İsmi Elif ile açılan yalnızlığa ve önderliğe yatkındır; kimseye eğilmez.",
 Be:"Be besmelenin ilk harfidir; zuhurun ve bereketin harfidir. Altındaki nokta, bütün sırların toplandığı noktadır. İsmi Be ile açılan bir şeyin başlangıcı olur; ev, aile ve bereket onunla kurulur.",
 Cim:"Cim cemâlin ve cem'in harfidir; dağınık olanı bir araya toplar. İsmi Cim ile açılan güzelliğe ve topluluğa meyleder; insanları birleştiren bir tabiatı vardır.",
 Dal:"Dal delâletin harfidir; yol gösterir ama kendi yolunu bulmakta gecikir. Eğik duruşu tevazuya işarettir. İsmi Dal ile açılan sözüyle insanlara rehber olur.",
 He:"He hüviyetin ve nefesin harfidir; görünmeyenin işaretidir. İsminde He ağır basan iç dünyasında yaşar; söylemediği sözler söylediklerinden çoktur.",
 Vav:"Vav vuslatın harfidir; iki şeyi birbirine bağlar. İsmi Vav ile kurulan sevdiklerini birbirine kavuşturan, köprü olan kimsedir; ama kendi kavuşmasını hep erteler.",
 Ze:"Ze zînetin harfidir; süsü ve güzelliği sever. İsminde Ze bulunan ince zevkli olur, ama dışa verdiği önem bazen içini unutturur.",
 Ha:"Ha hayatın ve hikmetin harfidir. İsmi Ha ile açılan sıcak bir kalple ve derin bir hikmet arayışıyla yaşar; hayatı ona hep bir şey öğretir.",
 Tı:"Tı tahâretin, yani temizliğin harfidir. İsmi Tı ile açılan temiz kalpli ama inatçıdır; kirli gördüğü şeyden hemen el çeker.",
 Ye:"Ye yedin, yani kudret elinin harfidir. Duanın ve niyazın harfidir; isminde Ye çok olan çok dua eder ve duası çoğu kez kabul olunur.",
 Kef:"Kef kerem ve kifâyetin harfidir; 'Kün' emrinin ilk harfi odur. İsmi Kef ile açılan bir işi başlatan, sözüyle yaratan kimsedir; cömertliği bilinir.",
 Lâm:"Lâm lütfun ve ilmin harfidir; Elif'e sarılınca Lâmelif olur, yani iki sevgilinin kucaklaşması. İsminde Lâm bulunan sevgiyle bilgiyi bir arada arar.",
 Mim:"Mim mertebenin ve tamamlanışın harfidir; çemberi kapatır. Ahmed ve Muhammed isimlerinin sırrı ondadır. İsmi Mim ile açılan bir işi sonuna dek götürür, ailesinin dayanağı olur.",
 Nun:"Nun nurun ve divitin harfidir; 'Nûn ve'l-kalem' diye yemin edilen harftir. İsmi Nun ile açılan kalemle, sözle ve ilimle bağlıdır; içinde bir mürekkep hokkası gibi sırlar taşır.",
 Sin:"Sin sırrın ve selâmın harfidir. Üç dişi üç kat sırra işarettir. İsmi Sin ile açılan sır saklar ve selâmet arar; kavgadan uzak durur.",
 Ayn:"Ayn gözün ve aynın, yani hakikatin harfidir. İsmi Ayn ile açılan gördüğünü bilir, bildiğini görür; nazarı kuvvetlidir, nazara da açıktır.",
 Fe:"Fe fethin ve feyzin harfidir; kapalı kapıları açar. İsmi Fe ile açılan kısmetini zorla değil sabırla açar; ağzından çıkan söz kapı açar.",
 Sad:"Sad sıdkın ve sabrın harfidir. İsmi Sad ile açılan sözünün eri olur; doğruluktan şaşmaz ama bunun bedelini de çoğu kez öder.",
 Kaf:"Kaf kudretin harfidir; kadîm kitaplarda dünyayı çevreleyen Kaf dağı ile anılır. İsmi Kaf ile açılan büyük işlere taliptir, sınırlarını hep zorlar.",
 Re:"Re rahmetin ve rubûbiyetin harfidir. İsmi Re ile açılan merhametlidir ama hareketlidir; durmadan bir yerden bir yere akar.",
 Şın:"Şın şevkin ve şemsin harfidir; üç dişi ve üç noktası ateşin dilleri gibidir. İsmi Şın ile açılan şevkle yanar, coşkuyla yaşar.",
 Te:"Te tevbenin ve teslimiyetin harfidir. İsmi Te ile açılan hata yapar ama dönmeyi bilir; hayatında birkaç büyük dönüş noktası bulunur.",
 Se:"Se sübûtun, yani sebatın harfidir. İsminde Se bulunan sağlam durur, kararından dönmez; üç noktası üç kat sabra işarettir.",
 Hı:"Hı hayrın ve haşyetin harfidir. İsmi Hı ile açılan hayra koşar, ama içinde bir korku, bir ürperti de taşır.",
 Zel:"Zel zikrin harfidir; hatırlamanın ve hatırlanmanın. İsminde Zel bulunan unutmaz ve unutulmaz.",
 Dad:"Dad, dilin en ağır harfidir; Arap diline 'dad dili' denmesi ondandır. İsminde Dad bulunan ağır yükler taşır ama o yükle de tanınır.",
 Zı:"Zı zuhurun ve gölgenin harfidir. İsminde Zı bulunan bazen apaçık görünür, bazen tamamen gizlenir; iki hâli birden taşır.",
 Gayın:"Gayın gaybın harfidir; ebced hesabının en büyük harfi, binin sahibidir. İsminde Gayın bulunan görünmeyenle bağlıdır; rüyaları ve sezgisi kuvvetlidir, ömrü bin dereceli bir sınav gibidir."
};

/* Menâzil-i Kamer: [hal, yorum]. hal: s=sa'd, n=nahs, m=mümtezic */
KITAP.MENZIL = [
 ["m","Şeratayn, koçun iki boynuzu: başlangıçların ve atılışın menzilidir. Ay burada iken doğan yeni işlere çabuk girer; ama ilk adımda karşısına bir engel çıkar."],
 ["m","Butayn, küçük karın: gizli bolluğun menzilidir. Ay burada iken doğanın kısmeti saklıdır; görünmeyen yerden, sessizce gelir."],
 ["s","Süreyyâ, ülker yıldızları: bereketin ve büyüklere yaklaşmanın menzilidir. Bu menzilde doğanın yolculukları hayırlı, dostlukları bereketli olur."],
 ["n","Debarân, takip eden: kinin ve ayrılığın menzilidir. Bu menzilde doğan bir haset gözü taşır; sabrı ve affı öğrenmek ona farzdır."],
 ["m","Hak'a, beyaz leke: iyiyle kötünün birlikte yürüdüğü menzildir. Bu menzilde doğanın hayatında hayır ve şer iç içedir; seçimleri kaderini tayin eder."],
 ["s","Hen'a, kıvrım: muhabbetin ve uzakları yakın etmenin menzilidir. Bu menzilde doğanın gönlü sevgiyle açılır, uzaktaki biri ona kısmet olur."],
 ["s","Zirâ', kol: kuvvetin ve şifanın menzilidir. Bu menzilde doğanın kolu güçlüdür; ne işe el atsa bir yol bulunur."],
 ["n","Nesre, burun deliği: hayra tahsis olunmamış menzildir. Bu menzilde doğan hastalıktan ve kederden sakınmalı, nefsini terbiye etmelidir."],
 ["n","Tarf, göz: nazarın ve korunmanın menzilidir. Bu menzilde doğan nazara açıktır; gözü de keskin, kendisi de göze gelir."],
 ["m","Cebhe, alın: kudretin ve heybetin menzilidir. Bu menzilde doğanın alnında bir yazı vardır; hayır da şer de onun eliyle olur."],
 ["s","Zübre, yele: rızkın artmasının ve ihtiyaçların görülmesinin menzilidir. Bu menzilde doğanın rızkı genişler, ihtiyacı karşılanır."],
 ["m","Sarfe, dönüş: hâllerin değişmesinin menzilidir. Bu menzilde doğanın hayatı birçok kez yön değiştirir; havası gibi hâli de döner."],
 ["m","Avvâ, havlayan: korunmanın ve deniz yolculuğunun menzilidir. Bu menzilde doğanın etrafında bekçiler gibi koruyucular bulunur, ama kendisi de huzursuz bir bekçidir."],
 ["n","Simâk, dayanaksız: yalnızlığın menzilidir. Bu menzilde doğan işlerini acele başlatmamalı; kimseye dayanmadan ayakta durmayı öğrenir."],
 ["s","Gafr, örtü: mağfiretin ve setrin menzilidir. Bu menzilde doğanın kusurları örtülür, hataları affolunur; ne işe girerse hayır bulur."],
 ["m","Zübânâ, akrebin kıskaçları: hayır olmayanı harekete geçirmeyen menzildir. Bu menzilde doğan dikkatli olmalı; elindekini sıkı tutar, ama sıkıştırılmaya da tahammül etmez."],
 ["n","İklîl, taç: dünya işlerinin parladığı ama gönlün darlaştığı menzildir. Bu menzilde doğan taç takar ama tacın ağırlığını da taşır."],
 ["s","Kalb, kalp: hayır amellerine yardım eden menzildir. Bu menzilde doğanın kalbi uyanıktır, sezgisi kuvvetlidir; iyiliğe koşar."],
 ["m","Şevle, iğne: sevindiren ama dünya işini harekete geçirmeyen menzildir. Bu menzilde doğanın sözü iğne gibi batar; ama kalbi neşeye açıktır."],
 ["s","Neâim, deve kuşları: kalpleri arındıran ve gönlü sevindiren menzildir. Bu menzilde doğanın kalbi saf, rızkı bol olur."],
 ["m","Belde, şehir: ne fayda ne zarar veren, bina ve yerleşme menzilidir. Bu menzilde doğan bir yer kurar, bir yurda kök salar; hayatı yavaş ama emin ilerler."],
 ["m","Sa'dü'z-Zâbih, kurbanın bahtı: fedakârlığın menzilidir. Bu menzilde doğan sevdikleri için kendinden verir; dünya işinden çok gönül işinde bahtiyar olur."],
 ["s","Sa'dü Bula', yutanın bahtı: gizli işlerin ve dengenin menzilidir. Bu menzilde doğan sır tutar, işini sessizce yürütür; bütün hayır işleri ona açıktır."],
 ["s","Sa'dü's-Su'ûd, bahtların bahtı: menzillerin en mesududur. Bu menzilde doğanın bahtı açık, duası makbuldür; bütün hayır kapıları ona aralanır."],
 ["s","Sa'dü'l-Ahbiye, çadırların bahtı: barınağın ve korunmanın menzilidir. Bu menzilde doğan sığınak olur, sığınak bulur; gizli kalan iyiliği bir gün açığa çıkar."],
 ["s","Fergu'l-Mukaddem, ön kova: arınmanın ve dökülen bereketin menzilidir. Bu menzilde doğan ne isterse yapabilir; kader ona geniş bir alan açmıştır."],
 ["s","Fergu'l-Muahhar, arka kova: korkulardan kurtuluşun menzilidir. Bu menzilde doğan korktuğu şeylerden selâmetle çıkar; nimet onun üzerine dökülür."],
 ["s","Batnu'l-Hût, balığın karnı: ilim talebinin ve duaların kabulünün menzilidir. Bu menzilde doğanın duası makbul, ilmi bereketli olur; yolculukları selâmetle biter."]
];

/* Ay'ın hâlleri: nazar ve ağırlık */
KITAP.AYHAL = {
 "İçtimâ":"Ay karanlıkta, Güneş ile kavuşmuşken doğdun. Kitaplarda bu hâlde doğanın nazara karşı en hassas, ama gizli ilimlere en yakın olduğu yazılıdır. Başkasının bakışını üzerinde hissedersin; kalabalıklardan sonra yorgunluk çökmesi bundandır.",
 "HilâlBüyüyen":"Hilâl büyürken doğdun. Bu, artan bir kısmete ve yeni başlangıçlara delâlet eder. Nazarın tesiri sende uzun kalmaz; büyüyen Ay seni yeniler.",
 "İlkTerbî":"Ay ilk terbî'de, yani yarımken doğdun. Bu bir mücadele hâlidir; önüne engeller çıkar ve her biri seni büyütür. Nazar sende işlerin son anda bozulması olarak görünür.",
 "Büyüyen":"Ay dolunaya giderken doğdun. Bu kemâle doğru ilerleyen bir hâldir; emeklerin meyve verir. Lâkin kemâle yaklaşan göze de yaklaşır; sevinçlerini herkese anlatma.",
 "Bedr":"Ay bedr, yani dolunay iken doğdun. Kitaplarda bu hâl ışığın en parlak, gözün en keskin olduğu hâldir. Göz önündesin, bu yüzden nazar sana çok değer. Hislerin de dolunay gibi taşar; bazen sebepsiz bir taşkınlık, bazen derin bir hüzün yaşarsın.",
 "Küçülen":"Ay küçülürken doğdun. Bu, hasat ve tefekkür hâlidir; topladığını paylaşmak sana düşer. Nazarın tesiri sende bir isteksizlik, bir çekilme arzusu olarak görünür.",
 "SonTerbî":"Ay son terbî'de doğdun. Bu bir hesaplaşma hâlidir; eski şeyleri bırakmak, eski borçları kapatmak kaderindedir. Ağırlık sende geçmişin hatıraları olarak dolaşır.",
 "HilâlKüçülen":"Ay ince bir hilâl olup kaybolmaya giderken doğdun. Bu, arınma ve tekrar doğmaya hazırlanma hâlidir. Ruhun yaşından yaşlıdır; nazarı çabuk sezer, kalabalıktan kaçarsın."
};

/* Ebced toplamının dokuzluk aslı (cifr-i sagîr): ana imtihan */
KITAP.DOKUZ = {
 1:"Toplamın aslı birdir. Bir, Elif'in sayısıdır, vahdetin ve yalnız duruşun işaretidir. Ana imtihanın kendi ayakların üzerinde durmak, ama kibre düşmemektir. Hayatın boyunca birçok kez tek başına karar vermek zorunda kalırsın.",
 2:"Toplamın aslı ikidir. İki, Be'nin sayısıdır, çiftliğin ve ortaklığın işaretidir. Ana imtihanın bir başkasıyla denge kurmaktır. Kaderin hep bir eş, bir ortak, bir karşı kefe üzerinden döner.",
 3:"Toplamın aslı üçtür. Üç, Cim'in sayısıdır, cemâlin ve sözün işaretidir. Ana imtihanın dilini ve sanatını hayra kullanmaktır. Sözün hem kapı açar hem kapı kapatır.",
 4:"Toplamın aslı dörttür. Dört, anâsırın sayısıdır, temelin ve sabrın işaretidir. Ana imtihanın sağlam bir bina kurmaktır; acele ettiğin her şey temelinden sarsılır.",
 5:"Toplamın aslı beştir. Beş, He'nin sayısıdır, nefesin ve hareketin işaretidir. Ana imtihanın hürriyetini kaybetmeden sorumluluk almaktır. Kaderin seni çok yere götürür.",
 6:"Toplamın aslı altıdır. Altı, Vav'ın sayısıdır, vuslatın ve aile bağının işaretidir. Ana imtihanın sevdiklerine karşı sorumluluğunu taşırken kendini unutmamaktır.",
 7:"Toplamın aslı yedidir. Yedi, yedi kat göğün ve yedi yıldızın sayısıdır, sırrın işaretidir. Ana imtihanın yalnızlıktan korkmadan hakikati aramaktır. İçe dönük bir ömrün sahibisin.",
 8:"Toplamın aslı sekizdir. Sekiz, Ha'nın sayısıdır, kudretin ve dünya malının işaretidir. Ana imtihanın güç ile adaleti bir arada tutmaktır; mal ve makam seni sınar.",
 9:"Toplamın aslı dokuzdur. Dokuz, birler hanesinin sonu, Tı'nın sayısıdır; tamamlanışın ve feragatin işaretidir. Ana imtihanın vermek ve bırakmaktır. Hayatın birçok kez bir devri kapatıp yenisini açmakla geçer."
};

/* Öfke, sezgi, kin, merhamet derecesi: 0 az, 1 orta, 2 çok */
KITAP.HUY = {
 ofke:["Öfken derinde yatar; nadiren dışarı çıkar. Çıktığında ise kimse beklemez, çünkü uzun süre biriktirmişsindir.","Öfken ölçülüdür; haksızlık gördüğünde parlar, hakkını alınca söner.","Öfken ateş gibi çabuk parlar. Kitaplarda bu tabiatın ehline 'öfkeyle kalkan zararla oturur' sözü hatırlatılır. Hiddetinin ardından gelen pişmanlık, öfkenden daha uzun sürer."],
 sezgi:["Sezgin aklının arkasında durur; hissettiğinden çok düşündüğüne güvenirsin. Ama ara sıra gelen bir iç ses seni hiç yanıltmamıştır.","Sezgin uyanıktır; insanların niyetini çoğu kez ilk bakışta okursun.","Sezgin çok kuvvetlidir. Rüyaların sadık, iç sesin keskin olur. Olacak şeyi olmadan önce kalbinde duyarsın ve bu bazen sana ağır gelir."],
 kin:["Kin tutmazsın; kırılırsın ama gönlün çabuk temizlenir.","Kinin sessizdir; affedersin ama unutmazsın. Kırgınlığın bir kenarda bekler.","Kinin derindir. Sana yapılan haksızlığı yıllarca hatırlarsın; affetmek senin en büyük nefis mücadelendir."],
 merhamet:["Merhametin akıl süzgecinden geçer; kime ne kadar yardım edeceğini hesap edersin.","Merhametin ölçülüdür; muhtaca el uzatır, ama kendini de korursun.","Merhametin derya gibidir. Başkasının acısını kendi acın gibi duyarsın; hayır diyememen bu merhametin bedelidir."]
};

KITAP.KISMET = [
 "Kısmetin kapalı değil, perdelidir. Yıldızların çoğu sabır ve emek tarafına düşmüştür. Bu, verilecek olanın gecikerek ama mutlaka geleceğine delâlettir. Perdeyi kaldıran şey sadaka, sabır ve dua üçlüsüdür.",
 "Kısmetin yarı açıktır. Bir kapı açılırken bir diğeri sınar. Hayır ile mihnet sırayla gelir; birinin ardından ötekinin geleceğini bilmek seni hazırlıklı tutar.",
 "Kısmetin açık bir yoldadır. Sa'd yıldızlar senin tarafındadır; çaba gösterdiğinde karşılığını görürsün. Yeter ki nazar ve haset çekmemek için sevincini gizli tutasın.",
 "Kısmetin geniş ve nurludur. Yıldızların çoğu sa'd tarafına düşmüş, menzilin de hayra açıktır. Erbâb-ı nücûm bu hâle 'tâli'i mesud' der. Lâkin geniş kısmetin şükrü de geniş olmalıdır; şükürsüz kalan nimet daralır."
];

/* Esmâ-i Hüsnâ: kısa mânâ */
KITAP.ESMA = {"Rahmân":"bütün mahlûkata rahmet eden","Rahîm":"müminlere ahirette rahmet eden","Melik":"mülkün sahibi","Kuddûs":"her noksandan münezzeh","Selâm":"selâmet veren","Mü'min":"emniyet veren","Müheymin":"her şeyi gözetip koruyan","Azîz":"izzet sahibi, galip","Cebbâr":"dilediğini yaptıran, kırıkları onaran","Mütekebbir":"büyüklükte eşi olmayan","Hâlık":"yoktan yaratan","Bâri'":"kusursuz yaratan","Musavvir":"şekil veren","Gaffâr":"günahları örten","Kahhâr":"her şeye galip gelen","Vehhâb":"karşılıksız bağışlayan","Rezzâk":"rızık veren","Fettâh":"kapıları açan","Alîm":"her şeyi bilen","Kâbız":"daraltan","Bâsıt":"genişleten","Hâfıd":"alçaltan","Râfi'":"yükselten","Muizz":"izzet veren","Müzill":"zillete düşüren","Semî'":"her şeyi işiten","Basîr":"her şeyi gören","Hakem":"hükmeden","Adl":"adaletli","Latîf":"lütfu ince","Habîr":"her şeyden haberdar","Halîm":"hilmi geniş","Azîm":"pek büyük","Gafûr":"çok bağışlayan","Şekûr":"az amele çok karşılık veren","Aliyy":"yüce","Kebîr":"büyük","Hafîz":"koruyan","Mukît":"her canlının azığını veren","Hasîb":"hesaba çeken","Celîl":"celâl sahibi","Kerîm":"cömert","Rakîb":"gözeten","Mucîb":"duaları kabul eden","Vâsi'":"rahmeti geniş","Hakîm":"hikmet sahibi","Vedûd":"seven ve sevilen","Mecîd":"şanı yüce","Bâis":"ölüleri dirilten","Şehîd":"her şeye şahit","Hakk":"varlığı sabit","Vekîl":"işleri yoluna koyan","Kaviyy":"kuvvetli","Metîn":"sarsılmaz","Veliyy":"dost","Hamîd":"övülmeye lâyık","Muhsî":"her şeyi sayan","Mübdi'":"ilk defa yaratan","Muîd":"yeniden döndüren","Muhyî":"hayat veren","Mümît":"ölümü yaratan","Hayy":"diri","Kayyûm":"her şeyi ayakta tutan","Vâcid":"istediğini bulan","Mâcid":"şerefi büyük","Vâhid":"tek","Samed":"hiçbir şeye muhtaç olmayan","Kâdir":"gücü yeten","Muktedir":"kudret sahibi","Mukaddim":"öne alan","Muahhir":"geriye bırakan","Evvel":"başlangıcı olmayan","Âhir":"sonu olmayan","Zâhir":"apaçık","Bâtın":"gizli","Vâlî":"yöneten","Müteâlî":"yüceler yücesi","Berr":"iyilik eden","Tevvâb":"tevbeleri kabul eden","Müntakim":"hakkı alan","Afüvv":"affeden","Raûf":"şefkatli","Mâlikü'l-Mülk":"mülkün ebedî sahibi","Zü'l-Celâli ve'l-İkrâm":"celâl ve ikram sahibi","Muksit":"adaletle hükmeden","Câmi'":"bir araya toplayan","Ganiyy":"zengin, muhtaç olmayan","Muğnî":"zengin kılan","Mâni'":"engelleyen","Dârr":"zarar verenleri yaratan","Nâfi'":"fayda veren","Nûr":"nurlandıran","Hâdî":"hidayet veren","Bedî'":"eşsiz yaratan","Bâkî":"ebedî","Vâris":"her şeyin sonunda kalan","Reşîd":"doğru yolu gösteren","Sabûr":"çok sabırlı"};

/* Rızık ve muhabbet için klasik esmâ tavsiyeleri (ebced sayıları kendi hesabıyla motor tarafından bulunur) */
KITAP.ESMA_RIZIK = ["Rezzâk","Fettâh","Vehhâb","Ganiyy","Bâsıt","Muğnî","Kerîm"];
KITAP.ESMA_MUHABBET = ["Vedûd","Latîf","Câmi'","Rahîm"];
KITAP.ESMA_KORUMA = ["Hafîz","Selâm","Mü'min","Müheymin"];
