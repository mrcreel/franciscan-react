import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

import Select from 'react-select'

class FilterBar extends Component {
  render () {
    const { classes } = this.props
    return (
      <Select
        defaultValue={[
          filterOptions[0], // Department
          filterOptions[1], // Event
          filterOptions[2], // Faculty
          filterOptions[4], // Major
          filterOptions[5] /// News
        ]}
        isMulti
        name="postTypesSelect"
        options={filterOptions}
        className={classes.filterBar}
      />
    )
  }
}

const filterOptions = [
  { value: 'department', label: 'Department' },
  { value: 'event', label: 'Event' },
  { value: 'faculty', label: 'Faculty' },
  { value: 'institute', label: 'Institute' },
  { value: 'major', label: 'Major' },
  { value: 'news', label: 'News' },
  { value: 'staff', label: 'Staff' }
]
/*
  'directory',
  'human-resource',
  'campus-security',
  'associate-program',
  'minor',
  'about-page',
  'fms-page',
  'chapel-page',
  'academics-page',
  'admissions-page',
  'sfs-page',
  'austria-page',
  'student-life-page',
  'its-page',
  'fish-page',
  'fiwh-page',
  'pdp-page',
  'press-page',
  'veritas-page',
  'bioethics-page',
  'pilgrimages-page',
  'households-page',
  'student-profile-page',
  'missions-page',
  'job',
  'alumni-outcome',
  'theatre-page',
  'graduate-program',
  'sass-page' */

const styles = theme => ({
  filterBar: {}
})

export default withStyles(styles)(FilterBar)
