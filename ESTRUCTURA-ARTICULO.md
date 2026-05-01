# Estructura Estándar — Artículos Blog "El Agente Profesional"
> AgentPro Planner · Autor: Francisco Camacho · Última actualización: Abril 2026

---

## HEAD

- `<title>` con keyword principal | AgentPro Planner (máx 60 caracteres)
- `<meta name="description">` — 150-160 caracteres, en español
- `<link rel="canonical">` con URL absoluta
- `<meta name="theme-color" content="#0d1b2a">`
- Fuentes: Syne + DM Sans (Google Fonts)
- `<link rel="stylesheet" href="blog.css">`

### Open Graph Tags (obligatorio en todos los artículos)
```html









```

### Article Schema JSON-LD (obligatorio)
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "TÍTULO DEL ARTÍCULO",
  "datePublished": "YYYY-MM-DDTHH:MM:SS-07:00",
  "dateModified": "YYYY-MM-DDTHH:MM:SS-07:00",
  "author": {
    "@type": "Person",
    "name": "Francisco Camacho",
    "url": "https://agentproplanner.com/blog/autor.html"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AgentPro Planner",
    "logo": {
      "@type": "ImageObject",
      "url": "https://agentproplanner.com/assets/logo.png"
    }
  },
  "image": "URL_IMAGEN_HERO",
  "description": "META DESCRIPTION DEL ARTÍCULO"
}
```

### FAQ Schema JSON-LD (obligatorio, mínimo 3 preguntas)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "PREGUNTA BASADA EN UN H2",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Respuesta de 40-80 palabras en español."
      }
    }
  ]
}
```

---

## BODY

### Estructura HTML obligatoria
1. Header blog estándar (`blog-topbar`)
2. Panel móvil (`blog-mobile-panel`)
3. Breadcrumb (`blog-breadcrumb`)
4. `<main class="blog-main"><article>`
5. Badge de categoría:
   - NOTICIA → badge gris/azul
   - RECURSO GRATUITO → badge verde `#00c9a7`
   - GUÍA → badge azul `#1a56a0`
6. Hero image (Pexels, width=1200, height=514, loading=eager)
7. H1 con keyword principal
8. Fecha (`<time datetime="YYYY-MM-DD">`) + tiempo de lectura
9. Contenido con H2s descriptivos
10. Links externos a fuentes de autoridad
11. CTA a AgentPro Planner
12. Sección FAQ visible (mínimo 3 preguntas)
13. Artículos relacionados (máximo 3)
14. Bloque CTA estándar (`blog-cta-box`)
15. Formulario Zoho (iframe estándar)
16. Footer blog estándar (`blog-footer`)
17. `<script src="blog.js"></script>`
18. Meta Pixel ViewContent al final

---

## Links externos obligatorios por tipo de artículo

- Medicare general → [Medicare.gov](https://www.medicare.gov)
- Períodos de inscripción → [CMS.gov](https://www.cms.gov)
- ACA/Marketplace → [HealthCare.gov](https://www.healthcare.gov)
- Medicamentos → [Medicare Plan Finder](https://www.medicare.gov/plan-compare)

---

## CTAs Contextuales (obligatorio en artículos largos, opcional en noticias cortas)

Los CTAs contextuales son llamadas a la acción que aparecen DENTRO del contenido,
relacionadas directamente con el párrafo donde se insertan. No reemplazan el bloque
CTA estándar al final — lo complementan.

### Reglas
- Máximo 2 CTAs contextuales por artículo largo (guías)
- En noticias cortas: 0 o 1 máximo
- Siempre relacionado con el tema del párrafo donde aparece
- Nunca llamar a AgentPro "CRM"

### Bloque CTA contextual estándar
```html
<div class="blog-contextual-cta">
  <p>MENSAJE CONTEXTUAL RELACIONADO AL PÁRRAFO</p>
  <a class="blog-btn-primary" href="URL_RELEVANTE">TEXTO DEL BOTÓN →</a>
</div>
```

### Ejemplos por tipo de artículo

**Artículo de organización/clientes:**
- Al mencionar rastreador → "Descarga el Rastreador de Renovaciones gratis"
- Al mencionar renovaciones → "Prueba AgentPro Planner 7 días gratis — sin tarjeta"

**Artículo de períodos de inscripción:**
- Al mencionar AEP → "Descarga el calendario AEP/OEP/IEP/SEP en el Kit gratuito"

**Noticia de ACA:**
- Al mencionar seguimiento de clientes → "Organiza tus prospectos ACA con AgentPro Planner"

**Noticia de Medicare:**
- Al mencionar renovaciones → "Descarga el Rastreador de Renovaciones Medicare gratis"

---

## Formulario Zoho estándar (iframe)
```html

  
  

```

---

## Bloque CTA estándar
```html

  
    Organiza prospectos ACA, recordatorios de SEP y notas de cada cita
    en un solo lugar con AgentPro Planner:
  
  
    Entrar a AgentPro Planner
    Ver blog y noticias
  

```

---

## Reglas del proyecto (NUNCA violar)

| Regla | Correcto | Incorrecto |
|-------|----------|------------|
| Tipo de producto | herramienta / plataforma | CRM |
| Tipo de venta | acceso | licencia |
| Precio | $49.99 pago único | mensual / suscripción |
| Autor | Francisco Camacho, Fundador AgentPro Planner | cualquier otro |
| Idioma | Español (EE.UU.) | inglés o mezcla |
| AgentPro en artículos | mención natural al final | discurso de venta |

---

## Artículos relacionados (bloque estándar)
- Máximo 3 artículos
- Siempre del mismo tema o complementarios
- Usar tarjetas con título, categoría y enlace

---

## Checklist antes de publicar

- [ ] Title tag definido (máx 60 caracteres)
- [ ] Meta description (150-160 caracteres)
- [ ] Canonical URL correcta
- [ ] Open Graph completo
- [ ] Article Schema con datePublished y dateModified
- [ ] FAQ Schema con mínimo 3 preguntas
- [ ] H1 único con keyword principal
- [ ] Mínimo 1 link externo a fuente de autoridad
- [ ] CTA a AgentPro Planner presente
- [ ] FAQ visible en el cuerpo del artículo
- [ ] Formulario Zoho incluido
- [ ] Meta Pixel ViewContent al final
- [ ] AgentPro nunca llamado CRM
