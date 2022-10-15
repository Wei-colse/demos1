const $http = (url,data={},mothod="GET",header={}) =>{
	let baseUrl="http://localhost:8080/static/js";
	let promise = new Promise((reslove,reject)=>{
		uni.request({
			url:baseUrl+url,
			data,
			mothod,
			header
		}).then((res)=>{
			console.log(res)
			/* if(res[1].data.code == 200){
				reslove(res[1])
			}else{
				reject(res[1])
			} */
		}).catch((error)=>{
			reject(error)
		})
	})
	return promise
}
export default $http;