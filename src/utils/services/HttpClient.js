import { allowedHttpStatus } from "./HttpStatus";

export default class HttpClient {

    static get = async (url) => {
        const response = await fetch(url);
        validateResponse(response);
        const data = await response.json();
        return data;
    }

    static post = async (url, body) => {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': ContentType.JSON
            }
        });
        validateResponse(response);
        const data = await response.json();
        return data;
    }

    static put = async (url, body) => {
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': ContentType.JSON
            }
        });
        validateResponse(response);
        const data = await response.json();
        return data;
    }


    static delete = async (url, body) => {
        const response = await fetch(url, {
            method: 'DELETE',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': ContentType.JSON
            }
        });
        validateResponse(response);
        const data = await response.json();
        return data;
    }
}

const ContentType = {
    JSON: 'application/json'
};

const validateResponse = (response) => {
    if (!allowedHttpStatus.includes(response.status)) {
        throw new Error(response);
    }
};