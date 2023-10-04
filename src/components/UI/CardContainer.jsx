import './CardContainer.css';

export default function CardContainer(props) {
  return <ul id="concepts">{props.children}</ul>;
}
