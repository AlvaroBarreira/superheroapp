import React, { useContext } from 'react'
import AlertDismissibleExample from '../Alert/AlertDismissibleExample'
import CardSearch from '../CardSearch/CardSearch';
import Carousel from 'react-bootstrap/Carousel'
import Loader from "react-loader-spinner";
import { HeroeContext } from '../../Contexts/HeroesContext'
import './CarrouselSection.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function CarrouselSection() {

    const {card, show, loading, showCarrousel} = useContext(HeroeContext);
   


    return (

        
            card.length === 0 ? <p style={{ fontSize: "25px", textAlign: "center" }} className="text-alert">
                Please read before searching:
                you can choose only three good characters and three bad characters
                </p> : 
            
            <>
            
                    {

                        showCarrousel ? (

                            loading ? (
                                <div style={{margin: "35px auto", width: "fit-content"}}>
                                    <Loader
                                        type="Oval"
                                        color="rgba(0,0,0,0.4)"
                                        height={100}
                                        width={100}
                                        
                                    />
                                </div>
                            ) : (
                                <Carousel variant="dark" className="carrousel container">
    
                                    {
    
                                        card.map((c) => {
                                            return (
                                                <Carousel.Item key={c.id}>
    
                                                    <CardSearch
                                                        data={c}
                                                        name={c.name}
                                                        alignment={c.biography.alignment}
                                                        image={c.image.url}
                                                    />
                                                </Carousel.Item>
                                            )
                                        })
                                    }
    
                                </Carousel>
                            ) 
                        ) : (
                            loading ? (
                                <div style={{margin: "35px auto", width: "fit-content"}}>
                                    <Loader
                                        type="Oval"
                                        color="rgba(0,0,0,0.4)"
                                        height={100}
                                        width={100}
                                        
                                    />
                                </div>
                            ) : (
                                <p></p>
                            ) 
                        )

                    }
            {
                show && <AlertDismissibleExample />
            }
           
            
            </>
        
    )
}

export default CarrouselSection
