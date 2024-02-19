export const courseService = {
    getNewestCourses: async ()=>{
        const response = await fetch("http://localhost:3000/courses/newest",{
            cache: "force-cache"
        })
        const newestCourses = await response.json()
        return newestCourses
    }
};