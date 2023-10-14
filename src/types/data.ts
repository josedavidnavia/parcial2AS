export const getInformation = async (src: string) => {
    try{
    const character = fetch(`${src}`).then(res => res.json());
    return character;
    } catch (error){
        console.log(error)
    }
}



export const getCats = async () => {
    try{
    const allCharacters = fetch("https://cataas.com/cat/says/").then(res => res.json());
    return allCharacters;
    } catch (error){
        console.log(error)
    }
}


