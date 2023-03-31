import * as React from 'react';
import {AppBar, Box, Toolbar, Typography, Container, Avatar, Button, Grid, Paper, Link} from '@mui/material';
import ken from './images/ken.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { experimentalStyled as styled } from '@mui/material/styles';
import ScienceIcon from '@mui/icons-material/Science';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import DescriptionIcon from '@mui/icons-material/Description';
import Resume from './components/resume.pdf';
import Rating from '@mui/material/Rating';

// Projects
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';



// Skills
import Python from './images/python.png';
import Pytorch from './images/pytorch.png';
import Git from './images/git.png';
import Javascript from './images/javascript.png';
import RC from './images/react.png';
import Nodejs from './images/nodejs.png';
import Html from './images/html.png';
import Css from './images/css.png';
import Postman from './images/postman.png';
import SQL from './images/sql.png';
import Java from './images/java.png';
import Docker from './images/docker.png';
import Tensorflow from './images/tensorflow.png'



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const skills = ['Python', 'Pytorch', 'Tensorflow', 'Javascript', 'React', 'Node.js', 'HTML', 'CSS', 'Postman', 'SQL', 'Java', 'Docker', 'Git'];     

function App() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container maxWidth={false} disableGutters>
      <AppBar position="static"
      sx={{bgcolor: 'rgb(46, 59, 85)'}}>
        <Container maxWidth="xl"
        sx={{margin: '0px'}}>
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                fontSize: '1.25rem',
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              JEONGHOON KIM
            </Typography>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              textAlign='center'
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              JEONGHOON KIM
            </Typography>            
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth={false}
      sx={{ 
        marginTop: '80px',
        textAlign: 'center', 
        mx: '0px'
      }}>
        {/* image container */}
        <Container 
        sx={{justifyContent: "center",
        display: "flex"}}>
          <Avatar
            alt="No photo available"
            src={ken}
            sx={{ width: 300, height: 300}}
            >KEN
          </Avatar>
        </Container>

        <Typography variant='h2'
        sx={{
          margin: '16px',
          fontWeight: 700,
          fontSize: '30px',
          lineHeight: 1.5,
          color: 'rgb(46, 59, 85)',
          // letterSpacing: '2px',
          textDecoration: 'none',
        }}>
          Jeonghoon Kim
        </Typography>

        <Typography variant='h5'
        sx={{
          margin: '0px 0px 0px 0px',
          fontWeight: 400,
          lineHeight: 1.5,
          fontSize: '1rem',
          textDecoration: 'none',
        }}>
          Senior Student at University of Minnesota, Twin-Cities
        </Typography>
        <Typography variant='h5'
        sx={{
          margin: '0px 0px 8px 0px',
          fontWeight: 400,
          lineHeight: 1.5,
          fontSize: '1rem',
          textDecoration: 'none',
        }}>
          Living in Minneapolis, Minnesota
        </Typography>

        {/* Buttons */}
        <Container sx={{display: 'flex', justifyContent:'center', marginTop: '16px'}}>
          <Button variant="outlined" color='success' href="https://github.com/junghun-K" sx={{minWidth:'80px', padding: '3px 9px'}}>
            <GitHubIcon></GitHubIcon>
            <Typography sx={{paddingLeft:'3px', fontSize:'13px'}}>Github</Typography>
          </Button>
          <Button variant="outlined" color='primary' href="mailto:junghun1112@gmail.com" sx={{minWidth:'80px', padding: '3px 9px' , mx: '1.3rem'}}>
            <EmailIcon></EmailIcon>
            <Typography sx={{paddingLeft:'3px', fontSize:'13px'}}>Email</Typography>
          </Button>
          <Button variant="outlined" color='warning' href="https://www.linkedin.com/in/junghun-kim-42362a24b/" sx={{minWidth:'80px', padding: '3px 9px'}}>
            <LinkedInIcon></LinkedInIcon>
            <Typography sx={{paddingLeft:'3px', fontSize:'13px'}}>LinkedIn</Typography>
          </Button>
        </Container>
        
      </Container>    
      {/* Experience / Education & & Skills*/}
      <Container maxWidth={false}
      sx={{ 
        marginTop: '20px',
        textAlign: 'center', 
        mx: '0px'
      }}>
        <Container sx={{py:'50px'}}>
          <Typography variant='h4'
          sx={{fontSize: '1rem', fontWeight:'700', color: '#134db6', letterSpacing: '3px'}}>EXPERIENCE / EDUCATION</Typography>
          <Timeline position="right" sx={{display:'flex', marginBottom: '0px'}}>
            <TimelineItem minHeight='60px' sx={{display:'flex'}}>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
                fontSize='0.875rem'
              >
                Graduated May 2023
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="warning">
                  <SchoolIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span"  fontSize={'1rem'}>
                  <Link href="https://twin-cities.umn.edu/" underline="none">
                  University of Minnesota, Twin-Cities</Link>
                </Typography>
                <Typography sx={{fontSize:'0.875rem'}}>B.S. Computer Science</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
                fontSize='0.875rem'
              >
                Jan 2023 - May 2023
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="success">
                  <ScienceIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span" fontSize={'1rem'} href="https://twin-cities.umn.edu/">
                  <Link href="https://knowledge-computing.github.io" underline="none">
                  Knowledge Computing Lab</Link>
                </Typography>
                <Typography sx={{fontSize:'1rem'}}>Research Assistant</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
                fontSize='0.875rem'
              >
                May 2022 - Sept 2022
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <WorkIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                <Link href="https://www.tesser.co.kr/" fontSize={'1rem'} underline="none">
                    Tesser Inc.</Link>
                </Typography>
                <Typography sx={{fontSize:'1rem'}}>Data Scientist Intern</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
                fontSize='0.875rem'
              >
                Mar 2021 - Dec 2021
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <WorkIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  <Link href="https://www.tesser.co.kr/" fontSize={'1rem'} underline="none">
                  Tesser Inc.</Link>
                </Typography>
                <Typography sx={{fontSize:'1rem'}}>Data Engineer Intern</Typography>
              </TimelineContent>
            </TimelineItem> 
          </Timeline>

          <Button variant="outlined" href={Resume} target="_blank" startIcon={<DescriptionIcon />}>
            resume
          </Button>
          
        {/* PROJECTS */}
        <Container sx={{marginTop: '80px', mx: '0px'}}>
          <Typography variant='h4'
            sx={{fontSize: '1rem', fontWeight:'700', color: '#134db6', letterSpacing: '3px', marginBottom: '20px'}}>
            PROJECTS
          </Typography>
          <Grid container spacing={40} justifyContent="center" sx={{display:'flex'}}>
            <Grid item>
            <Card sx={{ maxWidth: 300 }}>
              <CardHeader
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal to cook
                  together with your guests. Add 1 cup of frozen peas along with the mussels,
                  if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                    aside for 10 minutes.
                  </Typography>
                  <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                    medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                    occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                    large plate and set aside, leaving chicken and chorizo in the pan. Add
                    pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                    stirring often until thickened and fragrant, about 10 minutes. Add
                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                  <Typography paragraph>
                    Add rice and stir very gently to distribute. Top with artichokes and
                    peppers, and cook without stirring, until most of the liquid is absorbed,
                    15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                    mussels, tucking them down into the rice, and cook again without
                    stirring, until mussels have opened and rice is just tender, 5 to 7
                    minutes more. (Discard any mussels that don&apos;t open.)
                  </Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
            </Grid>
          </Grid>
        </Container>

        {/* SKILLS */}
        <Container sx={{marginTop: '80px', mx: '0px'}}>
          <Typography variant='h4'
          sx={{fontSize: '1rem', fontWeight:'700', color: '#134db6', marginBottom: '30px', letterSpacing: '3px'}}>
            SKILLS
          </Typography>
          <Grid container spacing={2} justifyContent="center" sx={{display:'flex'}}>
          <Grid item style={{width: "200px"}}>
            <Item>
              <img
                src={Python}
                alt='Not availble'
                loading="lazy"
                width='70'
                height='70'
              />
              <Typography>{skills[0]}</Typography>
              <Box textAlign="center">
                <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
              </Box>
            </Item>
          </Grid>
          <Grid item style={{width: "200px"}}>
            <Item>
              <img
                src={Pytorch}
                alt='Not availble'
                loading="lazy"
                width='70'
                height='70'
              />
              <Typography>{skills[1]}</Typography>
              <Box textAlign="center">
                <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
              </Box>
            </Item>
          </Grid>
          <Grid item style={{width: "200px"}}>
            <Item>
              <img
                src={Git}
                alt= 'Not availble'
                loading="lazy"
                width='70'
                height='70'
              />
              <Typography>{skills[12]}</Typography>
              <Box textAlign="center">
                <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
              </Box>
            </Item>
          </Grid>
          <Grid item style={{width: "200px"}}>
            <Item>
              <img
                src={Javascript}
                alt='Not availble'
                loading="lazy"
                width='70'
                height='70'
              />
              <Typography>{skills[3]}</Typography>
              <Box textAlign="center">
                <Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly />
              </Box>
            </Item>
          </Grid>
          <Grid item style={{width: "200px"}}>
            <Item>
              <img
                src={RC}
                alt= 'Not availble'
                loading="lazy"
                width='70'
                height='70'
              />
              <Typography>{skills[4]}</Typography>
              <Box textAlign="center">
                <Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly />
              </Box>
            </Item>
          </Grid>
          <Grid item style={{width: "200px"}}>
            <Item>
            <img
                src={Nodejs}
                alt= 'Not availble'
                loading="lazy"
                width='70'
                height='70'
              />
              <Typography>{skills[5]}</Typography>
              <Box textAlign="center">
                <Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly />
              </Box>
            </Item>
          </Grid>
          <Grid item style={{width: "200px"}}>
            <Item>
              <img
                src={Html}
                alt= 'Not availble'
                loading="lazy"
                width='70'
                height='70'
              />
              <Typography>{skills[6]}</Typography>
              <Box textAlign="center">
                <Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly />
              </Box>
            </Item>
          </Grid>
          <Grid item style={{width: "200px"}}>
            <Item>
              <img
                src={Css}
                alt= 'Not availble'
                loading="lazy"
                width='70'
                height='70'
              />
              <Typography>{skills[7]}</Typography>
              <Box textAlign="center">
                <Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly />
              </Box>
            </Item>
          </Grid>
          <Grid item style={{width: "200px"}}>
            <Item>
              <img
                src={Postman}
                alt= 'Not availble'
                loading="lazy"
                width='70'
                height='70'
              />
              <Typography>{skills[8]}</Typography>
              <Box textAlign="center">
                <Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly />
              </Box>
            </Item>
          </Grid>
          <Grid item style={{width: "200px"}}>
            <Item>
              <img
                src={SQL}
                alt= 'Not availble'
                loading="lazy"
                width='70'
                height='70'
              />
              <Typography>{skills[9]}</Typography>
              <Box textAlign="center">
                <Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly />
              </Box>
            </Item>
          </Grid>
          <Grid item style={{width: "200px"}}>
            <Item>
              <img
                src={Java}
                alt= 'Not availble'
                loading="lazy"
                width='70'
                height='70'
              />
              <Typography>{skills[10]}</Typography>
              <Box textAlign="center">
                <Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly />
              </Box>
            </Item>
          </Grid>
          <Grid item style={{width: "200px"}}>
            <Item>
              <img
                src={Docker}
                alt= 'Not availble'
                loading="lazy"
                width='70'
                height='70'
              />
              <Typography>{skills[11]}</Typography>
              <Box textAlign="center">
                <Rating name="half-rating-read" defaultValue={2} precision={0.5} readOnly />
              </Box>
            </Item>
          </Grid>
          <Grid item style={{width: "200px"}}>
            <Item>
            <img
                src={Tensorflow}
                alt='Not availble'
                loading="lazy"
                width='70'
                height='70'
              />
              <Typography>{skills[2]}</Typography>
              <Box textAlign="center">
                <Rating name="half-rating-read" defaultValue={2} precision={0.5} readOnly />
              </Box>
            </Item>
          </Grid>
        </Grid>
        </Container>
      </Container>
      </Container>
      {/* Projects */}
    </Container>
  );
}

export default App;