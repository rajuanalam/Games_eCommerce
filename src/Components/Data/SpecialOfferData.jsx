import Frycry6sm from '../../assets/frycry6sm.png'
import Devilsm from "../../assets/devilsm.png";
import Ghostsm from "../../assets/ghostrunsm.png";
import Sekirosm from "../../assets/sekirosm.png";
import Deathsm from "../../assets/deathsm.png";

const SpecialOfferData = () => {
    const specialData =[
        {
            img:Frycry6sm,
            title:"Far Cry 5",
            price:"59.99",
            discount:"Save 25%",
            // text:"Starts at $ 9.99"

          },
          {
            img:Devilsm,
            title:"The Devil in Me",
            price:"59.99",
            discount:"Save 25%",
          },
          {
            img:Ghostsm,
            title:"Ghost Runner",
            price:"59.99",
            discount:"Save 25%",
          },
          {
            img:Sekirosm,
            title:"Sekiro Shadows",
            price:"59.99",
            discount:"Save 25%",
          },
          {
            img:Deathsm,
            title:"Death Stranding",
            price:"59.99",
            discount:"Save 25%",
          },
    
    ]
  return (
    specialData
  )
}

export default SpecialOfferData