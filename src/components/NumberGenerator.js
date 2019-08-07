import React, { useState, useEffect } from 'react'
import { get } from 'axios'
import styled from '@emotion/styled'

const RandomNumberContainer = styled('section')`
  margin: 0 auto;
  border: 3px solid ${props => props.theme.color.primary};
  height: 100px;
  width: 300px;

  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 1fr 1fr;

  button {
    background: ${props => props.theme.color.light};
    color: ${props => props.theme.color.secondary};
    text-transform: uppercase;
    font-family: ${props => props.theme.h2.fontFamily};
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${props => props.theme.h2.fontFamily};
    font-size: ${props => props.theme.h2.fontSize};
  }
`

const uri =
  'https://spk-netlify-demo.netlify.com/.netlify/functions/random-number'

const NumberGenerator = () => {
  const [number, setNumber] = useState(-1)

  const fetchData = async () => {
    const {
      data: { value },
    } = await get(uri).catch(() => {
      setNumber(Math.floor(Math.random() * 43))
    })

    setNumber(value)
  }
  useEffect(() => {
    fetchData()
  }, [])

  const setRandomNumber = () => {
    fetchData()
  }

  return (
    <RandomNumberContainer>
      <button onClick={setRandomNumber}>Set Random Number</button>
      <div>{number}</div>
    </RandomNumberContainer>
  )
}

export default NumberGenerator
