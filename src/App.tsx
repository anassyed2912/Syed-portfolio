import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Sun, Moon } from "lucide-react";

export default function Portfolio() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <main className="bg-white dark:bg-darkNavy text-[#1f2937] dark:text-slate-100 min-h-screen font-sans transition-colors duration-300">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-darkNavy fixed top-0 left-0 right-0 z-50 shadow-md transition-colors duration-300">
        <div className="text-xl font-bold text-mint dark:text-mint">Syed Anas</div>
        <div className="flex items-center space-x-6">
          <a href="#home" className="text-gray-700 dark:text-slate-300 hover:text-mint transition">Home</a>
          <a href="#about" className="text-gray-700 dark:text-slate-300 hover:text-mint transition">About</a>
          <a href="#projects" className="text-gray-700 dark:text-slate-300 hover:text-mint transition">My Work</a>
          <a href="#contact" className="text-gray-700 dark:text-slate-300 hover:text-mint transition">Contact</a>
          <button onClick={toggleTheme} className="text-mint hover:text-white dark:hover:text-mint transition">
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col justify-center items-center h-screen text-center px-4 pt-24">
        <h1 className="text-4xl md:text-6xl font-bold">
          <span className="text-mint">Hi, I'm Syed Anas.</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-slate-300">
          I build things for the web.
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="#projects"
          className="mt-8 inline-block bg-mint text-darkNavy px-6 py-3 rounded-xl font-medium shadow hover:shadow-lg"
        >
          See Projects
        </motion.a>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto py-20 px-6">
  <h2 className="text-3xl font-bold mb-6 text-mint">About Me</h2>
  <p className="text-gray-700 dark:text-slate-300 leading-relaxed text-lg">
    I'm an Information Technology undergrad based in Hyderabad, passionate about building clean, scalable, and impactful software. I specialize in full-stack development using tools like React, Django, and SQL, and have hands-on experience in AI and machine learning, particularly computer vision and natural language processing.
    <br /><br />
    During my software engineering internship at Koko-AI, I contributed to developing Edu-AI — a self-learning educational platform — where I worked closely on both frontend and backend systems. I’ve also built projects like a real-time AR translator that combines OCR and neural machine translation, and MJeats, a Django-based food-ordering system to eliminate campus queues.
    <br /><br />
    Whether it’s a solo build or working in a team, I enjoy solving real-world problems with code and constantly learning new technologies to level up.
  </p>
</section>


      {/* Projects Section */}
      <section id="projects" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-10 text-mint">Projects</h2>

        {/* Featured Project */}
        <div className="mb-16 bg-mint/10 dark:bg-mint/20 p-8 rounded-2xl shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-2 text-mint">Featured: Edu-AI</h3>
          <p className="text-gray-700 dark:text-slate-300 mb-4">
          Built during my Software Engineering Internship at Koko-AI, Edu-AI is a self-learning platform that leverages generative AI to enhance educational content. I contributed to full-stack development and implemented a dynamic question–answer generation pipeline from video-based learning materials using NLP models. Delivered core features within two months in a fast-paced startup environment.
</p>
          
          <div className="flex space-x-4">
            <span className="text-sm text-mint">Full-Stack • React • Django • PostgreSQL</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* MJeats */}
          <div className="bg-softGray dark:bg-midNavy p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">MJeats</h3>
            <p className="text-gray-700 dark:text-slate-400 mb-4">
              An online platform to streamline canteen food ordering and eliminate queues. I led the backend
              development using Django and managed planning and implementation.
            </p>
            <div className="flex space-x-4">
              <span className="text-sm text-mint">Python • Django</span>
            </div>
          </div>

          {/* Real-Time AR Translator */}
          <div className="bg-softGray dark:bg-midNavy p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Real-Time AR Translator</h3>
            <p className="text-gray-700 dark:text-slate-400 mb-4">
              AR app that captures webcam footage, extracts and translates text using Tesseract OCR and MarianMT,
              and overlays translated text in real time using OpenCV.
            </p>
            <div className="flex space-x-4">
              <span className="text-sm text-mint">Python • OpenCV • HuggingFace • OCR</span>
            </div>
          </div>

          {/* 2 Player Football Game */}
          <div className="bg-softGray dark:bg-midNavy p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">2 Player Football Game</h3>
            <p className="text-gray-700 dark:text-slate-400 mb-4">
              A browser-based football game where two players can compete in real time.
              Built using JavaScript and styled with CSS.
            </p>
            <div className="flex space-x-4">
              <a href="https://anassyed2912.github.io/web/two-playerfootball.html" target="_blank" className="text-mint hover:underline">Live Demo</a>
              <span className="text-sm text-mint">HTML • CSS • JavaScript</span>
            </div>
          </div>

          {/* Simple Calculator */}
          <div className="bg-softGray dark:bg-midNavy p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Simple Interactive Calculator</h3>
            <p className="text-gray-700 dark:text-slate-400 mb-4">
              Designed a webpage for a basic calculator capable of handling arithmetic operations.
            </p>
            <div className="flex space-x-4">
              <span className="text-sm text-mint">HTML • CSS • JavaScript</span>
            </div>
          </div>

          {/* Personal Website */}
          <div className="bg-softGray dark:bg-midNavy p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Personal Website</h3>
            <p className="text-gray-700 dark:text-slate-400 mb-4">
              A personal portfolio site showcasing my projects, skills, and achievements.
            </p>
            <div className="flex space-x-4">
            
              <span className="text-sm text-mint">HTML • CSS • JavaScript</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="max-w-4xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-mint">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-6 text-gray-700 dark:text-slate-300 text-lg">
          <span>ReactJS</span>
          <span>JavaScript</span>
          <span>Django</span>
          <span>Python</span>
          <span>HTML/CSS</span>
          <span>OpenCV</span>
          <span>HuggingFace</span>
          <span>Tesseract OCR</span>
          <span>MarianMT</span>
          <span>SQL</span>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="text-center py-20 px-6 bg-softGray dark:bg-midNavy">
        <h2 className="text-3xl font-bold text-mint mb-6">Contact</h2>
        <p className="text-gray-700 dark:text-slate-300 mb-6">
          Have a question or want to work together? Feel free to reach out.
        </p>
        <a href="mailto:anassyed2912@gmail.com" className="inline-flex items-center gap-2 text-mint hover:underline">
          <Mail size={20} /> anassyed2912@gmail.com
        </a>
        <div className="flex justify-center mt-6 space-x-6">
          <a href="https://github.com/anassyed2912" className="text-mint hover:text-darkNavy dark:hover:text-white"><Github size={24} /></a>
          <a href="https://www.linkedin.com/in/syed-anas-1aa11a1ab/" className="text-mint hover:text-darkNavy dark:hover:text-white"><Linkedin size={24} /></a>
        </div>
      </section>
    </main>
  );
}
