import paris from "@/assets/search/eiffel-tower-1188609.png";
import rome from "@/assets/search/rome-over-coliseum-1188581.png";
import rio from "@/assets/search/statua-di-cristo-1188530.png";
import dubai from "@/assets/search/burj-al-arab-1188604.png";
import london from "@/assets/search/london-city-1188600.png";
import sydney from "@/assets/search/bahai-lotus-temple-1188566.png";
import beijing from "@/assets/search/de-torii-1188570.png";
import amsterdam from "@/assets/search/amsterdam-1188536.png";
import berlin from "@/assets/search/brandenburg-1188502.png";
import ankara from "@/assets/search/ankara-1188532.png";
import pizza from "@/assets/search/pisa-tower-1188603.png";
import washington from "@/assets/search/white-house-1188538.png";
import malaysia from "@/assets/search/twin-tower-1188543.png";
import barcelona from "@/assets/search/barcellona-1188539.png";
import florence from "@/assets/search/basilica-of-santa-1188509.png";
import delhi from "@/assets/search/elephant-1188556.png";
import dhaka from "@/assets/search/dhaka-smriti-1188495.png";
import istanbul from "@/assets/search/istanbul-1188499.png";
import egypt from "@/assets/search/hiran-minar-1188486.png";

export default function Recommendation() {
  const searchRecommendations = [
    { title: "Paris", description: "City of arts", img: paris },
    { title: "Rome", description: "History lives here", img: rome },
    { title: "Rio De Janeiro", description: "Joy shines here", img: rio },
    { title: "Dubai", description: "Dream rise here", img: dubai },
    { title: "London", description: "City of culture", img: london },
    { title: "Sydney", description: "Vibes soar here", img: sydney },
    { title: "Beijing", description: "Lives in tradition", img: beijing },
    { title: "Amsterdam", description: "City of Flowers", img: amsterdam },
    { title: "Berlin", description: "City of arts", img: berlin },
    { title: "Ankara", description: "City of arts", img: ankara },
    { title: "Pizza", description: "City of arts", img: pizza },
    { title: "Washington", description: "City of arts", img: washington },
    { title: "Malaysia", description: "Family friendly", img: malaysia },
    { title: "Barcelona", description: "City of arts", img: barcelona },
    { title: "Florence", description: "City of arts", img: florence },
    { title: "Delhi", description: "City of color", img: delhi },
    { title: "Dhaka", description: "City of arts", img: dhaka },
    { title: "Istanbul", description: "City of arts", img: istanbul },
    { title: "Egypt", description: "City of arts", img: egypt },
  ];
  return (
    <section className="flex gap-2 flex-col">
      {searchRecommendations.map((r) => {
        return (
          <div className="flex gap-4 py-4 cursor-pointer">
            <div>
              <img src={r.img} alt={r.title} />
            </div>
            <div className="flex flex-col justify-between">
              <p className="font-medium text-[25px] text-gray-900">{r.title}</p>
              <p className="text-[25px] text-gray-500">{r.description}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
