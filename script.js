const video= document.querySelector('.gal-video');
const videoBtn= document.querySelector('.fas');
 
console.log('hello');
 function playPause(){
if(video.paused){

         video.play();
         videoBtn.classList.remove('fa-play-circle');
         videoBtn.classList.add('fa-pause-circle')
     }
     else{
         video.pause();
         videoBtn.classList.remove('fa-pause-circle')
         videoBtn.classList.add('fa-play-circle')
         
     }
 }


//  *Language :
const ar=document.querySelector(".ar")
const fr=document.querySelector(".fr")
const dataReload = document.querySelectorAll("[data-reload]");

function refresh(){

    window.onhashchange = function() {
        window.location.reload(true)
    
    }

}


   ar.addEventListener('click', refresh);
   fr.addEventListener('click', refresh)

 



const language ={
fr:{
propos:"A PROPOS",
gallerie:"GALLERIE",
services :"nos services",
services1 :"nos services",
réserver:"réserver",
contact:"contact",
souvenirs:"Vos souvenirs: Toujours avec vous",
prof:"professionnellement artisitique",
photoprof:"Photographie professionnelle",
fête:"Fêtes et Evenements",
chaine:"Création de chaine Youtube",
vente: "Vente / Achat matériel",
nosservices :"nos services",
evenements:"Evenements",
mariage:"Mariage",
annif:"Anniversaire",
ft:"Fêtes",
evnt:"Evenement special",
conférence:"Conférence",
rsrv:"réserver",
rsrv2:"réserver",
rsrv3:"réserver",
shoot:"Shooting",
perso:"Portrait",
famille:"Famille",
sorties:"Sorties",
design:"Design",
art:"Art",
media:"media",
création:"Cration de contenu Media",
album:"Album Media",
mark:"Marketing",
insta:"Photos Instagram",
vid:"Youtube vidéo",
infos:"Plus d'infos",
contact2: " contacter Nous :",
contact3: " contacter Nous :",
message:"N'hesitez pas! &ndash; Nous somme disponible 24/7",


},

ar:{
propos:"تعريف",
gallerie:"معرض",
services :"خدماتنا",
services1 :"خدماتنا",
réserver:"حجز",
contact: "اتصل الان",
souvenirs:"ذكرياتك : دائما معك",
prof:"فن و احتراف",
photoprof:"صور احترافية",
fête:"حفلات و مناسبات",
chaine:"انشاء  قناة يوتيوب",
vente: "بيع و شراء أجهزة التصوير",
nosservices :"خدماتنا",
evenements:" مناسبات",
mariage:"أعراس",
annif:"أعياد الميلاد",
ft:"حفلات",
evnt:"مناسبات خاصة",
conférence:"مؤتمرات",
rsrv:"حجز",
rsrv2:"حجز",
rsrv3:"حجز",
shoot:"صور خاصة",
perso:"بورتري",
famille:"صور عائلية",
sorties:"خرجات",
design:"تصميم",
art:"فن",
media:"وسائل التواصل",
création:"صناعة المحتوى",
album:"ألبوم ميديا",
mark:"تسويق",
insta:"صور انستغرام",
vid:"فيديو يوتيوب",
infos:"معلومات أكثر",
contact2: " : اتصل الان ",
contact3: "اتصل الان",
message:"لا تتردد في الاتصال بنا !  خدماتنا متوفرة 24/7.",
whatsap:"اتصال واتساب",
messenger:"اتصال مسنجر"

}
}

// Auto detect
const items =document.body.querySelectorAll("*");




if(window.location.hash){
    if(window.location.hash ==="#ar"){

        propos.textContent=language.ar.propos
        gallerie.textContent=language.ar.gallerie
        services.textContent=language.ar.services
        services1.textContent=language.ar.services1
        réserver.textContent=language.ar.réserver
        contact.textContent=language.ar.contact
        souvenirs.textContent=language.ar.souvenirs
        prof.textContent=language.ar.prof
        photoprof.textContent=language.ar.photoprof
        fête.textContent=language.ar.fête
        chaine.textContent=language.ar.chaine
        vente.textContent=language.ar.vente
        nosservices.textContent=language.ar.nosservices
       evenements.textContent=language.ar.evenements
       mariage.textContent=language.ar.mariage
       annif.textContent=language.ar.annif
       ft.textContent=language.ar.ft
       evnt.textContent=language.ar.evnt
       conférence.textContent=language.ar.conférence
       rsrv.textContent=language.ar.rsrv
       rsrv2.textContent=language.ar.rsrv2
       rsrv3.textContent=language.ar.rsrv3
       shoot.textContent=language.ar.shoot
       perso.textContent=language.ar.perso
       famille.textContent=language.ar.famille
       sorties.textContent=language.ar.sorties
       design.textContent=language.ar.design
       art.textContent=language.ar.art
       media.textContent=language.ar.media
       création.textContent=language.ar.création
       album.textContent=language.ar.album
       mark.textContent=language.ar.mark
       insta.textContent=language.ar.insta
       vid.textContent=language.ar.vid
       infos.textContent=language.ar.infos
       contact2.textContent=language.ar.contact2
       contact3.textContent=language.ar.contact3
       message.textContent=language.ar.message


      
    
        for(let i=0; i<=items.length;i++){

                items[i].classList.add("letter__spacing")
           
        }
   

    }
    }else{
        propos.textContent=language.fr.propos
        gallerie.textContent=language.fr.gallerie
        services.textContent=language.fr.services
        services1.textContent=language.fr.services1
        réserver.textContent=language.fr.réserver
        contact.textContent=language.fr.contact
        souvenirs.textContent=language.fr.souvenirs
        prof.textContent=language.fr.prof
        photoprof.textContent=language.fr.photoprof
        fête.textContent=language.fr.fête
        chaine.textContent=language.fr.chaine
        vente.textContent=language.fr.vente
        nosservices.textContent=language.fr.nosservices
        evenements.textContent=language.fr.evenements
        mariage.textContent=language.fr.mariage
        annif.textContent=language.fr.annif
        ft.textContent=language.fr.ft
        evnt.textContent=language.fr.evnt
        conférence.textContent=language.fr.conférence
        rsrv.textContent=language.fr.rsrv
        rsrv2.textContent=language.fr.rsrv2
        rsrv3.textContent=language.fr.rsrv3
        shoot.textContent=language.fr.shoot
        perso.textContent=language.fr.perso
        famille.textContent=language.fr.famille
       sorties.textContent=language.fr.sorties
       design.textContent=language.fr.design
       art.textContent=language.fr.art
       media.textContent=language.fr.media
       création.textContent=language.fr.création
       album.textContent=language.fr.album
       mark.textContent=language.fr.mark
       insta.textContent=language.fr.insta
       video.textContent=language.fr.video
       contact2.textContent=language.fr.contact2
       contact3.textContent=language.fr.contact3
       message.textContent=language.fr.message
      
        for(let i=0; i<=items.length;i++){
            items[i].classList.remove("letter__spacing")
        }
       
    }
  









//    

