const getNewestCourses = async ()=>{
    const res = await fetch("http://localhost:3000/courses/newest");
    const data =await res.json().then(data=>data)
    return data
}

const data = getNewestCourses().then(data=>console.log(data))
