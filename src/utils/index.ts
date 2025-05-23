import { URL } from '@/config/env';
import axios from 'axios';

export async function getPrediction(url: string) {
    const response = await axios.get(`URL/api/v1/predict?url=${url}`);
    const data = response.data
    return data;
}