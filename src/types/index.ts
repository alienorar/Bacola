export interface BannerType {
    results?: {
        title?: string,
        description: string,
        image: string,
        id: string
    }[];
}
export interface CategoriesType{
    results?: {
        title?: string,
        description: string,
        image: string,
        id: string
    }[];
}

export interface SubCategoryType {
    results?: {
        id: number;
        title: string;
        image: string; 
        parent: {
            id: number;
            title: string; 
        };
    }[];
}


