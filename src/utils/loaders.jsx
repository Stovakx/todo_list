import axios from "axios";

//barvy pro labels
export const loadColors = async()=>{
    try{
        const response = await axios.get('/src/data//labelColors.json')
        const data = response.data

        return data.colors;
    }
    catch(error){
        console.error('Chyba při načítání bare', error);
        return
    }
}

