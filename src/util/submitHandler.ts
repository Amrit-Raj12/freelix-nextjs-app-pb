export const postData = async (url = "", headers = {}, data = {}) => {

    const formData = new URLSearchParams(Object.entries(data));
  
    // console.log('formData', formData)
  
     const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers,
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: formData,
     });
  
     return response.json();
    }

    export const patchData = async (url = "", headers = {}, data = {}) => {

        const formData = new URLSearchParams(Object.entries(data));
      
        // console.log('formData', formData)
      
         const response = await fetch(url, {
            method: "PATCH",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers,
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: formData,
         });
      
         return response.json();
        }

    export const getData = async (url = "", headers = {}) => {      
         const response = await fetch(url, {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers
         });
      
         return response.json();
        }