import React from 'react'
import classes from './BackDrop.module.css'

const BackDrop = (
  props //darkness mode
) => <div className={classes.BackDrop} onClick={props.onClick} />

export default BackDrop
