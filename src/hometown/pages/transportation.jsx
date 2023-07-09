import React from 'react'

//images
import hero from '../images/transportation.jpg'
import flight from '../images/flight.jpg'
import metro from '../images/metro.jpg'
import cruise from '../images/cruise.png'
export default function Transpotation(props) {
  return (
      <section className='transportation' onClick={props.onDropdownClose}>
      <div className='hero'>
        <div>
          <h1>Transportation</h1>
          <p>
            Shenzhen has land, sea, air and rail ports. There are nine wharfs,
            such as Shekou wharf, Fuyong wharf and Yantian wharf, in Shenzhen and
            the city has six railway stations, including Shenzhen Railway Station,
            Shenzhen North Railway Station and Shenzhen East Railway Station. The
            Guangzhou-Shenzhen-Hong Kong Express Rail Link, an important rail link
            in the country, runs across Shenzhen. Shenzhen International Airport
            is a regional pivot airport and the fourth-largest airport in China.
            As one of the top 100 airports in the world, Shenzhen Airport has so
            far launched 46 international flights and four flights to Hong Kong,
            Macao and Taiwan.
          </p>
        </div>
        <img src={hero} alt="" />
      </div>

      <div className='flight main'>
        <div>
          <h1>Shenzhen Bao'an International Airport</h1>
          <p>
            Located on the east coast of the Pearl River Estuary and 32 kilometers
            to the west of downtown Shenzhen, Shenzhen Baodan International
            Airport is a mega international airport integrating marine, land, air
            and railway transport.</p>
          <p>First opened in October 1991, Shenzhen Baodan International Airport
            has witnessed rapid growth in both passenger and cargo volume. The
            annual passenger volume of the airport exceeded 10 million for the
            first time in 2003, making it one of the top 100 busiest airports in
            the world. The number continued to grow in the following years,
            surpassing 20 million in 2007, 30 million in 2013, 40 million in 2016
            and topped 50 million to hit 52.93 million in 2019. The global rank of
            the airport has jumped to 26th while its passenger volume growth rate
            ranks 2nd among all its peers worldwide.</p>
            <p>Shenzhen Baodan International Airport boasts first-class facilities.
            Its flight zones, terminals and cargo warehouses cover an area of 7.7
            million square meters, 451,000 square meters and 1.66 million square
            meters respectively. The new airport terminal, an energy-saving
            aesthetic success with strong practicality, was put into operation in
            November 2013. Comprising a main hall, a cross-shaped departure hall
            and a satellite departure hall, the new terminal rests on 195,000
            square meters of land with a total floor area of 451,000 square
            meters, spanning 1,128 meters from north to south and 640 meters from
            west to east, and provides 62 contact stands and 14 remote stands with
            a maximum passenger handling capacity of 45 million. The airport
            currently has two runways. The second runway, which is 3,800 meters
            long and 60 meters wide, became operational in 2011. As a 4F airport,
            Shenzhen Baodan International Airport can accommodate large-scale
            airplanes including the A380, the worldds largest airliner.</p>
        </div>
        <img src={flight} alt="" />
      </div>

      <div className='metro main'>
        <div>
          <h1 >Shenzhen Metro Map</h1>
        </div>
        <img src={metro} alt="" />
      </div>

      <div className='taxi main'>
        <div>
          <h1>How to Call a Taxi</h1>
          <p>1. Call 96880.</p>
          <p>
            2. A phone operator will input the information of passengers to the
            taxi calling system. It will automatically generate an order and send
            it to taxi drivers near the location of passengers.
          </p>
          <p>
            3. Taxi drivers receiving the order via GPS press the Confirm button
            to accept the order.
          </p>
          <p>
            4. The first driver to accept the order will receive the information
            of passengers.
          </p>
          <p>
            5. The driver will call the passengers to confirm the information.
            This is the end of the taxi calling process.
          </p>
        </div>

      </div>

      <div className='bus main'>
        <div>
          <h1>Buses</h1>
          <p>Bus services in Shenzhen began in 1975, and now have expanded to a network consisting of over 1,000 routes. Three franchised companies, Shenzhen Bus Group, Shenzhen Eastern Bus and Shenzhen Western Bus operate most of the routes, and the remaining routes are operated by a few private companies.
          </p>
          <p>
            Bus fares usually range from 2 yuan to 10 yuan, except for branches,
            where the fare can be 1 yuan or 2 yuan, and privately-operated premium
            services, which may be charged as much as 30 yuan. Fare has to be
            given when boarding the bus in short-haul routes and expresses with no
            charge. However, for most long-haul routes, fare is collected manually
            according to the travel distance of the passenger. Shenzhen Tong IC
            Card is accepted on most of the bus routes with 20% off at least,
            except a few privately-operated premium routes.
          </p>
          <p>
            It is highly recommended to obtain a Shenzhen Tong card for public
            transport in Shenzhen. The Shenzhen Tong card is a contactless stored
            value card that provides customers a simple, safe and secure way to
            pay. It can be used to pay fares on the Metro and most buses in
            Shenzhen. The Shenzhen Tong card can be purchased and recharged at
            Metro stations, some grocery stores, as well as Shenzhen Tong outlets.
          </p>
        </div>

      </div>
      
      <div className='cruise main'>
        <div>
          <h1>Shekou Cruise Homeport</h1>
          <p>
            Located in Shekou, Nanshan District, Shekou Cruise Homeport runs
            direct ferry connections from Shenzhen to destinations across the
            Pearl River Delta. You can take a ferry at the Shekou Cruise Homeport
            to reach Hong Kong and Macao. Taxis are available in the parking area.
            A free shuttle bus service links with the old Shekou Ferry Terminal,
            near exit C of the Shenzhen Metro Shekou Port Station. A bus depot is
            located near the station offering services across the city.
          </p>
          <p>
            As the only modern international cruise homeport in south China,
            Shekou Cruise Homeport integrates "sea, land, air and railway",
            serving as the "sea gateway" which connects Shenzhen with Hong Kong,
            Macao and the world. Shekou Cruise Homeport has opened six regular
            high-speed ferry routes to and from the Hong Kong International
            Airport, Central (Hong Kong), Macao Outer Harbor, Taipa (Macao),
            Zhuhai and Wailingding Island, as well as flexible routes to
            surrounding islands since its opening on November 13, 2016. From
            Shekou, it takes one hour to reach Hong Kong, Macao and Zhuhai, and 30
            minutes to the Hong Kong International Airport. There are more than
            146 flights in and out of the homeport every day.
          </p>
        </div>
        <img src={cruise} alt="" />
      </div>
      </section>
  )
}
