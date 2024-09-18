import banner from "./assets/banner.jpg";

const BannerPic = () => {
  return (
    <div id="home" style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          textAlign: "center",
          width: "100%",
          bottom: 0,
        }}
      >
        <h1
          className="display-4"
          style={{ color: "whitesmoke", fontWeight: 400, fontSize: "5vw" }}
        >
          <span
            style={{
              color: "whitesmoke",
              fontFamily: "MyFont",
              fontSize: "7vw",
            }}
            className="me-md-2"
          >
            S
          </span>
          EHATI
          <span
            style={{
              color: "whitesmoke",
              fontFamily: "MyFont",
              fontSize: "7vw",
            }}
            className="ms-md-2 me-md-2"
          >
            S
          </span>
          ISTERS
          <div
            className="d-flex justify-content-center align-items-center mx-auto"
            style={{
              width: "5%", // Set a fixed width for the line
              height: "4px", // Set the height of the line
              backgroundColor: "#c86c4c", // Use background color for the line
            }}
          />
        </h1>
      </div>
      <img src={banner} alt="banner" style={{ width: "100%" }} />
    </div>
  );
};

export default BannerPic;
