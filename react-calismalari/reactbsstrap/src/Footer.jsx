function Footer () {
    return (
        <footer className="footer"
        style={
            {   
                pozition: "fixed",
                buttom: 0,
                width: "100%",
                backgroundColor: "black",
                color: "white",
                padding: "10px",
                textAlign: "center"
            }
        }>
            &copy; 2021 Reactstrap App
        </footer>
    );
}
export default Footer;