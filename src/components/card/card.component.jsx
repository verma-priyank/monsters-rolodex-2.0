import { Component } from "react";
import "./card.component.css"
class Card extends Component {


    render (){
        const {name , email , id} = this.props ;
        return (
            
            <div className="card-container" key ={id}>
            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2`}/>
              <h1>{name}</h1>
              <p>{email}</p>
            </div>
        )
    }
}

export default Card ;