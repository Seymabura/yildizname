/* İsimlerin Arapça / Osmanlıca yazılışı.
   Ebced, ismin eski yazıdaki imlâsıyla sayılır. Sözlükte olan isimler bilinen yazılışıyla,
   olmayanlar Osmanlı Türkçesi imlâ kurallarına göre (yaklaşık) yazılır. */
window.ISIM = (function(){
"use strict";
const S = {
// --- kadın isimleri ---
"ayşe":"عائشه","aişe":"عائشه","fatma":"فاطمه","fatıma":"فاطمه","fadime":"فاطمه","emine":"امينه","hatice":"خديجه","zeynep":"زينب","elif":"الف",
"meryem":"مريم","zehra":"زهرا","hacer":"هاجر","havva":"حوا","esma":"اسما","rabia":"رابعه","sümeyye":"سميه","sümeye":"سميه","rukiye":"رقيه","rukiyye":"رقيه",
"şerife":"شريفه","hanife":"حنيفه","halime":"حليمه","saliha":"صالحه","salihe":"صالحه","semiha":"سميحه","naciye":"ناجيه","nazife":"نظيفه","nefise":"نفيسه",
"cemile":"جميله","kerime":"كريمه","hamide":"حميده","zübeyde":"زبيده","zekiye":"زكيه","zeliha":"زليخا","züleyha":"زليخا","safiye":"صفيه","sabiha":"صبيحه",
"sabriye":"صبريه","nuriye":"نوريه","nur":"نور","nurhan":"نورخان","nurcan":"نورجان","nurten":"نورتن","gülsüm":"كلثوم","ümmügülsüm":"امكلثوم","leyla":"ليلى",
"selma":"سلمى","sema":"سما","semra":"سمرا","seda":"صدا","sevda":"سودا","hüsniye":"حسنيه","hayriye":"خيريه","fahriye":"فخريه","firdevs":"فردوس","feride":"فريده",
"fikriye":"فكريه","melek":"ملك","melike":"مليكه","mediha":"مديحه","mihriban":"مهربان","münevver":"منور","nermin":"نرمين","nesrin":"نسرين","nihal":"نهال",
"nilüfer":"نيلوفر","perihan":"پريخان","raziye":"راضيه","refika":"رفيقه","reyhan":"ريحان","ruhsar":"رخسار","sadiye":"سعديه","saadet":"سعادت","safa":"صفا",
"sahra":"صحرا","selime":"سليمه","serap":"سراب","süheyla":"سهيلا","sultan":"سلطان","şükran":"شكران","şükriye":"شكريه","yasemin":"ياسمين","zerrin":"زرين",
"aliye":"عاليه","asiye":"آسيه","azize":"عزيزه","bedia":"بديعه","belkıs":"بلقيس","betül":"بتول","büşra":"بشرى","dürdane":"دردانه","ebru":"ابرو","emel":"امل",
"esra":"اسرا","feyza":"فيضا","fevziye":"فوزيه","hafize":"حافظه","halide":"خالده","hamiyet":"حميت","hanım":"خانم","hayat":"حيات","hilal":"هلال","hümeyra":"حميرا",
"ikbal":"اقبال","kader":"قدر","kadriye":"قدريه","kevser":"كوثر","kübra":"كبرى","lale":"لاله","latife":"لطيفه","macide":"ماجده","makbule":"مقبوله","medine":"مدينه",
"mukaddes":"مقدس","muazzez":"معزز","mübeccel":"مبجل","mürvet":"مروت","naime":"نعيمه","nazan":"نازان","nazlı":"نازلى","necla":"نجلا","nebahat":"نباهت",
"necmiye":"نجميه","nesibe":"نسيبه","nihan":"نهان","nimet":"نعمت","pakize":"پاكيزه","rahime":"رحيمه","rahşan":"رخشان","rana":"رعنا","remziye":"رمزيه",
"sakine":"سكينه","saniye":"ثانيه","sebahat":"صباحت","sefa":"صفا","seher":"سحر","sena":"ثنا","senem":"صنم","şadiye":"شاديه","şebnem":"شبنم","şehnaz":"شهناز",
"şermin":"شرمين","şeyda":"شيدا","şirin":"شيرين","şükufe":"شكوفه","tahire":"طاهره","tayyibe":"طيبه","tuba":"طوبى","tuğba":"طوبى","ulviye":"علويه","ümran":"عمران",
"vesile":"وسيله","vildan":"ولدان","zahide":"زاهده","zakire":"ذاكره","zarife":"ظريفه","zühal":"زحل","zümrüt":"زمرد","nisa":"نسا","nida":"ندا","hira":"حرا",
"iclal":"اجلال","irem":"ارم","kumru":"قمرى","mina":"مينا","nehir":"نهر","ravza":"روضه","rümeysa":"رميصا","rüveyda":"رويدا","sare":"ساره","sara":"ساره",
"şura":"شورى","tesnim":"تسنيم","yüsra":"يسرى","zemzem":"زمزم","zümra":"زمره","beyza":"بيضا","berra":"بره","dilara":"دلآرا","eslem":"اسلم","hilye":"حليه",
"ikra":"اقرا","lina":"لينا","merve":"مروه","mevlüde":"مولوده","muhsine":"محسنه","münire":"منيره","reyyan":"ريان","serra":"سرا","sevde":"سوده","şevval":"شوال",
"hasibe":"حسيبه","gülşen":"گلشن","gülnaz":"گلناز","gonca":"غنچه","şeyma":"شيما","şeymâ":"شيما","nazlıcan":"نازلىجان","dilber":"دلبر","dilruba":"دلربا",
"gülizar":"گلعذار","gülbahar":"گلبهار","gülfem":"گلفام","mehtap":"مهتاب","mahmure":"مخموره","mahinur":"ماهنور","mahperi":"ماهپرى","neslihan":"نسلىخان",
"nevin":"نوين","nurdan":"نوردان","rezzan":"رزان","sevgül":"سوگل","yeter":"يتر","hayrünnisa":"خيرالنسا","feyzanur":"فيضانور","elanur":"الانور","esmanur":"اسمانور",
"zehranur":"زهرانور","rabianur":"رابعهنور","ayşenur":"عائشهنور","fatmanur":"فاطمهنور","eminenur":"امينهنور","sudenur":"سودهنور","sude":"سوده","ecrin":"اجرين",
"hiranur":"حرانور","miray":"ميراى","nisanur":"نسانور","asel":"عسل","belinay":"بلينآى","ahsen":"احسن","ilknur":"ايلكنور","hümeyranur":"حميرانور",
// --- erkek isimleri ---
"muhammed":"محمد","muhammet":"محمد","mehmet":"محمد","mehmed":"محمد","ahmet":"احمد","ahmed":"احمد","mahmut":"محمود","mahmud":"محمود","mustafa":"مصطفى",
"ali":"على","hasan":"حسن","hüseyin":"حسين","ömer":"عمر","osman":"عثمان","ebubekir":"ابوبكر","abdullah":"عبدالله","abdurrahman":"عبدالرحمن",
"abdülkadir":"عبدالقادر","abdulkadir":"عبدالقادر","abdülhamit":"عبدالحميد","abdülhamid":"عبدالحميد","abdülaziz":"عبدالعزيز","abdülkerim":"عبدالكريم",
"abdülmecit":"عبدالمجيد","abdülbaki":"عبدالباقى","abdülvahap":"عبدالوهاب","abdussamet":"عبدالصمد","abdülsamet":"عبدالصمد","abdurrahim":"عبدالرحيم",
"abdülhakim":"عبدالحكيم","abdüllatif":"عبداللطيف","abdülgani":"عبدالغنى","ibrahim":"ابراهيم","ismail":"اسماعيل","ishak":"اسحاق","yakup":"يعقوب","yakub":"يعقوب",
"yusuf":"يوسف","musa":"موسى","isa":"عيسى","yunus":"يونس","eyüp":"ايوب","eyüb":"ايوب","süleyman":"سليمان","davut":"داود","davud":"داود","idris":"ادريس",
"ilyas":"الياس","yahya":"يحيى","zekeriya":"زكريا","adem":"آدم","nuh":"نوح","salih":"صالح","hud":"هود","harun":"هارون","halil":"خليل","hamza":"حمزه",
"bilal":"بلال","enes":"انس","emir":"امير","emin":"امين","mümin":"مؤمن","kerem":"كرم","kemal":"كمال","cemal":"جمال","celal":"جلال","cemil":"جميل",
"kadir":"قادر","kerim":"كريم","rahim":"رحيم","recep":"رجب","ramazan":"رمضان","şaban":"شعبان","şevket":"شوكت","şükrü":"شكرى","şakir":"شاكر","sabri":"صبرى",
"sadık":"صادق","sait":"سعيد","said":"سعيد","saffet":"صفوت","selim":"سليم","selahattin":"صلاحالدين","salahattin":"صلاحالدين","seyfettin":"سيفالدين",
"fahrettin":"فخرالدين","nurettin":"نورالدين","alaattin":"علاءالدين","bahattin":"بهاءالدين","bahaddin":"بهاءالدين","cemalettin":"جمالالدين",
"kemalettin":"كمالالدين","şemsettin":"شمسالدين","sadettin":"سعدالدين","necmettin":"نجمالدين","muhittin":"محيىالدين","burhanettin":"برهانالدين",
"hayrettin":"خيرالدين","ziyaettin":"ضياءالدين","vahdettin":"وحيدالدين","zeynel":"زينل","zeki":"ذكى","ziya":"ضيا","tahir":"طاهر","talat":"طلعت","tarık":"طارق",
"taha":"طه","tayyip":"طيب","tevfik":"توفيق","ümit":"اميد","vahit":"واحد","veli":"ولى","vehbi":"وهبى","yasin":"ياسين","zafer":"ظفر","zahit":"زاهد",
"zübeyir":"زبير","abbas":"عباس","adil":"عادل","adnan":"عدنان","akif":"عاكف","ammar":"عمار","arif":"عارف","asım":"عاصم","atıf":"عاطف","aziz":"عزيز",
"bekir":"بكر","burak":"براق","bünyamin":"بنيامين","cafer":"جعفر","cahit":"جاهد","cavit":"جاويد","cihan":"جهان","cüneyt":"جنيد","ekrem":"اكرم","emrullah":"امرالله",
"enver":"انور","esat":"اسعد","eşref":"اشرف","ethem":"ادهم","faik":"فائق","fahri":"فخرى","faruk":"فاروق","fatih":"فاتح","ferhat":"فرهاد","ferit":"فريد",
"fethi":"فتحى","fevzi":"فوزى","feyzullah":"فيضالله","fikri":"فكرى","fuat":"فؤاد","furkan":"فرقان","gazi":"غازى","habib":"حبيب","habip":"حبيب","hakan":"خاقان",
"hakkı":"حقى","halit":"خالد","halid":"خالد","hamdi":"حمدى","hamit":"حامد","hamid":"حامد","hanefi":"حنفى","hayri":"خيرى","haydar":"حيدر","hikmet":"حكمت",
"hilmi":"حلمى","hulusi":"خلوصى","hüsamettin":"حسامالدين","hüsnü":"حسنى","ihsan":"احسان","ilhan":"ايلخان","ilhami":"الهامى","irfan":"عرفان","ismet":"عصمت",
"izzet":"عزت","kamil":"كامل","kasım":"قاسم","kazım":"كاظم","kenan":"كنعان","lütfi":"لطفى","lütfü":"لطفى","mahir":"ماهر","mazhar":"مظهر","mecit":"مجيد",
"mehdi":"مهدى","melih":"مليح","memduh":"ممدوح","mesut":"مسعود","metin":"متين","mithat":"مدحت","muammer":"معمر","muhsin":"محسن","murat":"مراد","murad":"مراد",
"muzaffer":"مظفر","mücahit":"مجاهد","mücahid":"مجاهد","münir":"منير","nabi":"نابى","naci":"ناجى","nadir":"نادر","nail":"نائل","naim":"نعيم","nazım":"ناظم",
"necati":"نجاتى","necip":"نجيب","nedim":"نديم","nihat":"نهاد","nizam":"نظام","numan":"نعمان","nuri":"نورى","nusret":"نصرت","orhan":"اورخان","rafet":"رأفت",
"ragıp":"راغب","rasim":"راسم","raşit":"راشد","rauf":"رئوف","refik":"رفيق","reşat":"رشاد","reşit":"رشيد","rıdvan":"رضوان","rıza":"رضا","rifat":"رفعت",
"rüştü":"رشدى","sabit":"ثابت","sadi":"سعدى","sami":"سامى","sedat":"سداد","selçuk":"سلجوق","semih":"سميح","server":"سرور","sezai":"سزائى","sıtkı":"صدقى",
"sinan":"سنان","suat":"سعاد","şahin":"شاهين","şamil":"شامل","şefik":"شفيق","şemsi":"شمسى","şerif":"شريف","şinasi":"شناسى","tahsin":"تحسين",
"ubeydullah":"عبيدالله","vasfi":"وصفى","vecdi":"وجدى","yasir":"ياسر","yekta":"يكتا","zahir":"ظاهر","berat":"برات","eymen":"ايمن","ensar":"انصار",
"miraç":"معراج","mirza":"ميرزا","talha":"طلحه","zeyd":"زيد","zeyit":"زيد","ertuğrul":"ارطغرل","alparslan":"الپارسلان","cihangir":"جهانگير","aslan":"ارسلان",
"arslan":"ارسلان","doğan":"طوغان","tuğrul":"طغرل","timur":"تيمور","emirhan":"اميرخان","ömerfaruk":"عمرفاروق","yahyakemal":"يحيىكمال","kudret":"قدرت",
"nevzat":"نوزاد","naşit":"ناشد","nesim":"نسيم","necdet":"نجدت","nejat":"نجات","necat":"نجات","oktay":"اوقتاى","rahmi":"رحمى","resul":"رسول","rasul":"رسول",
"sabahattin":"صباحالدين","sırrı":"سرى","sezgin":"سزگين","şeref":"شرف","şevki":"شوقى","tacettin":"تاجالدين","tamer":"تامر","tufan":"طوفان","vedat":"وداد",
"yavuz":"ياووز","yılmaz":"يلماز","yaşar":"ياشار","yiğit":"ييگيت","mert":"مرد","emre":"امره","erkan":"اركان","erhan":"ارخان","orhun":"اورخون","oğuz":"اوغوز",
"hüdayi":"هدائى","kaan":"قاغان","abdulsamed":"عبدالصمد","abdulhamit":"عبدالحميد","abdulaziz":"عبدالعزيز","abdulkerim":"عبدالكريم","abdulbaki":"عبدالباقى"
};
const BACK = "aıouâû", FRONT = "eiöüî", VOW = BACK + FRONT;
// komşu ünlüye göre kalın mı ince mi
function kalin(w, i){
  for(let j=i+1;j<w.length;j++){ if(VOW.includes(w[j])) return BACK.includes(w[j]); }
  for(let j=i-1;j>=0;j--){ if(VOW.includes(w[j])) return BACK.includes(w[j]); }
  return false;
}
// Osmanlı Türkçesi imlâsına göre yaklaşık yazılış
function kural(w){
  let out = "";
  for(let i=0;i<w.length;i++){
    const ch = w[i], ilk = i===0, son = i===w.length-1;
    if(i>0 && ch===w[i-1] && !VOW.includes(ch)) continue; // şedde
    switch(ch){
      case "a": case "â": out += "ا"; break;
      case "e": out += ilk ? "ا" : son ? "ه" : ""; break;
      case "ı": out += ilk ? "ا" : son ? "ى" : ""; break;
      case "i": case "î": out += ilk ? "اي" : "ي"; break;
      case "o": case "ö": case "u": case "ü": case "û": out += ilk ? "او" : "و"; break;
      case "k": out += kalin(w,i) ? "ق" : "ك"; break;
      case "g": out += kalin(w,i) ? "غ" : "گ"; break;
      case "ğ": out += kalin(w,i) ? "غ" : "گ"; break;
      case "t": out += kalin(w,i) ? "ط" : "ت"; break;
      case "s": out += kalin(w,i) ? "ص" : "س"; break;
      default: out += ({b:"ب",c:"ج","ç":"چ",d:"د",f:"ف",h:"ه",j:"ژ",l:"ل",m:"م",n:"ن",p:"پ",r:"ر","ş":"ش",v:"و",y:"ي",z:"ز",q:"ق",w:"و",x:"كس"})[ch] || "";
    }
  }
  return out;
}
// ad -> {ar, kaynak:"sözlük"|"kural"}
function yaz(ad){
  const kel = ad.toLocaleLowerCase("tr").normalize("NFC").replace(/[^a-zçğıöşüâîû\s-]/g,"").split(/[\s-]+/).filter(Boolean);
  if(!kel.length) return {ar:"", kaynak:"kural", kelimeler:[]};
  const birlesik = kel.join("");
  if(kel.length>1 && S[birlesik]) return {ar:S[birlesik], kaynak:"sözlük", kelimeler:[{tr:kel.join(" "),ar:S[birlesik],k:"sözlük"}]};
  const parca = kel.map(k=> S[k] ? {tr:k,ar:S[k],k:"sözlük"} : {tr:k,ar:kural(k),k:"kural"});
  return {ar:parca.map(p=>p.ar).join(" "), kaynak:parca.every(p=>p.k==="sözlük")?"sözlük":parca.some(p=>p.k==="sözlük")?"karma":"kural", kelimeler:parca};
}
return {yaz, kural, SOZLUK:S};
})();
