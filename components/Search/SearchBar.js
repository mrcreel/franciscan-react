import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

class SearchBar extends Component {
  state = {
    searchTerm: []
  }

  handleChange = searchTerm => event => {
    this.setState({
      [searchTerm]: event.target.value
    })
  }

  render () {
    const { classes } = this.props

    return (
      <TextField
        id="search"
        label="Search Field"
        type="search"
        className={classes.searchBar}
        onChange={this.handleChange('searchTerm')}
      />
    )
  }
}

const styles = theme => ({
  searchBar: {
    width: '100%'
  }
})

export default withStyles(styles)(SearchBar)
