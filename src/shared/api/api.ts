import axios from 'axios';

export const $api = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'X-API-KEY': process.env.API_KEY
  }
})
