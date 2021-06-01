import { AxiosResponse } from 'axios';

export interface ILaftelRawAnimeInfo extends AxiosResponse {
  id: number;
  name: string;
  img: 'https://image.laftel.net/items/thumbs/big/b1c06039-bf7f-4c65-85d9-22f46941dac3.jpg';
  content: string;
  awards?: Array<string>;
  content_rating: string;
  is_ending: boolean;
  is_adult: boolean;
  viewable: boolean;
  genres?: Array<string>;
  tags?: Array<string>;
  meta_info: {
    avg_rating: number;
    male: number;
    female: number;
  };
  animation_info: {
    air_year_quarter: string;
    original_air_time?: string;
    distributed_air_time?: string;
  };
}

export class LaftelAnimeInfo {
  id: number; // 애니 ID
  name: string; // 이미지 URL
  url: string; // 링크
  content: string; // 줄거리
  ended: boolean; // 완결 여부
  awards?: Array<string>; // 받은 상

  content_rating: string; // 12세 이용가, 15세 이용가 등등
  adultonly: boolean; // 성인이용가 여부
  viewable: boolean; // 시청 가능 여부
  genres?: Array<string>; // 장르 태그 리스트
  tags?: Array<string>; // 자체 태그 리스트

  air_year_quarter: string; // 방영 분기 (2020년 1분기)
  air_day?: string; // 방영 요일
  avg_rating: number; // 평균 평점(5점 만점)

  view_male: number; // 남성 시청자 비율
  view_female: number; // 여성 시청자 비율
  constructor(raw: ILaftelRawAnimeInfo) {
    const data = raw.data;
    this.id = data.id;
    this.name = data.name;
    this.url = 'https://laftel.net/item/' + data.id;
    this.content = data.content;
    this.ended = data.is_ending;
    this.awards = data.awards;

    this.content_rating = data.content_rating;
    this.adultonly = data.is_adult;
    this.viewable = data.viewable;
    this.genres = data.genres;
    this.tags = data.tags;

    this.air_year_quarter = data.animation_info.air_year_quarter;
    this.air_day = data.animation_info.original_air_time
      ? data.animation_info.original_air_time
      : data.animation_info.distributed_air_time;

    this.avg_rating = data.meta_info.avg_rating;
    this.view_male = data.meta_info.male;
    this.view_female = data.meta_info.female;
  }
}
