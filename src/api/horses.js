// 商品リストの配列
const database = [
  { id: 1, name: 'セダブリランテス', age: 5 },
  { id: 2, name: 'ブラックバゴ', age: 7 },
  { id: 3, name: 'ストレンジくクォーク', age: 7 },
  { id: 4, name: 'ストレンジくクォーク', age: 7 },
  { id: 5, name: 'セダブリランテス', age: 5 },
  { id: 6, name: 'ブラックバゴ', age: 7 },
  { id: 7, name: 'ストレンジくクォーク', age: 7 },
  { id: 8, name: 'ストレンジくクォーク', age: 7 },
  { id: 9, name: 'セダブリランテス', age: 5 },
  { id: 10, name: 'ブラックバゴ', age: 7 },
  { id: 11, name: 'ストレンジくクォーク', age: 7 },
  { id: 12, name: 'ストレンジくクォーク', age: 7 },
  { id: 13, name: 'セダブリランテス', age: 5 },
  { id: 14, name: 'ブラックバゴ', age: 7 },
  { id: 15, name: 'ストレンジくクォーク', age: 7 }
]
// インポート先で使用できる関数をオブジェクトとしてまとめたもの
export default {
  fetch(id) {
    return database
  },
  find(id) {
    return database.find(el => el.id === id)
  },
  asyncFind(id, callback) {
    setTimeout(() => {
      callback(database.find(el => el.id === id))
    }, 300)
  }
}