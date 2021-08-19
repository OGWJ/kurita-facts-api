const db = connect("mongodb://localhost:27017/kurita")

db.cohort.drop()

db.cohort.insertMany([
  { name: 'Tegan', age: 24, breakfast: 'Cinnamon roll... always' },
  { name: 'Owen', age: 24, dinner: 'Poke bowl' }
])

