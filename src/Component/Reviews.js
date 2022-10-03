import React from 'react'
import ReviewCards from './ReviewCards'
import '../styles/Reviews.css'
import profile1 from '../Media/85-859546_drake-round-girl.png'
import profile2 from '../Media/564-5646452_rounded-headshot-of-staff-member-katie-girl-hd.png'
import profile3 from '../Media/Hariram-rounded-photo-20210528-091332eSpace-pku1ybgotfrbwuab9po3zn49vnb8t0qv3n8k15vd68.png'

const Reviews = () => {
  return (
    <div className='review-container'>
        <div>
           <h1>Customer's Review</h1>
           <div className="content-reviews">
              <ReviewCards
              p='Trading on TradExpress mobile & web platforms has been a smooth experience for me quite easy to navigate.'
              img={profile1}
              name='Drake'
              location='USA'
              />
              <ReviewCards
              p='They have the best rate compared to other platforms with fast payout.'
              img={profile2}
              name='Katie'
              location='Canada'
              />
              <ReviewCards
              p='Easy to fund and withdraw coins or cash on their platform, I will definitely trade with them again.'
              img={profile3}
              name='Hariram'
              location='England'
              />

            </div>
        </div>


    </div>
  )
}

export default Reviews