const inspirationData = [
  {
    type: "inspiracion",
    content: "La creatividad es la inteligencia divirtiéndose.",
    author: "Albert Einstein"
  },
  {
    type: "inspiracion",
    content: "No tengas miedo de renunciar a lo bueno para ir a por lo grandioso.",
    author: "John D. Rockefeller"
  },
  {
    type: "inspiracion",
    content: "La única forma de hacer un gran trabajo es amar lo que haces.",
    author: "Steve Jobs"
  },
  {
    type: "inspiracion",
    content: "Todo lo que puedas imaginar es real.",
    author: "Pablo Picasso"
  },
  {
    type: "inspiracion",
    content: "El mayor enemigo de la creatividad es el sentido común.",
    author: "Pablo Picasso"
  },
  {
    type: "inspiracion",
    content: "La inspiración existe, pero tiene que encontrarte trabajando.",
    author: "Pablo Picasso"
  },
  {
    type: "inspiracion",
    content: "La lógica te llevará de la A a la Z. La imaginación te llevará a todas partes.",
    author: "Albert Einstein"
  },
  {
    type: "inspiracion",
    content: "La creatividad es ver lo que todos han visto y pensar lo que nadie ha pensado.",
    author: "Albert Einstein"
  },
  {
    type: "inspiracion",
    content: "El secreto de la creatividad está en dormir bien y abrir la mente a las posibilidades infinitas. ¿Qué es un hombre sin sueños?",
    author: "Albert Einstein"
  },
  {
    type: "inspiracion",
    content: "La duda es el principio de la sabiduría.",
    author: "Aristóteles"
  },
  {
    type: "inspiracion",
    content: "La creatividad requiere que la curiosidad sea el motor que impulsa nuestras vidas.",
    author: "Leonardo da Vinci"
  },
  {
    type: "inspiracion",
    content: "La simplicidad es la máxima sofisticación.",
    author: "Leonardo da Vinci"
  },
  {
    type: "inspiracion",
    content: "El arte de ser sabio es el arte de saber qué pasar por alto.",
    author: "William James"
  },
  {
    type: "inspiracion",
    content: "La felicidad no es la ausencia de problemas, sino la capacidad de lidiar con ellos.",
    author: "Charles Bukowski"
  },
  {
    type: "inspiracion",
    content: "No juzgues cada día por lo que cosechas, sino por las semillas que plantas.",
    author: "Robert Louis Stevenson"
  },
  {
    type: "inspiracion",
    content: "La vida no se trata de encontrarte a ti mismo, sino de crearte a ti mismo.",
    author: "George Bernard Shaw"
  },
  {
    type: "inspiracion",
    content: "La creatividad es la habilidad de conectar lo aparentemente desconectado.",
    author: "William Plomer"
  },
  {
    type: "inspiracion",
    content: "El fracaso es una gran oportunidad para empezar de nuevo con más inteligencia.",
    author: "Henry Ford"
  },
  {
    type: "inspiracion",
    content: "No dejes que el ruido de las opiniones de los demás ahogue tu propia voz interior.",
    author: "Steve Jobs"
  },
  {
    type: "inspiracion",
    content: "Si puedes soñarlo, puedes hacerlo.",
    author: "Walt Disney"
  },
  {
    type: "inspiracion",
    content: "La mejor manera de predecir el futuro es inventarlo.",
    author: "Alan Kay"
  },
  {
    type: "inspiracion",
    content: "La innovación distingue a un líder de un seguidor.",
    author: "Steve Jobs"
  },
  {
    type: "inspiracion",
    content: "Lo único imposible es aquello que no intentas.",
    author: "Anónimo"
  },
  {
    type: "inspiracion",
    content: "La diferencia entre lo ordinario y lo extraordinario es ese pequeño extra.",
    author: "Jimmy Johnson"
  },
  {
    type: "inspiracion",
    content: "La creatividad es contagiosa. Pásala.",
    author: "Albert Einstein"
  },
  {
    type: "inspiracion",
    content: "Tus ideas no valen nada a menos que las lleves a cabo.",
    author: "Anónimo"
  },
  {
    type: "inspiracion",
    content: "El riesgo más grande es no correr ninguno.",
    author: "Mark Zuckerberg"
  },
  {
    type: "inspiracion",
    content: "No tengas miedo de ser creativo y experimentar con tu marketing.",
    author: "Mike Volpe"
  },
  {
    type: "inspiracion",
    content: "El diseño no es solo lo que ves y sientes. El diseño es cómo funciona.",
    author: "Steve Jobs"
  },
  {
    type: "tendencia",
    content: "Metaverso y Web3: el futuro de las experiencias inmersivas",
    source: "https://www.marketingdirecto.com/digital-general/digital/metaverso-web3-futuro-experiencias-inmersivas",
    sourceText: "Marketing Directo"
  },
  {
    type: "tendencia",
    content: "La Inteligencia Artificial revoluciona el arte y la creatividad",
    source: "https://www.xataka.com/robotica-e-ia/inteligencia-artificial-revoluciona-arte-creatividad-humana-da-paso-a-era-sintetica",
    sourceText: "Xataka"
  },
  {
    type: "tendencia",
    content: "El diseño 'responsive' es más importante que nunca en 2024",
    source: "https://www.mockplus.com/blog/post/responsive-web-design-trends",
    sourceText: "Mockplus"
  },
  {
    type: "tendencia",
    content: "El 'modo oscuro' se consolida como una tendencia de diseño web",
    source: "https://www.toptal.com/designers/web/web-design-trends-2024",
    sourceText: "Toptal"
  },
  {
    type: "tendencia",
    content: "La tipografía 'kinética' llega para dar movimiento a las webs",
    source: "https://99designs.com/blog/trends/web-design-trends/",
    sourceText: "99designs"
  },
  {
    type: "revelacion",
    content: "Images/IMG_001.png",
    alt: "Descripción de la imagen 1"
  },
  {
    type: "revelacion",
    content: "Images/IMG_002.png",
    alt: "Descripción de la imagen 2"
  },
  {
    type: "revelacion",
    content: "Images/IMG_003.png",
    alt: "Descripción de la imagen 3"
  },
  {
    type: "revelacion",
    content: "Images/IMG_004.png",
    alt: "Descripción de la imagen 4"
  },
  {
    type: "revelacion",
    content: "Images/IMG_005.png",
    alt: "Descripción de la imagen 5"
  },
  {
    type: "revelacion",
    content: "Images/IMG_006.png",
    alt: "Descripción de la imagen 6"
  },
  {
    type: "revelacion",
    content: "Images/IMG_007.png",
    alt: "Descripción de la imagen 7"
  },
  {
    type: "revelacion",
    content: "Images/IMG_008.png",
    alt: "Descripción de la imagen 8"
  },
  {
    type: "revelacion",
    content: "Images/IMG_009.png",
    alt: "Descripción de la imagen 9"
  },
  {
    type: "revelacion",
    content: "Images/IMG_010.png",
    alt: "Descripción de la imagen 10"
  },
  {
    type: "revelacion",
    content: "Images/IMG_011.png",
    alt: "Descripción de la imagen 11"
  },
  {
    type: "revelacion",
    content: "Images/IMG_012.png",
    alt: "Descripción de la imagen 12"
  },
  {
    type: "revelacion",
    content: "Images/IMG_013.png",
    alt: "Descripción de la imagen 13"
  },
  {
    type: "revelacion",
    content: "Images/IMG_014.png",
    alt: "Descripción de la imagen 14"
  }
];
