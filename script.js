/* LEUKO FILMS beta — lógica. Para añadir idiomas o textos, edita el objeto T. Proyectos: array P. */
const T={
es:{nav_work:"Work",nav_stories:"Proyectos",nav_services:"Servicios",nav_about:"Estudio",nav_contact:"Contacto",
hero_eye:"Estudio de fotografía y producción audiovisual",hero_title:"Imágenes con intención",hero_cta:"Explorar proyectos",hero_contact:"Hablemos",
demo_short:"Material provisional",work_title:"Dos miradas, una misma intención.",f_all:"Todo",f_photo:"Photography",f_film:"Film",
stories_title:"Proyectos destacados",demo_note:"Contenido conceptual de demostración. Estos proyectos son ficticios y no son trabajos reales de Leuko Films.",
serv_title:"Lo que hacemos",s1t:"Fotografía comercial",s1d:"Campañas e imagen de marca con criterio editorial.",
s2t:"Producto y espacios",s2d:"Objetos y arquitectura tratados con luz y precisión.",s3t:"Producción audiovisual",s3d:"De la idea a la entrega: guion, rodaje y postproducción.",
s4t:"Videoclips y proyectos creativos",s4d:"Piezas con riesgo, ritmo y personalidad propia.",s5t:"Dirección artística y contenido",s5d:"Una voz visual coherente para marcas que quieren destacar.",
about_title:"Leuko Films",about_p1:"Somos un estudio creativo que entiende la imagen como decisión: cada encuadre, cada luz y cada corte responde a una intención.",
about_p2:"Combinamos oficio cinematográfico, sensibilidad editorial y ganas de experimentar para crear piezas que funcionen para marcas y para personas.",about_q:"Mirar con intención es elegir qué no se ve.",
contact_title:"Hablemos de tu próximo proyecto.",contact_p:"Cuéntanos qué tienes en mente. (Formulario de demostración.)",f_name:"Nombre",f_mail:"Email",f_type:"Tipo de proyecto",f_msg:"Mensaje",f_send:"Enviar",
f_ok:"Gracias. Esto es una demo: el mensaje no se ha enviado.",f_err:"Completa nombre y un email válido.",beta:"Beta con contenido ficticio",up:"Volver arriba ↑",
disc_photo:"Fotografía",disc_film:"Film",ctx:"Contexto",role:"Disciplina",
p1t:"Materia & Origen",p1d:"Serie fotográfica sobre texturas y materiales en bruto.",p1c:"Proyecto conceptual: una exploración de la luz rasante sobre piedra, madera y metal.",
p2t:"El peso de la luz",p2d:"Corto documental sobre la luz en un taller artesano.",p2c:"Proyecto conceptual: pieza de 6 minutos rodada en luz natural.",
p3t:"Entre líneas",p3d:"Editorial fotográfico sobre arquitectura y sombra.",p3c:"Proyecto conceptual: geometría urbana y ritmo visual en blanco y negro.",
p4t:"Quiet Forms",p4d:"Videoclip experimental de movimiento lento.",p4c:"Proyecto conceptual: cuerpo, tela y silencio en un único plano secuencia.",view:"Ver proyecto"},
ca:{nav_work:"Work",nav_stories:"Projectes",nav_services:"Serveis",nav_about:"Estudi",nav_contact:"Contacte",
hero_eye:"Estudi de fotografia i producció audiovisual",hero_title:"Imatges amb intenció",hero_cta:"Explorar projectes",hero_contact:"Parlem",
demo_short:"Material provisional",work_title:"Dues mirades, una mateixa intenció.",f_all:"Tot",f_photo:"Photography",f_film:"Film",
stories_title:"Projectes destacats",demo_note:"Contingut conceptual de demostració. Aquests projectes són ficticis i no són treballs reals de Leuko Films.",
serv_title:"El que fem",s1t:"Fotografia comercial",s1d:"Campanyes i imatge de marca amb criteri editorial.",
s2t:"Producte i espais",s2d:"Objectes i arquitectura tractats amb llum i precisió.",s3t:"Producció audiovisual",s3d:"De la idea al lliurament: guió, rodatge i postproducció.",
s4t:"Videoclips i projectes creatius",s4d:"Peces amb risc, ritme i personalitat pròpia.",s5t:"Direcció artística i contingut",s5d:"Una veu visual coherent per a marques que volen destacar.",
about_title:"Leuko Films",about_p1:"Som un estudi creatiu que entén la imatge com una decisió: cada enquadrament, cada llum i cada tall respon a una intenció.",
about_p2:"Combinem ofici cinematogràfic, sensibilitat editorial i ganes d'experimentar per crear peces que funcionin per a marques i per a persones.",about_q:"Mirar amb intenció és triar què no es veu.",
contact_title:"Parlem del teu proper projecte.",contact_p:"Explica'ns què tens al cap. (Formulari de demostració.)",f_name:"Nom",f_mail:"Email",f_type:"Tipus de projecte",f_msg:"Missatge",f_send:"Enviar",
f_ok:"Gràcies. Això és una demo: el missatge no s'ha enviat.",f_err:"Omple el nom i un email vàlid.",beta:"Beta amb contingut fictici",up:"Tornar amunt ↑",
disc_photo:"Fotografia",disc_film:"Film",ctx:"Context",role:"Disciplina",
p1t:"Matèria & Origen",p1d:"Sèrie fotogràfica sobre textures i materials en brut.",p1c:"Projecte conceptual: una exploració de la llum rasant sobre pedra, fusta i metall.",
p2t:"El pes de la llum",p2d:"Curt documental sobre la llum en un taller artesà.",p2c:"Projecte conceptual: peça de 6 minuts rodada amb llum natural.",
p3t:"Entre línies",p3d:"Editorial fotogràfic sobre arquitectura i ombra.",p3c:"Projecte conceptual: geometria urbana i ritme visual en blanc i negre.",
p4t:"Quiet Forms",p4d:"Videoclip experimental de moviment lent.",p4c:"Projecte conceptual: cos, tela i silenci en un únic pla seqüència.",view:"Veure projecte"},
en:{nav_work:"Work",nav_stories:"Stories",nav_services:"Services",nav_about:"Studio",nav_contact:"Contact",
hero_eye:"Photography and audiovisual production studio",hero_title:"Images with intent",hero_cta:"Explore projects",hero_contact:"Let’s talk",
demo_short:"Placeholder footage",work_title:"Two ways of seeing, one intention.",f_all:"All",f_photo:"Photography",f_film:"Film",
stories_title:"Project stories",demo_note:"Conceptual demo content. These projects are fictional and are not real Leuko Films work.",
serv_title:"What we do",s1t:"Commercial photography",s1d:"Campaigns and brand imagery with an editorial eye.",
s2t:"Product and spaces",s2d:"Objects and architecture shaped by light and precision.",s3t:"Audiovisual production",s3d:"From idea to delivery: script, shoot and post.",
s4t:"Music videos and creative projects",s4d:"Pieces with risk, rhythm and a personality of their own.",s5t:"Art direction and brand content",s5d:"A coherent visual voice for brands that want to stand out.",
about_title:"Leuko Films",about_p1:"We are a creative studio that treats the image as a decision: every frame, every light and every cut answers to an intention.",
about_p2:"We blend cinematic craft, editorial sensitivity and a taste for experiment to make work that serves brands and people alike.",about_q:"To look with intent is to choose what stays unseen.",
contact_title:"Let's talk about your next project.",contact_p:"Tell us what you have in mind. (Demo form.)",f_name:"Name",f_mail:"Email",f_type:"Project type",f_msg:"Message",f_send:"Send",
f_ok:"Thanks. This is a demo: your message was not sent.",f_err:"Please enter a name and a valid email.",beta:"Beta with fictional content",up:"Back to top ↑",
disc_photo:"Photography",disc_film:"Film",ctx:"Context",role:"Discipline",
p1t:"Materia & Origen",p1d:"Photo series on raw textures and materials.",p1c:"Conceptual project: raking light across stone, wood and metal.",
p2t:"El peso de la luz",p2d:"Short documentary on light inside a craft workshop.",p2c:"Conceptual project: a 6-minute piece shot in natural light.",
p3t:"Entre líneas",p3d:"Photo editorial on architecture and shadow.",p3c:"Conceptual project: urban geometry and visual rhythm in black and white.",
p4t:"Quiet Forms",p4d:"Experimental slow-motion music video.",p4c:"Conceptual project: body, fabric and silence in a single long take.",view:"View project"}};
// Proyectos: d = disciplina (photo|film), g = clase de fotograma provisional
const P=[{id:1,d:"film",g:"g1"},{id:2,d:"film",g:"g2"},{id:3,d:"film",g:"g3"},{id:4,d:"photo",g:"g4"}];
for(const [code,strings] of Object.entries({"es":{"nav_work":"Portfolio","nav_stories":"Proyectos","work_title":"Una mirada. Distintas formas de contar.","work_intro":"Fotografía y vídeo con la misma atención a la luz, el detalle y la intención.","f_photo":"Fotografía","f_film":"Vídeo","stories_title":"Proyectos en desarrollo","portfolio_note":"Primera selección editorial. Los trabajos nombrados son reales; faltan imágenes y fichas completas. Verba Dignitatis se utiliza de forma provisional en portada.","about_art":"Imagen de estudio pendiente","contact_p":"¿Tienes una idea en mente? Escríbenos directamente.","contact_invite":"Fotografía, vídeo o un proyecto creativo: cuéntanoslo.","contact_button":"Enviar un correo","beta":"Primera versión · Portfolio en desarrollo","p1t":"Verba Dignitatis","p1d":"Proyecto audiovisual · Fotograma provisional","p1c":"Material y ficha del proyecto pendientes.","p2t":"Art Efímer","p2d":"Proyecto audiovisual · Material por incorporar","p2c":"Ficha editorial pendiente.","p3t":"Anda dame un beso","p3d":"Proyecto audiovisual · Material por incorporar","p3c":"Ficha editorial pendiente.","p4t":"Selección fotográfica","p4d":"Galería fotográfica pendiente de selección","p4c":"Se incorporarán trabajos fotográficos reales."},"ca":{"nav_work":"Portfolio","nav_stories":"Projectes","work_title":"Una mirada. Diferents maneres d'explicar.","work_intro":"Fotografia i vídeo amb la mateixa atenció a la llum, el detall i la intenció.","f_photo":"Fotografia","f_film":"Vídeo","stories_title":"Projectes en desenvolupament","portfolio_note":"Primera selecció editorial. Els treballs esmentats són reals; falten imatges i fitxes completes. Verba Dignitatis s'utilitza provisionalment a la portada.","about_art":"Imatge de l'estudi pendent","contact_p":"Tens una idea al cap? Escriu-nos directament.","contact_invite":"Fotografia, vídeo o un projecte creatiu: explica'ns-el.","contact_button":"Enviar un correu","beta":"Primera versió · Portfolio en desenvolupament","p1t":"Verba Dignitatis","p1d":"Projecte audiovisual · Fotograma provisional","p1c":"Material i fitxa del projecte pendents.","p2t":"Art Efímer","p2d":"Projecte audiovisual · Material per incorporar","p2c":"Fitxa editorial pendent.","p3t":"Anda dame un beso","p3d":"Projecte audiovisual · Material per incorporar","p3c":"Fitxa editorial pendent.","p4t":"Selecció fotogràfica","p4d":"Galeria fotogràfica pendent de selecció","p4c":"S'incorporaran treballs fotogràfics reals."},"en":{"nav_work":"Portfolio","nav_stories":"Projects","work_title":"One vision. Different ways to tell a story.","work_intro":"Photography and film with equal attention to light, detail and intent.","f_photo":"Photography","f_film":"Film","stories_title":"Projects in progress","portfolio_note":"Initial editorial selection. Named projects are real; full imagery and project information are pending. Verba Dignitatis is used provisionally on the cover.","about_art":"Studio image pending","contact_p":"Have something in mind? Email us directly.","contact_invite":"Photography, film or a creative project: we'd love to hear about it.","contact_button":"Send an email","beta":"First version · Portfolio in progress","p1t":"Verba Dignitatis","p1d":"Film project · Temporary still","p1c":"Project imagery and description pending.","p2t":"Art Efímer","p2d":"Film project · Assets pending","p2c":"Project details pending.","p3t":"Anda dame un beso","p3d":"Film project · Assets pending","p3c":"Project details pending.","p4t":"Photography selection","p4d":"Photo gallery awaiting curation","p4c":"Real photographic projects will be added."}}))Object.assign(T[code],strings);
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
let lang="es",cur=null;
try{lang=localStorage.getItem("lk")||(["ca","en"].includes(navigator.language.slice(0,2))?navigator.language.slice(0,2):"es")}catch(e){}
const t=k=>T[lang][k]||T.es[k]||k;

function build(){ // tarjetas y lista de proyectos
  $("#cards").innerHTML=P.map(p=>`<article class="card" data-d="${p.d}"><div class="ph ${p.id===1?"project-verba":p.g}"></div><small data-i18n="disc_${p.d}"></small><h3 data-i18n="p${p.id}t"></h3><p class="project-description" data-i18n="p${p.id}d"></p></article>`).join("");
  $("#stories-list").innerHTML=P.map(p=>`<div class="story"><b style="color:var(--cu);font-weight:400">0${p.id}</b><h3 data-i18n="p${p.id}t"></h3><span data-i18n="p${p.id}d"></span></div>`).join("");

}
function apply(){
  document.documentElement.lang=lang;
  $$("[data-i18n]").forEach(e=>e.textContent=t(e.dataset.i18n));
  $$("[data-lang]").forEach(b=>b.classList.toggle("on",b.dataset.lang===lang));
  document.title="Leuko Films — "+t("hero_title");

}
build();apply();
$$("[data-lang]").forEach(b=>b.onclick=()=>{lang=b.dataset.lang;try{localStorage.setItem("lk",lang)}catch(e){}apply()});

document.addEventListener("keydown",e=>{if(e.key==="Escape")menu(false)});
// Filtro Photography / Film
$$(".tabs button").forEach(b=>b.onclick=()=>{$$(".tabs button").forEach(x=>x.classList.toggle("on",x===b));
  $$(".card").forEach(c=>c.classList.toggle("hide",b.dataset.f!=="all"&&c.dataset.d!==b.dataset.f))});
// Menú móvil
const menu=o=>{$("#nav").classList.toggle("open",o);$("#burger").setAttribute("aria-expanded",o)};
$("#burger").onclick=()=>menu(!$("#nav").classList.contains("open"));
$$("#nav a").forEach(a=>a.onclick=()=>menu(false));
// Aparición suave al hacer scroll
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.12});
$$(".rv").forEach(e=>io.observe(e));
