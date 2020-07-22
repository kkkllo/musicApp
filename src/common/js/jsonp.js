import originJSONP from 'jsonp'
// 将异步请求的方式导出
export default function jsonp (url, data, options) {
	// 将data和url拼接
	let newUrl = url + param(data)
	return new Promise((resolve, reject) => {
		originJSONP(newUrl, options, (err, data) => {
			if (!err) {
				resolve(data)
			} else {
				reject(err)
			}
		})
	})
}
function param (data) {
	let url = ""
	for (let k in data) {
		// 因为最后要的到的值是url，所以要对值进行转义
		url += `&${k}=${encodeURIComponent(data[k])}`
	}
	// 返回的url的第一个&符号要删去
	// substring方法，是字符串的截取，截取字符串[start,end)
	return url ? url.substring(1) : ''
}