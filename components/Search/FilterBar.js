import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

import Select from 'react-select'

class FilterBar extends Component {
  render () {
    return (
      <Select
        defaultValue={[filterOptions[0]]}
        isMulti
        name="colors"
        options={filterOptions}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    )
  }
}

const filterOptions = [
  { value: 'department', label: 'Department' },
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
  'event',
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

const styles = theme => ({})

export default withStyles(styles)(FilterBar)
