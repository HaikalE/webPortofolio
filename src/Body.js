import React, { useState} from 'react';

const Body = () => {
  const skills = [
    'C++',
    'Java',
    'PHP',
    'Kotlin',
    'Flutter',
    'SQL',
    'Mobile Development',
    'Data Analytics',
    'Android',
    'Node.js',
    'React.js',
    // Add more skills as needed
  ];
  const certifications = [
    {
      title: 'Belajar Membuat Aplikasi Flutter untuk Pemula 2023',
      organization: 'Dicoding',
      code: 'JMZVDMW9NZN9',
      image: 'image/certification/Membuat_Aplikasi_Flutter_dicoding/dicoding1.jpg', // Replace with actual image URL
    },
    {
      title: 'Belajar Analisis Data dengan Python 2023',
      organization: 'Dicoding',
      code: 'JLX1WWL6GP72',
      image: 'image/certification/analisis_data_dicoding/dicoding1.jpg', // Replace with actual image URL
    },
    {
      title: 'IBM Full Stack Software Developer 2022',
      organization: 'Coursera',
      code: 'W5EVLHSG6QCB',
      image: 'image/certification/IBM Full Stack Software__Developer.jpg', // Replace with actual image URL
    },
    {
      title: 'Google Data Analytics 2022',
      organization: 'Coursera',
      code: 'N33HF88E6V8D',
      image: 'image/certification/Google Data Analytics - Coursera.jpg', // Replace with actual image URL
    },
    // Add more certifications as needed
  ];
  const volunteerExperience = [
    {
      title: 'Secretary of Communication and Information',
      organization: 'Ikatan Mahasiswa Prodi S-1 Ilmu Komputer Universitas Sumatera Utara',
      duration: 'Oct 2023 - Present',
      responsibilities: [
        'Effectively delegated tasks within the department, overseeing their completion and ensuring deadlines were met.',
        'Monitored social media analytics and metrics to assess performance, identify trends, and optimize content strategies, leading to a quantifiable improvement in reach and engagement.',
        'Produced comprehensive work program reports, offering valuable insights for informed decision-making.',
      ],
    },
    {
      title: 'Staff of Communication and Information',
      organization: 'Ikatan Mahasiswa Prodi S-1 Ilmu Komputer Universitas Sumatera Utara',
      duration: 'Oct 2022 - Jul 2023',
      responsibilities: [
        "Produced diverse articles and content for the organization's website (https://imilkom.usu.ac.id), focusing on computer science topics. Responsibilities included research, writing, and editing to ensure high-quality, engaging material.",
        'Played a crucial role in utilizing Instagram (@imilkom_usu) to amplify messages, share event information, and actively engage with the audience, fostering a vibrant online community.',
    ],
    },
    {
      title: 'Staff of Publication and Documentation',
      organization: 'Kelompok Studi Pasar Modal Universitas Sumatera Utara',
      duration: 'May 2022 - Aug 2023',
      responsibilities: [
        "Develop interesting and informative educational content on Instagram reels (@kspm.usu) which aims to increase public understanding of the stock market, investment principles and financial instruments.",
      ],
    },
    // Add other volunteer experiences here...
  ];
  const universityProjects = [
    {
      title: 'Article Web App',
      duration: 'Oct 2023',
      description: [
        'Developed an intuitive dashboard offering customizable views, allowing admin to organize and manage applications seamlessly. This dashboard provided an overview of articles management, comments moderation, and user control.',
        'Utilized: PHP, JavaScript, AJAX/JQuery, MySQL, Bootstrap, HTML/CSS.',
      ],
      url: 'https://falling-terrains.000webhostapp.com/',
    },
    {
      title: 'Dynamic Book Search Web Application',
      duration: 'Aug 2023',
      description: [
        'Crafted a dynamic book search web application leveraging React, Axios, and the Google Books API. This platform enables users to explore a vast collection of books and obtain details about their favorite reads effortlessly.',
        'Leveraged Axios to handle asynchronous HTTP requests to the Google Books API for fetching book data.',
        'Utilized: React, Axios, Google Books API, Tailwind, HTML/CSS.',
      ],
      url: 'https://find4books.netlify.app/',
    },
    {
      title: 'GPA Calculator',
      duration: 'Jul 2023',
      description: [
        'Developed an app enables users to input courses and grades for GPA calculation while providing visual graphs to track academic progress.',
        'Utilized: Java, Android Studio, SQLite.'
      ],
      url: 'https://github.com/HaikalE/CGPA-CALCULATOR_APP/tree/master',
    },
    {
      title: 'The Education Game: "My Arabic Journey"',
      duration: 'Jun 2023',
      description: [
        'Aiming to teach Arabic vocabulary through interactive lessons. It incorporates pronunciation guidance for each word and includes quizzes to reinforce learning.',
        'Utilized: Bootstrap, HTML, JavaScript, Node.js.',
      ],
      url: 'https://github.com/killuazoldyckk/ArabicJourney',
    },
    // Add other university projects here...
  ];
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const handleImageClick = (image) => {
    setFullscreenImage(image);
  };

  const handleCloseFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    
    <div className="mx-4 my-8 sm:mx-auto max-w-3xl">
      {/* Header */}
      <br/>
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Muhammad Haikal Rahman</h1>
      </div>
      <div className="mb-6">
        <div className='mb-2' id='education'>
        An ardent Computer Science student deeply passionate about the intricacies of software 
development, constantly driven by an insatiable curiosity to explore the multifaceted realms 
of coding and programming. 


        </div>
        <br/>
        <h2 className="text-2xl font-bold mb-2">EDUCATION</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">
            Bachelor - Computer Science Mar 2023 - Aug 2023
          </h3>
          <p>Universiti Teknologi Mara, Shah Alam</p>
          <p className="italic">
            Study Abroad Program in Computer Science and Mathematics
          </p>
          <ul className="list-disc list-inside mb-2">
            <li>GPA: 3.53 / 4.00</li>
            <li>
              Relevant Coursework: Software Engineering; Mobile Programming;
              Dynamic Web Application Development; Programming Interactive System
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">
            Bachelor - Computer Science Aug 2021 - 2025 (Expected)
          </h3>
          <p>Universitas Sumatera Utara, Medan</p>
          <ul className="list-disc list-inside mb-2">
            <li>GPA: 3.83 / 4.00</li>
            <li>
              Relevant Coursework: Database; Cryptography; Object Oriented
              Programming; Data and Information Security; Design and Algorithm
              Analysis
            </li>
          </ul>
        </div>
      </div>
      <br/>
      {/* Skills */}
      <div id='skills'>
        <h2 className="text-2xl font-bold mb-2">SKILLS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-200 p-2 rounded-md">
              {skill}
            </div>
          ))}
        </div>
      </div>
      <br/>
      {/* Licenses & Certifications */}
      <div id='certification'>
        <h2 className="text-2xl font-bold mb-2">LICENSES & CERTIFICATIONS</h2>
        <ul className="mb-4">
          {certifications.map((certification, index) => (
            <li key={index} className="mb-4 flex items-center">
              <img
                src={certification.image}
                alt={certification.title}
                className="h-22 w-32 mr-4 rounded-md object-cover"
                onClick={() => handleImageClick(certification.image)}
              />
              <div>
                <div className="font-semibold">{certification.title}</div>
                <div>{certification.organization} - {certification.code}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {fullscreenImage && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
    <div className="relative">
      <button
        className="absolute top-0 right-0 m-4 text-black bg-gray-300 px-3 py-2 rounded-lg"
        onClick={handleCloseFullscreen}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
        </svg>
      </button>
      <img
        src={fullscreenImage}
        alt="Fullscreen"
        className="w-full h-auto max-w-full max-h-full sm:max-w-screen-md sm:max-h-screen-sm md:max-h-screen-md mx-auto"
      />
    </div>
  </div>
)}


      <br/>
      {/* Volunteer Experience */}
      <div id='volunteer'>
        <h2 className="text-2xl font-bold mb-2">VOLUNTEER</h2>
        {volunteerExperience.map((exp, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold">{exp.title}</h3>
            <p>{exp.organization}</p>
            <p>{exp.duration}</p>
            <ul className="list-disc list-inside mb-2">
              {exp.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <br/>
      {/* University Projects */}
      <div id='projects'>
  <h2 className="text-2xl font-bold mb-2">UNIVERSITY PROJECTS</h2>
  {universityProjects.map((project, index) => (
    <div key={index} className="mb-4">
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p>{project.duration}</p>
      <ul className="list-disc list-inside mb-2">
        {project.description.map((detail, idx) => (
          <li key={idx}>{detail}</li>
        ))}
      </ul>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out"
      >
        Visit Project
      </a>
    </div>
  ))}
</div>
    </div>

  );
};

export default Body;
