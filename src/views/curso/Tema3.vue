<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Planificación estratégica en proyectos de inteligencia de negocios (BI)'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.mb-4
        .col-12.col-xl-8(data-aos="fade-up")
          p.mb-4 La planificación estratégica en proyectos de Inteligencia de Negocios (BI), es un proceso esencial para garantizar que la recopilación, análisis y visualización de datos, estén alineados con los objetivos organizacionales. La correcta planificación no solo optimiza recursos y mejora la toma de decisiones, sino que también permite la integración eficiente de herramientas de BI en los procesos empresariales (Moreno-Monsalve & Grueso Hinestroza, 2024).
          .d-flex.align-items-start.bg-azul.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-34.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 En esta temática, exploraremos los principios de la planificación estratégica en BI, las fases claves del proceso y los factores críticos de éxito.
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')

      #t_3_1.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 3.1
          h2 ¿Qué es la planificación estratégica en proyectos de BI?

      p.mb-4 La planificación estratégica en proyectos de Inteligencia de Negocios, se refiere a la definición de objetivos, metodologías, recursos y cronogramas para asegurar la implementación exitosa de soluciones BI dentro de una organización (Fuentes Adrianzén & Carrión Barco, 2021).
      p.mb-4 Las características claves de la planificación en BI, son:

      .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Alineación con los objetivos del negocio
                p La estrategia de BI debe responder a necesidades empresariales concretas.
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-37.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Optimización de la calidad de datos
                p La información debe ser precisa, completa y confiable.
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-38.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Selección de tecnologías adecuadas
                p Se deben evaluar herramientas como <b>Power BI, Tableau, Looker</b> y otras plataformas analíticas.
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Gestión del cambio organizacional
                p La adopción de BI requiere la capacitación y el compromiso de los empleados.

      .d-flex.align-items-start.bg-azul-oscuro.bg-full-width.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-39.svg', alt='Texto descriptivo de la imagen')
        .my-auto
          p.pe-xl-3.mb-0 Según Moreno-Monsalve y Grueso Hinestroza (2024), una planificación estratégica bien ejecutada en proyectos de BI mejora la integración de datos y permite la optimización de procesos empresariales.

      #t_3_2.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 3.2
          h2 Fases claves en la planificación estratégica de un proyecto de BI 

      p.mb-4 El proceso de planificación estratégica de un proyecto de BI suele dividirse en varias fases interdependientes, alineadas con las mejores prácticas de gestión de proyectos y análisis de datos.

      .row.mb-4
        .col-8.col-xl-8(data-aos="fade-up")
          LineaTiempoD.color-secundario.large
            p(numero='1' titulo='Fase Definición de objetivos y requerimientos') Esta fase es crítica, puesto que permite determinar qué información se necesita para mejorar la toma de decisiones dentro de la empresa.<br>●	Identificación de objetivos estratégicos: ¿Qué preguntas debe responder el BI?<br>●	Análisis de stakeholders. ¿Quiénes usarán las herramientas de BI?<br>●	Identificación de fuentes de datos. ¿Dónde se encuentran los datos claves?<br>Según Fuentes Adrianzén y Carrión Barco (2021), un proyecto de BI exitoso debe comenzar con una fase de análisis detallado, asegurando que las soluciones sean diseñadas, según las necesidades del negocio.<br>Ejemplo práctico. Un banco quiere reducir el riesgo de morosidad en créditos. Su objetivo es crear un sistema de BI que identifique clientes con mayor probabilidad de impago.
            p(numero='2' titulo='Fase Diseño de la estrategia y selección de tecnología') Una vez definidos los objetivos, se procede a diseñar la arquitectura del proyecto.<br>●	Elección de herramientas de BI. Power BI, Tableau, Google Data Studio, etc.<br>●	Definición del modelo de datos. Centralización de la información en data warehouses.<br>●	Estrategias de integración, ¿Cómo se conectarán las bases de datos con las herramientas analíticas?<br>Moreno-Monsalve y Grueso Hinestroza (2024), destacan que la selección tecnológica debe considerar factores como escalabilidad, facilidad de uso y compatibilidad con los sistemas actuales.<br>Ejemplo práctico. Una empresa de retail elige Power BI para integrar datos de ventas y stock en tiempo real, permitiendo optimizar la reposición de productos.

            p(numero='3' titulo='Fase Desarrollo y pruebas') En esta etapa, se inicia la construcción de los modelos analíticos y la visualización de datos.<br>●	Limpieza y transformación de datos. Eliminación de datos duplicados o inconsistentes.<br>●	Desarrollo de dashboards e informes interactivos.<br>●	Pruebas de validación. Verificación de que los datos sean correctos y útiles.<br>Malagón Barinas (2019), menciona que una prueba exhaustiva de los sistemas BI antes del lanzamiento, es fundamental para evitar errores en los reportes generados.<br>Ejemplo práctico. Un equipo de BI analiza ventas históricas y descubre errores en la conversión de divisas en reportes financieros, los cuales deben corregirse antes de la implementación final.

        .col-4.d-none.d-xl-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-40.png', alt='Texto que describa la imagen')
      .row.mb-4
        .col-4.d-none.d-xl-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-41.png', alt='Texto que describa la imagen')
        .col-8.col-xl-8(data-aos="fade-up")
          LineaTiempoD.color-secundario.large
            p(numero='4' titulo='Fase Implementación y adopción') Una de las mayores dificultades en los proyectos de BI es la resistencia al cambio dentro de la organización.<br>●	Capacitación de usuarios finales. Formación en el uso de dashboards y reportes.<br>●	Estrategias de gestión del cambio. Incentivar el uso de BI mediante sesiones prácticas.<br>●	Monitoreo y ajustes. Recopilar retroalimentación para mejorar la herramienta.<br>Hernández Gutiérrez et al. (2022), indican que la adopción de BI depende en gran medida del acompañamiento continuo a los usuarios y la facilidad de uso de las herramientas.<br>Ejemplo práctico. Una empresa capacita a su equipo de marketing en el uso de Google Data Studio, permitiéndoles crear informes automatizados sobre el desempeño de campañas.

            p(numero='5' titulo='Fase Evaluación y optimización') Una vez que el sistema de BI está en funcionamiento, es necesario medir su impacto.<br>Definición de KPIs (Indicadores claves de rendimiento):<br>●	Reducción del tiempo de generación de reportes.<br>●	Precisión en la predicción de ventas.<br>●	Optimización de costos operativos.<br>Análisis de ROI. ¿El sistema de BI ha generado mejoras cuantificables?<br>Optimización continua. Mejoras basadas en nuevos requerimientos del negocio.<br>La evaluación constante permite ajustar las herramientas de BI a los cambios del entorno empresarial y mejorar su efectividad.<br>Ejemplo práctico. Un hospital evalúa su sistema de BI y descubre que ha reducido en un 30 % el tiempo de espera de pacientes mediante un mejor análisis de la demanda de atención médica.

      #t_3_3.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 3.3
          h2 Factores claves de éxito en la planificación estratégica de BI

      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3

          p.mb-4 Los factores claves de éxito en la planificación estratégica de BI, son:

          .row.mb-4
            .col-12.col-xl-7(data-aos="fade-up")
              SlyderF(columnas='col-12 col-lg-6 py-4 px-3')
                .custom-image-card.d-flex.flex-column.p-4.py-md-5
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-42.svg', style='width: 80px')
                  p.text-bold.mb-4.text-center Compromiso de la alta dirección
                  p.px-1.text-small.mb-0.d-flex.text-center La planificación de BI debe contar con el apoyo de los líderes organizacionales.
                .custom-image-card.d-flex.flex-column.p-4.py-md-5
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-43.svg', style='width: 80px')
                  p.text-bold.mb-4.text-center Calidad y gobernanza de datos
                  p.px-1.text-small.mb-0.d-flex.text-center Los datos deben estar organizados y ser confiables para generar reportes precisos.
                .custom-image-card.d-flex.flex-column.p-4.py-md-5
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-44.svg', style='width: 80px')
                  p.text-bold.mb-4.text-center Selección adecuada de tecnología
                  p.px-1.text-small.mb-0.d-flex.text-center Las herramientas de BI deben adaptarse a las necesidades de la empresa y su infraestructura.
                .custom-image-card.d-flex.flex-column.p-4.py-md-5
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-45.svg', style='width: 80px')
                  p.text-bold.mb-4.text-center Capacitación y cultura de datos
                  p.px-1.text-small.mb-0.d-flex.text-center Es fundamental que los usuarios finales comprendan la importancia del análisis de datos.
                .custom-image-card.d-flex.flex-column.p-4.py-md-5
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-46.svg', style='width: 80px')
                  p.text-bold.mb-4.text-center Evaluación continua y ajustes
                  p.px-1.text-small.mb-0.d-flex.text-center El sistema BI debe evolucionar, según los cambios en el negocio.

            .col-12.col-xl-5(data-aos="fade-up")
              img(src='@/assets/curso/unidad/img-47.png', alt='Texto que describa la imagen')

          .row.mb-4
            .col-4.d-none.d-xl-block(data-aos="zoom-in")
              img(src='@/assets/curso/unidad/img-48.png', alt='Texto que describa la imagen')
            .col-12.col-xl-8(data-aos="fade-up")
              p.mb-4 Moreno-Monsalve y Grueso Hinestroza (2024), indican que los proyectos de BI deben ser considerados como iniciativas estratégicas a largo plazo, con una planificación y evaluación constantes para maximizar su impacto.
              .bg-azul-claro.p-4
                p.text-bold.mb-4 Reflexión
                span La planificación estratégica en proyectos de Inteligencia de Negocios (BI), es un proceso integral que garantiza la alineación entre las herramientas analíticas y los objetivos empresariales. La correcta ejecución de las fases de planificación permite a las organizaciones mejorar la toma de decisiones basada en datos, optimizar recursos y generar un impacto significativo en su rendimiento operativo. 

        .row.bg-azul.bg-full-width.py-4.mb-4
          div.px-5.pb-md-3.py-4.d-flex
            .col-12.col-xl-7.d-flex.ps-4.ps-xl-5.align-items-center.flex-column
              h2.mb-4.pb-2.me-auto Caso de estudio 
              p.mb-5(data-aos="fade-up") La implementación de sistemas de inteligencia de negocios requiere una planificación estructurada y adaptada al contexto de cada organización. En el PDF Caso de estudio , se presenta el desarrollo completo del proyecto realizado por RetailMax, desde la identificación del problema hasta la evaluación de resultados. A través de sus fases estratégicas, se evidencian los retos, decisiones tecnológicas y aprendizajes clave que permitieron transformar la toma de decisiones basada en datos y mejorar la eficiencia operativa en el sector retail.
              a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_Caso de estudio.pdf')" target="_blank")
                img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
                p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Caso de estudio 
            .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
              img.h-100(src='@/assets/curso/unidad/img-49.png', alt='Texto que describa la imagen')

        .bg-full-width.border-top-9-azul
          .px-5.pt-5.pb-0
            h2 Material complementario
            .row
              .col-12.col-md-6.col-lg-8
                p.d-flex.my-4
                  img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                  a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/273676") Aragón, J. & Amar Amar, J. J. (2024). Formulación de proyectos sociales en salud y gestión de riesgo: experiencias del Centro de Investigaciones en Desarrollo Humano
                p.d-flex.my-4
                  img.me-3.mb-auto.mt-1(src='@/assets/componentes/podcast-icon.svg' :style="{'max-width':'16px'}")
                  a.text-small.text-primary(target="_blank", href="https://open.spotify.com/episode/2rmz81RmDOs8Yqir7OEPWR?si=51ecb51767c0404e") [Podcast] Buchtik, L. (2025). Riesgo en programas y proyectos ágiles
              .col-12.col-md-6.col-lg-3
                figure
                  img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes es una característica fundamental de los derechos humanos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Son temporales y cambiantes',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Son universales y aplican a todas las personas',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Son exclusivos de ciertos grupos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Son opcionales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes afirmaciones sobre la diversidad cultural es correcta?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Fomenta la homogeneización cultural',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Promueve el respeto y la aceptación de las diferencias',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Debilita la identidad cultural de los pueblos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Limita las oportunidades de interacción',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'La mediación en un conflicto tiene como objetivo principal:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Imponer una solución rápida',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Facilitar el diálogo entre las partes',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Determinar la culpabilidad',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar las preocupaciones de una parte',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'En un foro comunitario, es importante:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Escuchar solo a las autoridades',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Fomentar la participación de todos los miembros',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Decidir por votación sin consultar a los demás',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Excluir las opiniones de los más jóvenes',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué busca la justicia restaurativa en el contexto de un conflicto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aplicar una sanción severa',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Reparar el daño y restablecer las relaciones',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Castigar a las partes involucradas',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar el contexto del conflicto',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
