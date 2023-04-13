import React from 'react'
import './Cards.css'
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md';

export const CardBs = (props) => {
  const slides = [{ Image: 'https://res.cloudinary.com/dsnycawxb/image/upload/v1677435403/Dr_babasaheb_ambedkar_photo_txeeqc.jpg', title: 'Dr. B.R Ambedkar', discription: 'Dr. B.R. Ambedkar was a visionary social reformer, jurist,', Link:'https://www.vedantu.com/biography/dr-br-ambedkar-biography' },
  { Image: 'https://res.cloudinary.com/dsnycawxb/image/upload/v1677435404/Shivaji_Maharaj_nd5oqc.jpg', title: 'Chhatrapati Shivaji', discription: 'Chhatrapati Shivaji was a legendary Maratha king who played a significant role in India history', Link:'https://www.thefamouspeople.com/profiles/shivaji-6302.php#:~:text=Chhatrapati%20Shivaji%20Maharaj%20was%20a%20legendary%20Maratha%20king%2C,warrior%2C%20with%20military%20training%20in%20various%20fighting%20techniques.' },
  { Image: 'https://res.cloudinary.com/dsnycawxb/image/upload/v1677435404/Jyotirao_Phule_xpznot.jpg', title: 'Jyotirao Phule', discription: 'In India during the nineteenth century, Jyotirao “Jyotiba” Govindrao Phule was', Link:'https://www.studyiq.com/articles/jyotiba-phule/' },
  { Image: 'https://res.cloudinary.com/dsnycawxb/image/upload/v1677435404/Durai_Saravanan_p7kwq9.jpg', title: 'Durai Saravanan', discription: '',Link:''  },
  { Image: 'https://res.cloudinary.com/dsnycawxb/image/upload/v1677435404/download_udonmy.jpg', title: 'Manyavar Saheb shri Kanshiram', discription: 'These pledges remind the work of Manyawar Kanshi Ram Sahib who is',Link:'https://www.bspindia.co.in/manyavar-shri-kanshiram/'  },
  { Image: 'https://res.cloudinary.com/dsnycawxb/image/upload/v1677516820/mayavathi_jprew2.jpg', title: 'Bahan Kumari Mayawati ji', discription: 'Mayawati (born 15 January 1956) is an Indian politician. ',Link:'https://www.bspindia.co.in/our-leadership/bahan-kumari-mayawati-ji/'  },
  ];

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;

  }

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;

  }

  return (
    <div className='body-container'>
      <h2>Our Inspirations</h2>
      <div id='main-slider-container'>
        <MdOutlineChevronLeft size={40} className='slider-icon left' onClick={slideLeft} />
        <div id='slider'>{
          slides.map((slide, index) => {
            return (
              <div className='slider-card' key={index}>
                <div className='slider-card-image' >
                 <img src={slide.Image} alt="img" />
                </div>
                <p className='slider-card-title'>{slide.title}</p>
                <p className='slider-card-discription'>{slide.discription}</p>
               <a href={slide.Link} target="_blank"><button className='view'>view</button></a>

              </div>

            )
          })
        }
        </div>
        <MdOutlineChevronRight size={40} className='slider-icon right' onClick={slideRight} />
      </div>
    </div>
  )
}
