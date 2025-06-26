import Footer1 from "../components/Footer/Footer";
import Header from "../components/Header/Header"
import { Link } from "react-router-dom";
const HomePage = () => {

    return (
    
        <div>
            
            <Header/>
                <div className="content">
                <div style={{marginTop:'50px'}} className="page-container">
                <div className="main-content-scrollable">
                <div className="hero-section">
                    <img alt="vivekanand college campus" className="hero-banner-image" src="images\clg.png"></img>
                    <div className="hero-overlay-text">
                        <h1>Welcome to Vivekanand College!</h1>
                        <p id="z">Your journey to excellence starts here</p><br></br>
                        <Link to="/admission" className="hero-btn">Apply Now</Link>

                    </div>
                
                </div>  
                <p id="p">Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.</p><br></br>
                <p id="p">At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p><br></br>
                <h1 id="h1">Why Choose Vivekanand College?</h1>
                <ul id="h1"><br></br>
                    <li id="p"><strong>Legacy of Excellence:</strong> Decades of commitment to quality education.</li>
                    <li id="p"><strong>Experienced Faculty:</strong> Learn from renowned experts and passionate educators.</li>
                    <li id="p"><strong>Modern Facilities:</strong>Well-equipped labs, expansive library, and comfortable campus.</li>
                    <li id="p"><strong>Holistic Development:</strong> Focus on co-curricular activities, sports, and community service.</li>
                    <li id="p"><strong>Strong Placements:</strong> Excellent career opportunities with leading companies.</li><br></br>
                </ul>
                <h1 id="h1">Campus Life & Facilities</h1><br></br>
                <img id="i"src="images/adm.jpeg"></img>
                <img id="i"src="images/campus.jpg"></img><br></br>
                <p id="p">Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
                <div className="call-to-action">
                    <p id="p">Ready to explore our courses?</p>
                    <Link to="/Courses" className="primary-btn">Explore Courses</Link>


                </div>
                </div>
                </div>
                </div>
                <Footer1/>               
                
        </div>
        
    )
}
export default HomePage;