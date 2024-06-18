import { Paper, CircularProgress } from '@mui/material'
import { classes } from './LoaderStyles'


const ListLoader = () => {
  return (
    <Paper sx={classes.loaderStyles}>
    <CircularProgress size="60px" thickness={5} sx={classes.circularProgress} />
  </Paper>
  )
}

export default ListLoader
