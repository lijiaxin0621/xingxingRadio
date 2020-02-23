var baseUrl = "http://localhost:3000"
function http({url}){
    return new Promise((resolve,reject)=>{
        wx.request({
            url:baseUrl +url,
            data:{},
            header: {'content-type':'application/json'},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (res)=>{
                resolve(res)
            },
            fail: (err)=>{
                reject(err)
            }
        });
    })
}
module.exports = {
    getBanner:()=>{
        return http({
            url:"/banner"
        })
    },
    getHotDj:()=>{
        return http({
            url:"/dj/hot"
        })
    },
    getRecommend:()=>{
        return http({
            url:"/program/recommend?limit=30"
        })
    },
    getToplist:()=>{
        return http({
            url:"/dj/program/toplist "
        })
    },
    getDetail:(id)=>{
        return http({
            url:`/dj/program/detail?id=${id}`,
        })
    },
    getStar:()=>{
        return http({
            url:"/dj/recommend/type?type=1"
        })
    },
    getStory:()=>{
        return http({
            url:"/dj/recommend/type?type=2"
        })
    },
    getElectron:()=>{
        return http({
            url:"/dj/recommend/type?type=10002"
        })
    },
    getCreate:()=>{
        return http({
            url:"/dj/recommend/type?type=2001"
        })
    },
    getEmotion:()=>{
        return http({
            url:"/dj/recommend/type?type=3"
        })
    },
    getBook:()=>{
        return http({
            url:"/dj/recommend/type?type=10001"
        })
    },
    getSortDetail:(id)=>{
        return http({
            url:`/dj/detail?rid=${id}`
        })
    },
    getDjList:(id)=>{
        return http({
            url:`/dj/program?rid=${id}`
        })
    },
    getPlay:(id)=>{
        return http({
            url:`/song/url?id=${id}`
        })
    }
}