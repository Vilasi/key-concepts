import './Concept.css';

export default function Concept(props) {
  const { title, image, description } = props;
  return (
    <li className="concept">
      <img src={image} alt="TODO: TITLE" />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}
