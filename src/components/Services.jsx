import { Link } from "react-router-dom";

function Services() {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>

      <div className="service-box">
        <Link to="/services/seo">
          <div>
            <h3>SEO</h3>
            <p>Rank your website on Google</p>
          </div>
        </Link>

        <Link to="/services/social-media">
          <div>
            <h3>Social Media</h3>
            <p>Grow your brand on social platforms</p>
          </div>
        </Link>

        <Link to="/services/google-ads">
          <div>
            <h3>Google Ads</h3>
            <p>Get instant leads & sales</p>
          </div>
        </Link>

        <Link to="/services/web-design">
          <div>
            <h3>Web Design</h3>
            <p>Fast & responsive websites</p>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Services;
