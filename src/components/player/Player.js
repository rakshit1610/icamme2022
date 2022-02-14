import React from 'react'
import ReactPlayer from 'react-player'
import './Player.css'
// import video from 'https://gdurl.com/BeYg'

    const ResponsivePlayer = () => {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://gdurl.com/BeYg'
            width='100%'
            height='100%'
            controls={true}
          />
        </div>
      )
      }

  export default ResponsivePlayer