import {useEffect, useState} from "react";
interface CatResponse {
    file: string;
}
export const useFetchImage = (url: string) => {
    const [image, setImage] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImage = async () => {
            const response = await fetch(url);
            const json : CatResponse = await response.json();
            const imageUrl = json.file;
            setImage(imageUrl);
            setLoading(false);
        };
        fetchImage();
    }, [url]);

    return { image, loading };
};