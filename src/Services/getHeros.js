import Axios from 'axios';


const getData = async (setCard,values) => {


    try {
        

        const response = await Axios.get(`https://www.superheroapi.com/api.php/5166170890063630/search/${values.name}`)

        if(response.data.error) return [];

        

        setCard(response.data.results)

        

    } catch (error) {
        return error;
    }


}

export { getData }