

export const url = 'https://alistempirefoundation.org:5050';
export const url2 = 'https://alistempirefoundation.org:5049';
//export const new_url  = 'https://alistempirefoundation.org:5042';
//export const nodeurl = 'https://admin.alistempirefoundation.org';
//export const nodeurl = 'http://127.0.0.1:8081';
export const nodeurl = 'https://mathserver.alistempirefoundation.org';
export const nodeurl2 = 'https://qaserver.alistempirefoundation.org';
export const new_url  = 'https://alistempirefoundation.org:5042';

export const db = 'https://app.alistempirefoundation.org/tutorial';
// const preprocessResponse = (response) => {
//
//     return response.json().then((data) => {
//         return data;
//     });
// };
export const searchBySubjectId = (id, target)=>{
    //console.log(target);
    for (let i in target){
        if (target[i].subject_id === id){
            return target[i].subject_name
        }
    }
    return('not found')
};
export const searchByCourseId = (id, target)=>{
    //console.log(target);
    for (let i in target){
        if (target[i].course_id === id){
            return target[i].course_name
        }
    }
    return('not found')
};
export const searchByLessonId = (id, target)=>{
    //console.log(target);
    for (let i in target){
        if (target[i].lesson_id === id){
            return target[i].lesson_name
        }
    }
    return('not found')
};
export const searchByTopictId = (id, target)=>{
    //console.log(target);
    for (let i in target){
        if (target[i].topic_id === id){
            return target[i].topic_name
        }
    }
    return('not found')
};
export const getCourseById = (id)=> {
    const option={
        method:'GET',
        headers: {
            'content-type': 'application/json',
        }
    };
    fetch(`${db}/tutor/${id}/?model=course`,option)
        .then(response=>response.json())
        .then(res=>{
            return res
        })
};
export const getSubjectById = (id) => {
    const option = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        }
    };
    return new Promise((resolve, reject) => {
        fetch(`${db}/tutor/${id}/?model=subjects`, option).then((res) => {
            res.json().then((data) => {
                resolve(data);
                console.log(data)
            }).catch((ex1) => {
                // 异常处理 or 直接抛出
                reject(ex1)
            })
        }).catch((ex) => {
            // 异常处理 or 直接抛出
            reject(ex)
        })
    })
};
export const getTopicById = (id)=> {
    //let value;
    const option={
        method:'GET',
        headers: {
            'content-type': 'application/json',
        }
    };

    fetch(`${db}/tutor/${id}/?model=topics`,option)
        .then(response=>response.json())
        .then(res=>{
            return res
        });
    //return value
};
export const getLessonById = (id)=> {
    const option={
        method:'GET',
        headers: {
            'content-type': 'application/json',
        }
    };
    fetch(`${db}/tutor/${id}/?model=lesson`,option)
        .then(response=>response.json())
        .then(res=>{
            return res
        })
};
