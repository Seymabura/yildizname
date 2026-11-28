/* Hâneler, seyyârelerin hânelerdeki hükümleri ve devir (geçiş) hükümleri. */
(function(K){
"use strict";
// On iki hânenin mânâsı (tâli'den sayılır)
K.HANE = ["",
 "beden, çehre ve hayatın başlangıcı",
 "mal, kazanç ve el altındaki rızık",
 "kardeşler, yakın yolculuk ve söz",
 "baba evi, yuva ve hayatın sonu",
 "evlât, gönül sürûru ve eğlence",
 "hastalık, hizmet ve gündelik zahmet",
 "izdivaç, ortaklık ve açık düşman",
 "ölüm korkusu, miras ve gizli işler",
 "uzak yolculuk, din ve ilim",
 "mevki, sanat ve devlet kapısı",
 "dostlar, ümitler ve hayırlı yardım",
 "gizli düşman, hapis ve iç sıkıntı"];

// Seyyârenin hâli (beyt, şeref, vebâl, hubût)
K.HAL = {
 "beyt":"kendi evindedir; evinde olan yıldız sözünü tam söyler, tesiri saf ve kuvvetlidir",
 "şeref":"şeref burcundadır; misafir olduğu hâlde başköşeye oturtulmuş gibidir, hayrı da şerri de yüce olur",
 "vebâl":"vebâl hâlindedir, yani evinin karşısına düşmüştür; yabancı diyarda kalmış bir beğ gibi tesiri sıkıntılıdır",
 "hubût":"hubût hâlindedir, yani şerefinin karşısına düşmüştür; kuvveti zayıflar, işleri gecikerek ve emekle olur",
 "":"ne kendi evinde ne de düşüşündedir; tesiri orta hâllidir"
};
K.RACI = "Doğduğun ânda râci', yani geri gider görünüyordu; râci' yıldızın işleri dolambaçlı yoldan, geç ve tekrar tekrar gelir.";

// Seyyârelerin hânelerdeki hükümleri: 2, 5, 7, 10. hâneler
K.HANE_YILDIZ = {
 7:{
  Zuhal:"Zühal'in izdivaç hânesine inmesi bu haritanın en ağır mühürlerindendir. Evlilik ya gecikir ya yaşça büyük, ağırbaşlı bir kimseyle olur; yuvada soğukluk ve suskunluk imtihanı vardır. Sabırla kurulan bağ ise kolay kopmaz, taş gibi sağlam olur.",
  Musteri:"Müşterî'nin izdivaç hânesinde olması sa'd-ı ekberin nikâha bakmasıdır. Eşin dindar, cömert, itibarlı bir kimse olur; evlilik rızık ve hürmet getirir.",
  Mirrih:"Mirrîh'in izdivaç hânesinde olması nikâhta kılıç ateşidir. Eşin cesur, hızlı ve öfkeli olur; aşk tutkulu, kavgası da sert olur. Acele nikâhtan sakınmak gerekir.",
  Sems:"Şems'in izdivaç hânesinde olması eşin mevki sahibi, gururlu ve göz önünde bir kimse olacağına işarettir. Evlilik itibar getirir, ama iki güneş bir gökte zor sığar.",
  Zuhre:"Zühre'nin izdivaç hânesinde olması muhabbetin nikâhla taçlanmasıdır. Eşin güzel yüzlü, tatlı dilli, zarif olur; yuvada ülfet ve sevgi galip gelir.",
  Utarid:"Utârid'in izdivaç hânesinde olması eşin genç ruhlu, konuşkan, akıllı ve hesap bilir olacağına delâlet eder. Evlilikte söz ve yazı çoktur; bazen de dil yarası.",
  Kamer:"Kamer'in izdivaç hânesinde olması eşin hassas, değişken hâlli ve yuvaya düşkün olacağına işarettir. Evliliğe ana tarafının sözü karışır; duygular med ve cezir gibi gelip gider."
 },
 5:{
  Zuhal:"Zühal'in evlât hânesinde olması evlâdın gecikmesine yahut az olmasına delâlet eder. Gelen evlât ise ağırbaşlı, sorumluluk sahibi ve yaşından büyük olur.",
  Musteri:"Müşterî'nin evlât hânesinde olması evlât kısmetinin en kuvvetli işaretidir. Evlâtların hayırlı, bereketli ve senin yüzünü ağartan kimseler olur.",
  Mirrih:"Mirrîh'in evlât hânesinde olması evlâtların ateşli, cesur, erkek tabiatlı olacağına işarettir. Doğumlarda ve çocukluk hastalıklarında dikkat gerekir.",
  Sems:"Şems'in evlât hânesinde olması evlâdın göz önünde, gururlu ve önder olacağına delâlet eder. Evlâdın, senin adını yüceltir.",
  Zuhre:"Zühre'nin evlât hânesinde olması evlâtların güzel, sanata meyilli ve dişi tabiatın ağır basacağına işarettir. Gönül eğlenceleri de bu hâneden açılır.",
  Utarid:"Utârid'in evlât hânesinde olması evlâtların zeki, dilli ve ilme yatkın olacağına işarettir. İkiz yahut yakın yaşta evlât da bu yıldızdan sorulur.",
  Kamer:"Kamer'in evlât hânesinde olması evlât kısmetinin bereketli, evlâtların da annelerine düşkün olacağına işarettir. Ay gibi büyür, Ay gibi değişir hâlleri."
 },
 10:{
  Zuhal:"Zühal'in mevki hânesinde olması yükselişin geç ama sağlam olacağını söyler. Emekle, sabırla, merdiven merdiven çıkılır; erken şöhret değil, kalıcı itibar verilir.",
  Musteri:"Müşterî'nin mevki hânesinde olması devlet kapısının, ilmin ve itibarın açık olduğuna delâlet eder. Hâkimlik, hocalık, idarecilik gibi hürmetli işler bu yıldızındır.",
  Mirrih:"Mirrîh'in mevki hânesinde olması işte cesaret ve rekabetle yükselmeye işarettir. Asker, cerrah, mühendis yahut kendi işini kuran kimselerin yıldızıdır.",
  Sems:"Şems'in mevki hânesinde olması baş olmaya, emir vermeye ve göz önünde bulunmaya işarettir. İsmin işinle birlikte anılır.",
  Zuhre:"Zühre'nin mevki hânesinde olması güzellik, sanat, süs ve zevk işleriyle mevki kazanmaya delâlet eder. İnsanlar seni sevdiği için kapı açar.",
  Utarid:"Utârid'in mevki hânesinde olması kalem, hesap, ticaret ve söz işlerinde yükselmeye işarettir. Kâtiplik, öğretmenlik, tüccarlık bu yıldızın sanatıdır.",
  Kamer:"Kamer'in mevki hânesinde olması halkla iç içe bir işe ve sık değişen bir mevkiye işarettir. Şöhret Ay gibi dolup boşalır."
 },
 2:{
  Zuhal:"Zühal'in mal hânesinde olması rızkın emekle, toprakla, eski ve kalıcı şeylerle geleceğine işarettir. Para geç birikir ama kolay gitmez; cimrilikten sakınmak gerekir.",
  Musteri:"Müşterî'nin mal hânesinde olması rızkın bereketli ve hayırlı yoldan geleceğine delâlet eder. Verdikçe artan bir maldır bu.",
  Mirrih:"Mirrîh'in mal hânesinde olması paranın çabuk kazanılıp çabuk harcanacağına işarettir. Gözü kara yatırımlardan ve öfkeyle alınan kararlardan sakın.",
  Sems:"Şems'in mal hânesinde olması malın itibarla, büyüklerden ve devletten geleceğine işarettir. Gösterişe harcamak ise bu malın kurdudur.",
  Zuhre:"Zühre'nin mal hânesinde olması rızkın güzel şeylerden, kadınlardan yahut sanattan geleceğine işarettir. Süse ve zevke harcamaya meyil vardır.",
  Utarid:"Utârid'in mal hânesinde olması rızkın ticaretten, alışverişten, yazıdan ve akıldan geleceğine delâlet eder. Birden çok kazanç kapısı olur.",
  Kamer:"Kamer'in mal hânesinde olması malın Ay gibi artıp eksileceğine işarettir. Halkla iş, yolculuk ve sudan gelen kazanç bu yıldızındır."
 }
};

// Hâne boş kaldığında: hânenin sahibi hangi hânedeyse
K.SAHIP_HANEDE = "Bu hânede yıldız yoktur; hüküm hânenin sâhibine bakılarak verilir. Sâhibi";

// Zühal geçişi: bugünkü Zühal tâli'den kaçıncı hânede
K.GECIS_ZUHAL = ["",
 "Zühal şu günlerde senin tâli'inin üzerinden geçmektedir. Omzuna ağır bir yük biner; beden yorgunluğu, sorumluluk ve yalnızlık hissi olur. Bu devir seni yeniden yoğurur, sabredenin kalıbını sağlamlaştırır.",
 "Zühal şu günlerde mal hânenden geçmektedir. Harcamayı kısmak, borçtan uzak durmak ve emeğin karşılığını sabırla beklemek gerekir; bu devirde biriktirilen az mal, sonra çok olur.",
 "Zühal şu günlerde kardeşler ve söz hânenden geçmektedir. Yakınlarla aranda bir mesafe, sözlerinde bir ağırlık olur; yazılı işlerde dikkatli ol.",
 "Zühal şu günlerde yuva hânenden geçmektedir. Ev, aile büyükleri ve taşınma meseleleri ağırlaşır; köklerinle hesaplaşma zamanıdır.",
 "Zühal şu günlerde evlât ve gönül hânenden geçmektedir. Gönül işleri ciddileşir, eğlence azalır; bu devirde kurulan muhabbet ya kalıcı olur ya hiç olmaz.",
 "Zühal şu günlerde hizmet ve sıhhat hânenden geçmektedir. Gündelik yük artar; bedenine, uykuna ve düzenine özen göster.",
 "Zühal şu günlerde izdivaç hânenden geçmektedir. Evlilik ve ortaklık meselesi ciddileşir: ya ağırbaşlı bir nikâh kurulur ya da var olan bağ sınanır.",
 "Zühal şu günlerde gizli işler ve miras hânenden geçmektedir. Başkasının malı, borç ve eski korkular yüzeye çıkar; içini temizleme devridir.",
 "Zühal şu günlerde ilim ve uzak yol hânenden geçmektedir. Okumak, ciddi bir ilme yönelmek ve inancını sağlamlaştırmak bu devrin işidir.",
 "Zühal şu günlerde mevki hânenden geçmektedir. Emeğinin hesabı sorulur; sağlam temel attıysan mevki gelir, gevşek attıysan sarsılır.",
 "Zühal şu günlerde dostlar hânenden geçmektedir. Dost elenir; az ama sadık kimseler yanında kalır.",
 "Zühal şu günlerde gizli sıkıntılar hânenden geçmektedir. İçe çekilme, yalnızlık ve tefekkür devridir; yeni bir başlangıçtan önceki son karanlık gibidir."];

// Müşterî geçişi
K.GECIS_MUSTERI = ["",
 "Müşterî şu günlerde tâli'inin üzerinden geçmektedir. Çehrene bir nur, işine bir genişlik gelir; on iki yılda bir açılan kapılardan biri açıktır.",
 "Müşterî şu günlerde mal hânenden geçmektedir. Rızık kapısı açılır, kazanç artar; bu bereketi sadakayla mühürlemek gerekir.",
 "Müşterî şu günlerde söz ve kardeşler hânenden geçmektedir. Öğrenmek, yazmak ve yakın yolculuklar hayırlı olur; kardeşlerden hayır gelir.",
 "Müşterî şu günlerde yuva hânenden geçmektedir. Eve bereket, aileye huzur gelir; ev almak yahut yuvayı genişletmek için hayırlı bir devirdir.",
 "Müşterî şu günlerde evlât ve gönül hânenden geçmektedir. Muhabbet, nişan ve evlât müjdesi için kitaplarda en hayırlı devirlerden sayılır.",
 "Müşterî şu günlerde hizmet ve sıhhat hânenden geçmektedir. Şifa kolaylaşır, işyerinde yardımcı eller çoğalır.",
 "Müşterî şu günlerde izdivaç hânenden geçmektedir. Nikâh ve ortaklık için on iki yılda bir gelen en hayırlı devirdir; gelen kısmet sa'd ile gelir.",
 "Müşterî şu günlerde miras ve gizli işler hânenden geçmektedir. Başkasının malından, mirastan yahut ortak paradan hayır gelebilir.",
 "Müşterî şu günlerde ilim ve uzak yol hânenden geçmektedir. Uzak yolculuk, ilim tahsili, hac ve ziyaret için kapılar açıktır.",
 "Müşterî şu günlerde mevki hânenden geçmektedir. Terfi, itibar ve devlet kapısından hayır beklenir; adın iyilikle anılır.",
 "Müşterî şu günlerde dostlar hânenden geçmektedir. Hayırlı dostlar gelir, ümitlerin gerçekleşmeye yaklaşır.",
 "Müşterî şu günlerde gizli sıkıntılar hânenden geçmektedir. Görünmeyen bir el seni korur; dua ve gizli sadaka bu devirde çok tesirlidir."];
})(window.KITAP);
(function(K){
"use strict";
// Tâli' sâhibinin oturduğu hâne: ömrün ve gönlün meşgul olduğu iş
K.TALI_SAHIP = ["",
 "Ömrün kendi elindedir; kaderini başkası çizmez, kendi iraden ve kendi çehrenle yol alırsın. İnsanlar seni ilk görüşte tanır.",
 "Ömrünün dümeni mal ve kazanç tarafına dönüktür; emeğinin karşılığını görmek, el altında bir birikim tutmak sana huzur verir.",
 "Ömrün söz, kalem ve yakınların arasında geçer; kardeşler, komşular ve kısa yolculuklar kaderinde büyük yer tutar.",
 "Ömrün yuvaya ve köklerine bağlıdır; ev, ana baba ve ata yurdu senin kalenindir. Hayatın sonu başından daha huzurlu olur.",
 "Ömrün gönül işleriyle, evlâtla ve sürûrla meşguldür; sevmek ve sevilmek senin için ekmek su gibidir.",
 "Ömrün hizmet ve emekle geçer; başkalarının işini görmek, düzen kurmak ve şifa dağıtmak senin kaderindir. Bedenine iyi bakmak lâzımdır.",
 "Ömrün izdivaç ve ortaklık üzerinden şekillenir; hayatının en büyük dönüşleri bir başkasıyla kurduğun bağ ile gelir.",
 "Ömrün gizli işler, derin sırlar ve büyük dönüşümlerle örülüdür; yıkılıp yeniden kurulmayı bilirsin, başkasının malından ve mirastan da payın vardır.",
 "Ömrün ilim, inanç ve uzak yollara dönüktür; gurbet, tahsil ve hakikati arama kaderinin ana yoludur.",
 "Ömrün mevki ve sanat peşindedir; adını bir işle anmak, itibar kazanmak ve göz önünde durmak kaderinde yazılıdır.",
 "Ömrün dostlar ve ümitler arasında geçer; kalabalıkların içinde kıymet bulur, hayırlı dostların eliyle yükselirsin.",
 "Ömrünün bir kısmı perde arkasında geçer; yalnızlık, tefekkür ve gizli hizmet sana nasip olur. Görünmeyen bir himaye de seninledir."];
// Ay'ın oturduğu hâne: gönlün huzur aradığı yer
K.AY_HANE = ["",
 "gönlün yüzüne vurur; hâlin her an çehrenden okunur",
 "gönlün emniyeti el altındaki malda ve düzende arar",
 "gönlün söyleşmekte, yazmakta ve yakınlarıyla dertleşmekte huzur bulur",
 "gönlün evine, anasına ve köklerine sıkı sıkıya bağlıdır",
 "gönlün sevmekte, eğlencede ve çocuklarda açılır",
 "gönlün işe ve hizmete gömülerek huzur arar; bazen kendini unutur",
 "gönlün bir eşte, bir yoldaşta karar kılar; yalnız kalmaya dayanamaz",
 "gönlün derin, sırlı ve kıskançtır; kolay açılmaz, açılınca da tamamen açılır",
 "gönlün uzaklara, ilme ve inanca kanat çırpar",
 "gönlün herkesin önünde durur; halk seni hislerinle tanır",
 "gönlün dost meclislerinde ve ümitlerinde huzur bulur",
 "gönlün perde arkasında yaşar; rüyaları ve yalnızlığı kuvvetlidir"];
// Nazarlar
K.NAZAR_TUR = {
 "mukârene":"aynı yerde buluşur, yani mukârenededir",
 "tesdîs":"altıda bir nazarla, yani tesdîs ile dostça bakışır",
 "terbî'":"dörtte bir nazarla, yani terbî' ile çekişerek bakışır",
 "teslîs":"üçte bir nazarla, yani teslîs ile sevgiyle bakışır",
 "mukâbele":"karşı karşıya, yani mukâbele hâlinde durur"};
K.YILDIZ_KEY = {Sems:"izzet ve irade",Kamer:"gönül ve his",Utarid:"akıl ve söz",Zuhre:"muhabbet ve zevk",Mirrih:"cesaret ve öfke",Musteri:"bereket ve inanç",Zuhal:"sabır ve yük"};
// Önemli çiftler: [iyi bakış, kötü bakış, buluşma]
K.CIFT = {
 "Zuhal|Zuhre":["Muhabbetin sabırla olgunlaşır; sevgin geç gelir ama kalıcı olur.","Muhabbetine bir soğukluk düşer; sevdiğinden uzak kalma, yaşça büyük yahut ağır bir sevgi imtihanı vardır.","Aşkın ağırbaşlı ve ciddidir; sevgiyi hafife almazsın, ama sevinçle de kolay göstermezsin."],
 "Mirrih|Zuhre":["Aşkın tutkulu ve canlıdır; gönlün çabuk tutuşur, tutuştuğu yeri de ısıtır.","Aşkta kıskançlık ve fırtına vardır; tutku ile kavga aynı kapıdan girer.","Muhabbet ile ateş bir aradadır; sevdiğin kimse için her şeyi göze alırsın."],
 "Kamer|Zuhal":["Hislerin sağlam ve sadıktır; gönlün zor açılır ama açılınca dayanıklıdır.","Gönlünde eski bir hüzün, ana tarafından gelen bir ağırlık vardır; kendini sevilmeye lâyık görmekte zorlanırsın.","Hislerini saklarsın; yaşından büyük bir gönül taşırsın."],
 "Sems|Zuhal":["Babadan yahut büyüklerden gelen bir disiplin seni sağlamlaştırır.","Baba tarafıyla yahut otoriteyle bir imtihan vardır; kendini ispat etmek için çok çalışırsın.","İradene erken yaşta bir yük biner; olgunluğun erken gelir."],
 "Musteri|Zuhre":["Muhabbetin bereketli ve hayırlıdır; sevdiğin kimse sana rızık getirir.","Sevgide ölçüyü kaçırma meyli vardır; çok verip az almak seni yorar.","Gönlün cömert ve neşelidir; sevgin bolluk getirir."],
 "Kamer|Mirrih":["Hislerin cesurdur; sevdiklerini korumak için öne atılırsın.","Hislerin çabuk alevlenir; öfken içten gelir ve çabuk yayılır.","Gönlünde bir ateş yanar; hassasiyetin öfkeye kolay döner."],
 "Kamer|Sems":["İçin ile dışın barışıktır; ne istediğini bilirsin.","İçin ile dışın ayrı yönlere çeker; istediğin ile yaptığın arasında bir çekişme vardır.","Doğduğun gece ay karanlığına yakındır; yeni başlangıçların sahibisin."],
 "Utarid|Zuhal":["Aklın derin ve sabırlıdır; söylediğini tartarak söylersin.","Sözünü söylemekte zorlanır, kendini yanlış anlaşılmış hissedersin.","Fikrin ağırbaşlıdır; şakadan çok ciddiyete yatkınsın."],
 "Musteri|Zuhal":["Sabır ile bereket el ele verir; geç gelen kısmet kalıcı olur.","Bolluk ile darlık arasında gidip gelirsin; ümit ile korku birbirini kovalar.","Hayatında büyük bir devrin kapısı açılır; sabır bereketi doğurur."]
};
})(window.KITAP);
(function(K){
"use strict";
// Her yıldızın girdiği hâneye yaptığı iş
K.YILDIZ_FIIL = {
 Zuhal:"girdiği hânenin işlerini geciktirir, ağırlaştırır; ama sabırla bekleyene orada kalıcı bir temel bırakır",
 Musteri:"girdiği hâneye bereket, genişlik ve himaye getirir; o hânenin kapısı kolay açılır",
 Mirrih:"girdiği hâneye ateş, hız ve çekişme getirir; orada cesaret ister, öfke sakınılır",
 Sems:"girdiği hâneyi aydınlatır; o hânenin işleri seni göz önüne çıkarır, izzet yahut gurur oradan doğar",
 Zuhre:"girdiği hâneye muhabbet, zarafet ve tatlılık katar; o hânede insanlar sana yumuşak davranır",
 Utarid:"girdiği hâneye söz, hesap ve hareket getirir; o hânenin işleri akılla ve konuşarak yürür",
 Kamer:"girdiği hâneye his ve değişkenlik getirir; o hânenin işleri Ay gibi bir artar bir eksilir"
};
// Sevinç hâneleri (ferah): yıldızın kendini en rahat hissettiği hâne
K.SEVINC = {Utarid:1, Kamer:3, Zuhre:5, Mirrih:6, Sems:9, Musteri:11, Zuhal:12};
K.SEVINC_METIN = "sevinç hânesindedir, yani kadîmlerin ferah dediği yerdedir; yıldız burada gönül hoşluğuyla çalışır ve hayrı artar";
// Gündüz ve gece haritası (hayz)
K.HAYZ = {
 gece:"Gece doğduğundan haritan gece haritasıdır. Gece haritasında hükmün nuru Kamer'dir; sa'd yıldızların en hayırlısı Zühre, nahsların en hafifi Mirrîh olur. Zühal ise gece haritasında yabancıdır ve yükü daha ağır gelir.",
 gunduz:"Gündüz doğduğundan haritan gündüz haritasıdır. Gündüz haritasında hükmün nuru Şems'tir; sa'd yıldızların en hayırlısı Müşterî, nahsların en hafifi Zühal olur. Mirrîh ise gündüz haritasında yabancıdır ve kızgınlığı daha keskin gelir."
};
// Fidâr (ömür devirleri) — her devrin hükmü
K.FIDAR_METIN = {
 Sems:"Şems devri izzet, görünürlük ve baba tarafının işleriyle geçer; insan kendini ispat etmek ister.",
 Zuhre:"Zühre devri muhabbet, süs, sanat ve gönül işleriyle geçer; sevgi ve dostluk kapıları açılır.",
 Utarid:"Utârid devri tahsil, söz, yazı ve ticaret devridir; akıl keskinleşir, yollar çoğalır.",
 Kamer:"Kamer devri çocukluk, ana kucağı ve hislerin devridir; ruhun temeli bu yıllarda atılır.",
 Zuhal:"Zühal devri sabır, mesuliyet ve yalnızlık devridir; insan erken olgunlaşır, ağır ama sağlam dersler alır.",
 Musteri:"Müşterî devri bereket, ilim, inanç ve himaye devridir; hayırlı kapılar açılır, büyükler yardım eder.",
 Mirrih:"Mirrîh devri mücadele, cesaret ve hızlı kararların devridir; atılan adımlar büyük olur, kavgadan sakınmak gerekir.",
 Res:"Re's devri kaderin yeni bir kapıya çektiği kısa devirdir; beklenmedik fırsatlar gelir.",
 Zeneb:"Zeneb devri eski hesapların kapandığı kısa devirdir; geride bırakılacak şeyler ayrılır."
};
// İntihâ: senenin açtığı hâne (yaş tamamlandıkça bir hâne ilerler)
K.INTIHA_METIN = ["",
 "Bu sene intihâ tâli'ine düşmüştür: yeni bir başlangıç, bedenine ve kendine dönme senesidir.",
 "Bu sene intihâ mal hânene düşmüştür: kazanç, harcama ve emeğin karşılığı senenin işidir.",
 "Bu sene intihâ söz ve kardeşler hânene düşmüştür: tahsil, yazı, yakın yolculuk ve kardeş meseleleri öne çıkar.",
 "Bu sene intihâ yuva hânene düşmüştür: ev, aile, taşınma ve köklerle ilgili işler senenin gündemidir.",
 "Bu sene intihâ gönül ve evlât hânene düşmüştür: muhabbet, eğlence ve sevinç senesidir.",
 "Bu sene intihâ hizmet ve sıhhat hânene düşmüştür: çalışmak, düzen kurmak ve bedene dikkat senesidir.",
 "Bu sene intihâ izdivaç hânene düşmüştür: nikâh, ortaklık ve karşına çıkan insanlar senenin mihveridir.",
 "Bu sene intihâ gizli işler hânene düşmüştür: içsel dönüşüm, borç-miras ve sırların senesidir.",
 "Bu sene intihâ ilim ve uzak yol hânene düşmüştür: okumak, seyahat ve inanç senesidir.",
 "Bu sene intihâ mevki hânene düşmüştür: iş, itibar ve hayatının yönünü belirleyen kararlar senesidir.",
 "Bu sene intihâ dostlar hânene düşmüştür: yeni dostluklar, ümitler ve hayırlı yardımlar senesidir.",
 "Bu sene intihâ gizli sıkıntılar hânene düşmüştür: perde arkası, yalnızlık ve hazırlık senesidir; görünmeyen bir el seni korur."];
// Sehm-i Saâdet: kısmetin geldiği hâne
K.SEHM_HANE = ["",
 "Kısmetin kendi elinde ve kendi çehrendedir; kendi gayretinle, kendi adınla gelir.",
 "Kısmetin doğrudan mala ve kazanca bağlıdır; emeğinin karşılığını görürsün.",
 "Kısmetin söz, kalem, kardeşler ve yakın yolculuklar üzerinden gelir.",
 "Kısmetin evden, aileden, topraktan ve miras kalan yerden gelir.",
 "Kısmetin gönül işlerinden, sanattan ve evlâtlardan gelir.",
 "Kısmetin hizmetten, gündelik emekten ve şifa işlerinden gelir; çalıştıkça açılır.",
 "Kısmetin eşinden, ortaklarından ve bir başkasıyla kurduğun bağdan gelir.",
 "Kısmetin başkasının malından, mirastan yahut gizli işlerden gelir.",
 "Kısmetin ilimden, uzak yollardan ve gurbetten gelir.",
 "Kısmetin mevkiden, sanatından ve büyüklerin kapısından gelir.",
 "Kısmetin dostlardan ve hayırlı tanıdıklardan gelir; bir dostun eli rızkını açar.",
 "Kısmetin perde arkasından, görünmeyen yollardan gelir; dua ve gizli sadaka anahtarıdır."];
})(window.KITAP);
