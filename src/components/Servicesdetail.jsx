import { useParams } from "react-router-dom";

function ServiceDetail() {
  const { serviceName } = useParams();

  const serviceData = {
    seo: {
      title: "SEO Services",
      desc: "Hum aapki website ko Google ke top results mein rank karte hain."
    },
    "social-media": {
      title: "Social Media Marketing",
      desc: "Facebook, Instagram aur LinkedIn par brand grow karte hain."
    },
    "google-ads": {
      title: "Google Ads",
      desc: "Paid ads se instant leads aur sales."
    },
    "web-design": {
      title: "Web Design",
      desc: "Fast, responsive aur modern websites."
    }
  };

  const service = serviceData[serviceName];

  return (
    <div>
      <h1>{service.title}</h1>
      <p>{service.desc}</p>
    </div>
  );
}

export default ServiceDetail;
