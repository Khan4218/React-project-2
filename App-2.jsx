import JournalHeader from "./src/Project-2/components/Header-2.jsx";
import Entry from "./src/Project-2/components/Entry.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
//import image1 from "../Project-2/images/image1.jpg"
import data from "./src/Project-2/data/data.js";

export default function App() {

  const travelJournalArray = data.map((jour) => {
    return (
      <Entry
        key={jour.id}
        entry={jour}  //or we can use spread {...jour}

      /*
      img={jour.img}
      title={jour.title}
      country={jour.country}
      googleMapsLink={jour.googleMapsLink}
      dates={jour.dates}
      text={jour.text}
      locationIcon={<FontAwesomeIcon icon={faLocationDot} className="location-icon" />}*/
      />
    )
  })


  return (
    <main>
      <JournalHeader />
      <div className="container">
        {travelJournalArray}
      </div>
    </main>
  )
}