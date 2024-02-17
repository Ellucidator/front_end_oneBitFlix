

export type EpisodeType = {
    id: number;
    name: string;
    synopsis:string;
    order: number;
    videUrl:string;
    secondsLong:number;
}
export type CourseType = {
    id: number;
    name:string;
    thumbnailUrl:string;
    synopsis:string;
    episodes?: EpisodeType[];
}

