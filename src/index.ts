import { GetAnimeInfo } from './client';

(async () => {
  const data = await GetAnimeInfo(40254);
  console.log(data);
})();
