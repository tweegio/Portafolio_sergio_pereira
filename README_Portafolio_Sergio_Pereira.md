# Portfolio — Sergio Pereira

Sitio web personal desarrollado para presentar mi perfil profesional como **Desarrollador Front-End**, **Instructor IT** y **Técnico Informático**.

🔗 **Demo en vivo:** https://tweegio.github.io/Portafolio_sergio_pereira/ 

---


## Tecnologías utilizadas

- HTML5 semántico
- CSS3 — variables, animaciones, grid, flexbox, media queries
- JavaScript vanilla — IntersectionObserver, navegación activa, menú mobile
- Google Fonts — Outfit + Josefin Sans

---

## Funcionalidades

- **Responsive completo** — adaptado para mobile, tablet y desktop
- **Navbar fija** con efecto blur al scrollear y link activo según sección visible
- **Animaciones on scroll** con IntersectionObserver
- **Menú hamburguesa** para dispositivos móviles
- **Secciones:** Hero, Sobre mí, Skills, Educación & Certificaciones, Experiencia Laboral, Proyectos, Contacto

---

## Estructura del proyecto

```
/
├── index.html
├── app-veterinaria-detail.html
├── portal-inmobiliarias-detail.html
├── service-net-detail.html
├── qr-generator-detail.html
├── pablo-testa-detail.html
├── gestor-de-pedidos-detail.html
├── cvfilter-detail.html
├── cuerpo-mente-detail.html
├── cafe-aurora-detail.html
├── blog.html
├── fondo01.jpg
├── header.jpg
├── appVeterinaria.png
├── portal-inmobiliarias.png
├── cafe_aurora.png
├── cv_filter_pic.png
├── generador_de_pedidos.png
├── qr-generator.png
├── pablo-testa.png
├── cuerpo&mente.png
├── service_net.png
├── styles.css
├── script.js
└──Readme.md

```

---

## Proyectos incluidos

| Proyecto | Tecnologías | Demo |
|---|---|---|
| veteApp | React, Firebase | [ver](https://appveterinara.vercel.app/) |
| CV Filter | HTML, CSS, JavaScript | [ver](https://tweegio.github.io/CV_Filter/) |
| BotDetect | HTML, CSS, JavaScript | [ver](https://tweegio.github.io/BotDetect/) |
| Gestor de Pedidos | JavaScript, CSS | [ver](https://tweegio.github.io/carga_de_pedidios_TXT/) |
| Generator QR | JavaScript, HTML | [ver](https://tweegio.github.io/QR_generator/) |
| Inmobiliarias GBA Zona Sur | HTML, CSS, JavaScript, Bootstrap | [ver](https://www.inmobiliariaszona.com.ar/) |
| Café Aurora | HTML, CSS, Python | [ver](https://tweegio.github.io/cafe_aurora/) |
| Service Net | HTML, CSS, JavaScript | [ver](https://tweegio.github.io/Service-Net/) |
| Pablo Testa | HTML, CSS, JavaScript | [ver](https://tweegio.github.io/Pablo_Testa/) |
| Cuerpo & Mente | HTML, CSS, JavaScript | [ver](https://tweegio.github.io/cuerpo_y_mente/) |


---

## seciones de detalles de proyectos (detail)

Detalles y desiciones técnicas tomadas en cada proyecto. Enumerando las tecnologías usadas
y que problema concreto se resuelve en cada uno de ellos.
Incluye link a cada repositorio público de los proyectos incorporados al portafolio.


## Blog

Escribo sobre lo que aprendo, lo que construyo y lo que me resulta útil en el camino como desarrollador.
La información de este Blog sera compartido en redes solo con fines de compartir mi conocimiento con la comunidad IT.

---

## Decisiones técnicas

**Sin frameworks para el portfolio en sí.** Opté por JavaScript vanilla para demostrar dominio de los fundamentos del lenguaje sin depender de abstracciones. El sistema de traducción, las animaciones y la navegación están implementados desde cero.

**IntersectionObserver para animaciones.** En lugar de escuchar el evento `scroll` en cada frame, uso `IntersectionObserver` para activar las animaciones solo cuando los elementos entran al viewport, lo cual es más eficiente en rendimiento.

**CSS custom properties.** Toda la paleta de colores, tipografías y transiciones están definidas como variables en `:root`, lo que hace que cualquier cambio visual sea centralizado y consistente.

**Sistema i18n propio.** La traducción ES/EN se resuelve con un objeto de claves y el atributo `data-i18n` en cada elemento, sin ninguna librería externa. Simple, liviano y mantenible.



---

## Cómo correrlo localmente

```bash
git clone https://github.com/tweegio/portfolio.git
cd portfolio
# Abrí index.html en tu navegador, o usá Live Server en VS Code
```

No requiere instalación de dependencias ni build process.

---

## Contacto

- 📧 sergio.pereira.proyecto@gmail.com
- 💼 [LinkedIn](https://www.linkedin.com/in/sergio-pereira-development/)
- 🐙 [GitHub](https://github.com/tweegio)

---

*© 2026 Sergio Pereira*
