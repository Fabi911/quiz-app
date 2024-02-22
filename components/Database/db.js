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
        //const fs= require;
        // const pathData="data.json"
        // fs.writeFile(pathData, json, 'utf8', (err) => {
        //     if (err) {
        //         console.error('Fehler beim Schreiben in die Datei:', err);
        //         return;
        //     }
        //     console.log('Daten erfolgreich in die Datei geschrieben.');
        // });
    }

   
    