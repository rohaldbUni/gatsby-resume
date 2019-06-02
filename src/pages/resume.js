import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Skill from '../components/Skill'
import { SocialIcon } from 'react-social-icons'
import { graphql } from 'gatsby'

function Divider () {
  const classes = useStyles()
  return (
    <div className={classes.divider} />
  )
}

const useStyles = makeStyles(theme => ({
  toolbar: {
    marginTop: '55px'
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  },
  divider: {
    width: '100%',
    borderBottom: `1px solid black`
  },
  section: {
    padding: '80px 0'
  },
  icon: {
    margin: '0px 10px 10px 10px'
  },
  footer: {
    padding: theme.spacing(6, 0)
  }
}))

const sections = [
  'About Me',
  'Education',
  'Experience',
  'Skills',
  'Contact'
]

export default ({data}) => {
  const classes = useStyles()
  console.log(data)
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='md'>
        <Toolbar className={classes.toolbar}>
          <Typography
            component='h2'
            variant='h5'
            color='inherit'
            noWrap
            className={classes.toolbarTitle}
          >
            {data.site.siteMetadata.resume.about.name}
          </Typography>
          {sections.map(section => (
            <Link
              color='inherit'
              noWrap
              key={section}
              variant='body2'
              href='#'
              className={classes.toolbarLink}
              >
              {section}
            </Link>
            ))}
        </Toolbar>

        <Divider />

        <Grid container direction='row' justify='center' className={classes.section}>
          <Grid item xs={12} sm={6}>
            <img alt='profilePic' src='https://i.ibb.co/zxmcpch/IMG-5700-copy.jpg'
              style={{width: '90%', filter: 'grayscale(100%)'}} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>About me</Typography>
            <Typography variant='h1'>{data.site.siteMetadata.resume.about.title}</Typography>
            <Typography>{data.site.siteMetadata.resume.about.summary}</Typography>
          </Grid>
        </Grid>

        <Divider />

        {/* Education */}
        <Grid container direction='row' className={classes.section}>
          <Grid item xs={3}>
            <Typography>Education</Typography>
          </Grid>
          <Grid item xs={9}>
            <Grid container direction='row' spacing={4}>
              <Grid item xs={6} sm={4}>
                <Education />
              </Grid>
              <Grid item xs={6} sm={4}>
                <Education />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Divider />

        {/* Experience */}
        <Grid container direction='row' className={classes.section}>
          <Grid item xs={3}>
            <Typography>Experience</Typography>
          </Grid>
          <Grid item xs={9}>
            <Grid container direction='column' spacing={4}>
              <Grid item>
                <Experience />
              </Grid>
              <Grid item>
                <Experience />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Divider />

        {/* Skills */}
        <Grid container direction='column' className={classes.section}>
          <Typography variant='h1' align='center' style={{ marginBottom: '60px'}} >Skills & Abilities</Typography>
          <Grid item xs={12}>
            <Grid container direction='row' spacing={4}>
              <Grid item xs={4}>
                <Skill />
              </Grid>
              <Grid item xs={4}>
                <Skill />
              </Grid>
              <Grid item xs={4}>
                <Skill />
              </Grid>
              <Grid item xs={4}>
                <Skill />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Divider />

        {/* Connect */}
        <Grid container direction='row' className={classes.section}>
          <Grid item xs={3}>
            <Typography>Connect</Typography>
          </Grid>
          <Grid item xs={9}>
            {data.site.siteMetadata.resume.connect.map(x =>
              <SocialIcon url={`${x}`} key={`${x}`} className={classes.icon} />)
            }
          </Grid>
        </Grid>

        <Divider />

        {/* Footer */}
        <footer className={classes.footer}>
          <Container maxWidth='lg'>
            <Typography align='center'>
              Designed with <span role='img' aria-label='heart'>❤️</span> by @rohaldb
            </Typography>
          </Container>
        </footer>
        {/* End footer */}

      </Container>
    </React.Fragment>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        resume {
          about {
            name
            title
            summary
          }
          connect
        }
      }
    }
  }
`
