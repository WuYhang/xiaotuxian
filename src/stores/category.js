import { ref } from "vue"
import { defineStore } from "pinia"
import { getCategoryAPI } from "@/apis/layout"

export const useCategoryStore = defineStore('category', () => {

    // state导航列表数据
    const CategoryList = ref([])

    //action 获取导航数据的方法
    const getCategory = async () => {
        const res = await getCategoryAPI();
        CategoryList.value = res.data.result
    }
    return {
        CategoryList,
        getCategory
    }
})