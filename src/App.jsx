import { useState } from 'react'
import './App.css'
import Destination from './components/Destination'
import NavBar from './components/NavBar';

const destinationList = [
  {
    name: "Dublin",
    weather: "Nuageux",
    food: "La baie de Dublin est réputée pour ses crevettes et ses moules. Dégustez un bol de soupe de fruits de mer crémeuse, accompagnée de pain complet et d'une pinte de Guinness chez The Exchequer.",
    imgSrc: "https://www.lonelyplanet.fr/sites/lonelyplanet/files/styles/article_main_image/public/media/article/image/fotolia_46663311_subscription_monthly_xl.jpg?itok=UfJC5R6D",
  },
  {
    name: "Terelle",
    weather: "Ensoleillé",
    food: "La cuisine de Terelle en Italie est simple et authentique, mettant en valeur des ingrédients frais et locaux. Les plats traditionnels incluent des pâtes faites maison, des viandes de qualité supérieure et des desserts délicieux tels que les cannolis et les tiramisus faits maison.",
    imgSrc: "https://livingciociaria.it/wp-content/uploads/2022/11/Terelle.jpg",
  },
  {
    name: "Narbonne",
    weather: "Ensoleillé",
    food: "Les huîtres et les moules de Leucate, l'anguille à la gruissanaise, les poissons grillés, fumés ou cuits à la plancha, la moutarde de Narbonne...",
    imgSrc: "https://perspectives-de-voyage.com/wp-content/uploads/2021/03/visiter-narbonne-DSC07223.jpg",
  },
  {
    name: "Colmar",
    weather: "Ensoleillé - Nuageux",
    food: "Le foie gras (inventé à Strasbourg en 1780), le baeckaoffe (plat composé de trois viandes marinées et de pommes de terre au vin blanc), l'incontournable choucroute, la matelote du Rhin, le coq au riesling, le pain d'épices et le Kougelhopf (pâte levée sucrée aux raisins ...",
    imgSrc: "https://www.tourisme-colmar.com/templates/yootheme/cache/AdobeStock_504687598web2-04d09fd9.jpeg",
  },
]

function App() {
  const [destination, setDestination] = useState(0);
  const lieu = {
    name: destinationList[destination].name,
    weather: destinationList[destination].weather,
    food: destinationList[destination].food,
    imgSrc: destinationList[destination].imgSrc,
  };

  function handleClick() {
    setDestination(destination +1);
  }

  function prevClick() {
    setDestination(destination -1);
  }

  return (
    <div>
      <NavBar />
      <Destination destination={lieu}/>
      <br/>
      <br/>
      {destination <= 0 ? (
        <span style={{ display: "none" }}></span>
      ) : (
        <button onClick={prevClick}>Précédent</button>
      )}
      {destination < destinationList.length - 1 ? (
        <button onClick={handleClick}>Suivant</button>
      ) : (
        <span style={{ display: "none" }}></span>
      )}
    </div>
  );
}

export default App
