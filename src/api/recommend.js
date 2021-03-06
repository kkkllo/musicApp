import jsonp from '../common/js/jsonp.js'
import { commonParams, options } from './config.js'

export default function getRecom () {
	let url = "http://ustbhuangyi.com/music/api/getTopBanner"
	let data = Object.assign({}, commonParams, {
		platform: 'yqq.json',
		hostUin: 0,
		needNewCode: 0,
		inCharset: 'utf8',
		format: 'json',
		'-': 'recom' + (Math.random() + '').replace('0.', ''),
		data: {
			'comm': { 'ct': 24 },
			'category': { 'method': 'get_hot_category', 'param': { 'qq': '' }, 'module': 'music.web_category_svr' },
			'recomPlaylist': {
				'method': 'get_hot_recommend',
				'param': { 'async': 1, 'cmd': 2 },
				'module': 'playlist.HotRecommendServer'
			},
			'playlist': {
				'method': 'get_playlist_by_category',
				'param': { 'id': 8, 'curPage': 1, 'size': 40, 'order': 5, 'titleid': 8 },
				'module': 'playlist.PlayListPlazaServer'
			},
			'new_song': { 'module': 'newsong.NewSongServer', 'method': 'get_new_song_info', 'param': { 'type': 5 } },
			'new_album': {
				'module': 'newalbum.NewAlbumServer',
				'method': 'get_new_album_info',
				'param': { 'area': 1, 'sin': 0, 'num': 10 }
			},
			'new_album_tag': { 'module': 'newalbum.NewAlbumServer', 'method': 'get_new_album_area', 'param': {} },
			'toplist': { 'module': 'musicToplist.ToplistInfoServer', 'method': 'GetAll', 'param': {} },
			'focus': { 'module': 'QQMusic.MusichallServer', 'method': 'GetFocus', 'param': {} }
		}
	})
	return jsonp(url, data, options)
}