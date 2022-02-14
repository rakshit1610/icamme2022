import React from 'react'
import ReactPlayer from 'react-player'
import './Player.css'
import video from '../../assets/abc.mp4'

    const ResponsivePlayer = () => {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
            // url={video}
            width='100%'
            height='100%'
            controls={true}
          />
        </div>
      )
      }

  export default ResponsivePlayer