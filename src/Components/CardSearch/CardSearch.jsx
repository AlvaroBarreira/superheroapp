import React, { useContext, useState, useEffect } from 'react'
import { HeroeContext } from '../../Contexts/HeroesContext';
import './CardSearch.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function CardSearch({
    data,
    name,
    alignment,
    image
}) {

  
    const {team, setTeam, bad, setBad, good, setGood, setShow, setText} = useContext(HeroeContext);

    const [bgc, setBgc] = useState('')


    //Function validate Alignment
    const handleClickAdd = (data) => {

        if(data.biography.alignment === "good") {

            if (team.length === 6) {

                setShow(true)
                return setText('team is already full')
              
            }

            if (team.find(char => char === data)) {
                
                setShow(true)
                return setText('this character is already in your team')

            }

            if (good.length === 3) {

                setShow(true)
                return setText('the good team is already full')

            }

            setTeam((prevState) => {
                return [...prevState, data]
            })
            setGood((prevState) => {
                return [...prevState, data]
            })

        }

        if(data.biography.alignment === "bad" || data.biography.alignment === "neutral" || data.biography.alignment === "-") {

            if (team.length === 6) {

                setShow(true)
                return setText('team is already full')
               
            }

            if (team.find(char => char === data)) {

                setShow(true)
                return setText('this character is already un your team')
               
            }

            if (bad.length === 3) {

                setShow(true)
                return setText('the bad team is already full')
               
            }

            setTeam((prevState) => {
            return [...prevState, data]
            })
            setBad((prevState) => {
                return [...prevState, data]
            })

        }
        

      
        
    }


    useEffect(() => {


            if (alignment === "good") {
                setBgc('#4c8a35')
            } else if (alignment === "bad" || alignment === "neutral" || alignment === "-") {
                setBgc('#dc143c')
            }
       
         
    }, [alignment])


    return (
        
        

        <div className="Card" style={{background: bgc}} key={data.id}>
             <div className="card-left" >
             <img src={image} />
             </div>
             <div className="card-right">
                <div className="title">
                    <p>{name}</p>
                </div>
                <div className="card-right-details">    
                    <div className="btn-container">
                        <button className="btn btn-after btn-animated" onClick={() => handleClickAdd(data)}>
                            Add Team
                        </button>
                    </div>
                </div>
             </div>
        </div>
        
        
    )
}

export default CardSearch
