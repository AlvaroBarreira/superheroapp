import React, { useContext } from 'react'
import SquadText from '../SquadText/SquadText';
import Row from 'react-bootstrap/Row';
import CardTeam from '../CardTeam/CardTeam';
import Powerstats from '../PowerStats/Powerstats'
import { HeroeContext } from '../../Contexts/HeroesContext'
import ModalWindow from '../Modal/ModalWindow';
import './SquadSection.css'

function SquadSection() {

    const {team} = useContext(HeroeContext);


    return (
        <div className="container" style={{ marginBottom: "25px" }}>


            <div className="row gx-1 ">
                
         
                {
                    team.length === 0 ?
                        <div className="col-lg-9 col-md-12 team-container" style={{ gridTemplateColumns: "repeat(1, 1fr)"}}>

                            <SquadText />

                        </div>
                        : (

                            <div className="col-lg-9 col-md-12 team-container">

                                <Row style={{ position: "absolute" }} className="col-lg-12">
                                    <p className="length">{team.length}/6</p>
                                </Row>

                                <CardTeam team={team} />

                            </div>

                        )
                }



                <div className="col-lg-3 col-md-12 stats-container">

                    <Powerstats />

                </div>

            </div>
        </div>
    )
}

export default SquadSection
