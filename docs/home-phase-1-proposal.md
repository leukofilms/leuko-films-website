# Fase 1 — Rediseño de Home de Leuko Films

Estado: propuesta de diseño preparada; pendiente de incorporar el fotograma real elegido por Leuko Films.

## Decisiones confirmadas
- Home con un fotograma cinematográfico a pantalla completa.
- Fotografía y vídeo con el mismo peso como servicios principales.
- Dirección visual minimalista, cinematográfica y editorial.
- Tipografía: Futura para titulares/identidad y Helvetica para navegación, textos y elementos funcionales. Jost queda como fallback provisional mientras no se disponga de Futura licenciada.
- La web pública actual no se modifica en esta fase: el trabajo se mantiene en una rama independiente.

## Composición propuesta

### 1. Cabecera
- Mantener el logotipo LEUKO FILMS y navegación actual.
- Cabecera transparente sobre el fotograma, con fondo oscuro sutil al desplazarse.
- Navegación visible y compacta: Portfolio, Servicios, Estudio y Contacto. El acceso a Proyectos/Stories puede integrarse dentro del portfolio para reducir ruido.
- Selector ES / CA / EN conservado.

### 2. Hero a pantalla completa
- Fotograma real 16:9 o más panorámico, con tratamiento cinematográfico y punto focal reconocible.
- Imagen cubriendo todo el viewport (100svh), sin degradados abstractos como imagen principal.
- Capa de contraste oscura muy ligera y localizada para garantizar legibilidad sin apagar la fotografía.
- Texto principal breve: “Imágenes con intención”.
- Descriptor: “Fotografía · Dirección creativa · Producción audiovisual”.
- CTA principal: “Explorar proyectos”; CTA secundario discreto: “Hablemos”.
- Evitar timecode y etiquetas de demo en la versión definitiva.
- Movimiento: entrada suave y parallax muy contenido, respetando prefers-reduced-motion.

### 3. Transición a portfolio
- Introducción editorial breve que presente fotografía y vídeo como dos disciplinas complementarias.
- Dos accesos de igual jerarquía: Fotografía y Vídeo.
- Selección visual de proyectos reales en una rejilla asimétrica, sin inventar casos ni atribuir trabajos ficticios a Leuko Films.

### 4. Servicios
- Presentación equilibrada de Fotografía y Producción audiovisual.
- Mantener las especialidades complementarias (producto/espacios, videoclips, dirección artística/contenido) como capacidades, no como cinco servicios de idéntica jerarquía.

### 5. Responsive y accesibilidad
- En móvil, conservar el fotograma como protagonista, ajustando el encuadre con object-position configurable.
- Contraste AA para textos y botones.
- Foco visible, navegación móvil accesible y respeto a prefers-reduced-motion.

## Cambios técnicos previstos
- `index.html`: simplificar navegación y rehacer el marcado del hero con imagen semántica y CTAs.
- `style.css`: sustituir los tres halos animados por un hero de imagen full-bleed; consolidar las reglas tipográficas duplicadas y definir ajustes responsive.
- `script.js`: retirar el timecode/demo del hero si deja de ser necesario; conservar selector de idioma y actualizar las cadenas ES/CA/EN.
- `sw.js`: incrementar versión de caché cuando se incorporen los cambios definitivos y el nuevo recurso.
- SEO: actualizar title y description en cuanto se cierre el mensaje comercial.

## Material pendiente para implementar
1. Fotograma real de Leuko Films para la Home, idealmente exportado en JPG o WebP de alta calidad (ancho recomendado: 2400 px o superior).
2. Confirmación de si el fotograma debe proceder de un trabajo concreto o de una imagen editorial creada expresamente.
3. Preferencia de encuadre móvil si el sujeto principal no queda centrado.

## Criterio de aceptación
La Home estará lista cuando el fotograma sea real y autorizado, ambos servicios tengan la misma jerarquía, la navegación y los CTA funcionen en ES/CA/EN y la vista móvil se haya comprobado. Ningún contenido ficticio debe presentarse como portfolio real.
