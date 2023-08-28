import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.component.css"
class CardList extends Component {



    render(){
        const {monster } = this.props ;
        
        return (
            <div className="card-list">
            {monster.map((monster, index) => {
                const {name , email , id} = monster ;
                return (
                 <Card name ={name} email={email} id ={id} />
                );
              })}</div>
        )
    }
}


export default CardList ;