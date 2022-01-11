import { useState, createContext } from "react";
const HeroeContext = createContext();

const HeroeData = ({children}) => {


    const [modalData, setModalData] = useState({
        name: '',
        image: '',
        alignment: '',
        alterEgos: '',
        fullName: '',
        ocupation: '',
        hair: '',
        eye: '',
        weight: '',
        height: '',


    })

    const [card, setCard] = useState([]);

    const [nameSearch, setNameSearch] = useState('');

    const [team, setTeam] = useState([])

    const [good, setGood] = useState([])

    const [bad, setBad] = useState([])

    const [combat, setCombat] = useState(0)

    const [intelligence, setIntelligence] = useState(0)

    const [power, setPower] = useState(0)

    const [durability, setDurability] = useState(0)

    const [speed, setSpeed] = useState(0)

    const [strength, setStrength] = useState(0)

    const [text, setText] = useState('')

    const [show, setShow] = useState(false);

    const [result, setResult] = useState('')

    const [loading, setLoading] = useState(null);

    const [showCarrousel, setShowCarrousel] = useState(false)

    const [modal, setModal] = useState(false);

    const [isLoading, setIsLoading] = useState(false)

    const values = {
        card,
        setCard,
        nameSearch,
        setNameSearch,
        good,
        setGood,
        bad,
        setBad,
        team,
        setTeam,
        combat,
        intelligence,
        power,
        durability,
        speed,
        strength,
        setCombat,
        setIntelligence,
        setPower,
        setDurability,
        setSpeed,
        setStrength,
        show, 
        setShow,
        text,
        setText, 
        result,
        setResult,
        loading, 
        setLoading,
        showCarrousel,
        setShowCarrousel,
        modalData,
        setModalData,
        modal, 
        setModal,
        setIsLoading,
        isLoading
    }

    return (

        <HeroeContext.Provider value={values}>
            {children}
        </HeroeContext.Provider>

    )

}

export { HeroeContext }

export { HeroeData };