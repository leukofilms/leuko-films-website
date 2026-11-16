LEUKO FILMS — BETA NAVEGABLE (contenido ficticio)
ABRIR: doble clic en index.html (funciona sin servidor ni instalación).
ARCHIVOS: index.html (estructura) · style.css (diseño; colores y fuentes en :root) · script.js (idiomas, proyectos, menú, fichas, formulario demo).
MODIFICAR:
- Textos/idiomas: objeto T en script.js (es, ca, en).
- Proyectos: array P en script.js y claves p1t, p1d, p1c... en T.
- Imágenes: los fotogramas son degradados provisionales (clases .g1-.g4). Sustituir por <img> o background-image reales en assets/.
- Vídeo del hero: añadir <video autoplay muted loop playsinline> dentro de .hero-bg.
- El formulario es solo visual: no envía datos.
ADOBE PORTFOLIO: estructura pensada para replicarse con módulos de página, rejilla, texto y galería; las animaciones y el selector de idioma deberán adaptarse (Portfolio no admite JS propio).

--- VARIANTE FUTURA + HELVETICA ---
Futura (licenciada) no puede incluirse en el proyecto: se usa si el sistema la tiene (macOS/iOS) y, si no, Jost (Google Fonts, gratuita) como alternativa provisional.
Helvetica se usa desde el sistema (Helvetica Neue / Helvetica / Arial). Para usar Futura original en Portfolio, Adobe Fonts ofrece Futura PT.

--- VERSIÓN APP ANDROID (PWA) ---
1. Descomprime el ZIP y sube la carpeta a un alojamiento con HTTPS (p. ej. app.netlify.com/drop: arrastra la carpeta, gratis y sin cuenta).
2. Abre la dirección que te dé en Chrome para Android > menú (tres puntos) > "Instalar aplicación" / "Añadir a pantalla de inicio".
3. Se abre a pantalla completa y, tras la primera visita, también sin conexión.
No funciona instalándola desde el archivo local (doble clic): el modo app exige HTTPS.
Opcional: PWABuilder (pwabuilder.com) puede generar un APK a partir de la dirección publicada.
