function HeadingTitle({title}){
    return(
        <div style={divstyles}>
        <h2 style={h2styles}>
        {
            title
        }
        </h2>
    </div>
    )

}
const divstyles={
    padding: "10px 30px",
    textTransform: "capitalize",
    backgroundColor: "#fff",
}
const h2styles={
    color:"#1926d2",
    fontWeight:500,
    fontSize: "30px",
    borderBottom:" 1px solid #1926d2",
    width: "max-content",
    paddingBottom: "5px",
}
export default HeadingTitle