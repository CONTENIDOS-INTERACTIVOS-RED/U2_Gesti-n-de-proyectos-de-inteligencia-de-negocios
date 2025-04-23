<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Estrategias para la adopción y gestión del cambio'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 La adopción de tecnologías analíticas en las organizaciones, no solo representa una actualización técnica, sino un proceso profundo de transformación organizacional. En los proyectos de Business Intelligence (BI), donde se busca convertir grandes volúmenes de datos en conocimiento útil para la toma de decisiones, la gestión del cambio se vuelve una pieza fundamental para asegurar la sostenibilidad, el uso efectivo de las herramientas implementadas y su alineación con la cultura organizacional.    
        p.mb-4 Los proyectos de BI introducen nuevas formas de trabajar, automatizan procesos tradicionales, exigen habilidades analíticas, y obligan a las organizaciones a redefinir cómo entienden y gestionan la información. Este cambio puede generar resistencia, incertidumbre o rechazo, especialmente si no se gestiona adecuadamente.
        .d-flex.align-items-start.bg-morado-claro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-3.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 Según Hernández Gutiérrez, López Calvajar y Gutiérrez Rodríguez (2022), la gestión del cambio implica preparar a la organización para un nuevo estado operativo, abordando dimensiones humanas, estructurales y tecnológicas. 
        p.mb-4 Cuando los líderes no comunican con claridad la necesidad del cambio, o no se involucra a los usuarios desde el inicio del proyecto, aumentan las posibilidades de fracaso en la adopción de soluciones de BI.
        span Los componentes claves de una estrategia de adopción efectiva, son:
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7.col-xl-8
        LineaTiempoD.color-secundario.large
          p(numero='1' titulo='Diagnóstico organizacional.') Identificar los niveles de madurez digital y analítica de la organización, así como las actitudes hacia el cambio.  
          p(numero='2' titulo='Plan de gestión del cambio.') Incluir actividades de comunicación, formación, acompañamiento, monitoreo del clima organizacional y gestión de resistencias.
          p(numero='3' titulo='Participación de stakeholders.') Alinear expectativas, incorporar retroalimentación y garantizar compromiso desde los niveles directivos, hasta los usuarios operativos.
          p(numero='4' titulo='Capacitación continua y soporte.') Brindar formación técnica y contextual sobre el uso de las herramientas de BI, acompañada de soporte técnico y funcional.
          p(numero='5' titulo='Seguimiento e indicadores de cambio.') Medir el grado de adopción mediante indicadores como tasa de uso, satisfacción, desempeño de procesos e impacto en la toma de decisiones (Moreno-Monsalve & Grueso Hinestroza, 2024).

    .d-flex.align-items-start.bg-morado.bg-full-width.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-6.svg', alt='Texto descriptivo de la imagen')
      .my-auto
        p.pe-xl-3.mb-0.text-white Además, Fuentes Adrianzén y Carrión Barco (2021), plantean que el cambio debe ser entendido como un proceso continuo, no como una etapa cerrada del proyecto. El éxito de un sistema BI no radica únicamente en la tecnología implementada, sino en la capacidad de la organización para  incorporar la inteligencia de negocios, en su modelo de gestión. <br>Enfoques metodológicos sugeridos:
    h2 a. Modelo ADKAR (Awareness, Desire, Knowledge, Ability, Reinforcement).
    p.mb-4 El modelo ADKAR, desarrollado por Prosci, es un enfoque estructurado para facilitar la gestión del cambio a nivel individual dentro de las organizaciones. Es especialmente útil en contextos donde se requiere una transformación digital, como la adopción de herramientas de inteligencia de negocios (BI). Este modelo se basa en cinco bloques fundamentales que representan las etapas del cambio personal:
    ImagenInfografica.color-secundario.mb-0.bg-white
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-7.png', alt='Descripción de la imagen')
      .tarjeta.bg-white.p-4(x='14%' y='37.2%' numero='+')
        .h5.mb-2 Awareness (Conciencia)
        p Implica que las personas comprendan por qué es necesario el cambio. En proyectos de BI, esto significa comunicar claramente la necesidad de adoptar nuevas herramientas analíticas, destacando los riesgos de mantener procesos tradicionales.<br>Ejemplo: realizar sesiones informativas donde se explique el impacto positivo del BI en la toma de decisiones estratégicas.
      .tarjeta.bg-white.p-4(x='32%' y='21%' numero='+')
        .h5.mb-2 Desire (Deseo)
        p Busca generar motivación para participar y apoyar el cambio. Es importante vincular los beneficios del BI con los intereses personales y profesionales del equipo.<br>Ejemplo: mostrar cómo el BI puede reducir tareas repetitivas, facilitar la visualización de datos o apoyar el crecimiento profesional.
      .tarjeta.bg-white.p-4(x='50%' y='6%' numero='+')
        .h5.mb-2 Knowledge (Conocimiento) 
        p Proporciona las habilidades y conocimientos necesarios para implementar el cambio. Esta fase incluye capacitación técnica, manuales de usuario, acompañamiento y documentación.<br>Ejemplo: ofrecer talleres sobre uso de Power BI, interpretación de dashboards y conexión con bases de datos.
      .tarjeta.bg-white.p-4(x='67.5%' y='21%' numero='+')
        .h5.mb-2 Ability (Habilidad)
        p Consiste en asegurar que los colaboradores apliquen correctamente lo aprendido en su entorno laboral. No basta con saber; hay que hacerlo.<br>Ejemplo: asignar proyectos piloto donde los usuarios apliquen BI a sus propias áreas de trabajo, con mentoría directa.
      .tarjeta.bg-white.p-4(x='85.4%' y='37.2%' numero='+')
        .h5.mb-2 Reinforcement (Refuerzo)
        p Incluye acciones para sostener el cambio en el tiempo, evitar recaídas y consolidar nuevas prácticas.<br>Ejemplo: reconocer públicamente a los equipos que usen BI exitosamente, incorporar el uso de dashboards en reuniones gerenciales, y establecer métricas de adopción.
    
    .d-flex.align-items-start.bg-azul-claro.bg-full-width.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-8.svg', alt='Texto descriptivo de la imagen')
      .my-auto
        p.pe-xl-3.mb-0 Aplicación en BI: el modelo ADKAR permite que los procesos de transformación analítica se implementen con enfoque humano, reconociendo que el éxito tecnológico depende directamente del cambio individual de los usuarios.

    .row.mb-5
      .col-12.col-xl-8
        h2 b. Kotter's 8 Steps for Leading Change.
        p.mb-3 Proporciona una ruta estructurada para consolidar el cambio organizacional.
        h2 c. Design Thinking aplicado a procesos de cambio.
        span Promueve la empatía y la co-creación como estrategias de adopción en entornos de transformación digital.
      .col-4.d-none.d-xl-block 
        img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')

    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www1.funcionpublica.gov.co/web/murc/tecnica-no-5-equipos-de-trabajo-basado-en-proyectos") Departamento Administrativo de la Función Pública. (s.f.). Técnica No. 5: Equipos de trabajo basado en proyectos
            
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/YK9wKwIjOOI?si=rZmbo-JANtxSzK0B") [Vídeo] Growth: el podcast de Product Hackers. (2024, 19 de diciembre) AI First: Transformando objetivos de negocio en realidad con Inteligencia Artificial
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
