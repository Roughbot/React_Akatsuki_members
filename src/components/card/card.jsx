import { Component } from "react";

class Card extends Component {
  render() {
    const { id, name, images } = this.props.member;
    return (
      <div className="card-container" key={id}>
        <img className="char-image" alt={`${name} pic`} src={images[0]} />
        <h2>{name}</h2>
      </div>
    );
  }
}

export default Card;
