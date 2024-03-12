import React from 'react'

import './Home.css'
import CommingSoon from '../../components/CommingSoon/CommingSoon'




const Home = () => {
  return (
    <div className='site__height home'>
      
      <div className='column__1 font-radio-canada'>

        <div className='home__update'>
          <h2 className='section__title'>Update</h2>
          <div className='home__border'></div>
          <p className='section__body'>
            <CommingSoon />
          </p>
        </div>
        <div className='home__update__future'>
          <h2 className='section__title'>Future Updates</h2>
          <div className='home__border'></div>
          <p className='section__body'><CommingSoon/></p>
        </div>

      </div>
      

      <div className='column__2'>

        <div className='home__news'>
          <h2 className='section__title'>News</h2>
          <div className='home__border'></div>
          <p className='section__body'><CommingSoon/></p>
        </div>
        <div className='home__news2'>
          <h2 className='section__title'>Upcoming events</h2>
          <div className='home__border'></div>
          <p className='section__body'><CommingSoon/></p>
        </div>

      </div>

      <div className='column__3'>

        <div className='home__popular'>
          <h2 className='section__title'>Popular</h2>
          <div className='home__border'></div>
          <p className='section__body'><CommingSoon/></p>
        </div>
        <div className='home__ranking'>
          <h2 className='section__title'>Ranking</h2>
          <div className='home__border'></div>
          <p className='section__body'><CommingSoon/></p>
        </div>

      </div>

    </div>
  )
}

export default Home