/* Yorum motoru: hesap cetvelinden çıkan değerlere göre yorum kitabından parçaları seçip birleştirir.
   Yapay zekâ kullanmaz. Aynı bilgiler her zaman aynı yorumu verir. */
window.FAL = (function(){
"use strict";
const K = window.KITAP;
const SAD = {Musteri:1, Zuhre:1, Sems:0, Utarid:0, Kamer:0, Mirrih:-1, Zuhal:-1};
const ERKEK_YILDIZ = {Sems:1, Mirrih:1, Musteri:1, Zuhal:1, Zuhre:-1, Kamer:-1, Utarid:0};
const NURANI = ["Elif","Lâm","Mim","Sad","Re","Kef","He","Ye","Ayn","Tı","Sin","Ha","Kaf","Nun"];
const UNSUR_HARF = {Ateş:["Elif","He","Tı","Mim","Fe","Şın","Zel"], Toprak:["Be","Vav","Ye","Nun","Sad","Te","Dad"], Hava:["Cim","Ze","Kef","Sin","Kaf","Se","Zı"], Su:["Dal","Ha","Lâm","Ayn","Re","Hı","Gayın"]};
const ES_HARF = {Ateş:["Elif","Mim","Fe","Şın","He"], Toprak:["Be","Nun","Ye","Te","Sad"], Hava:["Kef","Sin","Cim","Ze","Kaf"], Su:["Re","Lâm","Dal","Ha","Ayn"]};
const TR_KARSILIK = {Elif:"A",Be:"B yahut P",Cim:"C yahut Ç",Dal:"D",He:"E yahut H",Vav:"V, O yahut U",Ze:"Z",Ha:"H",Tı:"T",Ye:"Y yahut İ",Kef:"K yahut G",Lâm:"L",Mim:"M",Nun:"N",Sin:"S",Ayn:"A yahut E",Fe:"F",Sad:"S",Kaf:"K",Re:"R",Şın:"Ş",Te:"T",Se:"S",Hı:"H",Zel:"Z",Dad:"D",Zı:"Z",Gayın:"Ğ yahut G"};
const SAYI = ["","bir","iki","üç","dört","beş","altı","yedi"];
const SIRA = ["","birinci","ikinci","üçüncü","dördüncü","beşinci","altıncı","yedinci","sekizinci","dokuzuncu","onuncu","on birinci","on ikinci"];
const GECIS = {Ateş:{Ateş:"aynı ateşten",Hava:"birbirini besleyen",Su:"birbirine zıt",Toprak:"birbirini zorlayan"},Hava:{Ateş:"birbirini besleyen",Hava:"aynı rüzgârdan",Su:"birbirini zorlayan",Toprak:"birbirine zıt"},Su:{Ateş:"birbirine zıt",Hava:"birbirini zorlayan",Su:"aynı denizden",Toprak:"birbirini besleyen"},Toprak:{Ateş:"birbirini zorlayan",Hava:"birbirine zıt",Su:"birbirini besleyen",Toprak:"aynı topraktan"}};

function hash(s){ let h=2166136261; for(const ch of s){ h^=ch.codePointAt(0); h=Math.imul(h,16777619); } return h>>>0; }
function rng(seed){ let a=seed; return ()=>{ a|=0; a=a+0x6D2B79F5|0; let t=Math.imul(a^a>>>15,1|a); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; }; }
function dir(w){ w=w.toLocaleLowerCase("tr"); const v=(w.match(/[aeıioöuü](?=[^aeıioöuü]*$)/)||["e"])[0]; const u={a:"ı",ı:"ı",e:"i",i:"i",o:"u",u:"u",ö:"ü",ü:"ü"}[v]; const sert=/[fstkçşhp]$/.test(w); return w+(sert?"t":"d")+u+"r"; }
function daDe(w){ const v=(w.toLocaleLowerCase("tr").match(/[aeıioöuüâîû](?=[^aeıioöuüâîû]*$)/)||["e"])[0]; return /[aıouâû]/.test(v)?"da":"de"; }
const CELALI=["Mümît","Dârr","Müzill","Müntakim","Kâbız","Hâfıd","Mâni'","Kahhâr","Cebbâr","Muahhir"];
const kok = n => { n=Math.abs(n); return n===0?9:1+((n-1)%9); };

function oku(c, ctx){
  const {BURC, NAME, PLANET_AD, esmaVal} = ctx;
  const R = rng(hash([c.inp.ad,c.inp.anne,c.inp.tarih,c.inp.saat,c.inp.yer].join("|").toLocaleLowerCase("tr")));
  const pick = arr => arr[Math.floor(R()*arr.length)];
  const giris = (()=>{ const pool=K.GIRIS.slice(); return ()=>{ if(!pool.length) pool.push(...K.GIRIS); return pool.splice(Math.floor(R()*pool.length),1)[0]; }; })();
  const bIdx = b => BURC.findIndex(x=>x[0]===b[0]);
  const ascI = bIdx(c.ascSign), sunI = bIdx(c.sunSign), moonI = bIdx(c.moonSign), isimI = bIdx(c.isimBurc);
  const hane = n => (ascI + n - 1) % 12;
  const KB = i => K.BURC[i];
  const Y = k => K.YILDIZ[k];
  const nodeI = Math.floor(c.node/30), zenebI = (nodeI+6)%12;

  // unsurlar
  const els = Object.entries(c.el).sort((a,b)=>b[1]-a[1]);
  const top = els[0][0], ikinci = els[1][0], zayif = els[3][0];
  const denge = els[0][1]-els[3][1] <= 1;
  const toplamHarf = els.reduce((a,e)=>a+e[1],0)||1;
  const pay = k => c.el[k]/toplamHarf;
  const U = K.UNSUR[top];

  // harfler
  const harfAd = l => NAME[l.b];
  const ilk = c.nm.first ? harfAd(c.nm.first) : null;
  const son = c.nm.last ? harfAd(c.nm.last) : null;
  const frek = {}; c.nm.letters.forEach(l=>{ const n=harfAd(l); frek[n]=(frek[n]||0)+1; });
  const baskin = Object.entries(frek).sort((a,b)=>b[1]-a[1])[0];
  const nurSay = c.nm.letters.filter(l=>NURANI.includes(harfAd(l))).length;
  const zulSay = c.nm.letters.length - nurSay;

  // yıldız hâlleri
  const yedinciI = hane(7), yedinciSahip = BURC[yedinciI][3];
  const besinciI = hane(5), dorduncuI = hane(4), onuncuI = hane(10), ikinciI = hane(2);
  const dolunayYonu = (()=>{ const e=((c.moon-c.sun)%360+360)%360; return e<180; })();
  const ayKey = (()=>{ const p=c.phase; if(p.startsWith("İçtimâ")) return "İçtimâ"; if(p.startsWith("Hilâl, büyüyen")) return "HilâlBüyüyen"; if(p.startsWith("İlk")) return "İlkTerbî"; if(p.startsWith("Büyüyen")) return "Büyüyen"; if(p.startsWith("Bedr")) return "Bedr"; if(p.startsWith("Küçülen")) return "Küçülen"; if(p.startsWith("Son")) return "SonTerbî"; return "HilâlKüçülen"; })();
  const menzil = K.MENZIL[c.menzilNo-1];
  const varMi = k => [c.hourRuler,c.dayRuler,c.isimYildiz].includes(k);

  // kısmet puanı
  let puan = SAD[c.dayRuler] + SAD[c.hourRuler] + SAD[c.isimYildiz] + (menzil[0]==="s"?1:menzil[0]==="n"?-1:0) + (dolunayYonu?1:0) + SAD[BURC[isimI][3]];
  const kismetDerece = puan<=-1?0:puan<=1?1:puan<=3?2:3;

  const S = []; // bölümler
  const P = (...a) => a.filter(Boolean);
  const isimY = Y(c.isimYildiz), saatY = Y(c.hourRuler), gunY = Y(c.dayRuler);
  const enMunasip = c.esmaAd.find(x=>!CELALI.includes(x.tr)) || c.esmaTop.find(x=>!CELALI.includes(x.tr)) || {tr:"Latîf",v:129};
  const esmaStr = x => `Yâ ${x.tr} (${K.ESMA[x.tr]||""}${K.ESMA[x.tr]?", ":""}ebcedi ${x.v})`;

  /* ============ I. İlm-i Hurûf ve Yıldızname ============ */
  const anneOran = c.an.total > c.nm.total ? "validenin harfleri senin harflerinden ağır basar; kaderinde ana tarafının izi, senin kendi seçimlerinden daha derindir" : c.an.total < c.nm.total ? "senin harflerin validenin harflerinden ağır basar; kaderini daha çok kendi elinle yazarsın" : "senin harflerinle validenin harfleri denk gelmiştir; bu nadir bir mizandır";
  S.push({id:"hurif", title:"İlm-i Hurûf ve Yıldızname", subs:[
   {h:"Ebced Hesabı", p:P(
     `İsmin ${c.inp.ad} ebced-i kebîr ile ${c.nm.total} gelir; validen ${c.inp.anne} ${c.an.total} gelir. İkisinin toplamı ${c.top} eder. ${giris()} isim ile valide ebcedi bir terazinin iki kefesidir: burada ${anneOran}.`,
     `Bu toplam on ikiye bölündüğünde ${c.k12} kalır ve tâli'in ${c.isimBurc[0]} burcuna düşer. Yediye bölündüğünde ${c.k7} kalır ve isminin yıldızı ${isimY.ad} olur. Dörde bölümde unsurun ${c.isimUnsur} çıkar. Toplamın rakamları birbirine katılıp teke indirildiğinde aslı ${kok(c.top)} olur; isminin tek başına aslı ise ${kok(c.nm.total)} çıkar.`,
     kok(c.top)===kok(c.nm.total) ? "İsminin aslı ile toplamın aslı aynı çıkmıştır. Bu, kaderinle kendi tabiatının aynı yöne aktığına, iç ile dışın birbirini tuttuğuna delâlet eder." : "İsminin aslı ile toplamın aslı ayrı düşmüştür. Bu, kendi tabiatınla kaderinin seni bazen iki ayrı yöne çektiğine, ömrünün bu iki sesi barıştırmakla geçeceğine delâlet eder."
   )},
   {h:"İlm-i Sîmâ", p:P(
     `Tâli'in, yani doğduğun ânda şarktan yükselen burç ${c.ascSign[0]} (${c.ascSign[1]}) olduğundan çehren onun mührünü taşır. ${KB(ascI).sima}`,
     `${U.sima} ${c.el.Ateş+c.el.Hava > c.el.Su+c.el.Toprak ? "Sıcak harfler galip olduğundan yüzün içindekini saklayamaz; hâlin hemen çehrene vurur." : "Soğuk harfler galip olduğundan yüzün içindekini kolay ele vermez; seni tanımak zaman ister."}`
   )},
   {h:"Hurûf İlmi", p:P(
     ilk && `İsmin ${ilk} harfiyle açılır. ${K.HARF[ilk]}`,
     baskin && baskin[1]>1 && baskin[0]!==ilk && `İsminde en çok tekrar eden harf ${baskin[0]} harfidir (${baskin[1]} kere). ${K.HARF[baskin[0]]}`,
     son && son!==ilk && `İsmin ${son} harfiyle kapanır. Son harf, bir işin nasıl bittiğini gösterir. ${K.HARF[son].split(". ")[0]}; bu yüzden işlerin çoğu kez bu harfin tabiatıyla sonuçlanır.`,
     `İsminin ${c.nm.letters.length} harfinden ${nurSay} tanesi nûrânî, ${zulSay} tanesi zulmânî harflerdendir. Nûrânî harfler, sûrelerin başında gelen on dört harftir. ${nurSay>zulSay ? "Nûrânî harfler galip olduğundan isminde bir aydınlık vardır; hayır işlerine açık, duası kabule yakın bir isimdir." : nurSay===zulSay ? "İki taraf denk olduğundan isminde aydınlık ile gölge yan yanadır; hangisini büyüteceğin senin elindedir." : "Zulmânî harfler galip olduğundan isminde bir örtü, bir gizlilik vardır; nurun içte saklıdır ve ancak ibadet ve hizmetle açılır."}`
   )},
   {h:"Yıldızname", p:P(
     KB(isimI).yildizname,
     `${isimY.ad} ise ${isimY.sad} sayılır, tabiatı ${isimY.mizac} olarak bilinir. ${isimY.yildiz} Uğurlu madeni ${isimY.maden}, taşı ${isimY.tas}, rengi ise ${isimY.renk} olarak yazılır.`,
     isimI===sunI ? `İsminin burcu ile Güneş'in doğduğun gündeki burcu aynı, yani ${c.sunSign[0]} çıkmıştır. Bu, yıldıznamenin ender rastlanan mühürlerindendir; ismin ile doğuşun aynı kapıyı işaret eder.` : `Güneş'in burcu ise ${c.sunSign[0]} (${c.sunSign[1]}) olduğundan, isminin tâli'i ile doğuşunun tâli'i ${GECIS[c.isimBurc[2]][c.sunSign[2]]} iki tabiattır.`
   )},
   {h:"Harflerin Tabiatı", p:P(
     `İsminle validenin isminin harfleri anâsır-ı erbaaya göre tartıldığında ateş ${c.el.Ateş}, hava ${c.el.Hava}, su ${c.el.Su}, toprak ${c.el.Toprak} çıkar.`,
     denge ? `Unsurların neredeyse denktir. Kitaplarda bu hâle 'mu'tedil mizaç' denir; ne çok sıcak ne çok soğuk, ne çok kuru ne çok nemli. Ağır basan hafifçe ${dir(top)}. ${U.mizac}` : U.mizac,
     `İkinci sırada ${ikinci.toLocaleLowerCase("tr")} gelir; ${K.UNSUR[top].tamamlayan===ikinci ? "bu, galip unsuru besleyen ve ona yardım eden unsurdur. Tabiatın kendi içinde barışıktır." : K.UNSUR[top].karsit===ikinci ? "bu, galip unsurun zıddıdır. İçinde iki tabiat birbiriyle cenkleşir; bir gün ateş gibi, bir gün su gibi olursun." : "bu, galip unsura ne dost ne düşmandır; tabiatına bir ikinci renk katar."}`,
     c.el[zayif]===0 ? `Harflerinde hiç ${zayif.toLocaleLowerCase("tr")} yoktur. ${K.UNSUR[zayif].eksik}` : `En az olan unsur ${dir(zayif)}. ${K.UNSUR[zayif].eksik}`
   )},
   {h:"Esmâların Tesiri", p:P(
     `İsminin ebcedine (${c.nm.total}) en yakın esmâlar şunlardır: ${c.esmaAd.map(esmaStr).join("; ")}. ${giris()} bir kimse isminin sayısına yakın esmâyı kendi ebced sayısı kadar okursa o esmânın sırrı onun hâline yardım eder.`,
     `Senin için en münasibi ${esmaStr(enMunasip)} esmâsıdır. Bunu ${enMunasip.v} kere, tercihen ${isimY.gun} günü, ${isimY.ad} saatinde, yani o günün güneş doğduktan sonraki ilk saatinde okumak tavsiye olunur.`,
     `İsim ile valide toplamına (${c.top}) yakın düşen esmâlar ise şunlardır: ${c.esmaTop.map(esmaStr).join(" ve ")}. Bunlar kaderinin genel akışına yardım eden isimlerdir; sıkıntılı günlerde ${c.esmaTop[0].v} kere okunur.`
   )},
   {h:"Gezegen Saatleri ve Kader Tesirleri", p:P(
     `${c.geceAdi} doğdun. ${gunY.gunMetin}`,
     `Doğduğun ân ise ${c.gece?"gecenin":"gündüzün"} ${c.hourIdx%12+1}. saatine, yani ${saatY.ad} saatine düşer. ${saatY.saat}`,
     c.hourRuler===c.dayRuler ? `Günün yıldızı ile saatin yıldızı aynıdır: ${saatY.ad}. Bu, o yıldızın tesirinin sende iki kat kuvvetle işlediğine delâlet eder.` : `Günün yıldızı ${gunY.ad} ile saatin yıldızı ${saatY.ad} ${(()=>{const a=SAD[c.dayRuler],b=SAD[c.hourRuler]; if(a>0&&b>0) return "ikisi de sa'd yıldızlardır; kaderinin terazisi hayır tarafına meyleder"; if(a<0&&b<0) return "ikisi de ağır yıldızlardır; kaderinde mücadele ve sabır payı büyüktür"; if(a+b>0) return "bir araya geldiğinde hayır tarafı ağır basar; zorluklar gelir ama yardım da arkasından gelir"; if(a+b<0) return "bir araya geldiğinde ağır taraf biraz daha basar; kaderinde sabır payı, kolaylık payından fazladır"; return "birbirini dengeler; hayatında hem kolaylık hem zorluk ölçülü gelir";})()}.`,
     c.gece ? "Gece doğanlar kitaplarda Kamer'in himayesine daha yakın sayılır; iç âlemi, rüyası ve sezgisi gündüz doğanlardan kuvvetli olur." : "Gündüz doğanlar kitaplarda Şems'in himayesine daha yakın sayılır; işleri açıkta, aklı ve iradesi önde olur."
   )},
   {h:"Kadersel Düğümler", p:P(
     `Ukdeteyn, yani Ay'ın yolunun Güneş'in yolunu kestiği iki düğüm, doğduğun ânda Re's için ${BURC[nodeI][0]} (${BURC[nodeI][1]}), Zeneb için ${BURC[zenebI][0]} (${BURC[zenebI][1]}) burcundaydı. Kadîm müneccimler Re's'i, yani ejderhanın başını, kaderin gittiği yön; Zeneb'i, yani kuyruğunu, ruhun geldiği ve geride bırakması gereken yer sayar.`,
     K.BURC[nodeI].res, K.BURC[zenebI].zeneb
   )},
   {h:"Ruhsal Yükler", p:P(
     `Ay doğduğun ânda ${c.menzilNo}. menzil olan ${c.menzil} menzilindeydi. ${menzil[1]}`,
     menzil[0]==="n" ? "Bu menzil kitaplarda nahs sayılır. Bu, ruhunda doğuştan getirdiğin bir yük olduğuna, bu yükün de sabır ve sadaka ile hafifleyeceğine delâlet eder." : menzil[0]==="s" ? "Bu menzil kitaplarda sa'd sayılır. Ruhundaki yük ağır değildir; asıl yükünü kendi ellerinle, kendi seçimlerinle yüklenirsin." : "Bu menzil kitaplarda mümtezic, yani karışık sayılır. Ruhundaki yük ile nimet iç içedir; yükü taşıdıkça nimeti de görürsün.",
     varMi("Zuhal") && "Kaderinde Zühal'in eli de vardır. Zühal'in yükü, insana ağır gelen ama onu olgunlaştıran yüktür; ömrün yirmi dokuz ile otuz yaşları arasında bu yükün bir kısmı omzundan alınır."
   )},
   {h:"Nazar ve Ağırlık İşaretleri", p:P(
     K.AYHAL[ayKey], U.nazar, saatY.nazar,
     `Nazara karşı ${K.ESMA_KORUMA.slice(0,2).map(n=>`Yâ ${n} (${esmaVal(n)} kere)`).join(" ve ")} okunması, ${K.UNSUR[top].yon} tarafına bakan bir pencere önünde sabah namazından sonra yapılırsa daha tesirli olur denir.`
   )},
   {h:"Kısmet Açıklığı", p:P(
     K.KISMET[kismetDerece],
     `Bu hükmün dayanağı şudur: günün yıldızı ${gunY.ad} (${gunY.sad}), saatin yıldızı ${saatY.ad} (${saatY.sad}), isminin yıldızı ${isimY.ad} (${isimY.sad}); Ay ${menzil[0]==="s"?"sa'd":menzil[0]==="n"?"nahs":"mümtezic"} bir menzilde ve ${dolunayYonu?"büyümektedir":"küçülmektedir"}.`
   )},
   {h:"Manevî Akış, Harfler ve İmtihanlar", p:P(
     `${giris()} her ismin bir akışı vardır: ilk harf kapıyı açar, son harf kapıyı kapatır, aradaki harfler de yolu döşer. Senin yolun ${ilk||"-"} ile başlayıp ${son||"-"} ile biter; ${ilk&&son&&K.UNSUR? (()=>{ const e1=Object.keys(UNSUR_HARF).find(k=>UNSUR_HARF[k].includes(ilk)), e2=Object.keys(UNSUR_HARF).find(k=>UNSUR_HARF[k].includes(son)); return e1===e2?`ikisi de ${e1.toLocaleLowerCase("tr")} tabiatlıdır, yani yolun başında neyle çıktıysan sonunda da ona varırsın`:`biri ${e1.toLocaleLowerCase("tr")}, öteki ${e2.toLocaleLowerCase("tr")} tabiatlıdır, yani ömrün bir tabiattan ötekine geçişle geçer`; })():""}.`,
     isimY.imtihan,
     `Manevî akışını açan amel, ${K.UNSUR[zayif].yon==="doğu"?"sabah erken kalkmak ve güne dua ile başlamak":K.UNSUR[zayif].yon==="batı"?"akşam vakti tefekkür etmek ve günün hesabını yapmak":K.UNSUR[zayif].yon==="kuzey"?"gece vakti, herkes uyurken kalkıp birkaç dakika dua etmek":"öğle vaktinde işi bırakıp kısa bir mola ile kendine dönmek"} olur; çünkü harflerinde en zayıf unsur ${dir(zayif)} ve onun vakti budur.`
   )}
  ]});

  /* ============ II. Karakter ve Kader ============ */
  const lv = x => x<0.2?0:x<0.34?1:2;
  const ofke = Math.max(0, Math.min(2, lv(pay("Ateş")) + (varMi("Mirrih")?1:0) - (c.sunSign[2]==="Su"?1:0)));
  const sezgi = Math.min(2, lv(pay("Su")) + ((c.moonSign[2]==="Su"||varMi("Kamer"))?1:0));
  const kin = Math.min(2, lv(pay("Toprak")+pay("Su")-0.25) + ((c.moonSign[0]==="Akreb"||c.sunSign[0]==="Akreb"||varMi("Zuhal"))?1:0));
  const merhamet = Math.min(2, lv(pay("Su")+pay("Hava")-0.15) + ((["Hût","Seretân"].includes(c.sunSign[0])||["Hût","Seretân"].includes(c.moonSign[0])||varMi("Musteri"))?1:0));
  S.push({id:"karakter", title:"Karakter ve Kader", subs:[
   {h:"Kişinin İç Yapısı", p:P(
     `Güneş doğduğun gün ${c.sunSign[0]} (${c.sunSign[1]}) burcundaydı. ${KB(sunI).karakter}`,
     `${U.ic} ${K.UNSUR[top].hilt==="safrâ"?"Safrâ":K.UNSUR[top].hilt==="dem"?"Dem":K.UNSUR[top].hilt==="balgam"?"Balgam":"Sevdâ"} ağır bastığından ${({Ateş:"seni harekete geçiren şey bir hedef, bir mücadeledir",Hava:"seni harekete geçiren şey bir fikir, bir sohbettir",Su:"seni harekete geçiren şey bir his, bir bağdır",Toprak:"seni harekete geçiren şey bir vazife, bir sorumluluktur"})[top]}.`
   )},
   {h:"Gizlediği Huyları", p:P(
     `Ay doğduğun ânda ${c.moonSign[0]} (${c.moonSign[1]}) burcundaydı. Ay kalbin aynasıdır; insanın gizlediği şeyi gösterir. ${KB(moonI).kalp}`,
     U.gizli
   )},
   {h:"Öfke, Sezgi, Kin ve Merhamet Yapısı", p:P(
     K.HUY.ofke[ofke], K.HUY.sezgi[sezgi], K.HUY.kin[kin], K.HUY.merhamet[merhamet],
     merhamet===2 && kin===2 ? "Merhametinle kinin aynı kalpte yaşar; bu en ağır terkiptir. Sevdiğine kıyamazsın, ama kırıldığında da unutamazsın." : ofke===2 && sezgi===2 ? "Öfken ile sezgin aynı anda kuvvetlidir; hissettiğin haksızlığa hemen tepki verirsin. Sezgine güven, ama ağzını sezginden bir adım geride tut." : ""
   )},
   {h:"Hayattaki Ana İmtihanı", p:P(
     K.DOKUZ[kok(c.top)],
     c.hourRuler!==c.isimYildiz && `Doğduğun saatin yıldızı ${saatY.ad} ${daDe(saatY.ad)} bu imtihana bir renk katar. ${saatY.imtihan}`
   )},
   {h:"Ruhsal Yükü ve Kader İzi", p:P(
     `Kader izin, Güneş'in burcu ile isminin burcu arasında çizilir. Güneş'in ${c.sunSign[2].toLocaleLowerCase("tr")}, isminin ise ${c.isimBurc[2].toLocaleLowerCase("tr")} tabiatlı bir burçtadır; bunlar ${GECIS[c.sunSign[2]][c.isimBurc[2]]} iki tabiattır. ${c.sunSign[2]===c.isimBurc[2] ? "Doğuşunla ismin aynı yöne çeker; kaderin dosdoğru bir yoldur, ama o yolda tek renk kalmak da senin darlığın olabilir." : K.UNSUR[c.sunSign[2]].karsit===c.isimBurc[2] ? "Doğuşunla ismin seni iki zıt yöne çeker; ömrün bu iki tabiatı barıştırmakla geçer ve barıştırdığın gün kaderin açılır." : "Doğuşunla ismin birbirine yardım eder; birinin eksiğini öteki tamamlar."}`,
     `${giris()} ${isimY.ad} yıldızının izini taşıyanın ruhsal yükü şudur: ${isimY.imtihan.split(": ")[1]||isimY.imtihan}`
   )}
  ]});

  /* ============ III. Evlilik ve Aşk ============ */
  const yedi = KB(yedinciI), yediEl = BURC[yedinciI][2], yediSahipY = Y(yedinciSahip);
  let ask = 1 + (varMi("Zuhre")?1:0) + (["Cevzâ","Sünbüle","Kavs","Hût"].includes(c.moonSign[0])||["Cevzâ","Sünbüle","Kavs","Hût"].includes(BURC[yedinciI][0])?1:0) + ((top==="Ateş"||top==="Hava")?1:0) - (top==="Toprak"?1:0);
  ask = Math.max(1, Math.min(3, ask));
  const ruhPuan = (menzil[0]==="s"?1:0) + (K.UNSUR[top].tamamlayan===yediEl||top===yediEl?1:0) + (SAD[yedinciSahip]>0?1:0) + (varMi("Zuhre")||varMi("Musteri")?1:0);
  let huzur = SAD[yedinciSahip] + (K.UNSUR[top].karsit===yediEl?-1:K.UNSUR[top].tamamlayan===yediEl||top===yediEl?1:0) + (menzil[0]==="s"?1:menzil[0]==="n"?-1:0) + (varMi("Mirrih")?-1:0);
  const huzurD = huzur<=-1?0:huzur<=1?1:2;
  const esElem = K.UNSUR[top].tamamlayan;
  const esHarfler = (()=>{ const pool=[...new Set([...ES_HARF[esElem], ...ES_HARF[yediEl]])]; const out=[]; while(out.length<3&&pool.length) out.push(pool.splice(Math.floor(R()*pool.length),1)[0]); return out; })();
  const ayrilikSebep = {Mirrih:"ani bir öfke, sert sözler ve inatlaşma",Zuhal:"soğukluk, uzun suskunluklar, maddi darlık yahut aile büyüklerinin baskısı",Utarid:"söz taşıyanlar, yanlış anlaşılmalar ve dedikodu",Kamer:"hislerin gelgiti ve ailelerin evliliğe karışması",Zuhre:"kıskançlık ve gözün başka güzelliklere kayması",Sems:"gurur ve kimin haklı olduğu kavgası",Musteri:"ölçüsüz harcama yahut inanç ve hayat görüşü farkı"}[yedinciSahip];
  let ilkYas = {Ateş:[19,23],Hava:[21,25],Su:[22,26],Toprak:[24,28]}[top].slice();
  const zuhalGec = varMi("Zuhal") || yedinciSahip==="Zuhal";
  if(zuhalGec){ ilkYas=[ilkYas[0]+4, ilkYas[1]+5]; }
  if(varMi("Zuhre")) { ilkYas=[ilkYas[0]-1, ilkYas[1]-1]; }
  S.push({id:"evlilik", title:"Evlilik ve Aşk", subs:[
   {h:"Evlilik Tâli'i", p:P(
     `Tâli'den yedinci hane izdivaç hanesidir. Senin yedinci hanen ${BURC[yedinciI][0]} (${BURC[yedinciI][1]}) burcuna, sahibi de ${yediSahipY.ad} yıldızına düşer. ${yediSahipY.ad} ${yediSahipY.sad} sayıldığından ${SAD[yedinciSahip]>0?"izdivaç hanen hayırlı bir yıldızın elindedir":SAD[yedinciSahip]<0?"izdivaç hanen ağır bir yıldızın elindedir; evlilik sana sabrı öğretecek bir mektep olur":"izdivaç hanen ne sa'd ne nahs bir yıldızın elindedir; evliliğin hâli senin ve eşinin elindedir"}.`,
     isimY.ask
   )},
   {h:"Kaç Büyük Aşk Yaşayacağı", p:P(
     ask===1 ? "Yıldızların tek bir büyük aşka işaret eder. Gönlün kolay açılmaz; ama açıldığında bir daha kapanmaz. Hayatında hevesler olabilir, ama 'aşk' diyebileceğin, ruhunu sarsan sevda bir kere gelir." : ask===2 ? "Yıldızların iki büyük aşka işaret eder. Birincisi gençliğinde gelir ve sana sevmeyi öğretir; ikincisi ise kalbinin olgunlaştığı yaşta gelir ve sana kalmayı öğretir. Çoğu kez birinci aşk bir ayrılıkla, ikincisi bir yuva ile mühürlenir." : "Yıldızların üç büyük aşka işaret eder. Gönlün hareketli bir gönüldür. Biri ateş gibi yakar, biri su gibi serinletir, biri de toprak gibi kök saldırır. Kitaplarda böyle tâli' ehline 'muhabbet ehli' denir; ama çok sevmek çok yorulmak demektir.",
     `${({Ateş:"Ateş harfleri",Hava:"Hava harfleri",Su:"Su harfleri",Toprak:"Toprak harfleri"})[top]} galip olduğundan aşkın ${({Ateş:"çabuk tutuşan ama sönmemek için hep yeni odun isteyen",Hava:"söz ve fikirle başlayan, dostluk gibi büyüyen",Su:"derin, sessiz ve kolay unutulmayan",Toprak:"yavaş kurulan ama kolay yıkılmayan"})[top]} bir aşktır.`
   )},
   {h:"Ruh Eşi ve Kadersel Eş İhtimali", p:P(
     ruhPuan>=3 ? "Kadersel eş ihtimali kavîdir. Yıldızlar kaderinde önceden yazılmış bir karşılaşmaya işaret eder; o kimseyi gördüğünde onu daha önceden tanıyormuş gibi hissedersin." : ruhPuan>=2 ? "Kadersel eş ihtimali vardır, ama yolu doğrudan değildir. Ruh eşin, önce başka bir kapıdan geçip olgunlaştıktan sonra karşına çıkar." : "Yıldızların kadersel eşten çok, emekle kurulan bir bağa işaret eder. Senin için ruh eşi bulunan değil, birlikte inşa edilen bir şeydir; zamanla ruhun ona kenetlenir.",
     `${giris()} ruh eşinin tabiatı, senin galip unsurunu tamamlayan unsurdan olur. Senin galip unsurun ${top.toLocaleLowerCase("tr")} olduğundan, sana en çok yakışan ${esElem.toLocaleLowerCase("tr")} tabiatlı bir kimsedir.`
   )},
   {h:"Eşinin Karakteri, Baskın Harfleri ve Bedenî Hâli", p:P(
     yedi.es,
     `Eşinin isminde ağır basması muhtemel harfler ${esHarfler.map(h=>`${h} (${TR_KARSILIK[h]})`).join(", ")} harfleridir. Bunlar ${esElem.toLocaleLowerCase("tr")} ve ${yediEl.toLocaleLowerCase("tr")} tabiatının harfleridir. Bu harflerden biri ismin başında yahut içinde birkaç kez geçebilir.`,
     `${K.UNSUR[esElem].sima}`
   )},
   {h:"Evliliğin Huzurlu mu Çetin mi Olacağı", p:P(
     huzurD===2 ? "Evliliğin huzur tarafına meyleder. İzdivaç hanende hayırlı yıldızlar hâkim, tabiatın ile eşinin tabiatı birbirini besler. Darlıklar olur ama yuvanı sarsmaz." : huzurD===1 ? "Evliliğin hem huzur hem imtihan taşır. Bazı yıllar bal gibi, bazı yıllar zehir gibi geçer. Ama sabredilirse imtihanlardan sonra gelen huzur, öncekinden derin olur." : "Evliliğin çetin bir yolu vardır. Yıldızlar izdivaç tarafında ağır düşmüştür. Bu, evliliğin yürümeyeceği demek değildir; ama yürümesi için iki tarafın da kendinden vazgeçmesi gerekir.",
     `${({Ateş:"Senin ateşin",Hava:"Senin rüzgârın",Su:"Senin suyun",Toprak:"Senin toprağın"})[top]} ile eşini işaret eden ${yediEl.toLocaleLowerCase("tr")} tabiatı ${GECIS[top][yediEl]} iki tabiattır.`
   )},
   {h:"Aldatma, Sadakat ve Kıskançlık Meyli", p:P(
     U.sadakat,
     c.moonSign[0]==="Akreb"||c.moonSign[0]==="Sevr" ? `Ay'ın ${c.moonSign[0]} burcunda olması kıskançlığını derinleştirir; sevdiğini kimseyle paylaşmak istemezsin.` : ["Cevzâ","Kavs","Delv"].includes(c.moonSign[0]) ? `Ay'ın ${c.moonSign[0]} burcunda olması hürriyet isteğini artırır; kıskanılmak seni boğar, ama kendin de içten içe kıskançsındır.` : "",
     varMi("Zuhre")&&varMi("Mirrih") ? "Kaderinde hem Zühre hem Mirrîh bulunur; bu, tutkulu aşkların ve kıskançlık fırtınalarının işaretidir. Gönlünü sağlam bir ahitle bağlamak sana selâmet getirir." : ""
   )},
   {h:"Ayrılık Tehlikesi ve Sebebi", p:P(
     huzurD===2 ? "Ayrılık tehlikesi zayıftır." : huzurD===1 ? "Ayrılık tehlikesi orta derecededir; bir iki kere kapıya kadar gelinir, ama çoğu kez geri dönülür." : "Ayrılık tehlikesi göz ardı edilmemelidir.",
     `Eğer bir ayrılık kapıyı çalarsa, sebebi ${ayrilikSebep} olur; çünkü izdivaç hanenin sahibi ${yediSahipY.ad} yıldızıdır. Bu kapıyı kapalı tutan şey, ${({Mirrih:"öfke anında susmak",Zuhal:"sevgiyi sözle de göstermek",Utarid:"araya söz sokanları evden uzak tutmak",Kamer:"evliliğin sırrını ailelere taşımamak",Zuhre:"gönlü bir ahitle bağlamak",Sems:"haklı olmaktansa mutlu olmayı seçmek",Musteri:"hesabı ve ölçüyü birlikte tutmak"})[yedinciSahip]} olur.`
   )},
   {h:"Evlilik Zamanına Dair Dönem Yorumları", p:P(
     `Zühre devri, yani sevginin yaşı, kadîm kitaplarda on dört ile yirmi iki arası sayılır; Şems devri ise yirmi iki ile kırk bir arasıdır. Senin harflerinin tabiatına göre evliliğe en açık ilk dönem ${ilkYas[0]} ile ${ilkYas[1]} yaşları arasıdır.`,
     zuhalGec ? "Kaderinde Zühal'in eli olduğundan evlilik gecikebilir. Zühal'in devri yirmi dokuz ile otuz yaşları arasında tamamlanır; bu yaşlar senin için bir dönüm noktasıdır ve çoğu kez kalıcı bir bağ bu devrin ardından kurulur." : `Bu dönem geçerse, Müşterî'nin on iki yıllık devri yirmi dört ve otuz altı yaşlarını da hayırlı kılar.`,
     `Evlilik için en uğurlu gün Cuma, en uğurlu saat Zühre saatidir. ${isimY.gun} günü de senin isminin yıldızının günü olduğundan hayırlı sayılır.`
   )}
  ]});

  /* ============ IV. Çocuk ve Yuva ============ */
  const bes = KB(besinciI);
  let evlat = bes.verim + 1 + (varMi("Musteri")?1:0) + (top==="Su"?1:0) - (varMi("Zuhal")?1:0) - (top==="Ateş"&&bes.verim===0?1:0);
  evlat = Math.max(1, Math.min(5, evlat));
  const evlatStr = ["","bir yahut iki","iki","iki yahut üç","üç","üç yahut dört"][evlat];
  let erkek = (bes.cins==="erkek"?1:-1) + ERKEK_YILDIZ[c.hourRuler] + ((top==="Ateş"||top==="Hava")?1:-1) + ERKEK_YILDIZ[c.isimYildiz];
  S.push({id:"cocuk", title:"Çocuk ve Yuva", subs:[
   {h:"Muhtemel Evlât Sayısı", p:P(
     `Tâli'den beşinci hane evlât hanesidir. Senin beşinci hanen ${BURC[besinciI][0]} (${BURC[besinciI][1]}) burcuna düşer. ${bes.evlat}`,
     `Bu hane, isminin yıldızı ve harflerinin tabiatı birlikte tartıldığında evlât sayısının ${evlatStr} olması ihtimali kavîdir. ${varMi("Musteri")?"Müşterî'nin kaderindeki eli evlât kısmetini genişletir. ":""}${varMi("Zuhal")?"Zühal'in kaderindeki eli evlâdı geciktirebilir; ama geç gelen evlât hayırlı olur. ":""}`
   )},
   {h:"Erkek ve Dişi Tabiatın Ağırlığı", p:P(
     erkek>=2 ? "Yıldızlarında erkek tabiat ağır basar. Kitaplarda bu hâl, ilk evlâdın yahut evlâtlarının çoğunun erkek tabiatlı olacağına delâlet eder." : erkek<=-2 ? "Yıldızlarında dişi tabiat ağır basar. Kitaplarda bu hâl, ilk evlâdın yahut evlâtlarının çoğunun kız tabiatlı olacağına delâlet eder." : "Yıldızlarında erkek ve dişi tabiat birbirine yakındır. Evlâtların arasında hem kız hem erkek bulunması ihtimali kavîdir.",
     `Beşinci hanen ${bes.cins==="erkek"?"erkek":"dişi"} burçlardandır; doğum saatinin yıldızı ${saatY.ad} ise ${ERKEK_YILDIZ[c.hourRuler]>0?"erkek tabiatlı":ERKEK_YILDIZ[c.hourRuler]<0?"dişi tabiatlı":"iki tabiata da meyleden"} bir yıldızdır.`
   )},
   {h:"Anne veya Baba Olarak Kader Rolü", p:P(
     U.ebeveyn,
     `${giris()} ${saatY.ad} saatinde doğanın evlâdına bıraktığı miras ${({Zuhal:"sabır ve sorumluluktur",Musteri:"inanç ve cömertliktir",Mirrih:"cesaret ve haysiyettir",Sems:"izzet ve özgüvendir",Zuhre:"sevgi ve zarafettir",Utarid:"ilim ve akıldır",Kamer:"şefkat ve hafızadır"})[c.hourRuler]}.`
   )},
   {h:"Hanedeki Huzur ve Bereket", p:P(
     `Tâli'den dördüncü hane yuva hanesidir; seninki ${BURC[dorduncuI][0]} (${BURC[dorduncuI][1]}) burcuna düşer. ${KB(dorduncuI).hane}`,
     dolunayYonu ? "Ay büyürken doğduğundan hanende bereket artan bir bereket olur; ev zamanla dolar." : "Ay küçülürken doğduğundan hanende bereket sade bir berekettir; az olanın kıymetini bilmek seni zengin kılar.",
     `Hanenin bereketi için evin ${K.UNSUR[top].yon} tarafını temiz ve aydınlık tutmak, ${isimY.gun} günleri bir sadaka vermek tavsiye olunur.`
   )},
   {h:"Evlât Kısmeti ve Kuvveti", p:P(
     bes.verim===2 ? "Evlât kısmetin kuvvetlidir. Evlâtların senin yüzünü güldürür ve yaşlılığında sana dayanak olur." : bes.verim===1 ? "Evlât kısmetin orta kuvvettedir. Evlâtların bağımsız ruhlu olur, kendi yollarını erken seçer." : "Evlât kısmetin sayıca az ama değerce büyüktür. Az evlât, çok emek ister; ama emeğinin meyvesi de büyük olur.",
     `Evlât kısmetini açmak için kitaplarda ${["Vehhâb","Mübdi'"].map(n=>`Yâ ${n} (${esmaVal(n)} kere)`).join(" ve ")} esmâlarının okunması tavsiye edilir.`
   )}
  ]});

  /* ============ V. İş, Kazanç ve Rızık ============ */
  const onuncu = KB(onuncuI), ikinciB = KB(ikinciI);
  const rizikEsma = {Ateş:"Fettâh",Hava:"Vehhâb",Su:"Rezzâk",Toprak:"Bâsıt"}[top];
  const birthY = +c.inp.tarih.slice(0,4);
  const simdi = new Date().getFullYear();
  const yas = simdi - birthY;
  const sonrakiMusteri = (()=>{ let a=12; while(a<=yas) a+=12; return a; })();
  const sonrakiZuhal = yas<29?29:yas<59?59:88;
  S.push({id:"is", title:"İş, Kazanç ve Rızık", subs:[
   {h:"Meslek ve Sanat Yatkınlığı", p:P(
     `Tâli'den onuncu hane mevki ve sanat hanesidir; seninki ${BURC[onuncuI][0]} (${BURC[onuncuI][1]}) burcuna düşer. ${onuncu.meslek}`,
     `İsminin yıldızı ${isimY.ad} ise şunu ekler: ${isimY.meslek}`,
     c.hourRuler!==c.isimYildiz ? `Doğum saatinin yıldızı ${saatY.ad} ${daDe(saatY.ad)} ${saatY.meslek.split(" yakışır")[0].replace(/^.*?ehline /,"")} gibi işlere kapı aralar.` : ""
   )},
   {h:"Kazanç Kapısı ve Rızkın Geldiği Yön", p:P(
     isimY.rizik,
     `Harflerinde ${top.toLocaleLowerCase("tr")} galip olduğundan rızkının yönü ${K.UNSUR[top].yon} tarafıdır. ${giris()} bir kimse rızkını kendi unsurunun yönünde ararsa kapısı daha çabuk açılır. İş yerini, masanı yahut dükkânının kapısını bu yöne bakacak şekilde düzenlemek hayırlı sayılır.`
   )},
   {h:"Para Tutma ve Harcama Tabiatı", p:P(
     `Tâli'den ikinci hane mal hanesidir; seninki ${BURC[ikinciI][0]} (${BURC[ikinciI][1]}) burcuna düşer. ${ikinciB.mal}`,
     U.para
   )},
   {h:"Ortaklık ve Ticarette Dikkat Edilecekler", p:P(
     `Ortaklık da yedinci haneden okunur. Bu hanenin ${BURC[yedinciI][0]} burcunda ve ${yediSahipY.ad} yıldızının elinde olması, ortaklarının ${({Mirrih:"atılgan ama sabırsız",Zuhal:"temkinli ama ağır",Utarid:"zeki ama değişken",Kamer:"samimi ama kararsız",Zuhre:"tatlı dilli ama keyfine düşkün",Sems:"güçlü ama hükmetmeye meyilli",Musteri:"cömert ama ölçüsüz"})[yedinciSahip]} kimseler olacağına delâlet eder.`,
     SAD[yedinciSahip]<0 ? "Bu yüzden ortaklıkta sözü değil, yazıyı esas al. Hesabı başta açık konuş; muğlak bırakılan her şey sonra kavgaya döner." : SAD[yedinciSahip]>0 ? "Ortaklık sana çoğu kez hayır getirir. Ama güvendiğin kimseyle bile hesabı açık tutmak bereketi korur." : "Ortaklıkta ortağının kim olduğu, işin ne olduğundan daha önemlidir. Huyu sana uyanla ortak ol, kârı çok olanla değil.",
     `Ticarette en uğurlu gün ${Y("Utarid").gun}, yani Utârid'in günüdür; büyük bir anlaşma için ${isimY.gun} günü ${isimY.ad} saati de senin için hayırlıdır.`
   )},
   {h:"Bolluk ve Darlık Devirleri", p:P(
     `Müşterî on iki yılda bir devrini tamamlar ve döndüğü yıllar bolluk yıllarıdır: on iki, yirmi dört, otuz altı, kırk sekiz, altmış yaşları. Senin için sıradaki Müşterî yılı ${sonrakiMusteri} yaşındır.`,
     `Zühal ise yirmi dokuz otuz yılda bir döner ve döndüğü yıllar hesaplaşma ve darlık yıllarıdır. Senin için sıradaki Zühal devri ${sonrakiZuhal} yaşı civarındadır. Bu yıllarda büyük borca girmemek, yeni bir işe acele etmemek tavsiye olunur.`,
     `İsminin yıldızı ${isimY.ad} olduğundan, onun küçük yılları olan ${isimY.yil} senin için bir ölçüdür. ${isimY.yil} yaşı ve onun katları, hayatında rızkın yön değiştirdiği dönemler olur.`
   )},
   {h:"Rızkı Bağlayan Hâller ve Açılması İçin Tavsiye", p:P(
     `Rızkını bağlayan, harflerindeki en zayıf unsurdur: ${zayif.toLocaleLowerCase("tr")}. ${({Ateş:"Cesaretsizlik ve bekleyip durmak kısmetini bağlar.",Hava:"Derdini söyleyememek ve yardım istememek kısmetini bağlar.",Su:"Gönülsüz iş yapmak ve vermekten kaçınmak kısmetini bağlar.",Toprak:"Dağınıklık ve yarım bırakılan işler kısmetini bağlar."})[zayif]}`,
     `Rızkın açılması için Yâ ${rizikEsma} (${K.ESMA[rizikEsma]}) esmâsını ebcedi kadar, yani ${esmaVal(rizikEsma)} kere okumak tavsiye olunur. Bunu ${isimY.gun} günü, güneş doğduktan sonraki ilk saatte, ${K.UNSUR[top].yon} yönüne dönerek okumak daha tesirlidir.`,
     `Ayrıca Yâ Rezzâk (${esmaVal("Rezzâk")} kere) ve Yâ Fettâh (${esmaVal("Fettâh")} kere) esmâları sabah namazından sonra okunur. Haftada bir, ${isimY.gun} günü, gizlice verilen bir sadaka rızkın kilidini açar. Uğurlu taşın ${isimY.tas}, uğurlu rengin ise ${isimY.renk} olarak bilinir.`
   )}
  ]});

  return S;
}

function metin(c, S){
  return `YILDIZNAME — ${c.inp.ad} (valide: ${c.inp.anne})\n\n` + S.map(s=>`## ${s.title}\n\n`+s.subs.map(x=>`### ${x.h}\n${x.p.join("\n\n")}`).join("\n\n")).join("\n\n");
}
return {oku, metin};
})();
