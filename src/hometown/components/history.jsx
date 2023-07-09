import React from 'react'

//images
import shenzhen from '../images/shenzhen glory.jpg'

export default function History() {
  return (
    <section className='history'>
      <div className='header'>
        <h1>History</h1>
        <p>The earliest-known records bearing the name Shenzhen date from 1410, during the Ming Dynasty (1368-1644). Shenzhen became a township at the beginning of the Qing Dynasty (1644-1911), as local people called the drains in paddy fields <strong>zhen</strong>, Shenzhen literally means deep drains because the area used to be crisscrossed by rivers and streams. Since the map of the city's outline resemble a flying roc with its wings spread, Shenzhen is also known as the <strong>Roc City</strong>. Human activity in the surrounding area dates back more than 6,700 years. The area was founded as a county 1,700 years ago and is home to 600-year-old cultural relics such as Nantou Ancient City and Dapeng Fortress. The Hakka people migrated to the area from central China about 300 years ago. <strong>Shenzhen</strong> was established in March 1979. In August the following year, the city was turned into the country's first <strong>special economic zone</strong>. Over the past four decades, Shenzhen has transformed from a small backward border town into an international metropolis with global influence.</p>
      </div>

      <div className='main'>
      <img src={shenzhen} alt="" />
        <div className='charm'>
          <h1>City of Charm</h1>
           <p>Shenzhen's built-up area has increased from 3.8 square kilometers to more than 1,000 square kilometers. Shenzhen has won numerous awards and recognitions, including the National Civilized City, the Nations in Bloom, a member of the Creative Cities Network of UNESCO and UNESCO City of Design. Shenzhen has been an important window of China's reform and opening up. It is home to a world-class container port and has established friendship relations with 88 provinces and cities in 56 countries around the globe.</p>
        </div>

        <div className='vitality'>
          <h1>City of Vitality</h1>
          <p> As a pioneering city in China's reform and opening up, Shenzhen has taken the lead in carrying out the market-oriented reform of the economic system. The city has taken the first steps in more than 1,000 different fields in the country. Shenzhen is also one of the cities with China's best business environment that has greatly stimulated the market vitality. Shenzhen is home to a large number of local enterprises with global competitiveness such as Ping'an, BYD, Tencent, Huawei and DJI and is ranked first in the country in terms of the number of commercial entities and entrepreneurship density. Nearly 300 Fortune 500 companies have invested in the city.</p>
        </div>

        <div className='efficiency'>
          <h1>City of efficiency</h1>
          <p>Shenzhen has created the world-renowned “Shenzhen Speed” and the development-leading “Shenzhen Efficiency", “Shenzhen Quality and “Shenzhen Standards” that mark the era. In 2021, Shenzhen's total economic volume exceeded 3 trillion yuan, ranking fourth among Asian cities. Its general public budget revenue reached 425.8 billion yuan. The total output value of industrial enterprises above designated scale in the city has topped all Chinese cities for three consecutive years, and its export scale has ranked first in the country for 29 years running.</p>
        </div>

        <div className='innovation'>
          <h1>City of Innovation</h1>
          <p>Shenzhen has taken the innovation-driven growth as its development strategy. It is committed to pushing forward comprehensive innovation with scientific and technological innovation as its core. Shenzhen has formed a market-oriented technological innovation system that takes enterprises as its mainstay and highly blends industry with university and research. It has become the first national innovative city, the first city in the country designated as an innovation demonstration zone, one of the first batch of Chinese cities designated as the demonstration zones of sustainable development and a national comprehensive science center.</p>
        </div>
    </div>
  </section>
  )
}
