import { Component } from "react";
import Card from "../card/card";

class CardList extends Component {
  render() {
    const { members } = this.props;
    return (
      <div className="card-list">
        {members.map((member, index) => {
          return <Card key={index} member={member} />;
        })}
      </div>
    );
  }
}

export default CardList;
