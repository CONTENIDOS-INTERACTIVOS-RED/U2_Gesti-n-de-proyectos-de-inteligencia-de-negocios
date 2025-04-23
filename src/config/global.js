export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Implementación de Proyectos de Analítica de Datos',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Estrategias para la adopción y gestión del cambio',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Gestión de equipos de trabajo en proyectos de analítica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Importancia de los equipos colaborativos en proyectos BI',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Perfiles claves en un equipo de analítica de datos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Metodologías ágiles para gestionar equipos BI',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Indicadores claves de desempeño en equipos de BI',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo:
              'Estrategias efectivas de liderazgo, en equipos de analítica',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Caso aplicado: equipo BI en el sector salud',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Control y monitoreo del rendimiento de proyectos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Concepto y finalidad del monitoreo en proyectos BI',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Indicadores claves de rendimiento (KPIs) en proyectos de BI',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Herramientas de monitoreo y control en BI',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Prácticas recomendadas para el control de proyectos BI',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo:
              'Estudio de caso. Monitoreo de un proyecto BI en entorno logístico y de salud',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Fuentes Adrianzén, D. J., & Carrión Barco, G. (2021). Modelo integrado de inteligencia de negocios como soporte a la toma de decisiones en la gestión comercial de las mypes. D - Universidad Señor de Sipán.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/228906',
    },
    {
      referencia:
        'Hernández Gutiérrez, D. N., López Calvajar, G. A., & Gutiérrez Rodríguez, F. Á. (2022). Gestión de proyectos con enfoque de marco lógico. Editorial Universo Sur.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/273428',
    },
    {
      referencia:
        'Malagón Barinas, J. (2019). Modelos, metodologías y sistemas de gestión de proyectos. Editorial Universidad EAN.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/250971',
    },
    {
      referencia:
        'Moreno-Monsalve, N. A., & Grueso Hinestroza, M. P. (2024). Gestión de proyectos y organizaciones: una mirada desde las tendencias modernas de gestión. Editorial Universidad EAN.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/274731',
    },
    {
      referencia:
        'Moreno-Monsalve, N. A., Grueso Hinestroza, M. P., & Mayett-Moreno, Y. (2023). Dirección y gestión de proyectos. Perspectiva ética. Editorial Universidad EAN.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/274727',
    },
    {
      referencia:
        'Malagón Barinas, J. (2019). Modelos, metodologías y sistemas de gestión de proyectos. Editorial Universidad EAN.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/250971',
    },
  ],
  glosario: [
    {
      termino: 'ADKAR',
      significado:
        'Modelo de gestión del cambio centrado en la transformación individual: conciencia, deseo, conocimiento, habilidad y refuerzo.',
    },
    {
      termino: 'Agile',
      significado:
        'Enfoque iterativo e incremental de gestión de proyectos que promueve la colaboración, adaptación y entregas frecuentes de valor.',
    },
    {
      termino: 'BI (Business Intelligence)',
      significado:
        'Conjunto de herramientas, procesos y tecnologías que transforman datos en información útil para la toma de decisiones.',
    },
    {
      termino: 'Cambio organizacional',
      significado:
        'Proceso estructurado para adaptar personas, procesos y tecnología a nuevas condiciones internas o externas.',
    },
    {
      termino: 'Cultura de datos',
      significado:
        'Conjunto de valores, creencias y prácticas que promueven el uso estratégico de los datos en la toma de decisiones.',
    },
    {
      termino: 'Dashboard',
      significado:
        'Panel visual interactivo que presenta datos clave mediante gráficas e indicadores en tiempo real para facilitar el análisis.',
    },
    {
      termino: 'Design Thinking',
      significado:
        'Metodología centrada en las personas que permite resolver problemas complejos mediante empatía, ideación y prototipado.',
    },
    {
      termino: 'Gestión del cambio',
      significado:
        'Disciplina que guía la transición de individuos, equipos y organizaciones hacia un estado deseado mediante acciones estratégicas.',
    },
    {
      termino: 'Indicadores clave de rendimiento (KPIs)',
      significado:
        'Métricas cuantificables que permiten evaluar el desempeño de un proyecto en relación con sus objetivos estratégicos.',
    },
    {
      termino: 'Jira',
      significado:
        'Herramienta de gestión ágil de proyectos que permite planificar tareas, monitorear avances y gestionar equipos colaborativos.',
    },
    {
      termino: 'Kanban',
      significado:
        'Método visual de gestión del trabajo que permite visualizar el flujo de tareas y optimizar la eficiencia del equipo.',
    },
    {
      termino: 'Kotter',
      significado:
        'Modelo de ocho pasos para liderar el cambio organizacional de manera estructurada, desde la urgencia hasta la consolidación.',
    },
    {
      termino: 'Liderazgo distribuido',
      significado:
        'Estilo de liderazgo compartido en el que distintos miembros del equipo asumen responsabilidades según su experiencia.',
    },
    {
      termino: 'Monitoreo',
      significado:
        'Proceso sistemático de recopilación y análisis de datos que permite dar seguimiento al avance de un proyecto.',
    },
    {
      termino: 'Product Owner',
      significado:
        'Rol responsable de representar las necesidades del cliente, priorizar requerimientos y asegurar el alineamiento con los objetivos.',
    },
    {
      termino: 'Scrum',
      significado:
        'Marco ágil que divide el trabajo en ciclos cortos llamados sprints, promoviendo entregas incrementales y mejora continua.',
    },
    {
      termino: 'Sprint',
      significado:
        'Intervalo de tiempo en el que un equipo ágil completa un conjunto de tareas previamente planificadas.',
    },
    {
      termino: 'Stakeholders',
      significado:
        'Personas o grupos que tienen interés o influencia en el desarrollo y resultados de un proyecto.',
    },
    {
      termino: 'Toma de decisiones basada en datos',
      significado:
        'Proceso en el que las decisiones se fundamentan en el análisis e interpretación de datos objetivos y verificables.',
    },
    {
      termino: 'Visualización de datos',
      significado:
        'Técnica para representar información compleja de manera gráfica, facilitando la comprensión y el análisis de grandes volúmenes de datos.',
    },
  ],
}
