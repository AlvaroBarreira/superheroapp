import React, { useContext } from 'react'
import FadeIn from 'react-fade-in';
import { HeroeContext } from '../../Contexts/HeroesContext';
import './CardTeam.css'

function CardTeam() {

    const {
        team, 
        bad,
        good,
        setTeam,
        setGood,
        setBad,
        setCombat,
        setIntelligence,
        setPower,
        setDurability,
        setSpeed,
        setStrength,
        setModalData,
        setModal
        } = useContext(HeroeContext);

    let Combat = 0;

    let Intelligence = 0;

    let Power = 0;

    let Durability = 0;

    let Speed = 0;

    let Strength = 0;

    //Function set data ModalWindow 
    const handleClick = (t) => {
        
        setModal(true)

        setModalData({
            name: t.name,
            image: t.image.url,
            alignment: t.biography.alignment,
            alterEgos: t.biography["alter-egos"],
            fullName: t.biography["full-name"],
            ocupation: t.work.occupation,
            hair: t.appearance["hair-color"],
            eye: t.appearance["eye-color"],
            weight: t.appearance.weight[1],
            height: t.appearance.height[1],
        })


    }
    

    const handleDelete = (t) => {

        if (t.biography.alignment === "good") {
            setTeam(team.filter((char) => char !== t))
            setGood(good.filter((char) => char !== t))
        } else if (t.biography.alignment === "bad" || t.biography.alignment === "neutral") {
            setTeam(team.filter((char) => char !== t))
            setBad(bad.filter((char) => char !== t))
        }
        
       
    }

    return (
           
        
        team.map((t) => {

       

            Combat += parseInt(t.powerstats.combat);
            setCombat(Combat)

            Intelligence += parseInt(t.powerstats.intelligence);
            setIntelligence(Intelligence)

            Power += parseInt(t.powerstats.power);
            setPower(Power)

            Durability += parseInt(t.powerstats.durability);
            setDurability(Durability)
            
            Speed += parseInt(t.powerstats.speed);
            setSpeed(Speed)

            Strength += parseInt(t.powerstats.strength);
            setStrength(Strength)


            return (

                <FadeIn>
                <div key={t.id} className="card p-0 p-sm-1 col-6 col-lg-4 border-0"  >

                    <div className="avatar-holder">
                        <img src={t.image.url} alt="modal-heroe"/>
                    </div>
                    <div className="name" >
                        <h4 style={{ color: 'white' }}>{t.name}</h4>
                    </div>  


                    <div className="ds-skill" >
                      
                        <div className="skill">
                            <h6>Combat </h6>
                            <div className="bar" style={{width: `${t.powerstats.combat}%`}}>
                                <p>{t.powerstats.combat === "null" ? t.powerstats.combat = 0 : t.powerstats.combat}</p>
                            </div>
                        </div>
                        <div className="skill">
                            <h6> Intelligence </h6>
                            <div className="bar" style={{width: `${t.powerstats.intelligence}%`}}>
                                <p>{t.powerstats.intelligence === "null" ? t.powerstats.intelligence = 0 : t.powerstats.intelligence}</p>
                            </div>
                        </div>
                        <div className="skill">
                            <h6> Power </h6>
                            <div className="bar" style={{width: `${t.powerstats.power}%`}}>
                                <p>{t.powerstats.power === "null" ? t.powerstats.power = 0 : t.powerstats.power}</p>
                            </div>
                        </div>
                        <div className="skill">
                            <h6>Durability </h6>
                            <div className="bar" style={{width: `${t.powerstats.durability}%`}}>
                                <p>{t.powerstats.durability === "null" ? t.powerstats.durability = 0 : t.powerstats.durability}</p>
                            </div>
                        </div>
                        <div className="skill">
                            <h6> Speed </h6>
                            <div className="bar" style={{width: `${t.powerstats.speed}%`}}>
                                <p>{t.powerstats.speed === "null" ? t.powerstats.speed = 0 : t.powerstats.speed}</p>
                            </div>
                        </div>
                        <div className="skill">
                            <h6>Strength </h6>
                            <div className="bar" style={{width: `${t.powerstats.strength}%`}}>
                                <p>{t.powerstats.strength === "null" ? t.powerstats.strength = 0 : t.powerstats.strength}</p>
                            </div>
                        </div>
                        <button className="view-more" onClick={() => handleClick(t)}>View More</button>
                    </div>
                    <button className="btn-delete" onClick={() => handleDelete(t)}>
                        <p>X</p>
                    </button>
                </div>

                </FadeIn>
            )
        })

      
    )
    
}

export default CardTeam
