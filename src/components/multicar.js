import React from 'react'

import { IoMdStar } from 'react-icons/io'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default class Carouselmulti extends React.Component {
  
  render() {
    return (
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        slidesToSlide={1}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={''}
        deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div>
          <p className="rating">
          {' '}
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          </p>
          <p className="review">
          -I've worked with Elena over the last past 2 years and she has
          helped improve my digestion, help my skin clear up and help guide me
          along the way with her vast knowledge in health and wellness. She
          has shown genuine concern and has been patient with me through my
          journey. I'm very grateful to have Elena in my life, I would
          definitely recommend this establishment if you are looking for
          improvements in you overall health and well being-
          </p>
          <p className="review-author">-Tiffany W-</p>
        </div>
        <div>
          <p className="rating">
          {' '}
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          </p>
          <p className="review">
          -I love love Elena at Park Slope Colonics. I had loads of
          antibiotics growing up and my digestive system has been quite
          damaged (leaky gut etc). Elena is so pleasant to work with, I feel
          so comfortable and safe with her. Since I started getting colonics
          with Elena I don't feel comfortable going to see anyone else ! She
          gave me lots of great diet suggestion pre and post colonics and is
          extremely knowledgeable when it comes to other healing modalities
          such as nutrition. I feel I cannot get enough treatments with her to
          help me further with detox and cleansing at more deeper level. I
          have seeing Elena now for over two years regularly and every session
          makes me feel better: I feel more energy, better digestion and
          clearer skin. Most important because I am cleaning my digestive
          system my immune system is becoming stronger. Thanks Elena for all
          your help-
          </p>
          <p className="review-author">-Maria A-</p>
        </div>
        <div>
          <p className="rating">
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          </p>
          <p className="review">
          -I love coming to Park slope Colonics, it's a cosy space, very
          private makes me feel calm and peaceful. I see Elena for my colonics
          and every time I feel amazing after!! Elena makes the experience
          very comfortable for me and I feel like I'm in good hands. Highly
          recommend!-
          </p>
          <p className="review-author">-Anna S-</p>
        </div>
        <div>
          <p className="rating">
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          </p>
          <p className="review">
          -I’ve been working with Elena for over 2 years now. I’ve had issues
          with gas and bloating, but since I started having treatments with
          Elena everything has cleared up. She is so knowledgeable and has
          helped me to be more aware about my diet and cleansing. She is very
          patient and kind and makes the whole process a favorable experience.
          I highly recommend having a Colonic with Elena!-
          </p>
          <p className="review-author">-Athena T-</p>
        </div>
        <div>
          <p className="rating">
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          </p>
          <p className="review">
          -I’ve finally found the place of my dreams and Park Slope Colonics is it. For so long I’ve been suffering with stomach issues, fatigue and not to mention acne. I definitely needed help and guidance and I found that here with the expertise of owner Elena Bykova. With her vast knowledge and patience she has given me the clarity in which I needed. I finally feel a sense of relief and more energized than I have in a long time, not to mention a glow has returned to my skin. It is beautiful and tranquil and Elena is amazing and I highly recommend to anyone who is looking to improve themselves inside and out. The best decision I ever made-
          </p>
          <p className="review-author">-Mia K-</p>
        </div>
        <div>
          <p className="rating">
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          </p>
          <p className="review">
          -Very professional, informative, but very caring as well.  She made the whole process very comfortable.  I highly recommend her, and i plan to visit again. Thank you Elena-
          </p>
          <p className="review-author">-Eliot A-</p>
        </div>
        <div>
          <p className="rating">
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          </p>
          <p className="review">
          -Omg!! This is hands down the best colonic that I have ever received! Lena is amazing and I highly recommend her. She was very gentle, nurturing and attentive. She made me feel very comfortable and at ease. She was very knowledgeable which made me feel safe and reassured. I have been to a lot of colonic places but this was very cozy and clean which I loved! A great gem in park slope!-
          </p>
          <p className="review-author">-Jennifer Gage-</p>
        </div>
        <div>
          <p className="rating">
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          </p>
          <p className="review">
          -Really great service. Highly recommend this place especially if it's your first time. Elena responded to all my questions and concerns. Also, she walked me through the whole process. Will definitely come back again!-
          </p>
          <p className="review-author">-Autumn W-</p>
        </div>
        <div>
          <p className="rating">
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          </p>
          <p className="review">
          -I really enjoy coming to Park Slope colonics. Super easy to book online and Lena always makes my tummy happy! I love that she is using essential oils, I’m a huge fan of oils and it makes an experience much better. Also the office is clean and she is not using any toxic cleaners, I’m very sensitive and I really appreciate that-
          </p>
          <p className="review-author">-Rufina NF-</p>
        </div>
        <div>
          <p className="rating">
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          </p>
          <p className="review">
          -I had wonderful experience! So thankful to this place to help me in my health journey! Started with series of treatments and now in a good shape to do just maintenance once in a few month!!-
          </p>
          <p className="review-author">-Nina D-</p>
        </div>
        <div>
          <p className="rating">
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          </p>
          <p className="review">
          -I had colonics before with good practitioners, but Lena seem to be on another level.
            Very caring, intuitive  and sincere approach helped me immediately  to feel at ease and I was able to let go of my waste very quickly.
            I was impressed with her knowledge on the subject and with lots of practical advises I have received.
            I have booked another treatment already-
          </p>
          <p className="review-author">-Yana Ya-</p>
        </div>
        <div>
          <p className="rating">
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          </p>
          <p className="review">
          -Lena is amazing! She's very knowledgeable and knows exactly what she's doing and how to make sure you feel comfortable in every moment. Moreover, you can tell she has put so much love into her office space, and is really there to help people. She's truly a five-star expert in every way!-
          </p>
          <p className="review-author">-Aspen L-</p>
        </div>
        <div>
          <p className="rating">
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          </p>
          <p className="review">
          -I was very nervous to try a new place, but the therapist was very professional and made the whole experience easy. The room is spotless and essential oils were diffused during my treatment. Now I'm a regular client and feel great, highly recommend!-
          </p>
          <p className="review-author">-Nadia P-</p>
        </div>
        <div>
          <p className="rating">
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          </p>
          <p className="review">
          -Elena is incredible! I've had many MANY colonics in my life and Elena is exceptional! I left her stunningly beautiful office feeling 20lbs lighter and more energetic. She has a lovely personality and I will definitely be a regular client! I can not recommend her enough!!!-
          </p>
          <p className="review-author">-Amethyst H-</p>
        </div>
        <div>
          <p className="rating">
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          </p>
          <p className="review">
          -My experience of colonic therapy started  with Lena almost a year ago and I am sooo grateful for this! Hearing how people never want to go back and ever do colonics again shocks me because it just shows how much such services depend on who is performing them. 
          Because colonic is a very private and intimate procedure, I believe it is a MUST for the therapist to be knowledgeable. Not only she is very professional and exper, she makes me feel safe and comfortable each time, needles to say the amazing feeling after the procedure. 
          If you are looking for a place to add to your constant health routine, look no further, Lena not only offers amazing service, she also cares for your progress and well-being on a long run-
          </p>
          <p className="review-author">-Veronica V-</p>
        </div>
      </Carousel>

    )
  }

}
