async function giveInformation(nba){
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'd1f6d42591msh9f6ab44a01815c7p11ee8cjsn7a3203b23676',
            'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'

        
        }
    };    
}

const url = 'https://api-nba-v1.p.rapidapi.com/games?date=2022-02-12';
const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);

