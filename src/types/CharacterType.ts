import axios from "axios";


export type CharacterResponseType = {
    results: {
        name: {
            first: string
            last: string
        }
        location: {
            street:{
                number: number
            }
        }
        dob:{
            age: number
        }
        picture:{
            large: string
        }
    }[]
}

export const getCharacter = async (count: number): Promise<CharacterResponseType> => {
  const response = await axios.get<CharacterResponseType>(`https://randomuser.me/api/?results=${count}`);
  return response.data;
};