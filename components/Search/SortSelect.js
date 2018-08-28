import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

import Select from 'react-select'
class SortSelect extends Component {
  render () {
    return (
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={sortOptions[0]}
        // isDisabled={isDisabled}
        // isLoading={isLoading}
        // isClearable={isClearable}
        // isRtl={isRtl}
        // isSearchable={isSearchable}
        name="sortSelect"
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

const styles = theme => ({})

export default withStyles(styles)(SortSelect)
