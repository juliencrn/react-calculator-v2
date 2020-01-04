import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(({ spacing, palette }) => ({
  display: {
    color: palette.common.white,
    fontWeight: 400,
    padding: spacing(1)
  }
}))

const Display: React.SFC<{ display: string }> = ({ display }) => {
  const classes = useStyles({})
  return (
    <Typography
      id="display"
      className={classes.display}
      align="right"
      variant="h3"
    >
      {display}
    </Typography>
  )
}

export default Display
