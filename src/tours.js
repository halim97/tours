import react from "react";
import "./tours.css";
import Tour from "./tour";

const Tours = ({tours,removeTour})=>{

    
    return (
        <section>
             <div>
            {
                tours.map(tour=>{
                    return <Tour key={tour.id} {...tour} removeTour={removeTour} ></Tour>
                })
            }

        </div>
        </section>
       
        
    );


}

export default Tours;