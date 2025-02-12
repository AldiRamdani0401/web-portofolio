import { createEffect, createSignal } from "solid-js";

// Data bahasa
const languageData = {
  ID: {
    menu: [
      "Tentang Saya",
      "Keahlian",
      "Pengalaman",
      "Project",
      "Blog",
      "Unduh CV",
    ],
    content: ["Tentang Saya", "Keahlian", "Pengalaman", "Project", "Blog"],
    carousell: [
      "Saya seorang Full Stack Develover dengan keahlian dalam JavaScript, TypeScript, PHP, dan Go, berkomitmen untuk terus meningkatkan keterampilan saya dalam pengembangan perangkat lunak.",
    ],
    "sub-content": [
      // Tentang Saya
      [
        "Saya adalah seorang Fullstack Developer dengan keahlian dalam JavaScript, TypeScript, PHP, dan Go, yang berkomitmen untuk terus meningkatkan keterampilan dalam pengembangan perangkat lunak.",
        "Saya memiliki pengalaman dalam membangun aplikasi yang efisien, skalabel, dan ramah pengguna. Saya unggul dalam kolaborasi, adaptasi, serta berpikir kritis untuk menyelesaikan masalah yang kompleks. Dengan etos kerja yang kuat dan semangat belajar yang tinggi, saya siap berkontribusi pada proyek-proyek inovatif.",
        "Nama Lengkap",
        "Nomor Telepon",
        "Email",
        "Alamat",
      ],
      [
        "Saya memiliki keahlian di bidang",
        " Web",
        " Mobile",
        " Machine Learning",
        "dan ",
        "IoT",
        "Dengan penguasaan ",
        "PHP ",
        " dan ",
        "JavaScript ",
        "Saya mampu mengembangkan aplikasi yang dinamis, responsif, dan skalabel, baik di sisi ",
        "Front-End ",
        "maupun sisi ",
        "Back-End",
        "Keahlian saya juga mencakup pengelolaan UI/UX menggunakan ",
        "HTML",
        " CSS ",
        " serta pengelolaan database menggunakan ",
        "dan ",
        "Saya berpengalaman dalam deployment dan manajemen aplikasi menggunakan ",
        " dan ",
        "Dengan pemahaman yang kuat tentang ",
        " dan ",
        " Saya selalu fokus pada pengembangan solusi yang andal, efisien, dan mudah dipelihara.",
        "Saya siap berkontribusi dalam proyek inovatif dengan semangat kolaborasi dan terus berkembang.",
      ],
      [
        "Pekerja Lepas",
        "Saya sangat antusias dapat berkesempatan bergabung dengan ",
        " perusahaan kreatif teknologi informasi terkemuka di Indonesia.",
        "Berdiri sejak awal 2024 di DKI Jakarta, Heart Developer berfokus dalam pengembangan aplikasi siap pakai dan konsultasi IT, didukung oleh tim profesional bersertifikat dengan lebih dari 9 tahun pengalaman di proyek digital.",
        "Sebagai Junior Fullstack Developer, saya siap berkontribusi melalui pengembangan aplikasi inovatif menggunakan Node.js, Astro.js, React, React Native, Solid.js, PostgreSQL, Express, dan Fastify. Dengan semangat belajar dan kolaborasi, saya berkomitmen untuk menghadirkan solusi efektif dan mendukung misi perusahaan, sambil terus berkembang di lingkungan yang dinamis dan progresif.",
      ],
      [
        "( 3 Juni - 6 September 2024 )",
        "Program Magang",
        " melalui platform GetMedik yang berdiri sejak 2016, berperan sebagai agregator layanan kesehatan digital di Indonesia, menghubungkan penyedia layanan kesehatan terverifikasi dengan masyarakat untuk akses layanan yang lebih mudah dan efisien.",
        "Selama 3 bulan magang sebagai Fullstack Developer Intern di GetMedik, saya berkontribusi dalam pengembangan aplikasi berbasis NodeJS, TotalJS, dan PostgreSQL. Peran ini memungkinkan saya untuk meningkatkan efisiensi dan kenyamanan pengguna, sekaligus memperkuat keahlian dalam pengembangan aplikasi end-to-end di sektor layanan kesehatan digital.",
      ],
      [
        "Asisten Dosen",
        "( 4 Maret - 16 September 2024 )",
        "Program Magang",
        "Sekolah Tinggi Teknologi Informatika Sony Sugema",
        "merupakan lembaga pendidikan tinggi yang memiliki visi menjadi pusat unggulan pendidikan informatika yang berdaya saing global di Indonesia.",
        "Sebagai Asisten Dosen mata kuliah Pemrograman Internet Lanjutan dalam PHP, saya bertanggung jawab untuk mendukung perkuliahan melalui penyiapan materi kuliah, pengelolaan tugas dan ujian, serta membantu mahasiswa memahami isi perkuliahan. Selain itu, saya berkontribusi dalam penelitian, pengembangan kurikulum, dan evaluasi proses pembelajaran, berkomitmen untuk menjaga kualitas pendidikan dan meningkatkan pengalaman belajar mahasiswa.",
      ],
      [
        "Peserta Cloud Computing",
        "( 7 Augustus 2023 - 20 Januari 2024 )",
        "Program Magang - Kampus Merdeka (Kemendikbud)",
        "Bangkit Academy",
        " adalah program pendidikan intensif yang dirancang untuk mencetak talenta digital yang unggul dan berkompeten melalui kolaborasi dengan Google, Gojek, Tokopedia, dan Traveloka.",
        "Program ini berfokus pada pembelajaran di bidang Machine Learning, Pengembangan Mobile, dan Cloud Computing, memberikan pengajaran kepada peserta dengan keterampilan yang relevan dengan industri serta mempersiapkan mereka menjadi profesional yang siap menghadapi masa depan di tengah pesatnya pertumbuhan digital di Indonesia.",
        "Saya berkomitmen untuk mengoptimalkan keahlian saya dalam meningkatkan hasil proyek dan berkontribusi pada visi dan Misi perusahaan, dengan terus bertumbuh, mengembangkan, dan mampu beradaptasi dengan lingkungan yang dinamis dan kolaboratif.",
      ],
      [
        "Mahasiswa Teknik Informatika",
        "( 2021 - Sekarang )",
        "Mahasiswa",
        "Sebagai mahasiswa jurusan Teknik Informatika di ",
        "Sekolah Tinggi Teknologi Informatika Sony Sugema",
        "adalah lembaga pendidikan perguruan tinggi yang berfokus mempelajari tentang teknologi informasi di Indonesia.",
        "Saya telah mempelajari dan membangun dasar pemahaman yang kuat dan relevan dalam ilmu komputer (Software & Hardware). Program Studi telah membekali saya dengan keterampilan hard-skill dan soft-skill yang diperlukan untuk menghadapi tantangan kompleks dalam memenuhi kebutuhan melalui pengambangan software & hardware, pada lingkungan masyarakat dan industri.",
        "Pengalaman akademis ini telah memperkuat kemampuan saya, mempersiapkan saya untuk dapat berkontribusi secara efektif di lingkungan profesional di bidang teknologi.",
      ],
    ],
  },
  EN: {
    menu: [
      "About Me",
      "Expertise",
      "Experience",
      "Projects",
      "Blog",
      "Download Resume",
    ],
    carousell: [
      "I am a Full Stack Developer with expertise in JavaScript, TypeScript, PHP, and Go, committed to continuously enhancing my skills in software development.",
    ],
    content: ["About Me", "Expertise", "Experience", "Projects", "Blog"],
    "sub-content": [
      // About Me
      [
        "I am a Fullstack Developer with expertise in JavaScript, TypeScript, PHP, and Go, committed to continuously enhancing my skills in software development.",
        "I have experience in building efficient, scalable, and user-friendly applications. I excel in collaboration, adaptability, and critical thinking for solving complex problems. With a strong work ethic and eagerness to learn, I am ready to contribute to innovative projects.",
        "Fullname",
        "Phone Number",
        "Email",
        "Address",
      ],
      [
        "I have expertise in ",
        " Web",
        " Mobile",
        " Machine Learning",
        "and ",
        "IoT",
        "With proficiency in ",
        "PHP ",
        " and ",
        "JavaScript ",
        "I am capable of building dynamic, responsive, and scalable applications for both ",
        "Front-End",
        " and ",
        "Back-End",
        "My technical expertise also extends to UI/UX development ",
        "HTML",
        " CSS ",
        "database management with ",
        "and ",
        "I have experience in deploying and managing applications using ",
        " and ",
        "With a strong understanding of ",
        " and ",
        " I prioritize developing solutions that are reliable, efficient, and maintainable.",
        " I am ready to contribute to innovative projects with a passion for collaboration and continuous growth.",
      ],
      [
        "Freelance",
        "I am very excited about the opportunity to join ",
        "a leading creative information technology company in Indonesia.",
        "Established in early 2024 in DKI Jakarta, Heart Developer focuses on developing turnkey applications and IT consulting, supported by a team of certified professionals with over 9 years of experience in impactful digital projects.",
        "As a Junior Fullstack Developer, I am ready to contribute by developing innovative applications using Node.js, Astro.js, React, React Native, Solid.js, PostgreSQL, Express, and Fastify. With a passion for learning and collaboration, I am committed to delivering effective solutions and supporting the company's mission while continuously growing in a dynamic and progressive environment.",
      ],
      [
        "( 3 June - 6 September 2024 )",
        "Internship Program",
        "through its platform GetMedik, established in 2016, serves as a digital healthcare aggregator in Indonesia, connecting verified healthcare providers with the public to ensure easier and more efficient access to healthcare services.",
        "During my 3 month internship as a Fullstack Developer Intern at GetMedik, I contributed to the development of applications using NodeJS, TotalJS, and PostgreSQL. This role allowed me to enhance user efficiency and convenience while strengthening my end-to-end application development skills in the digital healthcare sector.",
      ],
      [
        "Assistant Lecturer",
        "( 4 March - 16 September 2024 )",
        "Internship Program",
        "The Sony Sugema Institute of Information Technology",
        "is a higher education institution with a vision to become a center of excellence in informatics education with global competitiveness in Indonesia.",
        "As a Assistant Lecturer for the Advanced Internet Programming course in PHP, I am responsible for supporting lectures by preparing course materials, managing assignments and exams, and assisting students in understanding the course content. In addition, I contribute to research, curriculum development, and the evaluation of the learning process, demonstrating a commitment to maintaining educational quality and enhancing the student learning experience.",
      ],
      [
        "Cloud Computing Participants",
        "( 7 August 2023 - 20 January 2024 )",
        "Internship Program - Kampus Merdeka (Kemendikbud)",
        "Bangkit Academy",
        " is an intensive educational program designed to develop skilled and competent digital talent through collaboration with Google, Gojek, Tokopedia, and Traveloka.",
        "This program focuses on learning in the fields of Machine Learning, Mobile Development, and Cloud Computing, equipping participants with industry-relevant skills and preparing them to become future-ready professionals amid Indonesia's rapid digital growth.",
        "I am committed to optimizing my expertise to enhance project outcomes and contribute to the company's vision and mission, while continuously growing, adapting to dynamic, and collaborative environments.",
      ],
      [
        "Informatics Engineering Student",
        "( 2021 - Present )",
        "College Student",
        "As a student in the Informatics Engineering program at the ",
        "Sony Sugema Institute of Information Technology",
        "it is a higher education institution focused on studying information technology in Indonesia.",
        "I have studied and built a strong and relevant foundation in computer science (Software & Hardware). The program has equipped me with the necessary hard and soft skills to face complex challenges in meeting needs through software and hardware development in both societal and industrial environments.",
        "This academic experience has strengthened my abilities, preparing me to contribute effectively in a professional technology environment.",
      ],
    ],
  },
};

// Membuat state global untuk bahasa
export const [language, setLanguage] = createSignal("EN"); // Default 'ID'

// Membuat state untuk languageMap dengan nilai awal dari 'languageData' berdasarkan 'language'
export const [languageMap, setLanguageMap] = createSignal(
  languageData[language()]
);

// Membuat efek untuk memperbarui 'languageMap' setiap kali 'language' berubah
createEffect(() => {
  setLanguageMap(languageData[language()]);
});
