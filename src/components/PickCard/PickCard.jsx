function PickCard({ img, text }) {
  return (
    <div className="pick-card">
      <img src={img} alt={text} />
      <h1>{text}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ducimus
        praesentium alias perferendis.
      </p>
    </div>
  );
}

export default PickCard;
