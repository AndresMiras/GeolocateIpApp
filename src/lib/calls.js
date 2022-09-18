
export const call = async (url, condition = true) => {
    try {
        const data = await fetch(url)
        const extract = await data.json();
        // console.log(extract)
        return condition ? extract : null;
    } catch(err) {
        console.log(err);
    }
}


