import axios from "axios";


export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const { data } = await axios.get((url),{
        
        headers: {
            'X-RapidAPI-Key': '4699f7444emsh98873a722ad2abep111606jsn64d975138af7',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        } })
  return data;
}