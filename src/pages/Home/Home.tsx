import React from "react";
import "./Home.css";
import imgS1 from "../../assets/Arhey 1.png";
import imgS2 from "../../assets/proteozoic.png";
import imgS3 from "../../assets/meduza 1.png";
import imgS4 from "../../assets/Без названия (2) 1.png";
import imgS5 from "../../assets/mezozoy 1.png";
import imgS6 from "../../assets/people 1.png";

//For material UI components

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Home = () => {
  return (
    <div className="md:px-[60px] sm:px-[20px] flex flex-col md:gap-[240px] sm:gap-[50px]">
      <section className="section_1 flex md:justify-between mt-[30px] sm:justify-center flex-wrap gap-[30px]">
        <div className="block_1">
          <img src={imgS1} alt="" className="sm:w-[100%]" />
        </div>
        <div className="block_2">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <h5 className="text-[27px] raleway">Katarhey</h5>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="max-w-[700px] raleway">
                <h5 className="text-[15px] font-[400] text-[#000]">
                  Katarchean ( Greek κατἀρχαῖος - “ below the most ancient ”,
                  also Hadean , Hadii , azoi , anthezoi , pre -archaean , priska
                  ) - geological eon , interval of geological time preceding the
                  Archean . Sedimentary rocksfrom the Catarchaean are unknown,
                  but part of the ancient Catarchaean crust in the form of mafic
                  and ultramafic volcanic and intrusive rocks approximately 4.4
                  billion years old was found in Canada on the eastern shore of
                  Hudson Bay . It began with the formation of the Earth - about
                  4.54 billion years (4.54⋅10 9 years ±1%) ago. The upper limit
                  is drawn at 4.0 billion years ago (exactly). In the modern
                  geochronological scale, it is not divided into eras and
                  periods, and itself had an informal status until October 2022,
                  until it was officially adopted . Based on data on the
                  isotopic and elemental composition of rocks, the Earth
                  differentiated into layers ( magma , mantle and core )
                  approximately 35 million years after the start of accretion .
                  The release of thermal energy after numerous collisions of the
                  forming planet with large asteroids and during the radioactive
                  decay of short-lived isotopesmade it possible to maintain a
                  layer of molten magma on the surface, which, at high pressure
                  and temperature, was divided into silicate and iron melts. To
                  a large extent during the Catarchean Eon, as well as during
                  the Archean, relatively high surface and atmospheric
                  temperatures were maintained by the radioactive decay of
                  radionuclides such as potassium-40 , as well as by high
                  concentrations of greenhouse gases in the atmosphere.
                  Particularly large asteroids could cause the formation of
                  magma oceans up to 400 km deep, which allowed iron melts (as
                  heavier ones) to accumulate at the bottom of the magma layer
                  and sink into the planet, growing the core . The appearance of
                  the Moon played a major role in the further formation of the
                  planet . It is assumed, and this is in good agreement with the
                  age of the Moon, that the satellite of our planet arose as a
                  result of a tangential collision between the Earth and a large
                  body the size of Mars . As a result of such a major collision,
                  firstly, the tilt of the earth's axis changed (up to 23°), and
                  secondly, massive melting of the mantle occurred with the
                  formation of a magma ocean with a depth of up to 700 km.
                </h5>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </section>
      <section className="section_2 flex md:justify-between mt-[30px] sm:justify-center flex-wrap gap-[30px]">
        <div className="block_1">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <h5 className="text-[27px] raleway">Archaea</h5>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="max-w-[700px] raleway">
                <h5 className="text-[15px] font-[400] text-[#000]">
                  Archeaneon , archaean ( ancient Greek ἀρχαῖος - “ancient”) is
                  one of the four eons of Earth’s history, spanning the time
                  from 4.0 to 2.5 billion years ago . It began at the end of the
                  Late Heavy Bombardment about 3.8 billion years ago and
                  continued until the Oxygen Event about 2.5 billion years ago.
                  The Archean spans the period from the first preserved solid
                  rocks, which already had traces of advanced prokaryotic life
                  in the form of full-fledged bacterial mats , to the emergence
                  of eukaryotes . The term “Archaean” was proposed in 1872 by
                  the American geologist James Dana . The Archean is divided
                  into four eras (from the latest to the earliest) : Life and
                  atmosphere: The Earth's biota in the Archean eon consisted of
                  communities of anaerobic prokaryotes . Geobiological studies
                  of Archaean sedimentary rocks indicate that developed
                  prokaryotic life on Earth existed more than 3.7-3.8 billion
                  years ago , but the question of when oxygenic photosynthesis
                  arose still remains without a clear answer. The first fossils
                  believed to bear imprints of filamentous photosynthetic
                  organisms have been dated to 3.4 billion years ago. During the
                  same period, many existing deposits of sulfur, graphite, iron
                  and nickel were actively formed. In the early Archean, the
                  atmosphere and hydrosphere apparently represented a mixed
                  vapor-gas mass, which enveloped the entire planet in a thick
                  and dense layer. Its permeability to sunlight was very weak,
                  so darkness reigned on the surface of the Earth. The vapor-gas
                  envelope consisted of water vapor and a certain amount of
                  acidic fumes. It was characterized by high chemical activity,
                  as a result of which it actively influenced the basalt surface
                  of the Earth. Mountain landscapes, as well as deep
                  depressions, were absent on Earth
                </h5>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="block_2">
          <img src={imgS2} alt="" />
        </div>
      </section>
      <section className="section_3 flex md:justify-between mt-[30px] sm:justify-center flex-wrap gap-[30px]">
        <div className="block_1">
          <img src={imgS3} alt="" className="sm:w-[100%]" />
        </div>
        <div className="block_2">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <h5 className="text-[27px] raleway">Proterozoic</h5>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="max-w-[700px] raleway">
                <h5 className="text-[15px] font-[400] text-[#000]">
                  Proterozoic eon, Proterozoic ( ancient Greek πρότερος “first,
                  eldest” + ζωή “life”) is a geological eon covering the period
                  from 2500 to 538.8 ± 0.2 million years ago. It replaced the
                  Archean and was replaced by the Phanerozoic. The longest eon
                  in Earth's history, lasting 1961 million years. The
                  Proterozoic is characterized by colossal changes in the
                  biosphere, atmosphere and lithosphere of the Earth. If in the
                  previous Archean the atmosphere contained practically no free
                  oxygen, then already at the beginning of the Proterozoic (2460
                  million years ago) the Great Oxygen Event occurred , as a
                  result of which the percentage of oxygen in the atmosphere
                  increased to 2% (that is, 10% of the current level) . This
                  increase was followed by the first mass extinction in the
                  history of the Earth - the Oxygen Catastrophe , since all life
                  was then still anaerobic (that is, oxygen-free) . Another
                  consequence of this catastrophe was the Huronian glaciation ,
                  which lasted about 300 million years and became the longest in
                  the history of the planet . About 2.1 billion years ago, the
                  first eukaryotes appeared, including multicellular ones (
                  Franceville biota ) . Around 2100-1800 million years ago,
                  oxygen saturation of the atmosphere ended, and the planet
                  itself remained in relative tectonic and climatic stability
                  for about a billion years. This period (1800-~800 million
                  years ago) is known as the Boring Billion . It was at this
                  time that the first algae (for example, red algae ) appeared,
                  as well as meiosis and sexual reproduction . About 1 billion
                  years ago, the first mushrooms appeared , and a little later
                  (about 665 million years ago) the first animals . The
                  Neoproterozoic oxygen event began 850 million years ago which
                  was followed by the Sturtian and then Marinoan glaciation 717
                  million years ago . It is believed that the ice reached the
                  equator, which is why these glaciations are known as "
                  Snowball Earths " . In the last period of the Proterozoic, the
                  Ediacaran , the first reliably known fauna of multicellular
                  animals appeared - the Ediacaran biota.
                </h5>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </section>
      <section className="section_4 flex md:justify-between mt-[30px] sm:justify-center flex-wrap gap-[30px]">
        <div className="block_1">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <h5 className="text-[27px] raleway">Paleozoic</h5>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="max-w-[700px] raleway">
                <h5 className="text-[15px] font-[400] text-[#000]">
                  The Paleozoic series was first identified by the English
                  geologist Adam Sedgwick in 1838 (he included two periods in it
                  - Silurian and Devonian ), but then it was understood as the
                  oldest faunally characterized layers lying above the “primary”
                  rocks. The modern meaning of the concept of the Paleozoic as a
                  separate layer of sediments of the first major stage of
                  organic evolution was acquired in the works of Oxford
                  University geology professor John Phillips , published in
                  1840-1841. He attributed the periods from Cambrian to Permian
                  to this stage . Subsequently, authors who put the construction
                  of a stratigraphic scaledepending on organic evolution or the
                  course of geological history and based on a subjective,
                  qualitative analysis of certain incomplete materials, they
                  have repeatedly tried to subdivide history and construct a
                  scale differently. Subsequent geological mapping of other
                  regions of the world, as well as the involvement of materials
                  on pelagic and terrestrial groups of fossils, confirmed the
                  correctness of the divisions of geological time constructed by
                  Phillips. The first global paleomagnetic reconstruction of
                  Phanerozoic continental movement was published in 1973 by A.
                  Smith, J. Bryden and G. Drewry. They published maps of
                  paleomagnetic reconstructions of the positions of the
                  continents for the entire Phanerozoic time , using only
                  paleomagnetic data for the continents when creating them . In
                  1977, Soviet researchers L.P. Zonenshain and A.M. Gorodnitsky
                  presented their own model, which was based on unified global
                  magnetic data with some additions and changes to each model.
                  And in 1978, a kinematic model was publishedCanadian
                  scientists under the leadership of E.R. Kanasevich, as well as
                  a model for reconstructing the relative position of continents
                  in the Paleozoic by English geologists Pierre Morel, Edward
                  Irving and others .Due to the tectonics of lithospheric
                  plates, the position and outlines of continents and oceans in
                  the Paleozoic were different from modern ones. By the
                  beginning of the era and throughout the Cambrian , the ancient
                  platforms ( South American , African , Arabian , Australian ,
                  Antarctic , Hindu ), rotated 180°, were united into a single
                  supercontinent called Gondwana . This supercontinent was
                  located primarily in the Southern Hemisphere , from the South
                  Pole to the equator, and occupied a total area of ​​more than
                  100 million km². Gondwana contained a variety of high and low
                  plains and mountain ranges . The sea periodically invaded only
                  the outlying parts of the supercontinent. The remaining
                  smaller continents were located mainly in the equatorial zone
                  : Laurentia , Baltica and Siberia . There were also
                  microcontinents: Avalonia , Kazakhstania and others. In the
                  marginal seas there were numerous islands bordered by
                  low-lying coasts with a large number of lagoons and river
                  deltas. Between Gondwana and other continents there was an
                  ocean, in the central part of which there were mid-ocean
                  ridges . In the Cambrian, there were two largest plates: the
                  entirely oceanic Proto-Kula plate and the predominantly
                  continental Gondwana plate .
                </h5>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="block_2">
          <img src={imgS4} alt="" className="sm:w-[100%]" />
        </div>
      </section>
      <section className="section_5 flex md:justify-between mt-[30px] sm:justify-center flex-wrap gap-[30px]">
        <div className="block_1">
          <img src={imgS5} alt="" className="sm:w-[100%]" />
        </div>
        <div className="block_2">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <h5 className="text-[27px] raleway">Mesozoic</h5>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="max-w-[700px] raleway">
                <h5 className="text-[15px] font-[400] text-[#000]">
                  Africa At the beginning of the Mesozoic era, Africa was still
                  part of the supercontinent Pangea and had a relatively common
                  fauna with it, which was dominated by theropods , prosauropods
                  and primitive ornithischian dinosaurs (by the end of the
                  Triassic). Late Triassic fossils are found throughout Africa,
                  but are more common in the south than in the north of the
                  continent. As is known, the time line separating the Triassic
                  from the Jurassic period is marked by a global catastrophe
                  with mass extinction of species ( Triassic-Jurassic extinction
                  ), but the African layers of this time remain poorly studied
                  today. Early Jurassic fossil deposits are distributed
                  similarly to Late Triassic deposits, with more frequent
                  exposures in the south of the continent and fewer deposits
                  towards the north. Throughout the Jurassic period, iconic
                  dinosaur groups such as sauropods and ornithopods increasingly
                  spread across Africa . The paleontological layers of the
                  mid-Jurassic period in Africa are poorly represented and also
                  poorly studied. Late Jurassic strata are also poorly
                  represented here, with the exception of the impressive
                  Tendeguru Jurassic assemblage in Tanzania, whose fossils are
                  very similar to those found in the paleobiotic Morrison
                  Formation of western North America and date to the same
                  period. In the mid-Mesozoic, about 150-160 million years ago,
                  Madagascar separated from Africa, while remaining connected to
                  India and the rest of Gondwanaland. Abelisaurs and titanosaurs
                  have been discovered among the fossils of Madagascar . During
                  the Early Cretaceous era, a part of the landmass that made up
                  India and Madagascar separated from Gondwana. In the Late
                  Cretaceous, the divergence of India and Madagascar began,
                  which continued until the achievement of modern outlines.
                  Unlike Madagascar, mainland Africa was tectonically relatively
                  stable throughout the Mesozoic. And yet, despite its
                  stability, significant changes occurred in its position
                  relative to other continents as Pangea continued to break
                  apart. By the beginning of the Late Cretaceous period, South
                  America separated from Africa, thereby completing the
                  formation of the Atlantic Ocean in its southern part. This
                  event had a huge impact on the global climate by changing
                  ocean currents. During the Cretaceous, Africa was inhabited by
                  allosauroids and spinosaurids . The African theropod
                  Spinosaurus was one of the largest carnivores that lived on
                  Earth. Among the herbivores in the ancient ecosystems of those
                  times, titanosaurs occupied an important place. Cretaceous
                  fossil deposits are more common than Jurassic deposits, but
                  often cannot be radiometrically dated , making their exact age
                  difficult to determine. Paleontologist Louis Jacobs, who has
                  spent considerable time in field work in Malawi, argues that
                  African fossil deposits "need more careful excavation" and are
                  sure to prove "fruitful ... for scientific discoveries."
                </h5>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </section>
      <section className="section_6 flex md:justify-between mt-[30px] sm:justify-center flex-wrap gap-[30px]">
        <div className="block_1">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <h5 className="text-[27px] raleway">Cenozoic</h5>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="max-w-[700px] raleway">
                <h5 className="text-[15px] font-[400] text-[#000]">
                  In the history of life on Earth, the mass extinction of
                  species 66 million years ago marked the beginning of a new
                  Cenozoic era, which continues today. As a result of the
                  catastrophic events of those distant times, all animals larger
                  than a crocodile disappeared from the face of our planet . And
                  the surviving small animals found themselves, with the advent
                  of a new era, in a completely different world. Continental
                  drift (divergence) continued in the Cenozoic . On each of
                  them, separate communities of plants and animals formed. The
                  Cenozoic is an era characterized by a wide variety of land,
                  sea and flying animals. It is the era of mammals and
                  angiosperms . Mammals have undergone a long evolution from a
                  small number of small primitive forms and have become
                  distinguished by a wide variety of land, sea and flying
                  species. The Cenozoic can also be called the era of savannas ,
                  flowering plants and insects . Birds also evolved
                  significantly in this era. Cereals appear among the plants .
                  The Cenozoic era was marked by the appearance of the first
                  intelligent life on Earth - Homo sapiens.
                </h5>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="block_2">
          <img src={imgS6} alt="" className="sm:w-[100%]" />
        </div>
      </section>
    </div>
  );
};

export default Home;
