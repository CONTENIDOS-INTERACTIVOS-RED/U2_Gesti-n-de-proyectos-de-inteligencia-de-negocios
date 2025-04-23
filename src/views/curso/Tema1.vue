<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Introducción a la pertinencia y funcionalidad de la propuesta didáctica'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-4
      .col-12.col-md-6.col-xl-4.d-flex
        .bg-azul.p-4.rounded
          span La gestión de proyectos ha evolucionado significativamente desde sus orígenes hasta convertirse en una disciplina clave en diversos sectores, incluidas la tecnología, la construcción, la manufactura y, más recientemente, la Inteligencia de Negocios (BI). La necesidad de administrar eficazmente recursos, costos, plazos y riesgos, ha llevado a la creación de metodologías y estándares que facilitan la planificación y ejecución de proyectos exitosos (Moreno-Monsalve & Grueso Hinestroza, 2024).
      .col-4.d-none.d-md-block
        img(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')
      .col-12.col-md-6.bg-azul-claro.col-xl-4.d-flex
        .bg-azul-claro.p-4.rounded
          span De acuerdo con el Project Management Institute (PMI), un proyecto es un esfuerzo temporal llevado a cabo para crear un producto, servicio o resultado único, diferenciándolo de las operaciones continuas de una organización. La gestión de proyectos, por lo tanto, consiste en la <b>aplicación de conocimientos, habilidades, herramientas y técnicas</b>, para cumplir con los requisitos del proyecto dentro de restricciones específicas, como el alcance, el tiempo y el costo (Hernández Gutiérrez, López Calvajar & Gutiérrez Rodríguez, 2022).

    p.text-bold.mb-4 La evolución de la gestión de proyectos ha pasado de ser un enfoque empírico a una disciplina estructurada, fundamentada en metodologías formales y estándares internacionales, tales como la Guía del PMBOK (Project Management Body of Knowledge) del PMI y otras metodologías ágiles y tradicionales, aplicadas a la gestión de proyectos. 
    .row.mb-4
      .col-12.col-xl-8(data-aos="fade-up")
        h2 ¿Qué es la Inteligencia de Negocios (BI)?
        .d-flex.align-items-start.bg-amarillo.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-7.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 La Inteligencia de Negocios (Business Intelligence, BI) es un conjunto de estrategias, procesos y herramientas tecnológicas que permiten a las organizaciones recopilar, analizar y visualizar datos para tomar decisiones informadas (Fuentes Adrianzén & Carrión Barco, 2021). BI se ha convertido en un activo estratégico para las empresas modernas, dado que facilita la optimización de procesos, la identificación de tendencias de mercado y la mejora del rendimiento organizacional.
        span Según Moreno-Monsalve & Grueso Hinestroza (2024), la Inteligencia de Negocios permite transformar grandes volúmenes de datos en información valiosa, generando ventajas competitivas en distintos sectores.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')

    #t_1_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.1
        h2 Componentes claves de BI
 
    p.mb-4 La Inteligencia de Negocios se compone de varios elementos fundamentales:

    .bg-azul.bg-full-width.py-4.mb-4
      .row.px-5.pb-md-3

        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')

        .col-12.col-xl-8(data-aos="fade-up")
          p.mb-2 ●	<b>Extracción y almacenamiento de datos.</b> Recopilación de información desde múltiples fuentes y almacenamiento en bases de datos o data warehouses.
          p.mb-2 ●	<b>Procesamiento y análisis de datos.</b> Aplicación de algoritmos analíticos para identificar patrones, tendencias y correlaciones.
          p.mb-2 ●	<b>Visualización de la información.</b> Creación de reportes y dashboards interactivos, para facilitar la interpretación de los datos.
          p.mb-4 ●	<b>Automatización de procesos de decisión.</b> Implementación de modelos de inteligencia artificial y machine learning para optimizar la toma de decisiones.

          span BI ha transformado la manera en que las empresas gestionan la información, permitiendo <b>reducir costos operativos, aumentar la eficiencia y mejorar la relación con los clientes</b> (Moreno Monsalve, 2020).

    h2 Relación entre gestión de proyectos e Inteligencia de Negocios

    .row.mb-4
      .col-12.col-xl-8(data-aos="fade-up")
        .bg-azul.p-4.mb-4
          span El desarrollo de un sistema de <b>Inteligencia de Negocios</b> implica la ejecución de un proyecto estructurado, lo que hace que la gestión de proyectos juegue un papel crítico en la implementación de BI.
        span Según Moreno-Monsalve & Grueso Hinestroza (2024), los proyectos de BI deben planificarse estratégicamente, para garantizar la calidad de los datos y la efectividad de los sistemas analíticos.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')

    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3

        p.mb-4 Los factores claves en la gestión de proyectos de BI, incluyen:
        .row.mb-4
          .col-4.d-none.d-xl-block(data-aos="fade-up")
            img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')
          .col-12.col-xl-8
            SlyderF(columnas='col-12 col-lg-6 py-4 px-3')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-12.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Definición clara de objetivos
                p.px-1.text-small.mb-0.d-flex.text-center Identificar el problema empresarial que el proyecto de BI busca resolver.
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-13.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Calidad de los datos
                p.px-1.text-small.mb-0.d-flex.text-center Garantizar que la información utilizada sea precisa y confiable.
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-14.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Selección de herramientas adecuadas
                p.px-1.text-small.mb-0.d-flex.text-center Evaluar el software en función de los requerimientos de la organización.
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-15.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Gestión del cambio
                p.px-1.text-small.mb-0.d-flex.text-center Asegurar que los usuarios finales adopten la solución de BI.
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-16.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Monitoreo y medición de impacto
                p.px-1.text-small.mb-0.d-flex.text-center Evaluar el desempeño del Proyecto, mediante KPIs y métricas de éxito.

        .row
          .col-12.col-xl-8(data-aos="fade-up")
            p.mb-4 De acuerdo con Fuentes Adrianzén & Carrión Barco (2021), el éxito de un proyecto de BI no solo depende de la tecnología utilizada, sino también de la capacidad de la organización para integrar estas herramientas en su modelo de negocio.
            span.text-bold Un proyecto se distingue de otras actividades organizacionales porque posee una serie de características fundamentales que determinan su gestión:
          .col-4.d-none.d-xl-block
            img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')


    ImagenInfografica.color-secundario.mb-4.bg-white
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-18.png', alt='Descripción de la imagen')
      .tarjeta.bg-white.p-4(x='31%' y='20%' numero='+')
        .h5.mb-2 Temporalidad
        p Cada proyecto tiene un inicio y un fin definidos, lo que significa que no es una operación continua, sino un esfuerzo con una duración limitada. La temporalidad implica que el equipo de gestión debe cumplir con los plazos establecidos y asegurar que las actividades se completen dentro del cronograma definido (Moreno-Monsalve, Grueso Hinestroza & Mayett-Moreno, 2023).
      .tarjeta.bg-white.p-4(x='74%' y='20%' numero='+')
        .h5.mb-2 Interactividad y progresividad
        p La gestión de proyectos es un proceso iterativo, es decir, se realiza en fases progresivas que permiten refinar el alcance y optimizar la planificación conforme avanza el proyecto.  
      .tarjeta.bg-white.p-4(x='74%' y='62%' numero='+')
        .h5.mb-2 Optimización de recursos
         p Dado que los recursos (humanos, financieros y materiales) son limitados, la gestión de proyectos debe garantizar su uso eficiente para maximizar los resultados y minimizar costos (Moreno-Monsalve & Grueso Hinestroza, 2024).  
      .tarjeta.bg-white.p-4(x='31%' y='62%' numero='+')
        .h5.mb-2 Unicidad del producto o servicio
        p Cada proyecto genera un resultado único, que puede ser un producto, un servicio o una mejora en un proceso organizacional. Esta unicidad implica que no hay dos proyectos idénticos, aunque puedan compartir metodologías y principios de gestión similares (Malagón Barinas, 2019).

    .d-flex.align-items-start.bg-azul-oscuro.bg-full-width.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-19.svg', alt='Texto descriptivo de la imagen')
      .my-auto
        p.pe-xl-3.mb-0 La gestión de proyectos es una disciplina clave que permite a las organizaciones estructurar, ejecutar y evaluar iniciativas estratégicas, incluyendo aquellas relacionadas con Inteligencia de Negocios. La integración de herramientas de BI mediante un enfoque basado en proyectos, garantiza una toma de decisiones más eficiente, mayor competitividad y optimización operativa.

    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/270594") De Zunzunegui, A. (2023). Gestión de proyectos en AGILE: cómo utilizar las metodologías ágiles para mejorar tu capacidad de respuesta y lanzar proyectos de éxito
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/podcast-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://open.spotify.com/show/3UNSyLYE6XK7U6PRWYGDCF") [Podcast] Camilo, A. (2020). Capítulo 1 - Marco conceptual de la dirección de proyectos
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')


    
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
