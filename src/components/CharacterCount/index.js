import {useState} from 'react'
import {v4} from 'uuid'

import './index.css'

const CharacterCount = () => {
  const [inputText, setInputText] = useState('')
  const [itemsList, setItemsList] = useState([])

  const onChangeCharacter = event => {
    setInputText(event.target.value)
  }

  const onAddBtn = event => {
    event.preventDefault()
    const newItem = {
      id: v4(),
      inputText,
      count: inputText.length,
    }

    setItemsList(prevItemsList => [...prevItemsList, newItem])
    setInputText('')
  }

  const renderInputView = () => (
    <form className="black-box" onSubmit={onAddBtn}>
      <h1 className="heading">Character Counter</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter the Characters here"
          onChange={onChangeCharacter}
          value={inputText}
          className="search-input"
        />
        <button type="submit" className="add-btn">
          Add
        </button>
      </div>
    </form>
  )

  const itemLength = itemsList.length === 0

  return (
    <div className="main-container">
      <div className="output-container">
        <div className="box-1">
          <h1 className="out-head">
            Count the characters like a<br />
            Boss...
          </h1>
        </div>
        {itemLength ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png "
            alt="no user inputs"
            className="image"
          />
        ) : (
          <ul className="box-2">
            {itemsList.map(eachItem => (
              <li key={eachItem.id}>
                <p>
                  {eachItem.inputText} : {eachItem.count}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
      {renderInputView()}
    </div>
  )
}
export default CharacterCount
