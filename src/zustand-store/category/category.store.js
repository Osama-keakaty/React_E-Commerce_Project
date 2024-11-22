import {create} from 'zustand'

export const useCategoryStore = create((set)=>({
    categoriesMap:{},
    setCategoriesMap: (value)=>set({categoriesMap:value}),
    loading : true,
    setLoading : (value)=>set({loading : value}),
}));