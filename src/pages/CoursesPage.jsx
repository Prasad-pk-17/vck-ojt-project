import Header from "../components/Header/Header";
import Footer1 from "../components/Footer/Footer";
const CoursesPage = () => {
    return (
        <div>
            <Header />
            <div className="content">
                <div className="page-container">
                    <div class="main-content-scrollable">
                    <div className="hero-section">
                        <h1 id="h2">Our Academic Programs</h1>
                        <br />
                        <p id="p">
                            Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.
                        </p>
                        <br />
                        <h2 id="h1">Discover Campus Life</h2>
                        <br />
                        <div className="video-container">
                            <video controls className="course-video" width="100%" height="100%">
                                <source src="videos/clgvideo.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <br />
                        <h2 id="h1">Undergraduate Programs (UG)</h2>
                        <br />
                        <h2 id="h1">Program Details & Fee Structure (Annual)</h2>
                        <br />
                        
                        <ul>
                            <li>
                                <strong>Bachelor of Science (B.Sc.)</strong><br></br>
                                <ul><br></br>
                                    <li>Computer Science (3 years)*</li>
                                    <li>Information Technology (3 years)</li>
                                    <li>Biotechnology (3 years)</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Bachelor of Commerce (B.Com)</strong>
                                <ul>
                                    <li>Accounting & Finance (3 years)</li>
                                    <li>Banking & Insurance (3 years)</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Bachelor of Arts (B.A.)</strong>
                                <ul>
                                    <li>English Literature (3 years)</li>
                                    <li>Psychology (3 years)</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Master of Science (M.Sc.)</strong>
                                <ul>
                                    <li>Computer Science (2 years)</li>
                                    <li>Information Technology (2 years)</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Master of Commerce (M.Com)</strong> (2 years)
                            </li>
                            <li>
                                <strong>Master of Arts (M.A.)</strong> (2 years)
                            </li>
                        </ul>
                        <br />
                        <h2 id="h1">Program Details & Fee Structure (Annual)</h2><br></br>
                        <table className="fee-table">
  <thead>
    <tr>
      <th>Program Type</th>
      <th>Course Name</th>
      <th>Duration</th>
      <th>Annual Fee (INR)</th>
      <th>Eligibility</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>UG</td>
      <td>B.Sc. Computer Science</td>
      <td>3 Years</td>
      <td>₹ 85,000</td>
      <td>10+2 with PCM (50%)</td>
    </tr>
    <tr>
      <td>UG</td>
      <td>B.Com. Accounting &amp; Finance</td>
      <td>3 Years</td>
      <td>₹ 70,000</td>
      <td>10+2 Commerce (45%)</td>
    </tr>
    <tr>
      <td>PG</td>
      <td>M.Sc. Information Technology</td>
      <td>2 Years</td>
      <td>₹ 95,000</td>
      <td>B.Sc. IT/CS (50%)</td>
    </tr>
  </tbody>
</table>
                        <br />
                        <h2 id="h1">Specialized & Vocational Courses</h2><br></br>
                        
                        <p id="p">
                            In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.
                        </p>
                        
                        <div className="call-to-action">
                            <p id="p">Have questions about a specific course?</p>
                            <br />
                            <a className="primary-btn" href="/Contact" data-discover="true">
                            Inquire About Courses
                            </a>
                    </div>  </div>
                    </div>
                </div>
            </div>
            <Footer1/>
        </div>
    );
};

export default CoursesPage;