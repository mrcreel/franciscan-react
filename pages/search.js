import React from 'react'
import PropTypes from 'prop-types'

import withRoot from '../components/withRoot'
import { withStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import Layout from '../components/Layout'
import Head from 'next/head'

import FilterBar from '../components/Search/FilterBar'
import SortSelect from '../components/Search/SortSelect'

import TextField from '@material-ui/core/TextField'

// imports for filter
// import Select from 'react-select'

/*
import Checkbox from '@material-ui/core/Checkbox'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormLabel from '@material-ui/core/FormLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'

import debounce from 'lodash.debounce'
import throttle from 'lodash.throttle'
import { getJSON } from '../utils/fetch'
*/

function Search (props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <Layout>
        <Head>
          <link
            rel="stylesheet"
            href="/static/styles/page.css"
            type="text/css"
          />
        </Head>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <TextField
              style={{ width: '100%' }}
              id="search"
              label="xs=12 SEARCH"
              type="search"
              className={classes.textField}
              // margin="normal"
              // value={searchTerm}
              // onChange={this.getSearchResults}
            >
              xs=12 SEARCH
            </TextField>
          </Grid>
          <Grid item xs={8}>
            <FilterBar />
          </Grid>
          <Grid item xs={4}>
            <SortSelect />
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>xs=12 RESULTS</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>xs=12 LOADING</Paper>
          </Grid>
        </Grid>
      </Layout>
    </div>
  )
}

/* CSS Styles */
const styles = theme => ({
  root: {
    margin: theme.spacing.unit,
    flexGrow: 1
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
  }
})

Search.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withRoot(withStyles(styles)(Search))
