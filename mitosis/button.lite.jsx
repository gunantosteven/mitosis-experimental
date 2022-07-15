export default function Button(props) {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "row",
        maxWidth: "73px",
        justifyContent: "center",
        alignItems: "stretch",
        borderRadius: "50px",
        paddingTop: "19px",
        paddingBottom: "19px",
        paddingRight: "32px",
        paddingLeft: "32px",
        backgroundColor: "rgba(82, 77, 193, 1)",
        color: "rgba(255, 255, 255, 1)",
        fontSize: "17px",
        lineHeight: "35px",
        letterSpacing: "7%",
        textAlign: "center",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      BUTTON
    </div>
  );
}
