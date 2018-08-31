import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

import Select from 'react-select'

class SortSelect extends Component {
  render () {
    const { classes } = this.props
    return (
      <Select
        className={classes.sortSelect}
        defaultValue={sortOptions[0]}
        options={sortOptions}
      />
    )
  }
}

const sortOptions = [
  { value: 'alphaAsc', label: 'A to Z' },
  { value: 'alphaDesc', label: 'Z to A' },
  { value: 'newest', label: 'Newest' },
  { value: 'oldest', label: 'Oldest' }
]

const styles = theme => ({
  sortSelect: {
    fontSize: '12px',
    marginTop: '0.5rem'
  }
})

export default withStyles(styles)(SortSelect)
