/* Üslûp kitabı: hükümleri değiştirmeden anlatımı her bakışta tazeleyen parçalar.
   Hesap ve hükümler sabittir; burada yalnız söyleyiş, geçiş, kadîm sözler ve tavsiyeler vardır. */
(function(K){
"use strict";
// Açılış formülleri (eskilerine eklenir)
K.GIRIS = K.GIRIS.concat([
 "Hâce-i nücûm katında bilinir ki",
 "Eski yıldıznamelerin kenar notlarında okunur ki",
 "Cifir ehlinin sözü şudur:",
 "Kadîm risalelerde beyan olunmuştur ki",
 "Ehl-i tencîm ittifak etmiştir ki",
 "Mecmûalarda nakledilir ki",
 "Ulemâ-yı nücûmun kaydı şöyledir:",
 "Sırr-ı hurûfa vâkıf olanlar derler ki",
 "Şemsü'l-Maârif sahiplerinin yolunca söylenir ki",
 "Defter-i nücûmda mukayyeddir ki",
 "Ehl-i hikmetin dilinde söylenir ki",
 "Eskilerin tecrübesiyle sabittir ki"
]);

// Eş anlamlı söyleyişler: [kalıp, seçenekler]. Hepsi aynı cümle yapısına uyar.
K.SINONIM = [
 [/delâlet eder/g, ["delâlet eder","işaret eder","emâre olur","ima eder"]],
 [/tavsiye olunur/g, ["tavsiye olunur","salık verilir","tavsiye edilir","münasip görülür"]],
 [/kitaplarda/g, ["kitaplarda","eski kitaplarda","kadîm risalelerde","yıldıznamelerde"]],
 [/Kitaplarda/g, ["Kitaplarda","Eski kitaplarda","Kadîm risalelerde","Yıldıznamelerde"]],
 [/ihtimali kavîdir/g, ["ihtimali kavîdir","ihtimali kuvvetlidir","ihtimali ağır basar"]],
 [/olarak bilinir/g, ["olarak bilinir","diye bilinir","olarak kaydedilir"]],
 [/sayılır/g, ["sayılır","addolunur","kabul edilir"]],
 [/hayırlı/g, ["hayırlı","hayırlı","mübarek","uğurlu"]],
 [/Bu yüzden/g, ["Bu yüzden","Bundan ötürü","Bu sebeple","Onun için"]],
 [/bu yüzden/g, ["bu yüzden","bundan ötürü","bu sebeple"]],
 [/çoğu kez/g, ["çoğu kez","çok defa","ekseriya"]],
 [/Ayrıca/g, ["Ayrıca","Bundan başka","Dahası"]],
 [/sabır/g, ["sabır","sabır","tahammül"]],
 [/denir\b/g, ["denir","denilir","adı verilir"]]
];

// Paragrafların başına zaman zaman eklenen geçişler (iki noktayla biter, ardından gelen cümle aynen kalır)
K.BAGLAC = [
 "Şunu da bil:","Dikkat et:","Bunun bir de öbür yüzü vardır:","Yıldızın sırrı şuradadır:","Hükmün inceliği şudur:",
 "Kalem şöyle yazar:","Bunu da kaydet:","Asıl mesele şudur:","Eskilerin işaretiyle:","Hâsılı kelâm:"
];

// Kadîm sözler: her bakışta birkaçı seçilir
K.SOZ = {
 genel:[
  "Yıldızlar meyleder, mecbur etmez; hüküm Allah'ındır.",
  "Harf bir kapıdır; anahtarı niyettir.",
  "Gökte ne yazılıysa yerde sabırla okunur.",
  "Kalem işaret eder, kader ise Kâdir'in elindedir.",
  "Her ismin bir sırrı, her sırrın bir vakti vardır.",
  "Ay dolmadan bedr olmaz; insan da sınanmadan kâmil olmaz."
 ],
 karakter:[
  "İnsan, harfleri kadar hafif, sırları kadar ağırdır.",
  "Kendi ateşini bilen, başkasının dumanından incinmez.",
  "Mizacını tanıyan, kaderinin yarısını okumuş olur.",
  "Su derinse ses vermez; derin gönül de çok konuşmaz.",
  "Taş sabırla, gönül muhabbetle yumuşar.",
  "Huyunu terbiye eden, yıldızını da terbiye etmiş olur."
 ],
 ask:[
  "Muhabbet bir tohumdur; yeri gönül, suyu sabırdır.",
  "Zühre yakar, Zühal pişirir; pişmeyen aşk çiğ kalır.",
  "Gönül kapısı içeriden açılır.",
  "Eş, insanın yedinci hânesidir; kendine baktığın aynadır.",
  "Kıskançlık muhabbetin gölgesidir; gölgeye bakan güneşi unutur.",
  "Nikâh bir ahittir; ahde vefa yıldızları da bağlar."
 ],
 cocuk:[
  "Evlât, ananın duası ile babanın sabrından yoğrulur.",
  "Hane, içindekilerin gönlü kadar geniştir.",
  "Bereket sofraya değil, şükre iner.",
  "Ağaç meyvesinden, ana evlâdından bilinir.",
  "Evin direği kadın, çatısı er, temeli duadır."
 ],
 is:[
  "Rızık aranır, kısmet bulunur.",
  "Verilen sadaka, rızık kapısının menteşesidir.",
  "Sabırla kazanılan, sabırsızlıkla harcanmaz.",
  "Müşterî verir, Zühal saklar; ikisini dengeleyen zengin olur.",
  "Emeğin hakkını veren, yıldızın hakkını da alır.",
  "Kanaat tükenmez bir hazinedir."
 ],
 hurif:[
  "Elif dik durur; doğruluk onun sırrıdır.",
  "Nûrânî harfler sûrelerin kapısında durur.",
  "Her harfin bir unsuru, her unsurun bir yönü vardır.",
  "Esmâ okunur, ama asıl okunan gönüldür.",
  "Nazar haktır; korunmak da haktır.",
  "Gezegen saati geçer, saatte doğan kalır."
 ]
};

// Her bakışta bir tanesi seçilen tavsiyeler
K.TAVSIYE = {
 karakter:[
  "Huyunu yumuşatmak için Cuma geceleri bir saat kimseyle konuşmadan tefekkür etmek tavsiye olunur.",
  "Öfke anında abdest almak ve yüzü yıkamak, eskilerin ateşe karşı verdiği ilk ilaçtır.",
  "Kendine sabah ilk iş üç güzel söz söyle; harfler önce sahibine tesir eder.",
  "Haftada bir gün bir yaşlının elini öp yahut hâlini sor; Zühal'in yükü böyle hafifler."
 ],
 ask:[
  "Gönül işlerinde Cuma günü Zühre saatinde atılan adım hayırlı sayılır.",
  "Sevdiğine verilen ilk hediye gümüş olursa muhabbet uzun ömürlü olur denir.",
  "Kıskançlık kabardığında Yâ Vedûd (20 kere) okunur; gönle serinlik verir.",
  "Nikâh gününü Ay'ın büyüdüğü günlerden seçmek kadîm bir âdettir.",
  "Kırgınlığı gece yatmadan çözmek, Zühal'in soğuğunu yuvaya sokmamaktır."
 ],
 cocuk:[
  "Evin doğusuna bakan pencereyi sabahları açmak, haneye nûr ve bereket çeker.",
  "Evlât duası için Perşembe akşamı ekmek sadakası verilir.",
  "Çocuğa ad koyarken ebcedinin anne babanınkiyle uyumuna bakmak eskilerin usulüdür.",
  "Hanede kırık ayna ve durmuş saat tutulmaz; bereketin önünü keser."
 ],
 is:[
  "Yeni bir işe Perşembe sabahı, Müşterî saatinde başlamak hayırlı sayılır.",
  "Kazancın ilk parasından küçük bir sadaka ayırmak rızkın kapısını açık tutar.",
  "Para kesesini yahut cüzdanı boş bırakmamak, içinde hep bir parça bulundurmak eski bir âdettir.",
  "Büyük bir anlaşmayı Ay küçülürken değil, büyürken yapmak tavsiye olunur.",
  "Borç alıp vermeyi Salı günü yapmamak, Mirrîh'in kavgasından korunmaktır."
 ],
 hurif:[
  "Esmâyı okurken yüzü kıbleye dönük, sırtı duvara dayalı olmak tesirini artırır denir.",
  "Nazara karşı evin girişine bir tutam tuz konur, Cuma günleri değiştirilir.",
  "Kendi isminin ilk harfini gümüş bir yüzük üzerine kazıtmak eski bir korunma âdetidir.",
  "Uğurlu taşını sol elde taşımak, kalbe yakın tutmak demektir."
 ]
};
})(window.KITAP);
