import React from 'react'

export const BiteCodeInput = () => {
  return (
    <input
    class="w-full h-full"
    placeholder="Bite code"
    type="number"
    onKeyUp={(event) => {
      if (event.which === 13) alert("Submit on enter test");
    }}
  ></input>
  )
}
