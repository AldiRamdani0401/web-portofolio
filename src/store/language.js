import { createEffect, createSignal } from "solid-js";

// Data bahasa
const languageData = {
  'ID': {
    'menu': ['Tentang Saya', 'Keahlian', 'Pengalaman', 'Project', 'Unduh CV'],
    'content' : ['Tentang Saya', 'Keahlian', 'Pengalaman', 'Project'],
    'sub-content': [
      ['👋🏻 Hello, Nama saya ', ', dan saya berasal dari ', 'Karawang, Jawa Barat, Indonesia', 'Saat ini saya sedang menempuh pendidikan sarjana pada jurusan ',
      'Teknik Informatika', ' di ',
      ' dimana minat saya terhadap teknologi terus berkembang setiap harinya. Sebagai seorang ',
      ', saya memiliki komitmen untuk menguasai seni dalam membangun aplikasi web yang efisien dan menarik.',
      'Selama beberapa tahun, saya telah mengasah keterampilan saya dalam menggunakan ',
      ' dan ', ' memungkinkan saya untuk merancang aplikasi dengan solusi yang dinamis, ramah bagi pengguna, dan mudah untuk dikembangkan. Saya sangat bangga dapat terlibat dalam pengembangan baik di sisi Front-end maupun Back-end, memastikan bahwa setiap proyek yang saya kerjakan terstruktur dan optimal dari berbagai aspek. ',
      'Apa yang membuat saya unggul adalah kemampuan saya untuk bekerja secara kolaboratif dalam tim, ',
      'kemampuan untuk beradaptasi dengan lingkungan yang serba cepat, dan keterampilan berpikir kritis yang memungkinkan saya dapat menyelesaikan masalah yang kompleks secara efektif.',
      'Saya selalu ', 'bersemangat untuk belajar ',
      'dan menyambut setiap kesempatan untuk memperluas pengetahuan serta keterampilan saya. Saya berharap dapat berkontribusi dalam ',
      'proyek-proyek inovatif ', 'yang memberikan tantangan dan membuat saya semakin berkembang.',
      'Dengan keahlian teknis dan minat saya, saya yakin dapat menjadi anggota tim dan memberikan kontribusi yang baik.'
      ],
      [
        'Saya memiliki keahlian di bidang', ' Web', ' Mobile', ' Machine Learning', 'dan ', 'IoT',
        'Dengan penguasaan ', 'PHP ', ' dan ', 'JavaScript ', 'Saya mampu mengembangkan aplikasi yang dinamis, responsif, dan skalabel, baik di sisi ', 'Front-End ', 'maupun sisi ', 'Back-End', 'Keahlian saya juga mencakup pengelolaan UI/UX menggunakan ', 'HTML', ' CSS ', ' serta pengelolaan database menggunakan ', 'dan ', 'Saya berpengalaman dalam deployment dan manajemen aplikasi menggunakan ', ' dan ',
        'Dengan pemahaman yang kuat tentang ', ' dan ', ' Saya selalu fokus pada pengembangan solusi yang andal, efisien, dan mudah dipelihara.', 'Saya siap berkontribusi dalam proyek inovatif dengan semangat kolaborasi dan terus berkembang.'
      ],
      [
        'Sekarang', 'Pekerja Lepas'
      ]
    ]
  },
  'EN': {
    'menu': ['About Me', 'Expertise', 'Experience', 'Projects', 'Download CV'],
    'content' : ['About Me', 'Expertise', 'Experience', 'Projects'],
    'sub-content': [
      ['👋🏻 Hello, My name is ', ', and I proudly come from ', 'Karawang, West Java, Indonesia', 'I am currently pursuing a degree in ',
      'Informatics Engineering', ' at ',
      'where my passion for technology continues to grow every day. As an aspiring ',
      ', I am fully committed to mastering the art of building seamless and efficient web applications.',
      ' Over the years, I have refined my skills in both ', ' and ', ' It enables me to design applications with dynamic solutions, user-friendly interfaces, and scalability. I take great pride in being involved in both Front-end and Back-end development, ensuring that every project I work on is polished and optimized from every aspect.',
      ' What truly sets me apart is my ability to work collaboratively within a team, ', 'my adaptability to fast-paced environments, and my critical thinking skillsthat enable me to solve complex problems effectively.', 'I am always ', 'eager to learn ', 'and embrace every opportunity to expand my knowledge and skills. I look forward to contributing to ',
      'innovative projects ', 'that present challenges and help me grow further.',
      'With my technical expertise and personal strengths, I am confident that I can be a valuable member of the team and make meaningful contributions.'
      ],
      [
        'I have expertise in ', ' Web', ' Mobile', ' Machine Learning', 'and ', 'IoT', 'With proficiency in ', 'PHP ', ' and ', 'JavaScript ', 'I am capable of building dynamic, responsive, and scalable applications for both ', 'Front-End', ' and ', 'Back-End',
        'My technical expertise also extends to UI/UX development ', 'HTML', ' CSS ', 'database management with ', 'and ', 'I have experience in deploying and managing applications using ', ' and ', 'With a strong understanding of ', ' and ', ' I prioritize developing solutions that are reliable, efficient, and maintainable.', ' I am ready to contribute to innovative projects with a passion for collaboration and continuous growth.'
      ],
      [
        'Current', 'Freelance'
      ]
    ]
  }
}

// Membuat state global untuk bahasa
export const [language, setLanguage] = createSignal('ID'); // Default 'ID'

// Membuat state untuk languageMap dengan nilai awal dari 'languageData' berdasarkan 'language'
export const [languageMap, setLanguageMap] = createSignal(languageData[language()]);

// Membuat efek untuk memperbarui 'languageMap' setiap kali 'language' berubah
createEffect(() => {
  setLanguageMap(languageData[language()]);
  console.log('language: ', language());
  console.log('languageMap: ', languageMap());
});

