# Apdaly López — Offroad Racing

Landing page editorial para presentar la trayectoria, los logros, la galería, las carreras y las oportunidades de patrocinio de Apdaly López.

## Stack

- HTML5
- CSS3
- JavaScript Vanilla
- Assets locales: PNG y SVG

## Uso rápido

Desde la raíz del proyecto:

```bash
python3 -m http.server 8080
```

Abrí [http://localhost:8080](http://localhost:8080).

También podés abrir `index.html` directamente, aunque el servidor local es la opción recomendada para validar rutas y comportamiento del lightbox.

## Estructura

| Ruta | Propósito |
|---|---|
| `index.html` | Estructura y copy de la landing |
| `css/style.css` | Sistema visual, responsive y composición editorial |
| `js/main.js` | Menú móvil, reveals, navegación activa, lightbox y formulario demo |
| `assets/images/` | Imágenes principales y de contenido |
| `assets/sponsors/` | Logos SVG de patrocinadores demo |
| `assets/reference/` | Mockup vertical aprobado, fuente visual |
| `DESIGN.md` | Reglas de composición y dirección visual |
| `COPY.md` | Copy aprobado por sección |

## Imágenes principales

- `assets/images/hero.png` — hero full-bleed.
- `assets/images/huella.png` — sección “Pasión que deja huella”.
- `assets/images/ganadores.png` — sección “Logro reciente”.
- `assets/reference/apdaly-approved-vertical-concept.png` — referencia visual aprobada.

Los logos de `assets/sponsors/` son material demo y deben reemplazarse por marcas autorizadas antes de publicar.

## Estado del prototipo

- El formulario es front-end y muestra un mensaje de demostración.
- El calendario y los resultados son contenido editable de ejemplo.
- Las imágenes y marcas deben validarse y reemplazarse por material oficial para producción.
- La composición debe compararse contra el mockup antes de darla por finalizada.
- Incluye una pantalla de carga con marca A/llanta y animaciones de entrada, deriva del hero, hover de sponsors y cards de carreras.
- La página todavía conserva referencias a imágenes secundarias antiguas para galería, carreras y CTA; si esos archivos no se restauran, esas áreas necesitarán nuevos assets antes de producción.
