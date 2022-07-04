import React from 'react'
import './testimonials.css'
import Avtr1 from '../../assets/avatar1.jpg'
import Avtr2 from '../../assets/avatar2.jpg'
import Avtr3 from '../../assets/avatar3.jpg'
import Avtr4 from '../../assets/avatar4.jpg'

const data = [
  {
    avatar: Avtr1,
    name: 'Audre Hamilton',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum eius modi magnam quo nulla officia, voluptate praesentium perferendis animi veniam laboriosam delectus placeat rerum, voluptatem dicta! Ea voluptatum iure aspernatur quasi est reprehenderit.'
  },
  {
    avatar: Avtr2,
    name: 'Mihail Popescu',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum eius modi magnam quo nulla officia, voluptate praesentium perferendis animi veniam laboriosam delectus placeat rerum, voluptatem dicta! Ea voluptatum iure aspernatur quasi est reprehenderit.'
  },
  {
    avatar: Avtr3,
    name: 'Kwame Despite',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum eius modi magnam quo nulla officia, voluptate praesentium perferendis animi veniam laboriosam delectus placeat rerum, voluptatem dicta! Ea voluptatum iure aspernatur quasi est reprehenderit.'
  },
  {
    avatar: Avtr4,
    name: 'Ayse Pinartekin',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum eius modi magnam quo nulla officia, voluptate praesentium perferendis animi veniam laboriosam delectus placeat rerum, voluptatem dicta! Ea voluptatum iure aspernatur quasi est reprehenderit.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {
          data.map(({avatar, name, review},index) => {
            return (
              <article key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar}/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </article>
            )
          })
        }
        
        
      </div>
    </section>
  )
}

export default Testimonials