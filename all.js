
// const checkScore = score =>{
//     return new Promise((resolve, reject)=>{
//         console.log("正在觀察是否及格");
//         setTimeout(()=>{
//             if (score >= 60) {
//                 resolve(score);
//             } else {
//                 reject("不及格");
//             }
//         }, 2000)
//     })
// }

// checkScore(10)
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

function correctTest(name) {
    return new Promise((resolve, reject)=>{
        console.log("批改作業中");
        setTimeout(()=>{
            const score = Math.round(Math.random()*100);
            if(score>=20){
                resolve(
                    {
                        name,
                        score
                    }
                )
            } else {
                reject("退學掰")
            }
        }, 2000)
    })
}
function checkReward(data) {
    return new Promise((resolve, reject)=>{
        console.log("檢查獎品中");
        setTimeout(()=>{
            if (data.score>=90) {
                resolve(`${data.name}獲得電影票`)
            } else if (data.score>=60 && data.score<90) {
                resolve(`${data.name}獲得嘉獎`)
            } else {
                reject(`沒有獎品，毒打10下`)
            }
            resolve(data.name);
        })
    })
}

correctTest("小明")
    .then(data=>checkReward(data))
    .then(name => console.log(`${name}`))
    .catch(error=>console.log(error))

