
import React, { useState } from 'react'

export default function App() {
  const [recipes, setRecipes] = useState([])
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  const addRecipe = () => {
    if (!title.trim() || !desc.trim()) return
    setRecipes([...recipes, { title, desc }])
    setTitle('')
    setDesc('')
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Каталог рецептов</h2>

      <div style={{ marginBottom: 20 }}>
        <input
          placeholder="Название"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Описание"
          value={desc}
          onChange={e => setDesc(e.target.value)}
        />
        <br />
        <button onClick={addRecipe}>Добавить</button>
      </div>

      <div>
        {recipes.map((r, i) => (
          <div
            key={i}
            style={{
              border: '1px solid black',
              padding: 10,
              marginBottom: 10,
            }}
          >
            <h3>{r.title}</h3>
            <p>{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
