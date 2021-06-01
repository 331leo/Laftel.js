import axios from 'axios';
import { ILaftelRawAnimeInfo, LaftelAnimeInfo } from './models';

const ApiUrl = {
  AnimeItem: '/items/v1/',
  SearchAnime: '/search/v1/keyword/?keyword=',
};

const apiClient = axios.create({
  baseURL: 'https://laftel.net/api',
  responseType: 'json',
  headers: {
    laftel: 'TeJava',
  },
});

export async function GetAnimeInfo(id: number): Promise<LaftelAnimeInfo> {
  const response = await apiClient.get<ILaftelRawAnimeInfo>(
    ApiUrl.AnimeItem + id
  );
  return new LaftelAnimeInfo(response as ILaftelRawAnimeInfo);
}
