import React from 'react'
import Scenic from '../components/scenic'


export default function Guide(props) {
  return (
      <section className='guide' onClick={props.onDropdownClose}>
        <div className='tips' > 
          <h1 >Travel Tips</h1>
         <h2>Recommended travel time</h2>
         <p>
          With longer summers and no winters, Shenzhen is perfect for a vacation in all seasons. And the period from November to April is the best.
          From November to April: The city has short spring and autumn and mild and sunny winter. The average temperature is around 15 to 20 degrees Celsius, which is the best time for travel. The lowest temperature in winter often occurs between the end of January and February, therefore it is recommended to wear a sweater and a thick coat.
          From May to October: Shenzhen has a long summer, and public spaces such as buses, metros and shopping malls turn on the air conditioner from March to December. The highest temperature of Shenzhen normally occurs in July.
          On average, the number of typhoons affecting Shenzhen is 4.2 times per year. The typhoon flooding period is from July to October, which may lead to flight delays.
          Recommended days of travel: 2 to 5 days</p>
          <h2>Recommended days of travel: 2 to 5 days</h2>
          <p>Shenzhen's main attractions are mainly concentrated in Nanshan, Futian and Luohu districts. If you want to go on shopping, entertainment, sightseeing trips, 2 to 3 days is enough. However, if you plan to go to the Dapeng Peninsula in the east, it is recommended to add another 1 to 2 days.</p>
          <h2>Consumption</h2>
          <p>The consumption level in Shenzhen is basically the same as that in Beijing, Shanghai and Guangzhou. Compared with Longgang and Bao'an districts located in northwestern Shenzhen, the price of Luohu, Futian, Nanshan and Yantian districts that are near Hong Kong are relatively high.
          Most of Shenzhen's parks and attractions, such as Dapeng Fortress, Shenzhen Mangrove Ecological Park and Dameisha, offer free entry. Tickets of theme parks and amusement parks represented by Window of the World are around 200 yuan. The high-rise themed sightseeing tour is around 100 yuan.</p>
          <h2>Food</h2>
          <p>The average dietary consumption in Shenzhen varies greatly from tens to hundreds of yuan. A traditional Cantonese breakfast changfen (steamed rice roll) costs 8 to 15 yuan and a cup of soy milk costs three yuan. A Cantonese dim sum meal costs 60 to 100 yuan per person.</p>
          <h2>Accommodation</h2>
          <p>There are various types of accommodation in Shenzhen and the price also varies a lot. The standard hotel price is between 300-500 yuan. The high-end hotels and resorts above four stars are over 400 yuan per night. Youth hotels in the Dapeng Peninsula coastal scenic spot generally cost 50 to 100 yuan a night.</p>
          <h2>Transportation</h2>
          <p>Metro and buses are the main travel mode in Shenzhen. The metro starts at 2 yuan within 4 kilometers, and the bus starts at 1 to 2 yuan. The flag-fall price of taxies is 10 yuan for the first 2 kilometers and 2.6 yuan for every additional kilometer.</p>
         </div>

         <div className='featured'>
            <p>Featured Scenics</p>
         </div>

         <Scenic/>
      </section>
  )
}
