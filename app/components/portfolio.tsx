import Link from "next/link";
import InquiryForm from "./inquiry-form";

type Locale = "en" | "sq";

const copy = {
  en: {
    skip: "Skip to content",
    navAbout: "About",
    navSkills: "Expertise",
    navWork: "Work",
    navContact: "Contact",
    language: "Shqip",
    eyebrow: "FULL STACK DEVELOPER",
    intro:
      "I build considered digital experiences, from the first interface detail to the systems behind it.",
    cta: "Let’s talk",
    workLink: "Explore my approach",
    location: "Software · Web",
    aboutLabel: "01 / ABOUT",
    aboutTitle: "Good software starts with understanding the whole picture.",
    aboutText:
      "I’m Elvis Murati, a Full Stack Developer interested in building clear, dependable web experiences. I work across frontend and backend technologies, connecting thoughtful interfaces with practical application logic.",
    educationLabel: "EDUCATION",
    educationTitle: "Master’s studies in Cybersecurity",
    educationText:
      "Currently pursuing a master’s degree in Cybersecurity.",
    skillsLabel: "02 / EXPERTISE",
    skillsTitle: "Tools for the entire stack.",
    skillsText:
      "A practical toolkit across interface development, server-side engineering, data, and integrations.",
    groups: [
      { title: "Frontend", items: ["React.js", "Next.js"] },
      { title: "Backend", items: ["NestJS", "Express.js", "Full-stack development"] },
      { title: "Databases", items: ["MongoDB", "MySQL"] },
      { title: "Integrations", items: ["API integration"] },
    ],
    workLabel: "03 / SELECTED WORK",
    workTitle: "A place for work worth sharing.",
    workText:
      "Project details are being prepared. This portfolio will feature real work once titles, descriptions, and links are ready to share.",
    pending: "PROJECTS COMING SOON",
    noProjects: "No projects published yet",
    noProjectsText:
      "I’m keeping this space for verified projects—not placeholders. Please check back soon.",
    contactLabel: "04 / CONTACT",
    contactTitle: "Have a thoughtful challenge in mind?",
    contactText:
      "Share a little about what you’re building. I’ll get back to you by email.",
    formName: "Your name",
    formEmail: "Email address",
    formSummary: "What would you like to build?",
    formScope: "Scope or timeline (optional)",
    namePlaceholder: "Name",
    emailPlaceholder: "you@example.com",
    summaryPlaceholder: "A few details about your project…",
    scopePlaceholder: "For example: a new website, ongoing support…",
    send: "Send inquiry",
    sending: "Sending…",
    direct: "Prefer email?",
    privacy: "Your details are used only to respond to this inquiry.",
    success: "Thanks for reaching out. Your inquiry has been sent.",
    failure:
      "Your message couldn’t be sent right now. Please try again or email me directly.",
    invalid: "Please check the highlighted fields and try again.",
    footer: "Designed and built with care.",
    available: "ALBANIAN / ENGLISH",
  },
  sq: {
    skip: "Kalo te përmbajtja",
    navAbout: "Rreth meje",
    navSkills: "Aftësitë",
    navWork: "Projektet",
    navContact: "Kontakt",
    language: "English",
    eyebrow: "ZHVILLUES FULL STACK",
    intro:
      "Krijoj përvoja digjitale të menduara me kujdes, nga ndërfaqja deri te sistemet që e mbështesin.",
    cta: "Të flasim",
    workLink: "Shiko qasjen time",
    location: "Software · Web",
    aboutLabel: "01 / RRETH MEJE",
    aboutTitle: "Softueri i mirë fillon duke kuptuar pamjen e plotë.",
    aboutText:
      "Jam Elvis Murati, zhvillues Full Stack me interes për përvoja web të qarta dhe të besueshme. Punoj me teknologji frontend dhe backend, duke lidhur ndërfaqe të menduara me logjikë praktike aplikacionesh.",
    educationLabel: "ARSIMIMI",
    educationTitle: "Studime master në Siguri Kibernetike",
    educationText:
      "Aktualisht ndjek studimet master në Siguri Kibernetike.",
    skillsLabel: "02 / AFTËSITË",
    skillsTitle: "Mjete për të gjithë stack-un.",
    skillsText:
      "Një grup praktik teknologjish për ndërfaqe, zhvillim server-side, të dhëna dhe integrime.",
    groups: [
      { title: "Frontend", items: ["React.js", "Next.js"] },
      { title: "Backend", items: ["NestJS", "Express.js", "Zhvillim full-stack"] },
      { title: "Databaza", items: ["MongoDB", "MySQL"] },
      { title: "Integrime", items: ["Integrim API"] },
    ],
    workLabel: "03 / PROJEKTET",
    workTitle: "Një hapësirë për punë që ia vlen të ndahet.",
    workText:
      "Detajet e projekteve janë në përgatitje. Këtu do të paraqiten punë reale kur titujt, përshkrimet dhe lidhjet të jenë gati për publikim.",
    pending: "PROJEKTET SË SHPEJTI",
    noProjects: "Ende nuk ka projekte të publikuara",
    noProjectsText:
      "Këtë hapësirë po e ruaj për projekte të verifikuara, jo shembuj të sajuar. Vizitoni sërish së shpejti.",
    contactLabel: "04 / KONTAKT",
    contactTitle: "Keni një sfidë interesante?",
    contactText:
      "Më tregoni shkurt për atë që po ndërtoni. Do t’ju përgjigjem me email.",
    formName: "Emri juaj",
    formEmail: "Adresa e emailit",
    formSummary: "Çfarë dëshironi të ndërtoni?",
    formScope: "Fusha ose afati kohor (opsionale)",
    namePlaceholder: "Emri",
    emailPlaceholder: "ju@example.com",
    summaryPlaceholder: "Disa detaje rreth projektit…",
    scopePlaceholder: "Për shembull: uebsajt i ri, mbështetje e vazhdueshme…",
    send: "Dërgo kërkesën",
    sending: "Duke dërguar…",
    direct: "Preferoni email?",
    privacy: "Të dhënat tuaja përdoren vetëm për t’iu përgjigjur kësaj kërkese.",
    success: "Faleminderit për mesazhin. Kërkesa u dërgua.",
    failure:
      "Mesazhi nuk u dërgua dot tani. Provoni sërish ose më shkruani drejtpërdrejt.",
    invalid: "Kontrolloni fushat e shënuara dhe provoni përsëri.",
    footer: "Dizajnuar dhe ndërtuar me kujdes.",
    available: "SHQIP / ANGLISHT",
  },
} as const;

type Content = (typeof copy)[Locale];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <span aria-hidden="true" className="arrow">
      {diagonal ? "↗" : "→"}
    </span>
  );
}

function ProfileSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Elvis Murati",
    jobTitle: "Full Stack Developer",
    email: "elvismurati15@gmail.com",
    knowsAbout: [
      "React.js",
      "Next.js",
      "NestJS",
      "Express.js",
      "MongoDB",
      "MySQL",
      "API integration",
      "Full-stack development",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function Portfolio({ locale }: { locale: Locale }) {
  const text: Content = copy[locale];
  const isAlbanian = locale === "sq";
  const alternate = isAlbanian ? "/" : "/sq";

  return (
    <div className="site-shell" lang={locale}>
      <ProfileSchema />
      <a className="skip-link" href="#main">
        {text.skip}
      </a>
      <header className="topbar">
        <div className="topbar-inner">
          <Link className="wordmark" href={alternate} lang={isAlbanian ? "en" : "sq"}>
            <span className="wordmark-mark">E<span>.</span></span>
            <span>Elvis Murati</span>
          </Link>
          <nav aria-label={isAlbanian ? "Navigimi kryesor" : "Main navigation"} className="main-nav">
            <a href="#about">{text.navAbout}</a>
            <a href="#expertise">{text.navSkills}</a>
            <a href="#work">{text.navWork}</a>
            <a href="#contact">{text.navContact}</a>
          </nav>
          <div className="nav-actions">
            <Link
              aria-label={isAlbanian ? "Switch language to English" : "Ndrysho gjuhën në shqip"}
              className="language-switch"
              href={alternate}
              lang={isAlbanian ? "en" : "sq"}
            >
              {text.language}
            </Link>
            <a className="nav-contact" href="#contact">
              <span>{text.navContact}</span>
              <Arrow diagonal />
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        <section aria-labelledby="hero-title" className="hero section-wrap">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" />{text.eyebrow}</p>
            <h1 id="hero-title">
              {isAlbanian ? "Ndërto me" : "Building with"}
              <br />
              <span>{isAlbanian ? "qartësi" : "clarity"}<span className="period">.</span></span>
            </h1>
            <p className="hero-intro">{text.intro}</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#contact">
                {text.cta}<Arrow />
              </a>
              <a className="text-link" href="#work">
                {text.workLink}<Arrow />
              </a>
            </div>
            <div className="hero-meta">
              <span>{text.location}</span>
              <span className="hero-meta-rule" />
              <span>{text.available}</span>
            </div>
          </div>
          <div aria-hidden="true" className="hero-art">
            <div className="art-grid" />
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-core"><span>EM</span><i /></div>
            <div className="art-label art-label-top">THOUGHTFUL<br />BY DESIGN</div>
            <div className="art-label art-label-bottom">CODE / CRAFT / CARE</div>
            <div className="art-side-note">UI / API / DATA</div>
          </div>
          <a className="scroll-cue" href="#about">
            <span className="scroll-line" />{isAlbanian ? "ZBRIT POSHTË" : "SCROLL TO EXPLORE"}
          </a>
        </section>

        <section aria-labelledby="about-title" className="content-section section-wrap" id="about">
          <div className="section-index">{text.aboutLabel}</div>
          <div className="about-grid">
            <div>
              <h2 className="section-title" id="about-title">{text.aboutTitle}</h2>
              <p className="body-copy">{text.aboutText}</p>
            </div>
            <article className="education-card">
              <p className="card-kicker">{text.educationLabel}</p>
              <div aria-hidden="true" className="education-icon">01</div>
              <h3>{text.educationTitle}</h3>
              <p>{text.educationText}</p>
              <span className="card-bottom-line" />
            </article>
          </div>
        </section>

        <section aria-labelledby="expertise-title" className="content-section expertise-section" id="expertise">
          <div className="section-wrap">
            <div className="section-index">{text.skillsLabel}</div>
            <div className="section-heading-row">
              <h2 className="section-title" id="expertise-title">{text.skillsTitle}</h2>
              <p className="body-copy">{text.skillsText}</p>
            </div>
            <div className="skill-grid">
              {text.groups.map((group, index) => (
                <article className="skill-card" key={group.title}>
                  <div className="skill-card-top">
                    <span className="skill-number">0{index + 1}</span>
                    <span className="skill-plus" aria-hidden="true">+</span>
                  </div>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((skill) => <li key={skill}>{skill}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="work-title" className="content-section section-wrap work-section" id="work">
          <div className="section-index">{text.workLabel}</div>
          <div className="section-heading-row work-heading">
            <div>
              <h2 className="section-title" id="work-title">{text.workTitle}</h2>
              <p className="body-copy">{text.workText}</p>
            </div>
            <span className="pending-label"><span className="status-dot" />{text.pending}</span>
          </div>
          <div className="empty-project">
            <div className="empty-mark" aria-hidden="true"><span>+</span><span>+</span><span>+</span><span>+</span></div>
            <div>
              <h3>{text.noProjects}</h3>
              <p>{text.noProjectsText}</p>
            </div>
            <span className="empty-index" aria-hidden="true">— / —</span>
          </div>
        </section>

        <section aria-labelledby="contact-title" className="contact-section" id="contact">
          <div className="section-wrap">
            <div className="section-index">{text.contactLabel}</div>
            <div className="contact-grid">
              <div className="contact-copy">
                <h2 className="section-title" id="contact-title">{text.contactTitle}</h2>
                <p className="body-copy">{text.contactText}</p>
                <div className="direct-email">
                  <span>{text.direct}</span>
                  <a href="mailto:elvismurati15@gmail.com">elvismurati15@gmail.com<Arrow diagonal /></a>
                </div>
              </div>
              <InquiryForm locale={locale} text={text} />
            </div>
          </div>
        </section>
      </main>
      <footer className="footer section-wrap">
        <Link className="wordmark" href={alternate} lang={isAlbanian ? "en" : "sq"}>
          <span className="wordmark-mark">E<span>.</span></span>
          <span>Elvis Murati</span>
        </Link>
        <span>{text.footer}</span>
        <a href="#main">{isAlbanian ? "Kthehu lart ↑" : "Back to top ↑"}</a>
        <span className="footer-copy">© {new Date().getFullYear()} Elvis Murati</span>
      </footer>
    </div>
  );
}

export default Portfolio;
