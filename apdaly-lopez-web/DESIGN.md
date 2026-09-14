# Apdaly López — Design system V3

## Propósito

La landing debe sentirse como un póster editorial de offroad convertido en una experiencia web: negro dominante, rojo como acento, fotografía integrada y tipografía de alto impacto.

## Fuente de verdad

Usar `assets/reference/apdaly-approved-vertical-concept.png` como referencia visual principal. Comparar cada sección contra el mockup antes de considerarla terminada.

## Composición por sección

| Sección | Regla visual |
|---|---|
| Hero | Banda full-bleed con copy a la izquierda, vehículo protagonista a la derecha, anotaciones y textura/grunge como apoyo. |
| Sponsors | Franja negra continua inmediatamente debajo del hero; etiqueta y logos SVG demo en una sola línea visual, sin cards. |
| Pasión que deja huella | Banda editorial split: copy sobre negro y `huella.png` integrada al lado derecho, sin card ni marco. |
| Logro reciente | Banda cinematográfica full-width con `ganadores.png` como imagen de fondo, copy superpuesto a la izquierda y valores laterales. |
| Galería | Ribbon horizontal compacto con título y cinco thumbnails activables mediante lightbox. |
| Carreras | Tres cards fotográficas compactas con overlay, copy inferior y flecha roja. |
| Patrocinadores | Banner full-width con imagen, copy de alianza y frase vertical/lateral. |
| Contacto | Bloque final simple, legible y preparado para integrar un servicio real. |

## Reglas críticas

- No convertir las imágenes principales en cards genéricas.
- Mantener las fotografías integradas al flujo editorial.
- Usar overlays y gradientes para conservar legibilidad del texto.
- Reservar el rojo para acciones, indicadores y énfasis; no usarlo como fondo dominante.
- Mantener suficiente contraste para texto blanco y gris.
- Preservar navegación por teclado, estados de foco y textos alternativos.

## Paleta

```text
Negro       #090909 — fondo dominante
Panel       #131518 — superficies secundarias
Rojo        #ff3131 — acciones y énfasis
Rojo oscuro #d71919 — estados intensos
Blanco      #f4f4f4 — títulos y texto principal
Gris        #bcc0c4 — texto secundario
```

## Tipografía

- **Headings:** Barlow Condensed 900 Italic.
- **Body:** Inter.
- **Anotaciones:** Permanent Marker.
- Los títulos deben conservar una presencia condensada, inclinada y editorial.

## Texturas y fotografía

Se permiten grunge, polvo, arena, rayones y franjas diagonales como capas de apoyo. Nunca deben competir con el copy ni reducir la legibilidad.

Imágenes principales actuales:

```text
assets/images/hero.png
assets/images/huella.png
assets/images/ganadores.png
```

Los SVG de `assets/sponsors/` son logos demo. No representan patrocinadores reales.

## Responsive

- En desktop, respetar la jerarquía editorial y el protagonismo fotográfico.
- En tablet y mobile, apilar contenido sin perder el orden: hero → sponsors → historia → logro → galería → carreras → patrocinadores → contacto.
- Mantener controles táctiles cómodos y evitar desbordes horizontales.

## Criterio de aceptación

- [ ] El hero se percibe como póster offroad.
- [ ] Sponsors forman una franja continua debajo del hero.
- [ ] “Pasión que deja huella” no parece una card.
- [ ] “Logro reciente” usa `ganadores.png` como banda integrada.
- [ ] Galería es compacta y abre imágenes en lightbox.
- [ ] Carreras conservan tres cards fotográficas.
- [ ] CTA de patrocinadores funciona como banner full-width.
- [ ] El resultado general mantiene la referencia del mockup.
