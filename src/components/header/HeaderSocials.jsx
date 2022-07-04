import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com" targer="_blank"><BsLinkedin /></a>
        <a href="https://www.github.com" targer="_blank"><BsGithub /></a>
        <a href="https://www.instagram.com" targer="_blank"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials