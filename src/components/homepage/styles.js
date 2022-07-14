import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    appBar: {
        backgroundColor: "#fff"
    },
    hero: {
        backgroundImage: "url('https://i.postimg.cc/V5P6kWsb/Blue-Gradient-Modern-Startup-Coming-Soon-Banner.png')",
        height: "630px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        fontFamily: "Nanum Gothic",
        cursor: "pointer",
        letterSpacing: "0.1rem",
        fontWeight: "2500",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#fff",
        fontSize: "4rem",
        [theme.breakpoints.down("sm")]: {
            height: 520,
            fontSize: "4em"
        }
    },
    hero2: {
        //backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url('https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Colorful-Circle-Simple-Background-Image-1.jpg')",
        height: "620px",
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
        },

    },
    smallpara: {
        fontSize: "1rem",
        // letterSpacing : "0.1rem",
        wordSpacing: "0.1rem",
        alignContent: "Center",
        cursor: "pointer",
        textAlign: "center",
        [theme.breakpoints.down("sm")]: {
            height: 140,
            fontSize: "0.5em",

        }

    },
    blogsContainer: {
        fontFamily: "Roboto",
        textAlign: "Center",
        justifyContent: "Center",
        alignItems: "center",
        fontWeight: 600,
    },
    blogTitle: {
        fontWeight: 800,
        fontSize: "2rem",
        color: "#00b35a",
        // paddingBottom: theme.spacing(5),
        cursor: "pointer",
        fontFamily: "Arial",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        "&:hover": {
            color: "#00e674",
        },

    },

    card: {
        fontFamily: "Roboto",
        maxWidth: "100%",
        position: "relative",
        paddingBottom: "20px",
        backgroundColor: "#111E44",
        color: "#fff",
        "&:hover p": {
            color: "#fff",
        },
        "&:hover": {
            backgroundColor: "#072A6C",
            color: "#fff",
        },
    },
    test: {
        paddingTop: "130px",

        [theme.breakpoints.down("sm")]: {
            paddingTop: "380px",
        },

    },

    test2: {
        paddingTop: "90px",

        [theme.breakpoints.down("sm")]: {
            paddingTop: "80px",
        },

    },

    avatar: {
        height: "60px",
        width: "80px",
    },

    p: {
        color: "#fff",
    },

    media: {

        height: 260,
    },

    cardActions: {
        display: "flex",
        margin: "0 10px",
        justifyContent: "space-between"

    },
    author: {
        display: "flex"
    },
    paginationContainer: {
        display: "flex",
        justifyContent: "center",

    }
}));