import React from 'react'

export const BiteCodeInput = () => {
  return (
    <input
    className="w-full h-full"
    placeholder="Bite code"
    onKeyUp={(event) => {
      if (event.which === 13) {
        event.target.value = ""
        alert("Bitecode submitted");
      }
    }}
  ></input>
  )
}
