export const scoreFormat = (data:any) => {
    return data.map((item: any) => ({
        ranking:item.ranking,
        cityName: item.cityName,
        score: parseFloat(item.score).toFixed(2),
        创新发展: parseFloat(item["创新发展"]).toFixed(2),
        协调发展: parseFloat(item["协调发展"]).toFixed(2),
        绿色发展: parseFloat(item["绿色发展"]).toFixed(2),
        开放发展: parseFloat(item["开放发展"]).toFixed(2),
        共享发展: parseFloat(item["共享发展"]).toFixed(2),
    }));
}

// export const indicatorsFormat = (data:any) => {
//     var newDataset:any = {}
//     newDataset.keyName = data.keyName
//     // 共享
//     newDataset["共享发展"] = data["共享发展"]

//     // 创新
//     // 协调
//     // 开放
//     // 绿色

//     return newDataset
// }