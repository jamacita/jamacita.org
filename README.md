# Jamacita

Official website repository for **jamacita.org**.

This repository contains the source code for the Jamacita website and is used
as the deployment source for Cloudflare Pages.

---

## Purpose

Jamacita is a platform and brand focused on structured thinking, human
experience, systems design, and innovation across domains.

This repository serves as the technical foundation for the public-facing
website.

---

## Public / Private Design Boundary

This public repository contains only the website implementation required for
publication and deployment, including HTML, CSS, JavaScript and deployment
configuration.

Internal brand strategy, corporate-design standards, layout rationale,
design-token documentation, PDF/letter standards, usage notes and broader
identity guidance are maintained privately in `jamacita/calypso`.

Design changes for this website may be implemented here when required for the
public surface. The underlying standards and rationale remain part of the
private documentation layer and are not maintained in this repository.

---

## Continuity

Jamacita has been developing since 2015. By 2025, this had formed a ten-year
practice arc. The public surface keeps that chronology deliberately quiet:
continuity functions as context, not as an anniversary claim.

---

## Deployment

The website is deployed via **Cloudflare Pages**.

- Source: GitHub repository
- Deployment: automatic on commit to main
- Domain: https://jamacita.org

---

## License

The **source code** of this repository (HTML, CSS, JavaScript) is licensed under
the **MIT License**.

All **content**, **texts**, **concepts**, **names**, and the **Jamacita brand
identity** are © Jamacita.

No trademark, branding, or content rights are granted beyond the scope of the
MIT License.
