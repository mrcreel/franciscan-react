import React, { Component } from 'react'
import PropTypes from 'prop-types'

import withRoot from '../components/withRoot'
import { withStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import Layout from '../components/Layout'

import FilterBar from '../components/Search/FilterBar'
import SortSelect from '../components/Search/SortSelect'
import SearchBar from '../components/Search/SearchBar'

class Search extends Component {
  render () {
    return (
      <div className={styles.root}>
        <Layout>
          <Grid container spacing={8}>
            <Grid item xs={9}>
              <SearchBar className={styles.searchBar} />
            </Grid>
            <Grid item xs={3}>
              <SortSelect className={styles.sortSelect} />
            </Grid>
            <Grid item xs={12}>
              <FilterBar className={styles.filterBar} />
            </Grid>
            <Grid item xs={12}>
              <Paper className={styles.paper}>xs=12 RESULTS</Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={styles.paper}>xs=12 LOADING</Paper>
            </Grid>
          </Grid>
        </Layout>
      </div>
    )
  }
}

/* CSS Styles */
const styles = theme => ({
  root: {
    padding: '0 1rem'
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  singleValue: {
    fontSize: 16
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 16
  },
  sortSelect: {
    marginTop: '0.75rem'
  },
  searchBar: {}
})

Search.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withRoot(withStyles(styles)(Search))
