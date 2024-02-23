
export interface CourseType {
    id: number;
    name: string;
    synopsis: string;
    thumbnailUrl: string;
    featured: boolean;
    categoryId: number;
}

export interface LoginType {
    email: string;
    password: string;
}