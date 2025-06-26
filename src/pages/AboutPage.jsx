import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const AboutPage = () => {

    return (
      <div>
        <Header/>
          <div className="content">
          <div className="page-container">
            <div className="main-content-scrollable"> 
          <div className="hero-section">
          <h1 id="h2">About Vivekanand College</h1><br></br>
          <p id="p">Vivekanand College stands as a beacon of knowledge and integrity, committed to delivering transformative education since its <br></br>inception in [Year of Establishment, e.g., 1980]. Located in the bustling heart of [City/Area, e.g., Chembur, Mumbai], our college has <br></br>consistently strived to uphold the highest standards of academic rigor and ethical values.</p><br></br>
          <p id="p">Our vision is to empower students with critical thinking skills, a global perspective, and a strong sense of social responsibility. We aim to nurture individuals who are not only successful in their careers but also contributing members of society.</p><br></br>
          <h2 id="h1">Our Mission</h2><br></br>

            <ul id="p">
            <li>To provide high-quality, accessible education across various disciplines.</li>
            <li>To foster research, innovation, and creativity among students and faculty.</li>
            <li>To cultivate a diverse and inclusive learning environment.</li>
            <li>To instill strong ethical values and leadership qualities.</li>
            </ul><br></br>

          <h2 id="h1">Our Values</h2><br></br>
          <p id="p">Integrity, Excellence, Innovation, Community, and Respect are the pillars upon which Vivekanand College is built. We encourage open dialogue, intellectual curiosity, and a relentless pursuit of knowledge.</p><br></br>
          <h2 id="h1">Our History</h2><br></br>
          <p id="p">[Briefly describe the college's history - e.g., how it started, key milestones, growth over the years, famous alumni if any]. Our journey began with a vision to make quality education available to all, and we continue that legacy today.</p>
          
          </div>
          </div>
            </div>
        </div>
       
          <Footer/>
      </div>

    )
  }
export default AboutPage;