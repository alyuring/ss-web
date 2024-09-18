import hids from "./assets/hids.jpeg";
import konamokapot from "./assets/konamokapot.jpg";

const OurStory = () => {
  return (
    <div id="our-story" className="row" style={{ margin: "5%" }}>
      <div className="col-12 col-md-6 mb-4">
        <h1
          className="fs-1 text-decoration-underline"
          style={{ color: "#c86c4c" }}
        >
          Our Story.
        </h1>
        <span className="text-muted" style={{ textAlign: "justify" }}>
          <p>
            Sehati Sisters is all about vibing together, exploring the world,
            and chasing big dreams—all while staying rooted in our faith. Here,
            it's all love, no judgment, and tons of growth as we discover what
            it means to live life with an Islamic lens. Let’s kick things off
            with some divine wisdom from the Quran:
          </p>
          <p style={{ textAlign: "center" }}>
            "The believers are but a single brotherhood, so make peace and be
            conscious of Allah so you may receive His mercy."
            <p className="mt-2">(Surah Al-Hujurat 49:10)</p>
          </p>{" "}
          We’re here to uplift, empower, and inspire each other as we navigate
          the wonders of this world with purpose. Let’s dive in!
        </span>
      </div>
      <div className="col-6 col-md-3 mb-4">
        <img src={hids} alt="hids" style={{ width: "100%", height: "auto" }} />
      </div>
      <div className="col-6 col-md-3">
        <img
          src={konamokapot}
          alt="konamokapot"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default OurStory;
