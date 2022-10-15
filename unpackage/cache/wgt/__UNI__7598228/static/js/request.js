const baseUrl =""
export const request=(option={})=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:baseUrl + option.url || "",
			method:option.method || 'GET',
			data:option.data || {}
		}).then((data)=>{
			let [err,res] = data
			resolve(res)
		}).catch(error=>{
			reject(error)
		})
	})
}