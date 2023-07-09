import React from 'react'

//images
import grid1Img from '../images/bay park.jpg'
import grid2Img from '../images/pingan finance centre.jpg'
import grid3Img from '../images/bay glory.jpg'
import grid4Img from '../images/talent-park.jpg'
import grid5Img from '../images/lianhuashan park.jpg'
import grid6Img from '../images/window of the world.jpg'
import grid7Img from '../images/Meridian View Center.jpg'
import grid8Img from '../images/sea world culture and arts center.jpg'
import grid9Img from '../images/green trip.jpg'
import grid10Img from '../images/beautiful-coastline.jpg'

export default function Scenic() {

return (
  <section className='gridContainer'>

    <div className='grid1 gridItem'>
        <img src={grid1Img} alt="" />
        <div>
            <h1>Shenzhen Bay Park</h1>
            <p>It's hard to imagine many other cities having the gumption to construct a gorgeous, 13-kilometre-long coastal park that knits together two city districts and provides recreation space for thousands of residents. Shenzhen Bay park has palm-shaded bike lanes, jogging and walking paths and inspiring sea views along its length. Best of all, it's a viable way to get from one side of the city to the other. </p>
        </div>
    </div>

    <div className='grid2 gridItem'>
        <div>
            <h1>Ping'an Finance Centre</h1>
            <p>This 599-metre-tall skyscraper might be a shade shorter than China's tallest (Shanghai Tower), but for bragging rights, the only metric that matters is the height of its observation deck: a whopping 547.6m - one of the world's highest. If you're blessed with crystal clear skies, scurry for the superfast elevators and drink in vistas, from the emerald wilds of Wutongshan to shimmering Hong Kong Island.</p>
        </div>
        <img src={grid2Img} alt="" />
    </div>
    
    <div className='grid3 gridItem'>
        <img src={grid3Img} alt="" />
        <div>
            <h1>Bay Glory</h1>
            <p>The Bay Glory is a giant cantilevered observation wheel, whose structure has an overall height of 128-metre (420-foot) and the wheel has a diameter of 113.3-metre (372-foot). It has 28 gondolas, each gondola has a net area of 16.8㎡ and can seat a maximum of 25 passengers. Passengers can see the scenery of Qianhai Bay and Pearl River estuary Lingdingyang from the gondola.</p>
        </div>
    </div>
     
    <div className='grid4 gridItem'>
        <div>
            <h1>Shenzhen Talent Park</h1>
            <p>Shenzhen Talent Park is a public park located next to the Shenzhen Bay Sports Center in Houhai, Nanshan District. The park, first planned in August, 2017, covers 770,000 square meters and features beautiful scenery, as well as dozens of seminar rooms, lecture theaters and business centers.</p>
        </div>
        <img src={grid4Img} alt="" />
    </div>

    <div className='grid5 gridItem'>
        <img src={grid5Img} alt="" />
        <div>
            <h1>Lianhuashan Park</h1>
            <p>Shenzhen, in all its gleaming, futuristic, high-rise absurdity, has literally been built around this tropical hilltop park. Lianhuashan is the jade-green jewel in Futian's centrally-planned crown, and the perfect perch from which to admire one of Asia's most astonishing skylines. It takes about 30 minutes to reach the top, where you can rub shoulders with Deng Xiaoping in statue form, the politician who sowed the seeds for Shenzhen's rise.</p>
        </div>
    </div>

    <div className='grid6 gridItem'>
        <div>
            <h1>Window of the World</h1>
            <p>In Shenzhen's early days, what every up-and-coming city needed was theme parks. Welcome Window of the World, a way to travel the globe without really travelling. The mini monuments, from Stonehenge to the Taj Mahal, are endearing and endlessly photogenic. In a city perpetually enthralled with the new, Window of the World is a soothing return to a more innocent age, when the world beyond China's borders seemed far away.</p>
        </div>
        <img src={grid6Img} alt="" />
    </div>

    <div className='grid7 gridItem'>
        <img src={grid7Img} alt="" />
        <div>
            <h1>Meridian View Center</h1><p>For those who want to get a bird's-eye view of Shenzhen and Hong Kong, you can go to the Meridian View Center. Located on the top floor of Diwang Building, which has 69 floors and stands 383.95 meters, A variety of high-tech items let visitors have an entertaining experience while learning the basic information of Shenzhen</p>
        </div>
    </div>

    <div className='grid8 gridItem'>
        <div>
            <h1>Sea World Culture and Arts Centre</h1>
            <p>It makes a lot of sense that China's first dedicated museum of design touched down in Shenzhen. Creativity energy crackles around the city, captured in the thought-provoking installations on display in the stunning gallery spaces designed by Japanese architect Fumihiko Maki.</p>
        </div>
        <img src={grid8Img} alt="" />
    </div>

    <div className='grid9 gridItem'>
        <img src={grid9Img} alt="" />
        <div>
            <h1>OCT East</h1>
            <p>Located in the valleys and hills behind Dameisha (beach), it features thrilling rides, shows and a replica European town, as well as a few themed hotels. Be prepared to climb a lot of stairs or escalators to reach all of the different rides and attractions.</p>
        </div>
    </div>

    <div className='grid10 gridItem'>
        <div>
            <h1>Xichong Beach</h1>
            <p>Xichong is a scenic spot in the Dapeng New District of Shenzhen City. It is located in the southern part of the Dapeng Peninsula, facing the South China Sea with Dapeng Bay to the west and Daya Bay to the east. Xichong and its sister beach Dongchong are popular with backpackers, hikers and surfers.</p>
        </div>
        <img src={grid10Img} alt="" />
    </div>
  </section>

)
}
