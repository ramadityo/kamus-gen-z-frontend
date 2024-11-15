import axios from "axios";

export default async function GetData(query) {
    const url = `https://${process.env.NEXT_PUBLIC_HOST_API}/api/v1/kamus?q=${query}`;

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
