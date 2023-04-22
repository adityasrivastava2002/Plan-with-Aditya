import { useState } from "react";

    function Card({id,image,info,price,name,removeTour}){
        const [readmore, setreadmore] = useState(false);
        // const image=props.id;
        // const price=props.price;
        // const name=props.name;
        // const id=props.id;
        // const info=props.info;
        const description=readmore?info:`${info.substring(0,200)}...`;
        function readmoreHandler(){
            setreadmore(!readmore);
        }
    return (
        
        <div className="card">

            <img src={image} className="image"></img>

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `Show Less`: `Read \More`}
                    </span>
                </div>
            </div>

            <button className="btn-red" onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </div>
        
    );
}

export default Card;