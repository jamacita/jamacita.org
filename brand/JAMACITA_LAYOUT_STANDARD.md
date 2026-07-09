# JAMACITA Layout Standard / Corporate Design Baseline

**Status:** Preliminary brand standard  
**Scope:** JAMACITA web presence, PDFs, letters, concept notes, submissions, public-facing statements, project documentation  
**Authoring principle:** The author remains visually and rhetorically restrained; the brand, the content and the method carry the communication.

---

## 1. Brand Essence

### 1.1 Core Positioning

JAMACITA is positioned as an independent, discreet and analytically precise platform for:

1. Structured ideas and innovation concepts.
2. Documented contributions and intellectual provenance.
3. Strategic, cultural and economic observations.
4. Public-facing materials that appear calm, credible and deliberately understated.

### 1.2 Brand Character

The visual and linguistic identity should communicate:

1. **Independence** – no institutional dependency, no visual imitation of corporate or governmental design.
2. **Discretion** – restrained visual presence; no loud self-promotion.
3. **Precision** – structured documents, reliable hierarchy, traceable metadata.
4. **Cultural literacy** – refined, editorial, slightly literary, but not decorative.
5. **Strategic seriousness** – calm confidence rather than marketing pressure.

### 1.3 Communication Principle

Preferred framing:

> This document / note / concept is made available as part of the JAMACITA / Andersen project context and may be used subject to fair, market-value consideration or an appropriate usage arrangement.

Avoid excessive first-person language. Where possible, use neutral formulations such as:

1. “This note proposes …”
2. “The concept suggests …”
3. “The following structure may be suitable …”
4. “Further use may require a separate usage arrangement.”

---

## 2. Visual Identity

### 2.1 General Visual Direction

The JAMACITA layout should be:

1. Minimalist.
2. Editorial.
3. Legible.
4. Calm.
5. Slightly premium, without luxury cliché.
6. Suitable for both digital screens and PDF/print output.

Avoid:

1. Bright gradients.
2. Heavy iconography.
3. Overly playful illustrations.
4. Corporate stock-photo aesthetics.
5. Dense legalistic walls of text.
6. Decorative elements that reduce evidentiary credibility.

### 2.2 Color Palette

#### 2.2.1 Primary Palette

| Token | Use | Hex |
|---|---|---:|
| `--jm-ink` | Primary text | `#111111` |
| `--jm-paper` | Background | `#FAF8F3` |
| `--jm-warm-white` | Cards / document panels | `#FFFDF8` |
| `--jm-stone` | Secondary backgrounds | `#E8E1D6` |
| `--jm-muted` | Secondary text | `#66615A` |
| `--jm-line` | Hairlines / rules | `#D8D0C4` |

#### 2.2.2 Accent Palette

| Token | Use | Hex |
|---|---|---:|
| `--jm-burgundy` | Primary accent / seal | `#5B1F2A` |
| `--jm-olive` | Subtle strategic accent | `#59624A` |
| `--jm-gold-muted` | Metadata / fine highlight | `#A48754` |
| `--jm-blue-grey` | Technical annotations | `#53616D` |

Use accent colors sparingly. The default document impression should remain warm-neutral, text-led and restrained.

### 2.3 Contrast and Accessibility

1. Body text must maintain sufficient contrast against background.
2. Use `--jm-ink` on `--jm-paper` or `--jm-warm-white` for long-form reading.
3. Accent colors should not carry essential meaning alone.
4. Avoid small low-contrast captions below 8.5 pt in print/PDF.

---

## 3. Typography

### 3.1 Preferred Typeface Logic

The JAMACITA identity may use system fonts to remain portable and legally safe.

#### 3.1.1 Primary Sans Serif

Preferred stack:

```css
font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
```

Use for:

1. Website interface.
2. PDF body text where a clean modern impression is preferred.
3. Captions, metadata and document navigation.

#### 3.1.2 Editorial Serif

Preferred stack:

```css
font-family: Georgia, "Times New Roman", Times, serif;
```

Use selectively for:

1. Quotes.
2. Editorial introductions.
3. Short reflective text blocks.
4. Document titles when a more classical tone is desired.

### 3.2 Recommended Font Sizes

#### 3.2.1 Web

| Element | Size | Weight | Line height |
|---|---:|---:|---:|
| H1 | 40–56 px | 500–600 | 1.05–1.15 |
| H2 | 28–36 px | 500–600 | 1.15–1.25 |
| H3 | 20–24 px | 500–600 | 1.25–1.35 |
| Body | 16–18 px | 400 | 1.55–1.7 |
| Small / metadata | 12–14 px | 400–500 | 1.35–1.5 |

#### 3.2.2 PDF / Print

| Element | Size | Weight | Line height |
|---|---:|---:|---:|
| Title | 18–24 pt | 600 | 1.15 |
| Section heading | 13–15 pt | 600 | 1.2 |
| Body | 10.5–11.5 pt | 400 | 1.35–1.5 |
| Footnote / metadata | 8–9 pt | 400 | 1.25–1.35 |

Default for formal documents: **Helvetica Neue or Helvetica, 11 pt**.  
Fallback for court-like or traditional letters: **Times New Roman, 11 pt**.

---

## 4. Layout System

### 4.1 Page Geometry for PDFs

Recommended A4 margins:

1. Top: 22–28 mm.
2. Bottom: 18–24 mm.
3. Left: 22–26 mm.
4. Right: 22–26 mm.

For one-page letters, prefer a simple left-aligned layout. Avoid excessive boxes and visual noise.

### 4.2 Document Grid

Use a restrained 12-column or 6-column grid for web layouts. For documents, use a simple single-column reading structure with occasional side metadata.

Recommended content width:

1. Web long-form: 680–820 px.
2. Web landing sections: 960–1180 px.
3. PDF text column: 145–165 mm.

### 4.3 Spacing Scale

Use an 8 px base rhythm.

| Token | Value |
|---|---:|
| `--space-1` | 4 px |
| `--space-2` | 8 px |
| `--space-3` | 12 px |
| `--space-4` | 16 px |
| `--space-5` | 24 px |
| `--space-6` | 32 px |
| `--space-7` | 48 px |
| `--space-8` | 64 px |

### 4.4 Lines, Borders and Separators

1. Use hairlines rather than heavy boxes.
2. Border color: `--jm-line`.
3. Border width: 0.5–1 px digital; 0.25–0.5 pt print.
4. Prefer horizontal rules to framed boxes.

---

## 5. Document Components

### 5.1 Standard Document Header

Recommended structure:

```text
JAMACITA
Document Type / Project Context
Title
Subtitle or descriptive note
Date · Version · Optional SHA / reference
```

The header should be compact and quiet. The brand name may appear as a small wordmark rather than a dominant logo.

### 5.2 Footer Metadata

Recommended footer elements:

1. Left: SHA / reference / repository path.
2. Center: optional confidentiality or status note.
3. Right: date or page number.

Example:

```text
SHA: [short hash]                         Preliminary / JAMACITA                 Berlin, [date]
```

### 5.3 Closing / Attribution Block

Where appropriate, use:

```text
Mit freundlichen Grüßen
Robert Brogsitter
```

Additional standard attribution, where relevant:

```text
This document is an output of the Andersen project context and may require a fair, market-value consideration for further use. A simple usage arrangement may be requested by email. Further information on the author and related context may be found via JAMACITA or the indicated contact channels.
```

Keep the author visually secondary. Do not over-personalize the layout.

---

## 6. Web Design Standard

### 6.1 General Web Layout

Website pages should use:

1. Warm neutral background.
2. Narrow readable text columns.
3. Large but restrained headings.
4. Minimal navigation.
5. No unnecessary animations.
6. No noisy icon systems.

### 6.2 CSS Design Tokens

```css
:root {
  --jm-ink: #111111;
  --jm-paper: #FAF8F3;
  --jm-warm-white: #FFFDF8;
  --jm-stone: #E8E1D6;
  --jm-muted: #66615A;
  --jm-line: #D8D0C4;
  --jm-burgundy: #5B1F2A;
  --jm-olive: #59624A;
  --jm-gold-muted: #A48754;
  --jm-blue-grey: #53616D;

  --font-sans: "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-serif: Georgia, "Times New Roman", Times, serif;

  --content-narrow: 720px;
  --content-wide: 1120px;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
}
```

### 6.3 Base CSS

```css
body {
  margin: 0;
  background: var(--jm-paper);
  color: var(--jm-ink);
  font-family: var(--font-sans);
  font-size: 17px;
  line-height: 1.65;
  text-rendering: optimizeLegibility;
}

main {
  max-width: var(--content-narrow);
  margin: 0 auto;
  padding: var(--space-8) var(--space-5);
}

h1, h2, h3 {
  letter-spacing: -0.02em;
  line-height: 1.15;
}

h1 {
  font-size: clamp(2.4rem, 6vw, 4rem);
  font-weight: 560;
}

h2 {
  margin-top: var(--space-7);
  font-size: 1.8rem;
  font-weight: 560;
}

p {
  margin: 0 0 var(--space-5);
}

.meta {
  color: var(--jm-muted);
  font-size: 0.82rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.rule {
  border: 0;
  border-top: 1px solid var(--jm-line);
  margin: var(--space-6) 0;
}
```

---

## 7. PDF / Letter Standard

### 7.1 Formal Letter Style

Use this where credibility, restraint and readability matter more than visual branding.

1. Font: Helvetica Neue / Helvetica / Arial, 11 pt.
2. Alignment: left-aligned.
3. No justified text unless carefully hyphenated.
4. No large logo block.
5. Optional small JAMACITA wordmark in header or footer.
6. Use simple date line: `Berlin, [date]`.
7. Use short paragraphs and clear section headings.

### 7.2 Attachment / Concept Note Style

Use for strategic notes, project submissions and concept documents.

1. Cover title with compact metadata.
2. Table of contents only if longer than 5 pages.
3. Numbered sections.
4. Clear provenance and status note.
5. Footer with SHA or document reference.
6. Optional appendix for evidence, chronology or screenshots.

---

## 8. Language and Tone

### 8.1 German Tone

Preferred tone:

1. Präzise.
2. Zurückhaltend.
3. Sachlich.
4. Nicht anbiedernd.
5. Nicht überjuridisiert, sofern kein juristischer Zweck besteht.
6. Selbstbewusst, aber nicht fordernd im ersten Satz.

Avoid:

1. “Ich empfehle …” as dominant framing.
2. Excessive self-reference.
3. Overly emotional justification.
4. Absolute claims where a perception, contribution or proposal is more appropriate.

### 8.2 English Tone

Preferred tone:

1. Clear.
2. Editorial.
3. Strategically precise.
4. Calmly assertive.
5. Rights-aware without sounding threatening.

Preferred formulations:

1. “This note outlines …”
2. “The concept may support …”
3. “Further use should be subject to an appropriate arrangement.”
4. “The author acts independently and is not institutionally dependent on the addressed entity.”

---

## 9. Visual Elements

### 9.1 Permitted Visuals

1. Fine lines.
2. Small typographic seals.
3. Monochrome diagrams.
4. Tables with light rules.
5. Subtle document cards.
6. Sparse editorial photography only where directly relevant.

### 9.2 Avoided Visuals

1. Bright icons.
2. Cartoonish illustrations.
3. Decorative gradients.
4. Excessive shadows.
5. Stock business imagery.
6. Symbolic overstatement.

### 9.3 Suggested Motifs

For optional visual identity work, suitable motifs include:

1. Archival index cards.
2. Maritime / correspondence references.
3. Fine-line cartography.
4. Editorial marginalia.
5. Quiet provenance marks.
6. Abstract notebook / lab references.

---

## 10. Standard Usage Notice

### 10.1 German

```text
Dies ist ein Ergebnis aus dem Andersen-Projektkontext. Eine weitergehende Nutzung setzt eine faire, dem Marktwert angemessene Gegenleistung oder eine gesonderte Nutzungsvereinbarung voraus. Eine einfache Nutzungsvereinbarung kann per E-Mail angefordert werden. Robert Brogsitter agiert unabhängig; eine institutionelle Abhängigkeit von Andersen besteht nicht.
```

### 10.2 English

```text
This document is an output of the Andersen project context. Further use requires fair, market-value consideration or a separate usage arrangement. A simple usage arrangement may be requested by email. Robert Brogsitter acts independently and is not institutionally dependent on Andersen.
```

---

## 11. Implementation Checklist

Before publishing or exporting a JAMACITA-branded document, check:

1. Is the layout calm and not visually overloaded?
2. Is the author visually secondary to the document purpose?
3. Are headings structured numerically where useful?
4. Is the document legible on screen and in print?
5. Are metadata, date, place and version clear?
6. Is the usage notice included where relevant?
7. Are claims framed as documented contribution, proposal, perception or analysis where appropriate?
8. Is the document free of unnecessary icons, gradients and decorative elements?
9. Is the tone credible for recipients outside the immediate project context?
10. Is the repository path or SHA included where traceability matters?

---

## 12. Versioning

This file should be treated as the baseline standard. Future revisions may add:

1. A logo / wordmark specification.
2. Export templates for PDF documents.
3. HTML/CSS components.
4. Letterhead templates.
5. Submission protocol templates.
6. Brand examples for `jamacita.org`, `brgsttr.de` and related project contexts.
