import React,{useState} from "react";
import house from "./logo/metahomelogo.png";
import window from "./logo/metawindow.png";
import img1 from "./sec1_img/img1.png";
import img2 from "./sec1_img/img2.png";
import img3 from "./sec1_img/img3.png";
import img4 from "./sec1_img/img4.png";
import metat from "./oimg/Group4038.png";
import metat2 from "./oimg/Group59536.png";
import metat3 from "./oimg/logo.png";
import prodimg1 from "./prod_img/image1.png";
import prodimg2 from "./prod_img/image2.png";
import prodimg3 from "./prod_img/image3.png";
import prodimg4 from "./prod_img/image4.png";
import prodimg5 from "./prod_img/image5.png";
import prodimg6 from "./prod_img/image6.png";
import prodimg7 from "./prod_img/image7.png";
import prodimg8 from "./prod_img/image8.png";
import mtb_nft_img from "./sec1_img/3d.png";
import f_img from "./footer_img/Group.png";
import fb from "./footer_img/fb.png";
import ig from "./footer_img/ig.png";
import tw from "./footer_img/tw.png";
function Home() {
    const [active,setActive] = useState(false);
    const handleClick = ()=>{
        setActive(!active)
    };
  return (
    <>
      <div className="n">
        <div className="m-c">
          <h1 className="logo" >
            <div className="h-l-c">
              <img src={house} alt="" />{" "}
              <img className="winlogo" src={window} alt="" />
            </div>
            Metabnb
          </h1>
          <ul className="nul" id="b4">
            <li>Home</li>
            <li>Place to stay</li>
            <li>NFTs</li>
            <li>Community</li>
            <button className="connect-btn in">Connect wallet</button>
          </ul>
          <button className="connect-btn out">Connect wallet</button>
          <button onClick={handleClick} className="menu">Menu</button>
        </div>
        <ul className="nul phon" id={active ? "aft":"b4"}>
            <li>Home</li>
            <li>Place to stay</li>
            <li>NFTs</li>
            <li>Community</li>
            <button className="connect-btn in">Connect wallet</button>
          </ul>
        <section>
          <div className="t-s" >
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
          <div className="img-section">
            <div className="img-ss frst">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
            </div>
            <div className="img-ss snd">
              <img src={img3} alt="" />
              <img src={img4} alt="" />
            </div>
          </div>
        </section>
      </div>
      <div className="row-tab">
        <div className="r-t"><img src={metat2} alt="" /><h3>MBToken</h3></div>
        <div className="r-t"><img src={metat} alt="" /><h3>METAMASK</h3></div>
        <div className="r-t"><img src={metat3} alt="" /><h3>Opensea</h3></div>
      </div>
      <section className="prod-sec">
        <h1>Inspiration for your next adventure</h1>
        <div className="prod">
            <img src={prodimg1} alt="" />
            <img src={prodimg2} alt="" />
            <img src={prodimg3} alt="" />
            <img src={prodimg4} alt="" />
            <img src={prodimg5} alt="" />
            <img src={prodimg6} alt="" />
            <img src={prodimg7} alt="" />
            <img src={prodimg8} alt="" />
        </div>
      </section>
      <section className="mtb-nft">
        <div className="f-s">
          <h2>Metabnb NFTs</h2>
          <p>Discover our NFT gift cards collection. Loyal <br /> customers gets amazing gift cards which are<br /> traded as NFTs. These NFTs gives our cutomer<br /> access to loads of our exclusive services.</p>

          <button>Learn more</button>
        </div>
        <div className="s-s">
          <img src={mtb_nft_img} alt=""/>
        </div>
       
      </section>
      <footer>
          <div className="f-c">
            <img className="f-l" src={f_img} alt=""/>
            <div className="f-icons">
              <img src={fb} alt="" />
              <img src={ig} alt="" />
              <img src={tw} alt="" />
            </div>
            <p>&copy; 2022 Metabnb</p>
          </div>
          <div className="s-c">
            <h2>Community</h2>
            <ul>
              <li><a href="#">NFT</a></li>
              <li><a href="#">Tokens</a></li>
              <li><a href="#">Landlords</a></li>
              <li><a href="#">Discord</a></li>
            </ul>
          </div>
          <div className="s-c">
            <h2>Places</h2>
            <ul>
              <li><a href="#">Castle</a></li>
              <li><a href="#">Farms</a></li>
              <li><a href="#">Beach</a></li>
              <li><a href="#">Learn more</a></li>
            </ul>
          </div>
          <div className="s-c">
            <h2>About us</h2>
            <ul>
              <li><a href="/">Road map</a></li>
              <li><a href="/">Creators</a></li>
              <li><a href="/">Career</a></li>
              <li><a href="/">Contact us</a></li>
            </ul>
          </div>
          {/* <div className="th-c"></div>
          <div className="ft-c"></div> */}
        </footer>
    </>
  );
}
export default Home;

