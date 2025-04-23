export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Introducción a la gestión de proyectos de BI',
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
        titulo:
          'Introducción a la pertinencia y funcionalidad de la propuesta didáctica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Componentes claves de BI',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Metodologías ágiles y tradicionales en BI',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Metodologías tradicionales en la gestión de proyectos de BI',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Metodologías ágiles en la gestión de proyectos de BI',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Planificación estratégica en proyectos de inteligencia de negocios (BI)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: '¿Qué es la planificación estratégica en proyectos de BI?',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Fases claves en la planificación estratégica de un proyecto de BI',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Factores claves de éxito en la planificación estratégica de BI',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Evaluación de riesgos en proyectos de Inteligencia de Negocios (BI)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: '¿Qué es la evaluación de riesgos en proyectos de BI?',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo:
              'Fases claves en la planificación operativa de un proyecto de BI',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Metodologías para la evaluación de riesgos en BI',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Estrategias para mitigar riesgos en proyectos de BI',
            hash: 't_4_4',
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
      termino: 'Business Intelligence (BI)',
      significado:
        'Conjunto de estrategias y tecnologías para la recopilación, análisis y visualización de datos con el fin de mejorar la toma de decisiones.',
    },
    {
      termino: 'Dashboards',
      significado:
        'Herramientas visuales que permiten monitorear y analizar información clave a través de gráficos e indicadores.',
    },
    {
      termino: 'Data Governance',
      significado:
        'Conjunto de políticas y procesos que garantizan la calidad, seguridad e integridad de los datos en una organización.',
    },
    {
      termino: 'Data Warehouse',
      significado:
        'Almacén centralizado donde se integran y estructuran grandes volúmenes de datos para su análisis.',
    },
    {
      termino: 'Gestión de proyectos',
      significado:
        'Disciplina que aplica conocimientos, herramientas y técnicas para planificar, ejecutar y monitorear proyectos de manera eficiente.',
    },
    {
      termino: 'Kanban',
      significado:
        'Metodología ágil basada en tableros visuales para gestionar el flujo de trabajo y optimizar la eficiencia.',
    },
    {
      termino: 'Key Performance Indicator (KPI)',
      significado:
        'Indicadores clave de desempeño utilizados para medir el éxito de un proceso o estrategia.',
    },
    {
      termino: 'Metodología Ágil',
      significado:
        'Conjunto de prácticas de gestión de proyectos caracterizadas por su flexibilidad y entrega incremental de valor.',
    },
    {
      termino: 'Modelo Waterfall',
      significado:
        'Enfoque tradicional de gestión de proyectos donde las fases se desarrollan de forma secuencial y estructurada.',
    },
    {
      termino: 'Planificación estratégica',
      significado:
        'Proceso de definición de objetivos, estrategias y recursos para alcanzar metas organizacionales de manera efectiva.',
    },
    {
      termino: 'Project Management Institute (PMI)',
      significado:
        'Organización que establece estándares y mejores prácticas en la gestión de proyectos a nivel mundial.',
    },
    {
      termino: 'Riesgo en proyectos',
      significado:
        'Posibles eventos adversos que pueden afectar el éxito de un proyecto, requiriendo análisis y estrategias de mitigación.',
    },
    {
      termino: 'Scrum',
      significado:
        'Metodología ágil que organiza el trabajo en iteraciones llamadas sprints, promoviendo entregas rápidas y adaptativas.',
    },
    {
      termino: 'Stakeholders',
      significado:
        'Personas o grupos interesados en un proyecto, incluyendo clientes, inversores y usuarios finales.',
    },
    {
      termino: 'Visualización de datos',
      significado:
        'Representación gráfica de la información mediante gráficos, tablas y dashboards para facilitar su interpretación.',
    },
  ],
}
