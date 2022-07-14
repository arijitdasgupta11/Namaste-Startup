import { makeStyles } from "@material-ui/core";


export default makeStyles((theme) => ({
    appBar: {
        backgroundColor: "#fff"
    },
    hero: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://i.postimg.cc/YCTzBt8x/Blue-Minimalist-General-Manager-Linked-In-Banner-2.png')`,
        height: "180px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "3rem",
        [theme.breakpoints.down("sm")]: {
            height: 150,
            fontSize: "2em"
        }
    },
    nam:{
      fontWeight:"800",
      color:"#191970",
    },
    navl:{
        textAlign:"center",
        textDecoration: 'none',
        color: '#0096FF',
        fontWeight: '900',
        fontSize:'2rem',
        "&:hover":{fontSize:'2.98rem'},
        [theme.breakpoints.down("sm")]: {
            fontSize: "3.2em"
        }
    },
    hero2: {
        //backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url('https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Colorful-Circle-Simple-Background-Image-1.jpg')`,
        height: "500px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
        color: "#000",
        fontSize: "3rem",
        [theme.breakpoints.down("md")]: {
            height: 500,
            fontSize: "2em"
        },
        [theme.breakpoints.down("sm")]: {
            height: 1300,
            fontSize: "2em"
        }
    },
    hero3: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('https://i.postimg.cc/Bn1F4wS0/Blue-Pink-Gradient-Fashion-Banner-72-20-in-1.png')`,
        height: "180px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign:"center",
        color: "#00b35a",
        fontWeight:"800",
        fontSize: "3rem",
        [theme.breakpoints.down("sm")]: {
            height: 150,
            fontSize: "2em"
        }
    },
    hero4: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url('https://i.postimg.cc/Bn1F4wS0/Blue-Pink-Gradient-Fashion-Banner-72-20-in-1.png')`,
        height: "100px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign:"center",
        color: "#00b35a",
        fontWeight:"800",
        fontSize: "3rem",
        [theme.breakpoints.down("sm")]: {
            height: 80,
            fontSize: "2em"
        }
    },
    smallpara: {
        fontSize: "1rem",
        [theme.breakpoints.down("sm")]: {
            height: 140,
            fontSize: "0.5em"
        }
    },
    blogsContainer: {
        paddingTop: theme.spacing(1),
    },
    blogsButton: {
        paddingTop: theme.spacing(5),
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    blogTitle: {
        fontWeight: 800,
        fontSize: "2rem",
        paddingBottom: theme.spacing(4),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    blogTitle2: {
        fontWeight: 500,
        fontSize: "1.8rem",
        color:"#0047AB",
        paddingBottom: theme.spacing(4),
        display: "flex",
        alignItems: "center",
        textAlign:"center",
        justifyContent:"center",
        justifyContent: "center",
        [theme.breakpoints.down("sm")]: {
            paddingBottom: theme.spacing(1),
            fontSize: "0.6em"
        }
    },
    card: {
        maxWidth: "100%",
        position: "relative",
    },
    media: {
        height: 200
    },
    cardActions: {
        display: "flex",
        margin: "0 10px",
        justifyContent: "space-between"
    },
    author: {
        display: "flex"
    },
}));