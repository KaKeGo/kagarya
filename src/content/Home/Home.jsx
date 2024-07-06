import React from 'react'

import CommingSoon from '../../components/CommingSoon/CommingSoon'

import style from'./Home.module.css'




const Home = () => {
  return (
    <div className={`${style.home} site__height`}>
      
      <div className={`${style.column__1} font-radio-canada`}>

        <div className={`${style.home__update}`}>
          <h2 className={`${style.section__title}`}>Update</h2>
          <div className={`${style.home__border}`}></div>
            <CommingSoon />
        </div>
        <div className={`${style.home__update__future}`}>
          <h2 className={`${style.section__title}`}>Future Updates</h2>
          <div className={`${style.home__border}`}></div>
          <CommingSoon/>
        </div>

      </div>
      

      <div className={`${style.column__2}`}>

        <div className={`${style.home__news}`}>
          <h2 className={`${style.section__title}`}>News</h2>
          <div className={`${style.home__border}`}></div>
          <CommingSoon/>
        </div>
        <div className={`${style.home__news2}`}>
          <h2 className={`${style.section__title}`}>Upcoming events</h2>
          <div className={`${style.home__border}`}></div>
          <CommingSoon/>
        </div>

      </div>

      <div className={`${style.column__3}`}>

        <div className={`${style.home__popular}`}>
          <h2 className={`${style.section__title}`}>Popular</h2>
          <div className={`${style.home__border}`}></div>
          <CommingSoon/>
        </div>
        <div className={`${style.home__ranking}`}>
          <h2 className={`${style.section__title}`}>Ranking</h2>
          <div className={`${style.home__border}`}></div>
          <CommingSoon/>
        </div>

      </div>

    </div>
  )
}

export default Home