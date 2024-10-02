const ServiceCard = ({ img, text }) => {
  return (
    <div className="service-card">
      <img src={img} alt={text} />
      <h1>{text}</h1>
    </div>
  );
};

export default ServiceCard;
