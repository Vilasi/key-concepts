import './ConceptListItem.css';

export default function ConceptListItem(props) {
  const { title, image, description } = props;
  return (
    <li className="concept">
      <img src={image} alt="TODO: TITLE" />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}
