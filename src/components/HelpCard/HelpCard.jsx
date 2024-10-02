const HelpCard = ({ img, text, buttonText }) => {
  return (
    <div className="help-card">
      <img src={img} alt={text} />
      <h1>{text}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
        doloremque possimus sequi a fugiat nesciunt officia.
      </p>
      <button>{buttonText} ➔</button>
    </div>
  );
};

export default HelpCard;
