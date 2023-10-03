import Concept from './Concept';

export default function ConceptList(props) {
  const data = props.data;

  return data.map((concept, index) => {
    const { title, image, description } = concept;
    return (
      <Concept
        title={title}
        image={image}
        description={description}
        key={index}
      />
    );
  });
}
