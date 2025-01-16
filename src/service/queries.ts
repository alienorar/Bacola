import { BannerType, CategoriesType, SubCategoryType } from "@/types"

// ============GET CATEGORIES ============
export const getCategories = async (): Promise<CategoriesType[]> => {
    const res = await fetch('http://localhost:8000/category/', {
        headers: {
            "Content-Type": "application/json"
        },
        method: "GET"
    });

    if (!res.ok) {
        throw new Error("Failed to fetch categories");
    }

    const data: CategoriesType[] = await res.json();
    return data; 
};
// ============GET SUB CATEGORIES ============
export const getSubCategories = async (): Promise<SubCategoryType> => {
    const res = await fetch('http://localhost:8000/api/subcategory/');
    if (!res.ok) {
        throw new Error("Failed to fetch subcategories");
    }

    const data: SubCategoryType = await res.json();
    
    return data;
};


// ============GET BANNERS ============
export const getBanners = async () => {
    const res = await fetch("http://localhost:8000/banner/", {
        headers: {
            "Content-Type": "application/json"
        },
        method: "GET"
    })
    const data: BannerType = await res.json();
    console.log(data);
    
    return data

}