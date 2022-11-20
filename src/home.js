import house from "./logo/metahomelogo.png";
import window from "./logo/metawindow.png";
function Home() {
  return (
    <>
      <div className="n">
        <div className="m-c">
          <h1 className="logo">
            <div className="h-l-c">
              <img src={house} alt="" />{" "}
              <img className="winlogo" src={window} alt="" />
            </div>
            Metabnb
          </h1>
          <ul>
            <li>Home</li>
            <li>Place to stay</li>
            <li>NFTs</li>
            <li>Community</li>
          </ul>
          <button className="connect-btn">Connect wallet</button>
        </div>
        <section>
          <div className="t-s">
            <h1>
              Rent a <span>Place</span> away from <br />
              <span>Home</span> in the <span>Metaverse</span>
            </h1>
            <p>
              we provide you access to luxury and affordable houses <br /> in
              the metaverse, get a chance to turn your <br /> imagination to
              reality at your comfort zone
            </p>
            <div className="search-container">
              <input type="search" placeholder="Search for location" />
              <button>search</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Home;
