import React, { useContext } from 'react'
import { HeroeContext } from '../../Contexts/HeroesContext';


function Result() {

    const {card, result} = useContext(HeroeContext);

    return (
        <div style={{ margin: "auto", width: "100px", fontSize: "22px" }}>
            <span style={{ textAlign: "center" }}>
                {card.length === 0 ? '' : `${result} results`}
            </span>
        </div>

    )
}

export default Result
