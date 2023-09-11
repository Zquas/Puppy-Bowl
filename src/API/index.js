const BASE_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2305-UNF-HY-WEB-PT/players'
const app = express();

export async function fetchAllPlayers(){
    try{
        console.log('Trying to fetch')
        const fetchURL = `${BASE_URL}`;
        const response = await fetch(fetchURL)
        const data = await response.json();
        console.log(data)
        return data;
    } catch(error){
        console.log(error);
        return error;
    }
}

export async function fetchSinglePlayer(playerID){
    try{
        console.log('Trying to fetch', playerID)
        const response = await fetch(`${BASE_URL}/${playerID}`)
        const data = await response.json();
        console.log("fetch single player", data)
        return data;
    } catch(error){
        console.log(error);
        return error;
    }
}

export async function puppySearch(key){
    try{
        app.use('/', (req, res, next) => {
            const filters = req.query;
            const filteredUsers = data.filter(user => {
              let isValid = true;
              for (key in filters) {
                console.log(key, user[key], filters[key]);
                isValid = isValid && user[key] == filters[key];
              }
              return isValid;
            });
            res.send(filteredUsers);
          });
        }
    catch(error){
        console.log(error);
        return error;
    }
}

export async function createPlayer( name, breed, status, imageUrl){
    try {
        const response = await fetch(
        `${BASE_URL}`,
        {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            name,
            breed,
            status,
            imageUrl
            }),
        }
        );
        const result = await response.json();
        console.log(result);
        return result.data;
    } catch (err) {
        console.error(err);
    }
}

export async function deletePlayer(playerID){
    fetch(`${BASE_URL}/${playerID}`, {
        method: 'DELETE',
      });
      try {
        const response = await fetch(
            `${BASE_URL}/${playerID}`,
          {
            method: 'DELETE',
          }
        );
        const result = await response.json();
        console.log(result);
      } catch (err) {
        console.error(err);
      }
    }