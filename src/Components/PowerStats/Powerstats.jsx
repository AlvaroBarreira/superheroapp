import React, { useContext } from 'react'
import { HeroeContext } from '../../Contexts/HeroesContext'
import './Powerstats.css'

function Powerstats() {

    const {team, combat, intelligence, power, speed, strength, durability} = useContext(HeroeContext);


    return (
        <div className="powerstats">

            <div className="powerstats-title">
                <h1>
                    your team statistics
                </h1>
            </div>

            <div className="stat-container">
                <h6>Combat </h6>
                <div className="bar" style={{ width: team.length === 0 ? "0" : `${combat * 100 / 600}%` }}>
                    <p>{team.length === 0 ? 0 : combat}</p>
                </div>
            </div>
            <div className="stat-container">
                <h6> Intelligence </h6>
                <div className="bar" style={{ width: team.length === 0 ? "0" : `${intelligence * 100 / 600}%` }}>
                    <p>{team.length === 0 ? 0 : intelligence}</p>
                </div>
            </div>
            <div className="stat-container">
                <h6> Power </h6>
                <div className="bar" style={{ width: team.length === 0 ? "0" : `${power * 100 / 600}%` }}>
                    <p>{team.length === 0 ? 0 : power}</p>
                </div>
            </div>
            <div className="stat-container">
                <h6>Durability </h6>
                <div className="bar" style={{ width: team.length === 0 ? "0" : `${durability * 100 / 600}%` }}>
                    <p>{team.length === 0 ? 0 : durability}</p>
                </div>
            </div>
            <div className="stat-container">
                <h6> Speed </h6>
                <div className="bar" style={{ width: team.length === 0 ? "0" : `${speed * 100 / 600}%` }}>
                    <p>{team.length === 0 ? 0 : speed}</p>
                </div>
            </div>
            <div className="stat-container">
                <h6>Strength </h6>
                <div className="bar" style={{ width: team.length === 0 ? "0" : `${strength * 100 / 600}%` }}>
                    <p>{team.length === 0 ? 0 : strength}</p>
                </div>
            </div>
        </div>
    )
}

export default Powerstats
