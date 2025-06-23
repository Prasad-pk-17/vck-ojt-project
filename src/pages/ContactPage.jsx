import Header from "../components/Header/Header";
import Footer1 from "../components/Footer/Footer";
const ContactPage = () => {


    return  (

        <div>
            <Header/>
            <div className="content">
                <div className="page-container">
                     <div class="main-content-scrollable">
                <div className="hero-section">
                    <h1 id="h2">Contact Us</h1><br></br>
                    <p id="p">We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p><br></br>
                    <h2 id="h1">General Enquiries</h2><br></br>

                    <p id="p"><strong>Vivekanand College Main Campus</strong><br></br>
                    [Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur, Mumbai,<br></br> Maharashtra 400071]<br></br>
                    India</p>

                    <p id="p">Phone: **+91 12345 67890**<br></br>
                    Email: **info@vivekanandcollege.edu**<br></br>
                    Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p><br></br>

                    <h2 id="h1">Admissions Office</h2><br></br>

                    <p id="p">For all admission-related queries regarding undergraduate or postgraduate programs:<br></br>
                    Phone: +91 98765 43210<br></br>
                    Email: admissions@vivekanandcollege.edu</p><br></br>
      
      
                    <h2 id="h1">Student Support Services</h2><br></br>

                    <p id="p">For current student support, academic advising, or general assistance:
                    Phone: +91 87654 32109
                    Email: studentsupport@vivekanandcollege.edu<br></br>
                    Email: admissions@vivekanandcollege.edu</p><br></br>

                    <h2 id="h1">Find Us on the Map</h2><br></br>
                    <a id="h1about" href="https://maps.google.com/?q=Vivekanand+College" target="_blank" rel="noopener noreferrer">View on Google Maps</a><br></br><br></br>
                    
                    
                    <h2 id="h1">Send Us a Message</h2><br></br>

                    <p id="p">[A contact form with fields for Name, Email, Subject, Message can be added here.]</p>

                       

                    </div>
                
                </div>
                </div>
                </div>
               <Footer1/> 
        </div>
    )
}
export default ContactPage ;