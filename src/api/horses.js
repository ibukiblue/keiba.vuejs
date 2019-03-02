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
  { id: 15, name: 'ストレンジくクォーク', age: 7 },
  { id: 16, name: 'ストレンジくクォーク', age: 7 },
  { id: 17, name: 'セダブリランテス', age: 5 },
  { id: 18, name: 'ブラックバゴ', age: 7 },
  { id: 19, name: 'ストレンジくクォーク', age: 7 },
  { id: 20, name: 'ストレンジくクォーク', age: 7 },
  { id: 21, name: 'セダブリランテス', age: 5 },
  { id: 22, name: 'ブラックバゴ', age: 7 },
  { id: 23, name: 'ストレンジくクォーク', age: 7 },
  { id: 24, name: 'ストレンジくクォーク', age: 7 },
  { id: 25, name: 'セダブリランテス', age: 5 },
  { id: 26, name: 'ブラックバゴ', age: 7 },
  { id: 27, name: 'ストレンジくクォーク', age: 7 },
  { id: 28, name: 'ストレンジくクォーク', age: 7 },
  { id: 29, name: 'セダブリランテス', age: 5 },
  { id: 30, name: 'ブラックバゴ', age: 7 },
  { id: 31, name: 'ストレンジくクォーク', age: 7 },
  { id: 32, name: 'ストレンジくクォーク', age: 7 },
  { id: 33, name: 'ブラックバゴ', age: 7 },
  { id: 34, name: 'ストレンジくクォーク', age: 7 },
  { id: 35, name: 'ストレンジくクォーク', age: 7 },
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