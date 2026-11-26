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
