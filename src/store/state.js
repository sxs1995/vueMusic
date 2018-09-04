import { playMode } from 'common/js/config.js'

const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playlist: [], // 播放列表
  sequenceList: [], // 顺序播放列表
  mode: playMode.sequence,
  currentIndex: -1 // 当前播放
}

export default state
