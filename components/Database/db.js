const apiUrl ="https://the-trivia-api.com/v2/questions/"

   export async function fetchData() {
    const response = await fetch(apiUrl);
    if(!response.ok){
        console.log('Network error')
        return null;
    }
        try {
            const json = await response.json();
            console.log(json);
            return json;
        } catch (error) {
            console.error(error)
            alert("Network error :-(")
            return null;
        }
    }
    
