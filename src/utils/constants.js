 import md5 from 'md5';

 const publicKey = `42c23a6de579f4e341762f693aa8d289`;
 const privateKey = `beebc72273583cc9a57376a97a6d05766914f86e`;
 const ts = Date.now();
 const hash = md5(ts + privateKey + publicKey);

export const API_URL = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`

export const PageSize = 3;