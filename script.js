<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Portfolio of Pasalapudi V V Sai Sri Lakshmi Padmavathi - Computer Science & Engineering Student, Frontend Developer, AI-ML Enthusiast">
    <meta name="keywords" content="portfolio, web developer, frontend, AI, ML, computer science">
    <meta name="author" content="Pasalapudi V V Sai Sri Lakshmi Padmavathi">
    <title>Padmavathi Pasalapudi | Portfolio</title>
    <link rel="preconnect" href="[fonts.googleapis.com](https://fonts.googleapis.com)">
    <link rel="preconnect" href="[fonts.gstatic.com](https://fonts.gstatic.com)" crossorigin>
    <link href="[fonts.googleapis.com](https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap)" rel="stylesheet">
    <link rel="stylesheet" href="[cdnjs.cloudflare.com](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css)">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Loader -->
    <div class="loader" id="loader">
        <div class="loader-content">
            <div class="loader-spinner"></div>
            <p>Loading...</p>
        </div>
    </div>
    <!-- Navigation -->
    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <a href="#home" class="nav-logo">
                <span class="logo-text">Padmavathi</span>
            </a>
            <ul class="nav-menu" id="nav-menu">
                <li class="nav-item"><a href="#home" class="nav-link active">Home</a></li>
                <li class="nav-item"><a href="#about" class="nav-link">About</a></li>
                <li class="nav-item"><a href="#projects" class="nav-link">Projects</a></li>
                <li class="nav-item"><a href="#skills" class="nav-link">Skills</a></li>
                <li class="nav-item"><a href="#certifications" class="nav-link">Certifications</a></li>
                <li class="nav-item"><a href="#education" class="nav-link">Education</a></li>
                <li class="nav-item"><a href="#internship" class="nav-link">Internship</a></li>
                <li class="nav-item"><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
            <div class="hamburger" id="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>
    </nav>
    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="hero-bg"></div>
        <div class="hero-content">
            <h1 class="hero-name reveal">Pasalapudi V V Sai Sri Lakshmi Padmavathi</h1>
            <div class="hero-title-wrapper">
                <span class="hero-title" id="typewriter"></span>
                <span class="cursor">|</span>
            </div>
            <p class="hero-summary reveal">
                Passionate about building responsive, user-friendly web applications using modern frontend technologies. 
                Continuously learning, creating innovative projects, and expanding my skills in Artificial Intelligence, 
                Machine Learning, and Web Development.
            </p>
            <div class="hero-buttons reveal">
                <a href="#projects" class="btn btn-primary">
                    <i class="fas fa-folder-open"></i> View Projects
                </a>
                <a href="#contact" class="btn btn-secondary">
                    <i class="fas fa-envelope"></i> Contact Me
                </a>
            </div>
            <div class="scroll-indicator">
                <div class="mouse">
                    <div class="wheel"></div>
                </div>
                <div class="scroll-arrows">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </section>
    <!-- About Section -->
    <section class="section about" id="about">
        <div class="container">
            <h2 class="section-title reveal">
                <span class="title-text">About Me</span>
                <span class="title-line"></span>
            </h2>
            <div class="about-content reveal">
                <div class="about-card glass-card">
                    <div class="about-icon">
                        <i class="fas fa-user-graduate"></i>
                    </div>
                    <p class="about-text">
                        I am a Computer Science and Engineering (AI-ML) student passionate about Frontend Development, 
                        JavaScript, and building responsive web applications. I enjoy solving problems, learning modern 
                        technologies, and creating clean, user-friendly interfaces. I continuously improve my skills 
                        through projects, certifications, and hands-on learning.
                    </p>
                    <div class="about-highlights">
                        <div class="highlight-item">
                            <i class="fas fa-code"></i>
                            <span>Frontend Developer</span>
                        </div>
                        <div class="highlight-item">
                            <i class="fas fa-brain"></i>
                            <span>AI-ML Enthusiast</span>
                        </div>
                        <div class="highlight-item">
                            <i class="fas fa-lightbulb"></i>
                            <span>Problem Solver</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Projects Section -->
    <section class="section projects" id="projects">
        <div class="container">
            <h2 class="section-title reveal">
                <span class="title-text">My Projects</span>
                <span class="title-line"></span>
            </h2>
            <div class="projects-grid">
                <!-- Project 1 -->
                <div class="project-card glass-card reveal">
                    <div class="project-icon">
                        <i class="fas fa-question-circle"></i>
                    </div>
                    <h3 class="project-name">Quiz Master</h3>
                    <p class="project-description">
                        Responsive quiz application built using HTML, CSS, and JavaScript featuring multiple categories, 
                        score tracking, timer, and an interactive user interface.
                    </p>
                    <div class="project-tech">
                        <span class="tech-tag">HTML</span>
                        <span class="tech-tag">CSS</span>
                        <span class="tech-tag">JavaScript</span>
                    </div>
                    <div class="project-buttons">
                        <a href="[padhu0706.github.io](https://padhu0706.github.io/Quiz-master/)" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>
                        <a href="[github.com](https://github.com/Padhu0706/Quiz-master)" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                    </div>
                </div>
                <!-- Project 2 -->
                <div class="project-card glass-card reveal">
                    <div class="project-icon">
                        <i class="fas fa-calculator"></i>
                    </div>
                    <h3 class="project-name">Mobile Calculator</h3>
                    <p class="project-description">
                        Responsive mobile-style scientific calculator supporting arithmetic operations, scientific functions, 
                        and a modern user interface.
                    </p>
                    <div class="project-tech">
                        <span class="tech-tag">HTML</span>
                        <span class="tech-tag">CSS</span>
                        <span class="tech-tag">JavaScript</span>
                    </div>
                    <div class="project-buttons">
                        <a href="[padhu0706.github.io](https://padhu0706.github.io/Mobile-calculator/)" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>
                        <a href="[github.com](https://github.com/Padhu0706/Mobile-calculator)" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                    </div>
                </div>
                <!-- Project 3 -->
                <div class="project-card glass-card reveal">
                    <div class="project-icon">
                        <i class="fas fa-tasks"></i>
                    </div>
                    <h3 class="project-name">To-Do List App</h3>
                    <p class="project-description">
                        Task management application with task creation, editing, deletion, search, filtering, priority selection, 
                        due dates, and Local Storage support.
                    </p>
                    <div class="project-tech">
                        <span class="tech-tag">HTML</span>
                        <span class="tech-tag">CSS</span>
                        <span class="tech-tag">JavaScript</span>
                    </div>
                    <div class="project-buttons">
                        <a href="[padhu0706.github.io](https://padhu0706.github.io/To-Do-list-app/)" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>
                        <a href="[github.com](https://github.com/Padhu0706/To-Do-list-app)" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Skills Section -->
    <section class="section skills" id="skills">
        <div class="container">
            <h2 class="section-title reveal">
                <span class="title-text">My Skills</span>
                <span class="title-line"></span>
            </h2>
            <div class="skills-container">
                <div class="skills-category reveal">
                    <h3 class="category-title">
                        <i class="fas fa-code"></i> Programming Languages
                    </h3>
                    <div class="skills-grid">
                        <div class="skill-card glass-card">
                            <i class="fab fa-html5"></i>
                            <span>HTML</span>
                        </div>
                        <div class="skill-card glass-card">
                            <i class="fab fa-css3-alt"></i>
                            <span>CSS</span>
                        </div>
                        <div class="skill-card glass-card">
                            <i class="fab fa-js-square"></i>
                            <span>JavaScript</span>
                        </div>
                        <div class="skill-card glass-card">
                            <i class="fab fa-python"></i>
                            <span>Python</span>
                        </div>
                        <div class="skill-card glass-card">
                            <i class="fab fa-java"></i>
                            <span>Java</span>
                        </div>
                    </div>
                </div>
                <div class="skills-category reveal">
                    <h3 class="category-title">
                        <i class="fas fa-tools"></i> Tools
                    </h3>
                    <div class="skills-grid">
                        <div class="skill-card glass-card">
                            <i class="fab fa-git-alt"></i>
                            <span>Git</span>
                        </div>
                        <div class="skill-card glass-card">
                            <i class="fab fa-github"></i>
                            <span>GitHub</span>
                        </div>
                        <div class="skill-card glass-card">
                            <i class="fas fa-code"></i>
                            <span>VS Code</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Certifications Section -->
    <section class="section certifications" id="certifications">
        <div class="container">
            <h2 class="section-title reveal">
                <span class="title-text">Certifications</span>
                <span class="title-line"></span>
            </h2>
            <div class="certifications-grid">
                <div class="certification-card glass-card reveal">
                    <div class="cert-icon">
                        <i class="fab fa-java"></i>
                    </div>
                    <h3 class="cert-name">Java (Basic)</h3>
                    <p class="cert-issuer">HackerRank</p>
                </div>
                <div class="certification-card glass-card reveal">
                    <div class="cert-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <h3 class="cert-name">Foundations of Google Data Analytics</h3>
                    <p class="cert-issuer">Coursera</p>
                </div>
                <div class="certification-card glass-card reveal">
                    <div class="cert-icon">
                        <i class="fab fa-python"></i>
                    </div>
                    <h3 class="cert-name">Python Programming</h3>
                    <p class="cert-issuer">Red Hat Academy</p>
                </div>
                <div class="certification-card glass-card reveal">
                    <div class="cert-icon">
                        <i class="fas fa-robot"></i>
                    </div>
                    <h3 class="cert-name">AI-ML Virtual Internship</h3>
                    <p class="cert-issuer">EduSkills</p>
                </div>
                <div class="certification-card glass-card reveal">
                    <div class="cert-icon">
                        <i class="fas fa-brain"></i>
                    </div>
                    <h3 class="cert-name">Artificial Intelligence & Machine Learning</h3>
                    <p class="cert-issuer">Smartbridge</p>
                </div>
            </div>
        </div>
    </section>
    <!-- Education Section -->
    <section class="section education" id="education">
        <div class="container">
            <h2 class="section-title reveal">
                <span class="title-text">Education</span>
                <span class="title-line"></span>
            </h2>
            <div class="timeline">
                <div class="timeline-item reveal">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content glass-card">
                        <span class="timeline-date">2023 - 2027</span>
                        <h3 class="timeline-title">B.Tech in Computer Science and Engineering (AI-ML)</h3>
                        <p class="timeline-institution">
                            <i class="fas fa-university"></i> Ideal Institute of Technology
                        </p>
                    </div>
                </div>
                <div class="timeline-item reveal">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content glass-card">
                        <span class="timeline-date">2021 - 2023</span>
                        <h3 class="timeline-title">Intermediate (MPC)</h3>
                        <p class="timeline-institution">
                            <i class="fas fa-school"></i> Narayana Junior College
                        </p>
                    </div>
                </div>
                <div class="timeline-item reveal">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content glass-card">
                        <span class="timeline-date">2020 - 2021</span>
                        <h3 class="timeline-title">10th Class</h3>
                        <p class="timeline-institution">
                            <i class="fas fa-school"></i> Little Buds School
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Internship Section -->
    <section class="section internship" id="internship">
        <div class="container">
            <h2 class="section-title reveal">
                <span class="title-text">Internship</span>
                <span class="title-line"></span>
            </h2>
            <div class="internship-card glass-card reveal">
                <div class="internship-header">
                    <div class="internship-icon">
                        <i class="fas fa-laptop-code"></i>
                    </div>
                    <div class="internship-info">
                        <h3 class="internship-title">AI-ML Virtual Internship</h3>
                        <p class="internship-company">
                            <i class="fas fa-building"></i> EduSkills
                        </p>
                    </div>
                </div>
                <p class="internship-description">
                    Completed an AI-ML Virtual Internship through EduSkills, gaining practical experience in 
                    Artificial Intelligence and Machine Learning concepts, data preprocessing, model building, 
                    and solving real-world problems using modern AI tools and techniques.
                </p>
                <div class="internship-highlights">
                    <span class="highlight-badge"><i class="fas fa-check"></i> AI Concepts</span>
                    <span class="highlight-badge"><i class="fas fa-check"></i> Machine Learning</span>
                    <span class="highlight-badge"><i class="fas fa-check"></i> Data Preprocessing</span>
                    <span class="highlight-badge"><i class="fas fa-check"></i> Model Building</span>
                </div>
            </div>
        </div>
    </section>
    <!-- Contact Section -->
    <section class="section contact" id="contact">
        <div class="container">
            <h2 class="section-title reveal">
                <span class="title-text">Get In Touch</span>
                <span class="title-line"></span>
            </h2>
            <div class="contact-container">
                <div class="contact-info reveal">
                    <h3 class="contact-subtitle">Let's Connect</h3>
                    <p class="contact-text">
                        Feel free to reach out for collaborations, opportunities, or just a friendly conversation!
                    </p>
                    <div class="contact-cards">
                        <a href="mailto:padmavathipasalapudi26@gmail.com" class="contact-card glass-card">
                            <div class="contact-card-icon">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="contact-card-info">
                                <h4>Email</h4>
                                <p>padmavathipasalapudi26@gmail.com</p>
                            </div>
                        </a>
                        <a href="[github.com](https://github.com/Padhu0706)" target="_blank" rel="noopener noreferrer" class="contact-card glass-card">
                            <div class="contact-card-icon">
                                <i class="fab fa-github"></i>
                            </div>
                            <div class="contact-card-info">
                                <h4>GitHub</h4>
                                <p>Padmavathi Pasalapudi</p>
                            </div>
                        </a>
                        <a href="[linkedin.com](https://www.linkedin.com/in/pasalapudi-v-v-s-s-l-padmavathi-65b87a340)" target="_blank" rel="noopener noreferrer" class="contact-card glass-card">
                            <div class="contact-card-icon">
                                <i class="fab fa-linkedin"></i>
                            </div>
                            <div class="contact-card-info">
                                <h4>LinkedIn</h4>
                                <p>Pasalapudi V V Sai Sri Lakshmi Padmavathi</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="contact-form-container reveal">
                    <form class="contact-form glass-card" id="contact-form">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Your Email" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary btn-full">
                            <i class="fas fa-paper-plane"></i> Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p class="footer-text">© 2026 Pasalapudi V V Sai Sri Lakshmi Padmavathi</p>
        </div>
    </footer>
    <!-- Scroll to Top Button -->
    <button class="scroll-top" id="scroll-top" aria-label="Scroll to top">
        <i class="fas fa-chevron-up"></i>
    </button>
    <script src="script.js"></script>
</body>
</html>