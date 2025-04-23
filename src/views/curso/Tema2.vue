<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Metodologías ágiles y tradicionales en BI'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    
      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3
      
          .row.mb-4
            .col-12.col-xl-8(data-aos="fade-up")
              p.mb-4 La correcta gestión de proyectos en Inteligencia de Negocios (BI), requiere la aplicación de metodologías estructuradas que permitan planificar, ejecutar y monitorear eficientemente cada fase del proyecto. En este subtema, exploraremos las metodologías tradicionales y ágiles, sus diferencias y la mejor forma de aplicarlas en proyectos de BI.
              .d-flex.align-items-start.bg-morado-claro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
                img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-20.svg', alt='Texto descriptivo de la imagen')
                .my-auto
                  p.pe-xl-3.mb-0 Según Moreno-Monsalve y Grueso Hinestroza (2024), la selección de una metodología adecuada, depende de la naturaleza del proyecto, los recursos disponibles y la necesidad de flexibilidad en su ejecución.
            .col-4.d-none.d-xl-block
              img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')

          h2.mb-4 ¿Qué son las metodologías de gestión de proyectos?
          p.mb-4 Las metodologías de gestión de proyectos son enfoques estructurados que permiten planificar, ejecutar y supervisar proyectos de manera eficiente, asegurando que se cumplan los objetivos dentro de los límites de tiempo, costo y calidad (PMI, 2021). Estas metodologías se dividen en dos grandes categorías:

          .row.mb-4
            .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-right")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Metodologías tradicionales
                  p.text-small.px-4.text-center.pb-2 Son enfoques secuenciales y predefinidos, adecuados para proyectos con requisitos claros y estables.
            .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-right")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Metodologías ágiles
                  p.text-small.px-4.text-center.pb-2 Son flexibles y adaptativas, ideales para proyectos en entornos dinámicos con cambios frecuentes.
        
      .d-flex.align-items-start.bg-azul-oscuro.bg-full-width.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-24.svg', alt='Texto descriptivo de la imagen')
        .my-auto
          p.pe-xl-3.mb-0 Según Malagón Barinas (2019), el uso de metodologías estructuradas mejora la gestión de riesgos y facilita la coordinación entre los equipos de trabajo.


      #t_2_1.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.1
          h2 Metodologías tradicionales en la gestión de proyectos de BI

      p.mb-4 Las metodologías tradicionales siguen un enfoque secuencial y estructurado, donde cada fase del proyecto debe completarse antes de pasar a la siguiente. Son utilizadas en proyectos de BI cuando los requisitos están bien definidos desde el inicio y hay poca incertidumbre sobre el resultado final.

      .row.mb-4
        .col-12.col-lg-7.col-xl-8(data-aos="fade-up")
          LineaTiempoD.color-secundario.large
            p(numero='1' titulo='Modelo en Cascada (Waterfall)')  Es uno de los enfoques más utilizados en la gestión tradicional de proyectos. Se basa en una serie de fases rígidas que deben completarse de manera secuencial.<br>Fases del modelo Waterfall, en BI:<br><b>1️.</b> Análisis de requerimientos. Identificación de las necesidades del negocio y recopilación de datos.<br><b>2️.</b> Diseño del sistema. Desarrollo de la arquitectura de BI y selección de herramientas.<br><b>3️.</b> Implementación. Integración de bases de datos y desarrollo de reportes.<br><b>4️.</b> Pruebas. Verificación de la precisión y confiabilidad de los datos.<br><b>5️.</b> Despliegue y mantenimiento. Implementación final y seguimiento del rendimiento del sistema.<br>Según Moreno-Monsalve y Grueso Hinestroza (2024), el modelo Waterfall es útil en proyectos de BI con requerimientos bien definidos, pero puede volverse inflexible ante cambios inesperados.

            p(numero='2' titulo='Método del ciclo de vida en V') El modelo en V es una variante del enfoque en cascada, donde cada fase de desarrollo está directamente relacionada con una fase de prueba correspondiente. Este enfoque es útil en proyectos de BI donde la validación de datos es crítica.<br>Características claves del modelo en V en BI:<br><br>●	Énfasis en la validación y pruebas continuas.<br>●	Adecuado para proyectos con requerimientos detallados.<br>●	Menor flexibilidad para cambios durante el desarrollo.<br><br>Malagón Barinas (2019), destaca que el modelo en V es adecuado para proyectos de BI donde la precisión y calidad de los datos son aspectos fundamentales.
 
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')

      #t_2_2.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.2
          h2 Metodologías ágiles en la gestión de proyectos de BI

      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3

          .row.mb-4
            .col-4.d-none.d-xl-block
              img(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')
            .col-12.col-xl-8(data-aos="fade-up")
              p.mb-4 Las metodologías ágiles permiten una mayor flexibilidad y adaptación a los cambios, lo que las hace ideales para proyectos de BI, donde los requisitos pueden evolucionar con el tiempo.
              .d-flex.align-items-start.bg-morado-claro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
                img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-27.svg', alt='Texto descriptivo de la imagen')
                .my-auto
                  p.pe-xl-3.mb-0 Según Fuentes Adrianzén y Carrión Barco (2021), las metodologías ágiles son esenciales en proyectos de BI modernos, dado que permiten responder rápidamente a cambios en los datos y en los objetivos estratégicos de la organización.
          h2 Metodología Scrum
          p.mb-4 Scrum es una de las metodologías ágiles más utilizadas en la gestión de proyectos de BI. Se basa en <b>iteraciones cortas llamadas <i>sprints</i></b>, donde se entregan avances incrementales del proyecto.

          p.mb-4 Principales roles en Scrum:
          .row.mb-4.justify-content-center
            .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-28.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Product Owner
                p.px-1.text-small.mb-0.d-flex.text-center Define los objetivos del proyecto y prioriza tareas.
            .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-29.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Scrum Master
                p.px-1.text-small.mb-0.d-flex.text-center Facilita la metodología y resuelve impedimentos.
            .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-30.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Equipo de desarrollo
                p.px-1.text-small.mb-0.d-flex.text-center Implementa las soluciones de BI y desarrolla dashboards, reportes y modelos analíticos.

      p.mb-4 Fases de Scrum en BI:
      .row.mb-4
        .col-12.col-lg-7
          LineaTiempoD.color-secundario.large
            p(numero='1' titulo='Planificación del sprint') Definir los requerimientos analíticos y objetivos del <i>sprint</i>.
            p(numero='2' titulo='Desarrollo') Construcción de <i>dashboards</i> y modelos de datos.
            p(numero='3' titulo='Revisión') Evaluación de resultados con los stakeholders. 
            p(numero='4' titulo='Retrospectiva') Identificación de mejoras para el próximo sprint.
        .col-12.col-lg-5.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')

      p.mb-4 Según Moreno-Monsalve y Grueso Hinestroza (2024), Scrum es particularmente útil en proyectos de BI, donde la exploración de datos y la creación de reportes requieren iteraciones rápidas y continuas.
      h2 Metodología Kanban
      p.mb-4 Kanban es un método visual para la gestión de proyectos basado en tableros, que permiten visualizar el flujo de trabajo y mejorar la eficiencia en los procesos.

      .row.bg-azul.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3

          .row.mb-4
            .col-5.d-none.d-xl-block
              img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')
            .col-12.col-xl-7(data-aos="fade-up").d-flex.flex-column.justify-content-center
              p.mb-4 Aplicación de Kanban en BI:
              p.mb-4 ●	Facilita la organización de tareas en proyectos de análisis de datos.<br>●	Permite visualizar cuellos de botella en la entrega de reportes.<br>●	Mejora la comunicación entre los equipos de trabajo.

              span.text-bold Malagón Barinas (2019), menciona que Kanban es útil en proyectos de BI donde se requiere gestionar múltiples solicitudes de reportes y análisis de manera eficiente. 

      p.mb-4 La siguiente tabla presenta una comparación entre metodologías ágiles y tradicionales, en BI:
      p.mb-4 <b>Tabla 1.</b> Comparación metodologías ágiles y tradicionales

      .tabla-a.mb-4
        table
          thead
            tr
              th.text-bold.bg-amarillo-oscuro.text-center Característica
              th.text-bold.bg-amarillo-oscuro.text-center Metodologías Tradicionales
              th.text-bold.bg-amarillo-oscuro.text-center Metodologías Ágiles
          tbody
            tr
              td.text-center.text-bold Flexibilidad
              td.text-center Baja.
              td.text-center Alta.
            tr
              td.text-center.text-bold Adaptabilidad
              td.text-center Baja.
              td.text-center Alta.
            tr
              td.text-center.text-bold Entrega de valor
              td.text-center Al final del proyecto.
              td.text-center Iterativa y continua.
            tr
              td.text-center.text-bold Control del proceso
              td.text-center Estricto y planificado.
              td.text-center Basado en necesidades cambiantes.
            tr
              td.text-center.text-bold Aplicabilidad en BI
              td.text-center Útil en proyectos con datos estructurados y requerimientos claros.
              td.text-center Ideal para proyectos de exploración de datos y modelado avanzado.

      p.mb-4 Según Hernández Gutiérrez et al. (2022), la combinación de enfoques ágiles y tradicionales, puede ser la estrategia más efectiva en proyectos de BI, permitiendo un balance entre control y flexibilidad.
      
      .row.bg-azul.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3.py-4.d-flex
          .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto Casos de estudio y ejemplos prácticos 
            p.mb-5(data-aos="fade-up") El análisis de metodologías aplicadas a proyectos de inteligencia de negocios permite comprender cómo adaptar la gestión según el contexto y necesidades de cada organización. En el PDF Casos de estudio y ejemplos prácticos , se presentan tres casos reales que ilustran la aplicación de enfoques como Waterfall, Scrum y Kanban en sectores financieros, de comercio electrónico y retail. A través de estos ejemplos se destacan los criterios de selección, beneficios obtenidos y resultados concretos, facilitando el aprendizaje práctico sobre cómo elegir y adaptar metodologías efectivas en el ámbito de la inteligencia de negocios.

            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_Casos de estudio y ejemplos prácticos.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Casos de estudio y ejemplos prácticos.
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/172949") Zahera-Pérez, M. (2021). Industria 4.0 y la Dirección e Ingeniería de Proyectos
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=OwIeGGd81Dk") [Vídeo] Empresarios de Alto Rendimiento Training. (2021). El arte de la planeación estratégica: Construyendo el éxito a largo plazo
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
