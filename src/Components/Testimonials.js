import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';

const userTestimonials = [
  {
    avatar: <Avatar alt="Jean Dupont" src="https://maphotoportrait.fr/855-thickbox_default/photographe-professionnel-linkedin-cv-reseaux-sociaux.jpg" />,
    name: 'Jean Dupont',
    occupation: 'Senior Engineer',
    testimonial:
      "Working at 3D Smart Factory has been a thrilling journey. The opportunity to contribute to cutting-edge 3D projects and see my work come to life is incredibly rewarding. The tech and support here are top-notch, fostering an environment where creativity meets technology.",
  },
  {
    avatar: <Avatar alt="Thomas Bernard" src="https://www.conseilsmarketing.com/wp-content/uploads/2020/03/Photo-fred-500x590.png" />,
    name: 'Thomas Bernard',
    occupation: 'Lead Product Designer',
    testimonial:
    "I joined 3D Smart Factory as a developer, and the growth I've experienced has been phenomenal. The challenges are as rewarding as they are instructive, pushing me to enhance my skills daily. It's more than just a job; it's a continuous learning adventure in tech.",
  },
  {
    avatar: <Avatar alt="Marie Leroux" src="https://blog.laurencebichon.com/wp-content/uploads/2019/06/photo-linkedin-by-laurence-bichon-1-web-1000x1000-558x558.jpg" />,
    name: 'Marie Leroux',
    occupation: 'CTO',
    testimonial:
    "The culture at 3D Smart Factory is all about innovation and collaboration. As a software engineer, I feel deeply involved in developing solutions that are ahead of the curve, working alongside colleagues who are both mentors and friends."
  },
  {
    avatar: <Avatar alt="Claire Martin" src="https://www.fc-photos.com/wp-content/uploads/2021/03/photo-cv-linkedin-cannes.jpg" />,
    name: 'Claire Martin',
    occupation: 'Senior Engineer',
    testimonial:
    "Since starting at 3D Smart Factory, I’ve been able to work on pioneering IT projects that are shaping the future. The team's passion for excellence and innovation is contagious, making every project an opportunity for personal and professional growth."
  },
  {
    avatar: <Avatar alt="Sophie Moreau" src="https://maphotoportrait.fr/1865-thickbox_default/exemples-de-photos-de-profil-cv-linkedin-corporate-reussies.jpg" />,
    name: 'Sophie Moreau',
    occupation: 'Product Designer',
    testimonial:
    "What sets 3D Smart Factory apart for me is the commitment to personal development within the 3D and IT sectors. The leadership invests in us with training and tools that empower us to succeed and innovate at every turn."
  },
  {
    avatar: <Avatar alt="Nicolas Petit" src="https://www.leptidigital.fr/wp-content/uploads/2023/02/bonne-photo-linkedin-1.jpg" />,
    name: 'Nicolas Petit',
    occupation: 'CDO',
    testimonial:
    "Being part of 3D Smart Factory means being at the forefront of technological advancements. Every day, I'm excited to come to work and push the boundaries of what's possible in software development and 3D technologies."
  },
];

const whiteLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg',
];

const darkLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg',
];

const logoStyle = {
  width: '64px',
  opacity: 0.3,
};

export default function Testimonials() {
  const theme = useTheme();
  const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
        What Our Employees Say
        </Typography>
        <Typography variant="body1" color="text.secondary">
        Discover the experiences and stories of our team members who help shape our success every day. Each testimonial provides a unique insight into our company culture and the personal growth opportunities that we offer
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' 
           }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
                
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)', // Change background color on hover
            }
              }}
            >
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  pr: 2,
                }}
              >
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
                <img
                  src={logos[index]}
                  alt={`Logo ${index + 1}`}
                  style={logoStyle}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}