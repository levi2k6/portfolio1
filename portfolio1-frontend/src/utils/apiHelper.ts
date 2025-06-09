import type {loginCredentialsType} from './utilsType.ts';

export async function get(url: string){
    try{
        const response = await fetch(url, {
           method: "GET",
            headers: {
                "Accept" : "application/json",
                "Authorization": "Basic " + btoa("user:ea4a5c1b-e7bb-4f00-b5f3-1e87b2c2c942"),
            }
        })

        if(!response.ok){
            throw new Error(`http error! status: ${response.status}`);
        }

        const data: any = await response.json();
        console.log(data);
        return data;
    }catch(error){
        throw new Error(`fetch failed: , ${error}`);
    }
}

export async function post(url: string, data : loginCredentialsType){
    try{
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Accept" : "application/json",
            }
        })

        if(!response.ok){
            throw new Error(`http error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        return data;

    }catch(error){
        throw new Error(`fetch failed: , ${error}`);
        return false; 
    }

}




