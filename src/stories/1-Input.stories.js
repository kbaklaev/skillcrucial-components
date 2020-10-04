import React from 'react'

import Input from '../components/inputs/input-1/input'

export default {
  title: 'Input'
}

export const testInput = () => <Input title='Username' getValue={(str) => console.log(str)} />