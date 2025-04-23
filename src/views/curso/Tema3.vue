<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Control y monitoreo del rendimiento de proyectos'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.mb-4.mx-0
        .col-12.col-xl-8.d-flex.align-items-center.bg-morado-claro.p-4(data-aos="fade-right")
          p.mb-0(data-aos="fade-up") El control y monitoreo del rendimiento, son procesos fundamentales dentro de la gestión de proyectos de inteligencia de negocios (BI), dado que permiten garantizar el cumplimiento de los objetivos estratégicos, la calidad de los entregables y el uso eficiente de los recursos. Esta práctica no solo evalúa el avance del proyecto, sino que facilita la toma de decisiones oportunas y correctivas.
        .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-44.png', alt='Texto que describa la imagen')

      #t_3_1.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 3.1
          h2  Concepto y finalidad del monitoreo en proyectos BI

      .row.mb-4
        .col-4.d-none.d-xl-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-45.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          p.mb-4 En el contexto de la gestión de proyectos de inteligencia de negocios (BI), el monitoreo representa un proceso sistemático y continuo orientado a recopilar, procesar y analizar información clave sobre el avance del proyecto. Su propósito central es comparar el desempeño real frente a lo planificado, identificando brechas y oportunidades de mejora en tiempo real. Esta función no es pasiva, sino proactiva, puesto que anticipa riesgos y permite ajustes oportunos.
          p.mb-4 El control, por su parte, se refiere a la toma de decisiones tácticas y estratégicas para corregir desviaciones, garantizar la alineación con los objetivos definidos y optimizar la entrega de valor. Ambos procesos forman un ciclo permanente de retroalimentación que asegura la calidad del proyecto y su impacto en la organización.
          span Según Hernández Gutiérrez, López Calvajar y Gutiérrez Rodríguez (2022), el control de proyectos constituye un pilar fundamental del ciclo de vida, dado que “permite tomar acciones preventivas y correctivas, con base en indicadores cuantificables de desempeño”.
      
      .row.mb-4
        .col-12.col-xl-8
          .mb-4.bg-azul-claro.p-4(data-aos='fade-up')
            span Desde la perspectiva de la analítica empresarial, el monitoreo adquiere una relevancia particular, porque no solo mide entregables físicos o financieros, sino también indicadores de adopción tecnológica, calidad de los datos, satisfacción de usuarios y efectividad de modelos analíticos. Este enfoque multidimensional implica que los sistemas de BI no solo deben proveer reportes de avance, sino integrar dashboards en tiempo real, que conecten con la estrategia organizacional. 
          p.mb-4 Moreno-Monsalve y Grueso Hinestroza (2024), destacan que “el monitoreo efectivo en proyectos BI debe ir más allá de métricas operativas, enfocándose también en el impacto transformador que la inteligencia de negocios genera sobre la cultura organizacional y los procesos claves”.
          span En síntesis, el monitoreo y control son prácticas esenciales no solo para cumplir plazos o presupuestos, sino para maximizar el valor del conocimiento generado por los proyectos BI y asegurar su sostenibilidad dentro de un entorno empresarial, cambiante y digital.
        .col-4.d-none.d-xl-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-46.png', alt='Texto que describa la imagen')


      #t_3_2.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 3.2
          h2 Indicadores claves de rendimiento (KPIs) en proyectos de BI
      .row.mb-4
        .col-4.d-none.d-xl-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-47.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          .d-flex.align-items-start.bg-amarillo.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-0
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-48.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 Los Indicadores claves de rendimiento (KPIs), son métricas cuantificables que permiten medir el progreso, la eficiencia y el impacto de un proyecto respecto a sus objetivos estratégicos.
          .d-flex.align-items-start.bg-amarillo.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-49.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 En el ámbito de la Inteligencia de Negocios (BI), los KPIs son fundamentales para evaluar no solo el cumplimiento de plazos y presupuestos, sino también la calidad del análisis de datos, el nivel de adopción tecnológica y la generación de valor para la organización.
          p.mb-4 Según Fuentes Adrianzén y Carrión Barco (2021), los KPIs en proyectos de BI “deben reflejar tanto los resultados esperados como los beneficios que los usuarios obtendrán en términos de toma de decisiones basada en datos”.
          p.mb-0.text-bold Los tipos de KPIs relevantes en proyectos de B, son:
      
      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3
      
          .row.mb-4
            .col-12.col-lg-7.col-xl-8
              AcordionA(tipo="b")
                .div(titulo="KPIs de eficiencia operativa")
                  p ●	Tiempo promedio de carga de dashboards.<br><br>●	Tiempo de respuesta del sistema BI ante consultas complejas.<br><br>●	Número de tareas completadas por sprint (en enfoques ágiles).

                .div(titulo="KPIs de calidad de datos")
                  p ●	Porcentaje de registros duplicados o erróneos detectados.<br><br>●	Nivel de completitud y consistencia de las bases de datos.<br><br>●	Tiempo promedio de validación de datos, antes de su análisis.

                .div(titulo="KPIs de adopción y uso")
                  p ●	Número de usuarios activos en la herramienta BI.<br><br>●	Frecuencia de uso de reportes y paneles interactivos.<br><br>●	Nivel de satisfacción del usuario final (medido por encuestas).

                .div(titulo="KPIs estratégicos")
                  p ●	Impacto del BI en la reducción de costos operativos.<br><br>●	Incremento en la precisión de predicciones de demanda.<br><br>●	Alineación de las métricas del BI con los objetivos del negocio.

            .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
              img(src='@/assets/curso/unidad/img-50.png', alt='Texto que describa la imagen')
          
          p.mb-4 Como afirman Moreno-Monsalve y Grueso Hinestroza (2024), la correcta definición de KPIs “no debe limitarse a una visión técnica, sino que debe responder a las expectativas del cliente interno y al alineamiento con la estrategia corporativa”.

          p.mb-4 Las buenas prácticas para definir KPIs efectivos en BI, son:
          .row.mb-4.justify-content-center
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-51.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Relevancia
                p.px-1.text-small.mb-0.text-center Deben estar directamente ligados a los objetivos del proyecto.
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-52.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Medibilidad
                p.px-1.text-small.mb-0.text-center Deben tener unidades claras y métodos confiables de cálculo.
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-53.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Periodicidad
                p.px-1.text-small.mb-0.text-center Es clave establecer con qué frecuencia serán monitoreados.
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-54.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Visualización
                p.px-1.text-small.mb-0.text-center Deben ser representados gráficamente (<i>dashboards</i>, gráficas, etc.) para facilitar la interpretación por los usuarios.

      .d-flex.align-items-start.bg-azul.bg-full-width.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-55.svg', alt='Texto descriptivo de la imagen')
        .my-auto
          p.pe-xl-3.mb-0 El diseño e implementación de KPIs bien estructurados, constituye una de las fortalezas distintivas de un proyecto BI exitoso, pues permite no solo evaluar el rendimiento actual, sino orientar la toma de decisiones futuras con base en evidencia empírica y medible.

      #t_3_3.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 3.3
          h2 Herramientas de monitoreo y control en BI

      .row.mb-4
        .col-4.d-none.d-xl-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-56.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          .mb-4.bg-azul-claro.p-4(data-aos='fade-up')
            span La implementación de herramientas tecnológicas es esencial para llevar a cabo un monitoreo y control efectivos en proyectos de Inteligencia de Negocios. Estas herramientas permiten centralizar la información, automatizar la generación de reportes, visualizar indicadores claves de rendimiento (KPIs) en tiempo real y facilitar la toma de decisiones basada en datos.
          p.mb-4 De acuerdo con Hernández Gutiérrez, López Calvajar y Gutiérrez Rodríguez (2022), “la supervisión automatizada de proyectos mediante plataformas BI, mejora la capacidad de reacción ante desviaciones y fortalece el enfoque estratégico del análisis”.
          span Las herramientas destacadas para el monitoreo de proyectos BI, son:

      .row.mb-4
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Microsoft Power BI")
              p ●	Permite crear dashboards interactivos, alertas automáticas y reportes personalizados.<br><br>●	Integración con múltiples fuentes (Excel, SQL Server, Azure, etc.).<br><br>●	Visualización en tiempo real de KPIs y análisis comparativos entre áreas de la organización.

            .div(titulo="Tableau")
              p ●	Potente motor gráfico y facilidad de uso para usuarios no técnicos.<br><br>●	Ideal para el análisis visual de grandes volúmenes de datos.<br><br>●	Permite control de accesos, trazabilidad de datos y actualizaciones programadas.

            .div(titulo="Google Looker Studio (antes Data Studio)")
              p ●	Integración con plataformas de Google (BigQuery, Analytics, Sheets).<br><br>●	Útil para pequeñas y medianas empresas por su carácter gratuito y fácil despliegue.<br><br>●	Soporte para reportes colaborativos y monitoreo de campañas digitales.

        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-57.png', alt='Texto que describa la imagen')

      .row.mb-4
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-58.png', alt='Texto que describa la imagen')
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Qlik Sense")
              p ●	Tecnología asociativa que permite explorar datos sin rutas predefinidas.<br><br>●	Indicadores de desempeño personalizables y análisis predictivo mediante IA.<br><br>●	Recomendado para escenarios donde se requiere exploración libre y descentralizada.

            .div(titulo="Jira + Confluence (para gestión ágil del proyecto)")
              p ●	Jira permite el seguimiento de tareas, sprints y velocidad de equipos.<br><br>●	Confluence sirve como repositorio documental de avances, retrospectivas y bitácoras.

            .div(titulo="Asana / Monday / Trello")
              p ●	Herramientas de gestión de tareas y cronogramas con integración a BI.<br><br>●	Ayudan a visualizar el progreso y las responsabilidades del equipo.

      p.mb-4 Consideraciones al seleccionar herramientas de monitoreo:

      .row.mb-4.bg-azul-claro.bg-full-width.p-4.pb-xl-0
        .col-12.col-xl-8.d-flex
          .my-auto
            p.mb-4 ●	<b>Escalabilidad.</b> La herramienta debe permitir el crecimiento del volumen de datos y usuarios.<br><br>●	<b>Usabilidad.</b> Debe ser intuitiva y permitir la autogestión de reportes, por parte del usuario final.<br><br>●	<b>Seguridad.</b> Control de accesos, cifrado de datos y respaldo automático, son aspectos claves.<br><br>●	<b>Integrabilidad.</b> Capacidad de conectarse con sistemas existentes en la organización (ERP, CRM, bases de datos).

            span Según Fuentes Adrianzén y Carrión Barco (2021), la integración adecuada de herramientas de monitoreo en BI “contribuye a cerrar el ciclo entre los objetivos estratégicos, la operación diaria y la retroalimentación para la mejora continua”.
        .col-4.d-none.d-xl-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-59.png', alt='Texto que describa la imagen')

      #t_3_4.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 3.4
          h2 Prácticas recomendadas para el control de proyectos BI

      p.mb-4 La gestión eficiente del control en proyectos de <i>Business Intelligence</i> no solo garantiza el cumplimiento de objetivos, sino que permite reaccionar a tiempo ante desviaciones, promoviendo una cultura basada en datos y mejora continua. A continuación, se describen algunas prácticas claves:
      .row.mb-4
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-60.png', alt='Texto que describa la imagen')
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Revisiones periódicas (Daily/Weekly Reviews)")
              p Las reuniones de seguimiento en intervalos regulares fomentan la transparencia del avance del proyecto. Permiten detectar desviaciones tempranas, validar entregables parciales y ajustar prioridades, integrando activamente a todos los <i>stakeholders</i>.
            .div(titulo="Métricas objetivas y compartidas")
              p Los indicadores claves de rendimiento (KPIs) deben ser medibles, relevantes y comprensibles por todos los miembros del equipo. Establecer una línea base, metas esperadas y criterios de éxito, facilita la evaluación del impacto de las acciones y decisiones.
            .div(titulo="Alertas automatizadas y tableros de control visual")
              p Plataformas como Power BI, Tableau o Looker, permiten configurar notificaciones automáticas cuando se superan umbrales críticos. Esto posibilita una respuesta oportuna y reduce la dependencia del monitoreo manual, mejorando la eficiencia operativa.
            .div(titulo="Toma de decisiones respaldada en evidencia")
              p Cada acción correctiva o ajuste de estrategia debe sustentarse en análisis de datos objetivos, evitando la intuición o la improvisación. La trazabilidad de decisiones fortalece la rendición de cuentas y aumenta la credibilidad del sistema BI.

      .d-flex.align-items-start.bg-azul.bg-full-width.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-61.svg', alt='Texto descriptivo de la imagen')
        .my-auto
          p.pe-xl-3.mb-0 Como lo afirma Joyanes Aguilar (2020), “la automatización del monitoreo a través de visualizaciones comprensibles, no solo fortalece la comunicación entre áreas, sino que agiliza la respuesta ante incidentes o desviaciones relevantes del proyecto”.

      #t_3_5.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 3.5
          h2 Estudio de caso. Monitoreo de un proyecto BI en entorno logístico y de salud

      p.mb-4 El monitoreo y control en proyectos de <i>Business Intelligence (BI)</i> son fundamentales para garantizar la eficiencia operativa, permite alinear el desempeño con los objetivos estratégicos, facilitando decisiones oportunas y mejora continua. A continuación, se presentan dos casos que ilustran la aplicación efectiva de estas prácticas, en contextos reales.
      p.mb-4.text-bold Caso 1. Optimización logística con BI

      .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Contexto
                p Una empresa de logística decide implementar un sistema de BI para mejorar la eficiencia en la entrega de pedidos a nivel nacional. El objetivo principal era optimizar rutas y reducir los tiempos de distribución.
              .d-none.d-lg-block.col-md-6.col-lg-5.col-xl-4(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-62.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Indicadores de control definidos 
                p ●	Tiempo de implementación vs. cronograma inicial.<br><br>●	Porcentaje de entregas optimizadas por el sistema BI.<br><br>●	Nivel de satisfacción de los usuarios del dashboard.

              .d-none.d-lg-block.col-md-6.col-lg-5.col-xl-4(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-63.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Solución técnica
                p Se implementaron tableros en Power BI con integración de datos en tiempo real y alertas automáticas para detectar cuellos de botella. Los usuarios internos participaron en el ajuste de métricas y pruebas iterativas.
              .d-none.d-lg-block.col-md-6.col-lg-5.col-xl-4(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-64.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Resultados
                p ●	Reducción del 18 % en los tiempos promedio de entrega.<br><br>●	Mayor aceptación del sistema, por parte del personal operativo.<br><br>●	Mejor visibilidad del proceso logístico, a través de KPIs.

              .d-none.d-lg-block.col-md-6.col-lg-5.col-xl-4(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-65.png', alt='Texto que describa la imagen')
      p.mb-4 Según Moreno-Monsalve y Grueso Hinestroza (2024), el éxito de este proyecto se debió a la integración temprana de herramientas de monitoreo y la participación constante de los usuarios finales.
      p.mb-4.text-bold Caso 2. Proyecto BI en red de clínicas privadas

      .row.mb-4
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-66.png', alt='Texto que describa la imagen')
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Contexto organizacional")
              p Una cadena de clínicas privadas en Colombia, enfrentaba dificultades en la generación de reportes y seguimiento de indicadores operativos. Se decide desarrollar un sistema BI para mejorar la atención al paciente y la eficiencia administrativa.
            .div(titulo="Problemáticas detectadas")
              p ●	Reportes manuales y desactualizados.<br><br>●	KPIs clínicos no trazables.<br><br>●	Baja coordinación entre áreas clínicas y administrativas.

            .div(titulo="Solución implementada")
              p El equipo de proyecto (analistas, médicos, TI y gerentes) desarrolló un <i>dashboard</i> centralizado en Power BI y gestionó el proyecto, mediante marcos ágiles con Jira y Confluence.

      .row.mb-4
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Indicadores monitoreados")
              p ●	Tiempo promedio de espera en urgencias.<br><br>●	Tasa de ocupación de camas.<br><br>●	Índice de satisfacción del paciente.<br><br>●	Errores en la  prescripción médica.<br><br>●	Costos operativos por sede.

            .div(titulo="Herramientas utilizadas")
              p ●	<b>Power BI.</b> Visualización y automatización de KPIs.<br><br>●	<b>SQL Server.</b> Consolidación de datos.<br><br>●	<b>Jira.</b> Seguimiento de sprints y tareas.<br><br>●	<b>Confluence.</b> Documentación de retrospectivas y aprendizajes.

            .div(titulo="Resultados tras seis meses")
              p ●	Disminución del 40 % en tiempos de espera.<br><br>●	25 % de mejora en programación de cirugías.<br><br>●	20 % de aumento en satisfacción del paciente.<br><br>●	Cultura organizacional orientada a decisiones basadas en datos.

        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-67.png', alt='Texto que describa la imagen')

      .d-flex.align-items-start.bg-azul.bg-full-width.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-68.svg', alt='Texto descriptivo de la imagen')
        .my-auto
          p.pe-xl-3.mb-0 Como afirman Hernández Gutiérrez, López Calvajar y Gutiérrez Rodríguez (2022), el éxito del monitoreo y control en proyectos de BI, radica en la alineación estratégica, la formación del equipo y el uso de metodologías ágiles, con herramientas colaborativas.


      .bg-full-width.border-top.actividad(style='background-color: #ebf1f5; border-top: 5px solid #f5c145 !important').mb-5
        .p-4.p-md-5
          #Actividad
            <Actividad :cuestionario='cuestionario'/>

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/58548") Gonzalez X. (2016) ¿cómo planificar un proyecto de inteligencia de negocio? Editorial UOC
              
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=okffVUx69zQ") [Vídeo] Universidade da Coruña. (24 de mayo 2021). 4.7. Seguimiento y evaluación
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
  data: () => ({
    cuestionario: {
      tema: 'Business Intelligence y Gestión de Proyectos',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de las siguientes opciones corresponde a una práctica recomendada para el control de proyectos BI?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ejecutar el proyecto sin interrupciones ni retroalimentación',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tomar decisiones sin depender de datos',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Utilizar alertas automatizadas para detectar desviaciones',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Reunirse solo al final del proyecto para presentar resultados',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'El modelo ADKAR facilita la gestión del cambio en proyectos de BI mediante fases como conciencia, deseo, conocimiento, habilidad y refuerzo.',
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
            'Relaciona los perfiles de un equipo de BI con su función principal: <br><br>A. Data Engineer, <br>B. Product Owner, <br>C. BI Developer<br><br>1. Prioriza requerimientos y representa al cliente<br>2. Construye arquitecturas de datos y mantiene pipelines<br>3. Crea dashboards e informes interactivos',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'A-3, B-2, C-1', esCorrecta: false },
            { id: 'b', texto: 'A-2, B-1, C-3', esCorrecta: true },
            { id: 'c', texto: 'A-1, B-3, C-2', esCorrecta: false },
            { id: 'd', texto: 'A-3, B-1, C-2', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuáles de los siguientes son indicadores clave de desempeño (KPIs) en proyectos de BI? (Selecciona todas las que apliquen)',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tasa de errores en prescripciones médicas',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Porcentaje de entregas a tiempo',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Tiempo de ejecución de reuniones del equipo',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Velocidad del equipo por sprint',
              esCorrecta: true,
            },
            {
              id: 'e',
              texto: 'Número de usuarios activos del sistema BI',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'En un proyecto de BI en el sector salud, se implementa un dashboard para monitorear tiempos de espera en urgencias. ¿Qué dos beneficios se esperaría obtener al aplicar correctamente herramientas de monitoreo y control?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reducción del tiempo promedio de espera y mejora en la toma de decisiones clínicas con base en datos actualizados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aumento de la burocracia y documentación requerida.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reducción de la participación del personal médico en la toma de decisiones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incremento en los costos operativos y de personal.',
              esCorrecta: false,
            },
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
