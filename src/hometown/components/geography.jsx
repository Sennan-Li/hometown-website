import React from 'react'

//images
import map from '../images/shenzhen map.jpg'

export default function Geography() {
  return (

    <section className='geography' >

      <div className='headerContainer'>
        <img src={map} alt="" />
        <div className='headerText'>
            <h1>Geography</h1>
            <p>Shenzhen is a coastal city in South China with 260.5 kilometers coastline. It is located on the eastern bank of the Pearl River, neighboring Hong Kong. To the east of the city are Daya Bay and Dapeng Bay, while the Pearl River Estuary and Lingding Bay lie to its west. Shenzhen River connects Hong Kong to the south, and to the north of Shenzhen are the cities of Dongguan and Huizhou. Its longitude lies between 113.43 and 114.38 degrees east, and its latitude lies between 22.24 and 22.52 degrees north. Covering a total area of 1,997.47 square kilometers plus total marine water area of 1,145 square kilometers, its subtropical monsoon climate brings warmth and plenty of precipitation to the city. Shenzhen is a link between the Chinese mainland and Hong Kong and a transport hub for coastal southern China.</p>
        </div>
       
      </div> 

      <div className='gridSystem'>
        <div className='coastline gridItem'>
            <div>
                <p>Shenzhen has a large number of coastal scenic spots, including the Shenzhen Bay, the Mangrove Nature Reserve and a 15-kilometer coastal leisure corridor in the west, with Zhongying Street, Dameisha and Xiaomeisha beaches, Sea World, and Dapeng Peninsula in the east. The coastline along the Dapeng Peninsula was named one of the eight most beautiful coasts in China by Chinese National Geography magazine. Shenzhen has more than 20 public beaches, some of which are linked by seaside walkways.</p>
                <h1>Beautiful coastline</h1>
            </div>
        </div>

        <div className='climate gridItem'>
            <div>
                <h1>Climate</h1>
                <p>Shenzhen has a subtropical monsoon climate. The weather is generally temperate to mild, with plenty of rain and sunshine. The annual average temperature is 22.4 degrees Celsius. A total of 355 days a year are frost-free. The yearly rainfall totals 1,933.3 millimeters and the average annual number of hours of sunshine is 2,120.5. The average annual concentration of PM2.5 in the city is 28 micrograms per cubic meter, making Shenzhen one of the 10 cities in the country with the best air quality.</p>
            </div>
        </div>

        <div className='tourism gridItem'>
            {/* <img src="/`${hometown/images/guide/tourism.png" alt=""> */}
            <div>
                <h1>Tourism</h1>
                <p>More than 100 scenic spots around the city, including man-made theme parks, natural ecological parks, coastal resorts, shopping plazas and historic sites. With sea, land and air checkpoints, Shenzhen has a safe, quick and convenient tourist transport network. Eating, living, traveling, shopping and recreating in Shenzhen are made easy and fun with ample tourism infrastructure and products and food from around the world. Visitors can travel freely and quickly within a one-hour drive and appreciate the modern young city's beauty and ethos.</p>
            </div>
        </div> 

        <div className='naturalResouces gridItem'>
            <div>
                <h1>Natural Resources</h1>
                <p>The total area of Shenzhen is 1,997.47 square kilometers. Shenzhen has more than 310 rivers and streams, associated with the nine hydrographic systems. Shenzhen has a vast sea area, covering 1,145 square kilometers and boasting 261 kilometers of coastline and typical subtropical monsoon climate and vegetation. </p>
            </div>
        </div>

        <div className='naturalBeauty gridItem'>
            <div>
                <h1>Natural Beauty</h1>
                <p>OCT East, a national ecological resort occupying about nine square kilometers, aims to provide visitors with an opportunity to escape from the bustle of city life and return to nature. Tourists can also feel tranquility at other local spots including Fairy Lake Botanical Garden, the 943.7-meter Wutong Mountain, the mountainside Hongfa Temple, Waterlands Resort, Guangming Farm.</p>
            </div>
        </div>
          
    </div>

    </section>
  )
}
