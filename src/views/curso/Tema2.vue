<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Gestión de equipos de trabajo en proyectos de analítica'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.mb-4.mx-0
        .col-12.col-xl-8.d-flex.align-items-center.bg-morado-claro.p-4(data-aos="fade-right")
          p.mb-0(data-aos="fade-up") La gestión de equipos en proyectos de analítica de datos, es una competencia crítica para asegurar el éxito de las soluciones de inteligencia de negocios. Estos proyectos exigen una alta coordinación entre perfiles multidisciplinarios y un enfoque colaborativo que permita generar valor, a partir de los datos, transformando la información en decisiones estratégicas.
        .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')
      
      #t_2_1.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.1
          h2 Importancia de los equipos colaborativos en proyectos BI

      .row.mb-4
        .col-5.d-none.d-xl-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')
        .col-12.col-xl-7
          .d-flex.align-items-start.bg-azul-claro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-12.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 Un proyecto de analítica de datos o de inteligencia de negocios (BI), no puede considerarse exitoso únicamente por la implementación tecnológica. La clave radica en las personas que lo ejecutan: profesionales capaces de analizar datos, contextualizarlos en los procesos del negocio y convertirlos en conocimiento accionable. En este sentido, los equipos colaborativos son el motor que impulsa la transformación basada en datos dentro de las organizaciones.
          span Según Moreno-Monsalve y Grueso Hinestroza (2024), el éxito de una solución BI se fundamenta en una estructura organizacional flexible que promueva la autonomía de los equipos, combinada con una estrategia clara de gestión del talento. Esta afirmación resalta que la inteligencia organizacional no surge solo de los sistemas, sino del trabajo conjunto de individuos con roles y competencias diferenciadas, pero orientados a objetivos comunes.
      
      p.mb-4 Las siguientes características son esenciales para potenciar la colaboración efectiva en un equipo de proyectos de analítica:

      .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Visión compartida
                p Todo el equipo debe comprender y alinearse con los objetivos estratégicos del proyecto. Esta claridad evita esfuerzos dispersos, reduce la resistencia al cambio y fortalece el sentido de propósito colectivo.
              .d-none.d-lg-block.col-md-6.col-lg-5.col-xl-4(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Comunicación fluida
                p La comunicación horizontal entre perfiles técnicos, analíticos y de negocio garantiza la comprensión mutua, la identificación temprana de errores y la adaptación rápida ante cambios de requerimientos.
              .d-none.d-lg-block.col-md-6.col-lg-5.col-xl-4(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Roles definidos
                p Asignar responsabilidades claras, como analistas, desarrolladores de BI, científicos de datos, responsables de negocio, entre otros, permite evitar duplicidades, conflictos de autoridad y cuellos de botella en la toma de decisiones.
              .d-none.d-lg-block.col-md-6.col-lg-5.col-xl-4(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Capacidad adaptativa
                p La analítica de datos exige iteración constante. Los equipos deben estar preparados para rediseñar modelos, replantear hipótesis o cambiar enfoques tecnológicos, según la retroalimentación obtenida del negocio o de los usuarios finales. Esta adaptabilidad es clave en entornos de innovación, donde los resultados esperados, pueden no ser evidentes al inicio.
              .d-none.d-lg-block.col-md-6.col-lg-5.col-xl-4(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')

      .row.mb-4
        .col-4.d-none.d-xl-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          p.mb-4 Además, de acuerdo con Fuentes Adrianzén y Carrión Barco (2021), los equipos de BI exitosos se caracterizan por fomentar una cultura de datos en toda la organización, que implica no solo acceso a información, sino también habilidades para interpretarla, cuestionarla y utilizarla estratégicamente.
          .bg-azul-claro.p-4(data-aos='fade-up')
            span En resumen, los equipos colaborativos en BI, son una combinación de liderazgo distribuido, metodologías ágiles y cultura organizacional orientada a la toma de decisiones basada en evidencia. Invertir en la formación, cohesión y madurez de estos equipos, representa un factor determinante para la sostenibilidad y el impacto de los proyectos analíticos. 
      
      #t_2_2.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.2
          h2 Perfiles claves en un equipo de analítica de datos

      .row.mb-4
        .col-12.col-xl-8
          p.mb-4 En los proyectos de inteligencia de negocios (BI), el éxito no solo radica en la tecnología empleada, sino en la capacidad de los equipos para traducir datos en decisiones accionables. Por ello, la composición del equipo de trabajo debe ser cuidadosamente estructurada, integrando perfiles diversos que aporten desde lo técnico, lo analítico y lo estratégico. Esta integración armónica potencia la innovación, agiliza la toma de decisiones y mejora la generación de valor organizacional.
          .d-flex.align-items-start.bg-azul-claro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-18.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 Según Joyanes Aguilar (2020), los equipos de BI deben estar conformados por profesionales que combinen habilidades de gestión, programación, análisis estadístico, comunicación visual y conocimiento profundo del negocio. La conjunción de estos perfiles permite abordar con éxito los retos multidimensionales que implican los datos en entornos complejos.
          span A continuación, se describen los roles fundamentales que conforman un equipo de BI y sus funciones claves:
        .col-4.d-none.d-xl-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')

      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3

          .row.mb-4
            .col-4.d-none.d-xl-block(data-aos="zoom-in")
              img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')
            .col-12.col-xl-8
              SlyderF(columnas='col-12 col-lg-6 py-4 px-3')
                .custom-image-card.d-flex.flex-column.p-4.py-md-5
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-21.svg', style='width: 80px')
                  p.text-bold.mb-4.text-center <i>Data Engineer</i>
                  p.px-1.text-small.mb-0.text-center Diseña y mantiene <i>pipelines</i> de datos, gestiona la calidad, transformación y disponibilidad de datos desde múltiples fuentes. Es responsable de construir y mantener arquitecturas como <i>data lakes</i> o <i>data warehouses</i>.
                .custom-image-card.d-flex.flex-column.p-4.py-md-5
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-22.svg', style='width: 80px')
                  p.text-bold.mb-4.text-center <i>Data Scientist</i>
                  p.px-1.text-small.mb-0.text-center Desarrolla modelos predictivos y de <i>machine learning</i>, aplica técnicas estadísticas para descubrir patrones y aportar valor anticipado al negocio. Trabaja estrechamente con analistas y expertos funcionales.
                .custom-image-card.d-flex.flex-column.p-4.py-md-5
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-23.svg', style='width: 80px')
                  p.text-bold.mb-4.text-center <i>Data Analyst</i>
                  p.px-1.text-small.mb-0.text-center Interpreta conjuntos de datos, diseña reportes, y genera análisis descriptivos y visualizaciones que facilitan la toma de decisiones tácticas. Suele ser el vínculo entre lo técnico y el usuario final.
                .custom-image-card.d-flex.flex-column.p-4.py-md-5
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-24.svg', style='width: 80px')
                  p.text-bold.mb-4.text-center <i>BI Developer</i>
                  p.px-1.text-small.mb-0.text-center Configura herramientas como Power BI, Tableau o Qlik, creando <i>dashboards interactivos</i>, cuadros de mando e informes ejecutivos basados en indicadores claves (KPIs). Su labor es esencial en la visualización de resultados.
                .custom-image-card.d-flex.flex-column.p-4.py-md-5
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-25.svg', style='width: 80px')
                  p.text-bold.mb-4.text-center <i>Product Owner</i> (PO)
                  p.px-1.text-small.mb-0.text-center Representa al negocio dentro del equipo. Define la visión del proyecto, prioriza requerimientos, valida entregables y mantiene la alineación estratégica entre el desarrollo técnico y las necesidades del usuario.
                .custom-image-card.d-flex.flex-column.p-4.py-md-5
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-26.svg', style='width: 80px')
                  p.text-bold.mb-4.text-center <i>Scrum Master</i> o Facilitador
                  p.px-1.text-small.mb-0.text-center Promueve metodologías ágiles como <i>Scrum o Kanban</i>, facilita reuniones, remueve obstáculos, y garantiza el cumplimiento de los principios de mejora continua, transparencia y colaboración dentro del equipo.
                .custom-image-card.d-flex.flex-column.p-4.py-md-5 
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-27.svg', style='width: 80px')
                  p.text-bold.mb-4.text-center Expertos de Dominio
                  p.px-1.text-small.mb-0.text-center No siempre son técnicos, pero poseen amplio conocimiento del negocio. Participan en la validación de hipótesis analíticas y en la traducción de los datos a realidades organizacionales concretas.
      .row.mb-4
        .col-12.col-xl-8
          p.mb-4 La existencia de estos perfiles no implica una estructura rígida. En equipos ágiles, algunos roles pueden fusionarse o rotarse dependiendo de la madurez del proyecto, los recursos disponibles y el nivel de automatización del entorno analítico.
          p.mb-4 Además, la creciente complejidad de los datos y las expectativas organizacionales, demandan que todos los miembros del equipo desarrollen habilidades de comunicación efectiva, pensamiento crítico y comprensión del impacto ético de los datos. Por ello, la formación continua y la cultura de aprendizaje, son pilares fundamentales.
          .bg-azul.p-4(data-aos='fade-up')
            span <b>Enfoque recomendado.</b> Para potenciar la efectividad del equipo, se recomienda aplicar el modelo de liderazgo distribuido, donde cada integrante asume la responsabilidad de liderar desde su conocimiento técnico y su rol funcional, promoviendo una dinámica horizontal de cocreación, tal como lo proponen Moreno-Monsalve y Grueso Hinestroza (2024). 
        .col-4.d-none.d-xl-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')

      #t_2_3.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.3
          h2 Metodologías ágiles para gestionar equipos BI

      .row.mb-4
        .col-4.d-none.d-xl-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          p.mb-4 En entornos donde los requerimientos cambian con frecuencia, como en los proyectos de inteligencia de negocios (BI), las metodologías ágiles representan una alternativa eficaz para gestionar la complejidad, promover la adaptabilidad y asegurar entregas continuas de valor. A diferencia de los enfoques tradicionales, los marcos de trabajo ágiles permiten al equipo de BI mantener un ritmo constante de iteración, aprendizaje y mejora, aspectos claves cuando se trabaja con datos en constante evolución.
          .d-flex.align-items-start.bg-amarillo.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-30.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 Según Fuentes Adrianzén y Carrión Barco (2021), la adopción de principios ágiles en equipos de BI mejora significativamente la capacidad de respuesta ante requerimientos del negocio, disminuye el tiempo de entrega de soluciones analíticas y reduce el índice de fallos en los desarrollos de dashboards, modelos y reportes.
          span Los marcos de trabajo ágiles más aplicados en BI, son:
      p.mb-4 <b>Tabla 1.</b> <i>Marcos de trabajo ágiles más aplicados en BI</i>

      .tabla-a.mb-4
        table
          thead
            tr
              th(width="15%").text-bold.bg-amarillo-oscuro.text-center Metodología
              th.text-bold.bg-amarillo-oscuro.text-center Características claves
              th.text-bold.bg-amarillo-oscuro.text-center Aplicación en proyectos BI
          tbody
            tr
              td.text-bold <i>Scrum</i>
              td Ciclos cortos de trabajo (<i>sprints</i>), roles definidos (<i>Scrum Master</i>, <i>Product Owner</i>, Equipo de Desarrollo), reuniones diarias y retrospectivas
              td Ideal para equipos que desarrollan <i>dashboards</i>, modelos predictivos o integraciones en etapas. Permite validar entregables continuamente con <i>Stakeholders</i>.
            tr
              td.text-bold <i>Kanban</i>
              td Flujo de trabajo visual, priorización dinámica, entrega continua
              td Útil para equipos que reciben tareas constantes, como soporte de reportes, mantenimiento de datos y análisis <i>ad-hoc</i>. Reduce cuellos de botella y promueve la eficiencia.
            tr
              td.text-bold <i>Scrumban</i>
              td Híbrido entre <i>Scrum y Kanban</i>. Combina planificación estructurada con flexibilidad visual.
              td Recomendado cuando el equipo debe responder rápidamente a cambios, pero manteniendo orden en la planificación de entregas. Se adapta bien a entornos de BI internos.

      p.mb-4 Ahora, los principios ágiles aplicados a equipos de BI, son:
      .row.mb-4
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Iteración y mejora continua")
              p El desarrollo se organiza en ciclos breves (por ejemplo, de dos semanas), al final de los cuales se revisan los avances, se recogen comentarios y se ajustan las prioridades. Esto permite probar hipótesis analíticas de forma incremental.
            .div(titulo="Participación activa del cliente interno")
              p El usuario final del sistema BI (gerente, analista de negocio, área financiera) participa desde el inicio, proporcionando retroalimentación constante que garantiza que los <i>dashboards</i>, indicadores y reportes, respondan a necesidades reales.
            .div(titulo="Reuniones de revisión y retrospectiva")
              p En cada sprint se revisan resultados con el equipo y <i>stakeholders</i>, y se realiza una retrospectiva para identificar mejoras en el proceso de trabajo. Esto fomenta el aprendizaje organizacional.
            .div(titulo="Transparencia y visualización del avance")
              p El uso de tableros ágiles (como Trello, Jira, Azure DevOps) y métricas visuales (<i>burndown charts, throughput</i>) permite a todo el equipo y al negocio, tener visibilidad clara del estado del proyecto.
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')

      .row.mb-4
        .col-4.d-none.d-xl-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          p.mb-4 Moreno-Monsalve y Grueso Hinestroza (2024), afirman que la clave del enfoque ágil en proyectos de analítica, está en la creación de valor continuo mediante entregas funcionales, priorización estratégica y empoderamiento del equipo técnico.
          .bg-azul.p-4(data-aos='fade-up')
            p.text-bold.mb-4 Ejemplo aplicado:
            span En una empresa de telecomunicaciones, un equipo de BI implementó Scrum para el desarrollo de un Dashboard comercial que integra datos de ventas, churn y campañas. Cada sprint se enfocó en construir módulos visuales (clientes activos, ingresos, segmentación) con validaciones semanales por el equipo comercial. El uso de Scrum redujo en un 40 % el tiempo de despliegue y aumentó la adopción del sistema por parte de los usuarios. 

      #t_2_4.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.4
          h2 Indicadores claves de desempeño en equipos de BI

      .row.bg-azul-claro.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3

          .row
            .col-12.col-xl-7.d-flex
              .my-auto
                p.mb-4 Una buena gestión requiere evaluación permanente. Algunos indicadores útiles son:
                p.mb-0.ps-4 ●	Velocidad del equipo (tareas completadas por <i>sprint</i>).<br><br>●	Porcentaje de requerimientos entregados a tiempo.<br><br>●	Nivel de adopción de <i>dashboards</i> por los usuarios.<br><br>●	Satisfacción del cliente interno.<br><br>●	Calidad y precisión de los reportes entregados.

            .col-5.d-none.d-xl-block(data-aos="zoom-in")
              img(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')
          
      p.mb-4 Una gestión efectiva de proyectos de Business Intelligence (BI) no solo se basa en buenas prácticas de planificación, sino también en la capacidad de medir y ajustar el rendimiento del equipo a lo largo del ciclo de vida del proyecto. Los indicadores claves de desempeño (KPIs), permiten establecer métricas objetivas que facilitan la toma de decisiones, la identificación de cuellos de botella y la mejora continua del trabajo colaborativo.

      .row.mb-4
        .col-4.d-none.d-xl-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          .mb-4.bg-morado-claro.p-4(data-aos='fade-up')
            span Según Hernández Gutiérrez, López Calvajar y Gutiérrez Rodríguez (2022), un sistema de medición de desempeño robusto, contribuye a mejorar la calidad de los productos entregables en proyectos de datos, permitiendo a las organizaciones evolucionar de una cultura reactiva a una cultura analítica, basada en evidencia.
          span A continuación, se detallan algunos de los KPIs más relevantes para la gestión de equipos en proyectos de BI:
      .row.mb-4
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Velocidad del equipo (Team Velocity)")
              p Mide la cantidad de tareas o puntos de historia completados por <i>sprint</i>. Es útil para estimar la capacidad productiva del equipo y proyectar plazos de entrega futuros.<br><b>Ejemplo.</b> Un equipo que completa consistentemente 30 puntos por <i>sprint</i>, puede prever la duración total del proyecto y anticipar retrasos.

            .div(titulo="Porcentaje de entregas a tiempo")
              p Evalúa cuántos requerimientos fueron finalizados dentro del plazo establecido. Este indicador refleja la eficiencia en la planificación y ejecución de actividades.<br>Una tasa alta indica cumplimiento y control del flujo de trabajo; una tasa baja requiere revisión de asignación de tareas o prioridades.

            .div(titulo="Nivel de adopción de dashboards y reportes")
              p Mide el uso real de los productos desarrollados por los usuarios finales. Puede evaluarse mediante métricas como número de accesos, interacciones o tiempo de visualización por informe.<br>Moreno-Monsalve y Grueso Hinestroza (2024), indican que los productos de BI exitosos no solo deben construirse técnicamente, sino también lograr una alta adopción y utilidad por parte de los tomadores de decisiones.

        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')

      .row.mb-4
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Satisfacción del cliente interno")
              p Este KPI se obtiene a través de encuestas o entrevistas con usuarios internos, para valorar la calidad, utilidad y facilidad de uso de las soluciones de BI entregadas.<br><b>Preguntas frecuentes.</b> ¿La información entregada es útil?, ¿se resolvió la necesidad planteada?, ¿se cumplen las expectativas?

            .div(titulo="Calidad y precisión de los reportes")
              p Evalúa si los datos visualizados son consistentes con las fuentes oficiales y si los reportes entregados presentan errores, duplicaciones o faltantes.<br>Una alta tasa de errores puede indicar problemas en la extracción, transformación o carga (ETL) de datos, y requiere revisión técnica urgente.

            .div(titulo="Nivel de colaboración en equipo")
              p Mide la participación activa en reuniones, cumplimiento de roles y nivel de interacción entre perfiles técnicos y de negocio. Se puede complementar con herramientas de evaluación 360° o dinámicas de retroalimentación.

      .d-flex.align-items-start.bg-azul.bg-full-width.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-37.svg', alt='Texto descriptivo de la imagen')
        .my-auto
          p.pe-xl-3.mb-0 Medir el desempeño de los equipos de BI mediante indicadores precisos, no solo permite monitorear avances, sino también detectar áreas de mejora, aumentar la calidad de las entregas y fortalecer la alineación con los objetivos estratégicos. La definición de KPIs debe adaptarse al contexto del proyecto y revisarse periódicamente para asegurar su relevancia.

      #t_2_5.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.5
          h2 Estrategias efectivas de liderazgo, en equipos de analítica

      p.mb-4 Para conocer más  sobre este tema, lo invitamos a ver el siguiente video. Estrategias efectivas de liderazgo, en equipos de analítica.

      .row.bg-fondo-slider.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
      #t_2_6.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.6
          h2 Caso aplicado: equipo BI en el sector salud

      p.mb-4 La analítica de datos ha cobrado especial relevancia en el sector salud, donde la optimización de procesos clínicos y administrativos incide directamente en la calidad del servicio y en la vida de los pacientes. En este contexto, la implementación de soluciones de <i>Business Intelligence (BI)</i> representa una estrategia clave para la transformación digital de los servicios hospitalarios.

      TabsC.mb-4
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Contexto del caso', :icon="require('@/assets/curso/unidad/img-38.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-39.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Contexto del caso
              p(data-aos='fade-up') Una red hospitalaria de mediano tamaño, ubicada en una capital latinoamericana, decidió modernizar su sistema de gestión hospitalaria mediante la implementación de una plataforma de BI que permitiera monitorear en tiempo real, la ocupación de camas, los tiempos de espera en urgencias y la disponibilidad de personal médico.
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Estructura del equipo', :icon="require('@/assets/curso/unidad/img-38.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-40.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Estructura del equipo
              p(data-aos='fade-up') El proyecto reunió a un equipo interdisciplinario compuesto por:<br><br>●	Médicos con conocimiento clínico.<br>●	Analistas de datos.<br>●	Programadores de <i>software</i>.<br>●	Un Gestor de Datos (<i>Data Steward</i>).<br>●	Un <i>Product Owner</i> proveniente del área de epidemiología.<br><br>El modelo de trabajo se basó en la <b>metodología <i>Scrum</i></b>, con ciclos quincenales (<i>sprints</i>), reuniones de planificación, retrospectiva y revisión. La integración del conocimiento clínico en el diseño del sistema, fue clave para alinear las funcionalidades técnicas, con las necesidades del entorno hospitalario.

        .tabs-content.border.px-4.p-md-5.py-3(titulo='Resultados alcanzados', :icon="require('@/assets/curso/unidad/img-38.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-41.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Resultados alcanzados
              p(data-aos='fade-up') ●	Reducción del tiempo promedio de espera en el servicio de urgencias en <b>un 35 %</b> en los primeros tres meses.<br><br>●	Generación automática de reportes diarios sobre disponibilidad de camas y tiempos de atención, enviados directamente al equipo directivo.<br><br>●	Aumento del <b>índice de satisfacción del personal médico</b>, al contar con <i>dashboards</i> precisos y actualizados, que facilitaron la toma de decisiones clínicas.<br><br>Según Malagón Barinas (2019), el éxito de los equipos de BI no depende exclusivamente de las herramientas utilizadas, sino de la capacidad para articular talentos diversos, técnicos, analíticos y funcionales, en torno a objetivos comunes y medibles.

        .tabs-content.border.px-4.p-md-5.py-3(titulo='Lecciones aprendidas', :icon="require('@/assets/curso/unidad/img-38.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-42.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Lecciones aprendidas
              p(data-aos='fade-up') ●	<b>La colaboración interprofesional</b> mejora la precisión de los requerimientos y la pertinencia de los indicadores.<br><br>●	<b>El liderazgo clínico</b> en el rol de <i>Product Owner</i> permitió traducir necesidades médicas en funcionalidades BI comprensibles para los desarrolladores.<br><br>●	<b>El enfoque ágil</b> facilitó entregas rápidas y validación temprana de los reportes por parte de usuarios reales, lo que incrementó la adopción del sistema.

      .d-flex.align-items-start.bg-morado.bg-full-width.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-5
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-43.svg', alt='Texto descriptivo de la imagen')
        .my-auto
          p.pe-xl-3.mb-0.text-white Este caso evidencia que la gestión de equipos de analítica de datos, en entornos críticos, como el de la salud, requiere un enfoque flexible, participativo y basado en objetivos clínicos claros. La sinergia entre tecnología, datos y conocimiento sectorial marca la diferencia en la efectividad de los proyectos de BI.

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://doi.org/10.26439/ing.ind2022.n.5802") Álvarez Ochoa, J. Ó. (2022). La inteligencia artificial en la gestión de proyectos de inversión pública del Ministerio de Vivienda, Construcción y Saneamiento
              
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://youtu.be/AMk6yiFaoxM?si=EksupY_mme5XC2XO") [Vídeo] Pena F. (2018, 16 de noviembre) LIDERAZGO y Gestión de equipos. ¡Conferencia completa!
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
