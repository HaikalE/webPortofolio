import React from 'react';

const Body = () => {
  const skills = [
    'C++',
    'Java',
    'Kotlin',
    'Flutter',
    'Git',
    'MySQL',
    'PHP',
    'JavaScript',
    'HTML/CSS',
    'Full Stack',
    'Power BI',
  ];
  const certifications = [
    {
      title: 'Prepare for the CompTIA Data+ (DA0 001) Exam 2024',
      organization: 'LinkedIn',
      code: '50fada57bda781b88a6ad187731dfbebdd0398b297 186d5fa712547e80a62f38',
      image: 'image/certifications/comptia-data-plus.jpg',
    },
    {
      title: 'Learn Data Analysis with Python',
      organization: 'Dicoding',
      code: 'JLX1WWL6GP72',
      image: 'image/certifications/data-analysis-python.jpg',
    },
    {
      title: 'Learn to Create Flutter Apps for Beginners',
      organization: 'Dicoding',
      code: 'JMZVDMW9NZN9',
      image: 'image/certifications/flutter-apps.jpg',
    },
    {
      title: 'Google Data Analytics',
      organization: 'Coursera',
      code: 'N33HF88E6V8D',
      image: 'image/certifications/google-data-analytics.jpg',
    },
    {
      title: 'IBM Full Stack Software Developer',
      organization: 'Coursera',
      code: 'W5EVLHSG6QCB',
      image: 'image/certifications/ibm-fullstack.jpg',
    },
  ];
  const internshipExperience = [
    {
      title: 'Data Engineer Intern',
      organization: 'PT Telekomunikasi Selular, Medan',
      duration: 'Feb 2023 - Jun 2024',
      responsibilities: [
        'Designed and developed a Telegram Ticketing Bot, reducing resolution time by 35%.',
        'Built dynamic data visualization dashboards using Power BI.',
        'Collaborated with teams to ensure seamless data integration.',
        'Optimized workflows for large datasets and complex analyses.',
      ],
    },
  ];

  return (
    <div className="mx-4 my-8 sm:mx-auto max-w-3xl">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Muhammad Haikal Rahman</h1>
        <p>Medan, Indonesia | +6282169639537 | muhammadhaikalrahman81@gmail.com</p>
        <p>
          <a
            href="https://haikalrahman.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            https://haikalrahman.netlify.app/
          </a>
        </p>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">EDUCATION</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">
            Bachelor - Computer Science (Mar 2023 - Aug 2023)
          </h3>
          <p>Universiti Teknologi Mara, Shah Alam</p>
          <p className="italic">Study Abroad Program</p>
          <ul className="list-disc list-inside">
            <li>GPA: 3.53 / 4.00</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">
            Bachelor - Computer Science (Aug 2021 - Jan 2025)
          </h3>
          <p>Universitas Sumatera Utara, Medan</p>
          <ul className="list-disc list-inside">
            <li>GPA: 3.88 / 4.00</li>
          </ul>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-2">INTERNSHIP EXPERIENCE</h2>
      {internshipExperience.map((internship, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-semibold">{internship.title}</h3>
          <p>{internship.organization}</p>
          <p>{internship.duration}</p>
          <ul className="list-disc list-inside">
            {internship.responsibilities.map((responsibility, idx) => (
              <li key={idx}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
      <h2 className="text-2xl font-bold mb-2">SKILLS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-200 p-2 rounded-md">
            {skill}
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-2">LICENSES & CERTIFICATIONS</h2>
      {certifications.map((cert, index) => (
        <div key={index}>
          <h3 className="text-lg font-semibold">{cert.title}</h3>
          <p>{cert.organization}</p>
          <p>{cert.code}</p>
        </div>
      ))}
    </div>
  );
};

export default Body;
