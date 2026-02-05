import React from "react";

const defaultResumeData = {
  name: "Milind Pawar",
  title: "React Front-End Engineer",
  contact: {
    location: "Bellevue, WA",
    phone: "(667) 770-2727",
    email: "milindpawar5555@gmail.com",
    linkedin: "linkedin.com/in/mpawar1",
    github: "github.com/milindpawar007",
  },
  summary:
    "React Front-End Engineer with 7+ years of experience delivering scalable and high-performance web applications for enterprise clients including Home Depot and Banner Health. Specialized in building modular UIs, driving A/B testing and personalization using Adobe Target, and leading large-scale migrations to React with state management via Redux and Context API. Passionate about building seamless user experiences through performance architecture and strong design collaboration.",
  skills: [
    {
      label: "Languages",
      items: [
        "JavaScript",
        "TypeScript",
        "Python",
        "HTML5",
        "CSS3",
        "SQL",
        "JSP",
        "JavaBeans",
        "MS SQL Server",
        "NoSQL",
      ],
    },
    {
      label: "Frameworks/Libraries",
      items: [
        "React",
        "Next.js",
        "Redux",
        "SPFx",
        "Tailwind CSS",
        "Node.js",
        "Struts",
        "JSF",
        "MVC",
        "DAO",
      ],
    },
    {
      label: "Cloud & DevOps",
      items: [
        "Azure Functions",
        "AWS (RDS, Lambda, S3)",
        "Jenkins",
        "Docker",
        "Vercel",
        "Azure DevOps",
      ],
    },
    {
      label: "Analytics & Personalization",
      items: [
        "Adobe Target",
        "Adobe Launch",
        "Adobe Analytics",
        "Selenium",
        "Jest",
        "Mocha",
      ],
    },
    {
      label: "Tools & Platforms",
      items: ["Git", "GitHub", "Jira", "Postman", "Visual Studio", "Confluence"],
    },
    {
      label: "Databases",
      items: ["MS SQL", "MySQL", "PostgreSQL", "Redshift"],
    },
    {
      label: "Certifications",
      items: [
        "Azure Data Fundamentals",
        "AWS Cloud Practitioner",
      ],
    },
  ],
  experience: [
    {
      company: "Amazon",
      role: "Software Engineer",
      location: "Seattle, WA",
      dates: "Aug 2025 - Present",
      project: "Amazon Seller Central (React + TypeScript + AWS)",
      bullets: [
        "Led development of reusable, accessible React components aligned with Amazon UI and WCAG standards, improving consistency across Seller Central experiences.",
        "Collaborated with backend and product teams to design and consume scalable REST APIs supporting high-volume seller workflows.",
        "Built extensive Playwright end-to-end test suites to automate critical seller journeys, reducing production defects.",
        "Debugged production issues using AWS CloudWatch logs, metrics, and dashboards, lowering mean time to resolution and improving system observability.",
        "Built a React micro-frontend widget with TypeScript, supporting independent releases and cross-page reuse.",
        "Implemented robust error handling, logging, and monitoring to improve application reliability in production environments.",
        "Participated in design reviews and code reviews, enforcing best practices in TypeScript, component architecture, and state management.",
        "Improved deployment stability by enhancing AWS CI/CD pipelines, reducing rollback incidents and deployment time.",
        "Partnered with UX and product teams to translate business requirements into intuitive seller experiences.",
      ],
    },
    {
      company: "LTIMindtree",
      role: "Senior Software Engineer",
      location: "Dallas, TX",
      dates: "Jul 2021 - Jul 2025",
      project: "Banner Health - Intranet Development (React + SPFx)",
      bullets: [
        "Developed and maintained web applications using Java, JSP, JavaScript, HTML/CSS, and React.js for SharePoint-based healthcare intranet.",
        "Built modular web components and templates with accessibility and WCAG 2.1 compliance.",
        "Collaborated with content owners and CMS teams to ensure accurate and consistent content delivery across multiple platforms.",
        "Resolved frontend and backend bugs, reducing reported issues by 30%.",
        "Used Oracle and SQL Server to write and optimize queries for patient and departmental data.",
        "Implemented secure RESTful and SOAP-based web services for intranet integrations.",
        "Participated in usability and accessibility testing to improve user navigation and system flow.",
        "Worked closely with UX designers, QA engineers, and internal stakeholders to maintain a robust and stable application environment.",
      ],
      additional: {
        title: "Home Depot - Experimentation & Personalization",
        bullets: [
          "Developed high-performance React.js applications, improving load time by 30% through advanced code-splitting and lazy loading.",
          "Implemented Redux and Context API to manage global app state across multiple microfrontends.",
          "Spearheaded A/B testing strategies using Adobe Target and Target APIs, resulting in a 15% conversion increase and 25% customer retention boost.",
          "Led migration from legacy JavaScript/jQuery frontend to modular React.js codebase, reducing bugs and increasing development velocity by 40%.",
          "Integrated GraphQL and RESTful APIs to streamline data flow, enabling consistent cross-platform behavior.",
          "Built CI/CD pipelines using Jenkins and GitHub Actions, reducing deployment time by 35% and minimizing production errors.",
          "Partnered with QA teams to execute performance testing and resolve bottlenecks, ensuring a seamless user experience.",
        ],
      },
    },
    {
      company: "Index Analytics LLC",
      role: "Software Engineer Intern",
      location: "Baltimore, MD",
      dates: "Jan 2021 - May 2021",
      bullets: [
        "Developed SSR-compatible React.js modules to enhance SEO performance, improving organic traffic by 20%.",
        "Built end-to-end reporting portal using React.js frontend, Node.js backend, and AWS EC2/S3 infrastructure.",
        "Integrated REST APIs for secure data flow between ASP.NET backend and React components.",
        "Enhanced application performance and responsiveness across devices using modular components and dynamic rendering.",
      ],
    },
    {
      company: "Keys LLC",
      role: "Software Engineer Intern",
      location: "Baltimore, MD",
      dates: "May 2020 - Dec 2020",
      bullets: [
        "Created interactive hotel booking flow using React, improving usability based on user testing feedback.",
        "Developed RESTful backend endpoints with Node.js and Express, integrating with React frontend using fetch and async/await.",
        "Wrote unit tests with Jest and Mocha, achieving over 85% test coverage for critical modules.",
        "Contributed to technical documentation, making onboarding for future devs faster and smoother.",
      ],
    },
    {
      company: "Data Link Consultancy",
      role: "Software Engineer",
      location: "Pune, India",
      dates: "Dec 2016 - Apr 2018",
      bullets: [
        "Designed and developed interactive UI components with React.js for Vodafone's internal toolset.",
        "Engineered REST APIs in Node.js and deployed them in Azure, enabling dynamic data interactions and faster load times.",
        "Worked extensively with MySQL for storing and retrieving structured data, optimizing queries to improve API performance.",
        "Integrated authentication flows and user roles using JSON and AJAX, enhancing app security and personalization.",
        "Participated in Agile sprints, delivered biweekly releases, and collaborated closely with QA and DevOps for continuous delivery.",
        "Built Proof of Concepts (POCs) to validate front-end and Node.js integrations.",
      ],
    },
  ],
  education: [
    {
      school: "University of Maryland Baltimore County",
      degree: "Master of Science, Information Systems and Management",
      location: "Baltimore, MD",
      dates: "Aug 2019 - May 2021",
      gpa: "3.9",
    },
    {
      school: "University of Pune (India)",
      degree: "Bachelor of Engineering, Information Tech",
      location: "Pune, India",
      dates: "Aug 2011 - May 2015",
      gpa: "3.6",
    },
  ],
};

const formatContact = (contact) => [
  contact.location,
  contact.phone,
  contact.email,
  contact.linkedin,
  contact.github,
];

const SectionHeader = ({ title }) => (
  <div className="section-header">
    <h2>{title}</h2>
    <span className="divider" />
  </div>
);

const ExperienceBlock = ({ item }) => (
  <div className="experience-block">
    <div className="experience-top">
      <div>
        <h3>{item.company}</h3>
        <p className="role">{item.role}</p>
      </div>
      <div className="experience-meta">
        <p className="dates">{item.dates}</p>
        <p className="location">{item.location}</p>
      </div>
    </div>
    {item.project ? <p className="project">Project: {item.project}</p> : null}
    <ul>
      {item.bullets.map((bullet) => (
        <li key={bullet}>{bullet}</li>
      ))}
    </ul>
    {item.additional ? (
      <div className="experience-additional">
        <p className="project">Project: {item.additional.title}</p>
        <ul>
          {item.additional.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    ) : null}
  </div>
);

const stringifyResumeData = (data) => JSON.stringify(data, null, 2);

export default function App() {
  const [resumeText, setResumeText] = React.useState(
    stringifyResumeData(defaultResumeData),
  );
  const [resumeData, setResumeData] = React.useState(defaultResumeData);
  const [parseError, setParseError] = React.useState("");

  const handleResumeChange = (event) => {
    const nextText = event.target.value;
    setResumeText(nextText);
    try {
      const parsed = JSON.parse(nextText);
      setResumeData(parsed);
      setParseError("");
    } catch (error) {
      setParseError("Fix JSON errors to update the preview.");
    }
  };

  return (
    <div className="app">
      <header className="toolbar">
        <div>
          <h1>Resume PDF Builder</h1>
          <p>
            Update the JSON in the editor to refresh the preview, then click
            &quot;Download PDF&quot; to export.
          </p>
        </div>
        <button className="primary" onClick={() => window.print()}>
          Download PDF
        </button>
      </header>

      <main className="page">
        <aside className="editor">
          <div className="editor-header">
            <h2>Edit Resume JSON</h2>
            <p>Update the JSON below to refresh the preview instantly.</p>
          </div>
          <textarea
            value={resumeText}
            onChange={handleResumeChange}
            spellCheck={false}
          />
          {parseError ? <p className="error">{parseError}</p> : null}
        </aside>
        <div className="resume">
          <div className="header">
            <h1>{resumeData.name}</h1>
            <p className="contact-line">
              {formatContact(resumeData.contact).map((item, index) => (
                <span key={item}>
                  {item}
                  {index < formatContact(resumeData.contact).length - 1
                    ? " | "
                    : ""}
                </span>
              ))}
            </p>
          </div>

          <section>
            <SectionHeader title="Summary" />
            <p className="summary">{resumeData.summary}</p>
          </section>

          <section>
            <SectionHeader title="Technical Skills" />
            <div className="skills-grid">
              {resumeData.skills.map((skill) => (
                <div key={skill.label} className="skill-row">
                  <span className="skill-label">{skill.label}:</span>
                  <span className="skill-items">{skill.items.join(", ")}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionHeader title="Professional Experience" />
            {resumeData.experience.map((item) => (
              <ExperienceBlock key={`${item.company}-${item.dates}`} item={item} />
            ))}
          </section>

          <section>
            <SectionHeader title="Education" />
            <div className="education-grid">
              {resumeData.education.map((item) => (
                <div key={item.school} className="education-item">
                  <div className="education-top">
                    <div>
                      <h3>{item.school}</h3>
                      <p className="degree">{item.degree}</p>
                      <p className="gpa">GPA: {item.gpa}</p>
                    </div>
                    <div className="education-meta">
                      <p className="dates">{item.dates}</p>
                      <p className="location">{item.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
