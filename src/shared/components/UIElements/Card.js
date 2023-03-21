import "./Card.css";

const Card = ({ className, style, children }) => {
  return (
    <div className={`${className} card`} style={style}>
      {children}
    </div>
  );
};

export default Card;
