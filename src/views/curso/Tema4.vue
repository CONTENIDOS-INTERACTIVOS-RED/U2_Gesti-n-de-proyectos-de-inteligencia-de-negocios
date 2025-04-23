<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'4. Evaluación de riesgos en proyectos de Inteligencia de Negocios (BI)'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-4
        .col-4.d-none.d-xl-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-50.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8(data-aos="fade-up")
          .d-flex.align-items-start.bg-azul.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-51.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 La gestión de riesgos en proyectos de Inteligencia de Negocios (BI) es una actividad clave para identificar, analizar y mitigar posibles problemas que puedan comprometer la efectividad del proyecto. Un riesgo mal gestionado puede traducirse en pérdida de tiempo, sobrecostos, mala calidad de los datos y, en última instancia, el fracaso del proyecto (Moreno-Monsalve & Grueso Hinestroza, 2024).
          span En este tema, exploraremos los tipos de riesgos en proyectos de BI, metodologías de evaluación y estrategias de mitigación, con el fin de mejorar la planificación y ejecución de iniciativas de analítica de datos dentro de las organizaciones.

      #t_4_1.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 4.1
          h2 ¿Qué es la evaluación de riesgos en proyectos de BI?

      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3
          
          .row.mb-4
            .col-12.col-xl-8(data-aos="fade-up")
              p.mb-4 La evaluación de riesgos es el proceso de identificar, analizar y priorizar posibles eventos adversos que podrían impactar el desarrollo del proyecto. En el contexto de Inteligencia de Negocios, estos riesgos pueden estar relacionados con la calidad de los datos, la integración de sistemas, la resistencia al cambio o la seguridad de la información (Fuentes Adrianzén & Carrión Barco, 2021).
              .bg-morado-claro.p-4.mb-4(data-aos='fade-up')
                span Según PMI (2021), la evaluación de riesgos es una práctica fundamental en la gestión de proyectos, permitiendo anticiparse a posibles problemas y desarrollar estrategias para mitigarlos.
              span Los beneficios de la evaluación de riesgos en BI, son:
            .col-4.d-none.d-xl-block(data-aos="zoom-in")
              img(src='@/assets/curso/unidad/img-52.png', alt='Texto que describa la imagen')

          .row.mb-4.justify-content-center
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-53.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Reducción de incertidumbre
                p.px-1.text-small.mb-0.d-flex.text-center Permite anticipar problemas antes de que afecten el proyecto.
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-54.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Optimización de recursos
                p.px-1.text-small.mb-0.d-flex.text-center Ayuda a evitar gastos innecesarios derivados de errores en la ejecución.
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-55.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Mayor calidad de datos
                p.px-1.text-small.mb-0.d-flex.text-center Minimiza la posibilidad de trabajar con información incorrecta o inconsistente.
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-56.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Aseguramiento del cumplimiento normativo
                p.px-1.text-small.mb-0.d-flex.text-center Evita sanciones por incumplimiento de regulaciones en protección de datos.

      #t_4_2.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 4.2
          h2 Tipos de riesgos en proyectos de BI

      p.mb-4 Los riesgos en proyectos de Inteligencia de Negocios, pueden clasificarse en cuatro categorías principales:

      .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Riesgos técnicos
                p.mb-2 Se refieren a problemas relacionados con la infraestructura tecnológica y el desarrollo del sistema BI.
                p.text-bold.mb-2 Ejemplos:
                p.mb-3 ●	Falta de compatibilidad entre sistemas y bases de datos.<br>●	Errores en la integración de datos provenientes de diferentes fuentes.<br>●	Problemas en la escalabilidad de la infraestructura de BI. 
                span Según Malagón Barinas (2019), uno de los mayores desafíos en proyectos de BI es la correcta integración de datos de múltiples sistemas, lo que requiere una planificación cuidadosa.
              .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-57.png', alt='Texto que describa la imagen')      
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Riesgos organizacionales
                p.mb-2 Están asociados con la resistencia al cambio y la falta de alineación con los objetivos de negocio.
 
                p.text-bold.mb-2 Ejemplos:
                p.mb-3 ●	Baja adopción de las herramientas BI por parte de los empleados.<br>●	Falta de liderazgo y compromiso de la alta dirección.<br>●	Cambios en la estrategia empresarial que afectan el alcance del proyecto.
                span Moreno-Monsalve y Grueso Hinestroza (2024) destacan que la gestión del cambio es un factor clave en la implementación de BI, ya que el éxito del proyecto depende de la participación activa de los usuarios.
              .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-58.png', alt='Texto que describa la imagen')      
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Riesgos de datos
                p.mb-2 Se relacionan con la calidad, integridad y seguridad de los datos utilizados en el proyecto.

                p.text-bold.mb-2 Ejemplos:
                p.mb-3 ●	Datos duplicados, inconsistentes o desactualizados.<br>●	Falta de estándares en la gobernanza de datos.<br>●	Brechas de seguridad que comprometen información sensible.
                span Adrianzén y Carrión Barco (2021), señalan que una mala calidad de datos impacta directamente en la precisión de los análisis y reportes de BI, afectando la toma de decisiones.
              .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-59.png', alt='Texto que describa la imagen')      
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Riesgos financieros y de cronograma
                p.mb-2 Se refieren a sobrecostos y retrasos en la entrega del proyecto.

                p.text-bold.mb-2 Ejemplos:
                p.mb-3 ●	Subestimación de costos en la implementación de BI.<br>●	Falta de personal capacitado, lo que retrasa el desarrollo.<br>●	Cambios constantes en los requerimientos del proyecto.
                span PMI (2021), recomienda que los proyectos de BI cuenten con un presupuesto flexible y planes de contingencia para evitar sobrecostos.
              .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-60.png', alt='Texto que describa la imagen')      


      #t_4_3.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 4.3
          h2 Metodologías para la evaluación de riesgos en BI 

      p.mb-4 Existen diversas metodologías para evaluar los riesgos en proyectos de BI. A continuación, presentamos las más utilizadas:
      TabsC.mb-4
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Matriz de Riesgos (impacto vs. probabilidad)', :icon="require('@/assets/curso/unidad/img-61.svg')")
          .row
            p.text-bold.mb-3 Matriz de Riesgos (impacto vs. probabilidad)
            p.mb-4 Esta técnica permite clasificar los riesgos según su probabilidad de ocurrencia y su impacto en el proyecto.
            p.mb-3 Ejemplo de Matriz de Riesgos en BI:
            .tabla-a.mb-4
              table
                thead
                  tr
                    th(width="25%").bg-morado.text-white.text-center Riesgo 
                    th(width="20%").bg-morado.text-white.text-center Probabilidad
                    th(width="20%").bg-morado.text-white.text-center Impacto
                    th(width="35%").bg-morado.text-white.text-center Acción recomendada
                tbody
                  tr
                    td.text-center Integración deficiente de datos
                    td.text-center Alta.
                    td.text-center Alta.
                    td.text-center Implementar pruebas continuas y data <i>governance</i>.
                  tr
                    td.text-center Baja adopción de BI
                    td.text-center Media.
                    td.text-center Alta.
                    td.text-center Capacitación intensiva para usuarios finales.
                  tr
                    td.text-center Falta de estándares en datos
                    td.text-center Alta.
                    td.text-center Media.
                    td.text-center Implementar un equipo de gestión de calidad de datos.
                  tr
                    td.text-center Sobrecostos en el proyecto
                    td.text-center Baja.
                    td.text-center Alta.
                    td.text-center Establecer un presupuesto con contingencias.
            span Según Malagón Barinas (2019), el uso de una matriz de riesgos ayuda a priorizar las amenazas más críticas para el éxito del proyecto.
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Análisis FMEA (Failure Mode and Effect Analysis)', :icon="require('@/assets/curso/unidad/img-61.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-62.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Análisis FMEA (Failure Mode and Effect Analysis)
              p(data-aos='fade-up').mb-3 El <b>FMEA</b> permite identificar <b>modos de falla</b>, sus causas y sus efectos en el proyecto de BI.
              p.text-bold.mb-2 Ejemplo de aplicación en BI:
              p.mb-3 ●	Identificación de fallas en la carga de datos.<br>●	Evaluación del impacto de errores en reportes financieros.<br>●	Implementación de planes de corrección ante inconsistencias en dashboards.

              span Según PMI (2021), el análisis FMEA es una metodología efectiva para minimizar errores en la implementación de herramientas de BI, mejorando la confiabilidad de los datos.
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Análisis Monte Carlo en BI', :icon="require('@/assets/curso/unidad/img-61.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-63.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Análisis Monte Carlo en BI
              p(data-aos='fade-up').mb-3 El método <b>Monte Carlo</b> se usa para evaluar incertidumbre en proyectos de BI mediante simulaciones de posibles escenarios. 
              p.text-bold.mb-2 Ejemplo de aplicación:
              p.mb-3 ●	Predicción del impacto de fluctuaciones en los datos de ventas.<br>●	Análisis de variaciones en el rendimiento de los dashboards en distintos niveles de carga de datos.

              span Fuentes Adrianzén y Carrión Barco (2021), afirman que Monte Carlo es útil en BI cuando se deben analizar múltiples escenarios de incertidumbre en el negocio.  
              
      #t_4_4.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 4.4
          h2 Estrategias para mitigar riesgos en proyectos de BI

      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3
          p.mb-4 Las principales estrategias de mitigación, son:
          .row.mb-5
            .col-4.d-none.d-xl-block(data-aos="zoom-in")
              img(src='@/assets/curso/unidad/img-64.png', alt='Texto que describa la imagen')
            .col-12.col-xl-8(data-aos="fade-up")
              SlyderF(columnas='col-12 col-lg-6 py-4 px-3')
                .custom-image-card.d-flex.flex-column.p-4.py-md-5
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-65.svg', style='width: 80px')
                  p.text-bold.mb-4.text-center Capacitación y adopción del cambio
                  p.px-1.text-small.mb-0.d-flex.text-center Fomentar una cultura de datos en la organización.
                .custom-image-card.d-flex.flex-column.p-4.py-md-5
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-66.svg', style='width: 80px')
                  p.text-bold.mb-4.text-center Gobernanza de datos
                  p.px-1.text-small.mb-0.d-flex.text-center Implementar políticas claras sobre la calidad y seguridad de la información.
                .custom-image-card.d-flex.flex-column.p-4.py-md-5
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-67.svg', style='width: 80px')
                  p.text-bold.mb-4.text-center Pruebas continuas
                  p.px-1.text-small.mb-0.d-flex.text-center Verificación de los modelos de BI antes de su implementación.
                .custom-image-card.d-flex.flex-column.p-4.py-md-5
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-68.svg', style='width: 80px')
                  p.text-bold.mb-4.text-center Presupuesto flexible
                  p.px-1.text-small.mb-0.d-flex.text-center Planificar márgenes de seguridad ante imprevistos.
                .custom-image-card.d-flex.flex-column.p-4.py-md-5
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-69.svg', style='width: 80px')
                  p.text-bold.mb-4.text-center Monitoreo y ajustes
                  p.px-1.text-small.mb-0.d-flex.text-center Revisión periódica de indicadores de éxito en BI.

      p.mb-4 Según Moreno-Monsalve y Grueso Hinestroza (2024), la gestión proactiva de riesgos permite garantizar el éxito a largo plazo de los proyectos de BI, evitando fallos en la integración y uso de herramientas analíticas.

      h2 Conclusión

      .bg-azul.p-4.mb-5(data-aos='fade-up')
        span La evaluación de riesgos es una fase fundamental en la gestión de proyectos de BI, dado que permite anticipar y mitigar problemas que pueden afectar la calidad de los datos, la integración de sistemas y la adopción por parte de los usuarios. La aplicación de metodologías como la Matriz de Riesgos, FMEA y Monte Carlo ayuda a reducir la incertidumbre y a optimizar la toma de decisiones. 

      .bg-full-width.border-top.actividad(style='background-color: #ebf1f5; border-top: 5px solid #f5c145 !important')
        .p-4.p-md-5
          #Actividad
            <Actividad :cuestionario='cuestionario'/>

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'UNIDAD 1',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de las siguientes afirmaciones describe mejor la gestión de proyectos?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Es un proceso continuo que se realiza de manera indefinida en la organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Es un esfuerzo temporal con un inicio y un fin definidos, destinado a crear un producto, servicio o resultado único.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Es una actividad repetitiva que se basa en la producción en serie dentro de una empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Se enfoca únicamente en la administración de costos dentro de una organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'En la gestión de proyectos de inteligencia de negocios (BI), las metodologías ágiles son más recomendables que las tradicionales en entornos dinámicos y cambiantes.',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'El modelo ___________ es una metodología tradicional de gestión de proyectos que sigue un enfoque secuencial donde cada fase debe completarse antes de pasar a la siguiente.',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Scrum', esCorrecta: false },
            { id: 'b', texto: 'Kanban', esCorrecta: false },
            { id: 'c', texto: 'Waterfall', esCorrecta: true },
            { id: 'd', texto: 'Lean', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
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
