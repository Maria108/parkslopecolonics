import React, { Component } from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap'

const items = [
  {
    text:
      '-I have worked with Elena over the last past 2 years and she has helped improve my digestion, help my skin clear up and help guide me along the way with her vast knowledge in health and wellness. She has shown genuine concern and has been patient with me through my journey. I am very grateful to have Elena in my life, I would definitely recommend this establishment if you are looking for improvements in you overall health and well being-',
    altText: 'Slide 1',
  },
  {
    text:
      '-I love love Elena at Park Slope Colonics. I had loads of antibiotics growing up and my digestive system has been quite damaged (leaky gut immune system is becoming stronger. Thanks Elena for all your help-',
    altText: 'Slide 2',
  },
  {
    text:
      '-I love Slope Colonics. I had loads of antibiotics growing up and my digestive system has been quite damaged (leaky gut immune system is becoming stronger. Thanks Elena for all your help-',
    altText: 'Slide 3',
  },
]

class Carouselreact extends Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: 0 }
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.goToIndex = this.goToIndex.bind(this)
    this.onExiting = this.onExiting.bind(this)
    this.onExited = this.onExited.bind(this)
  }

  onExiting() {
    this.animating = true
  }

  onExited() {
    this.animating = false
  }

  next() {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1
    this.setState({ activeIndex: nextIndex })
  }

  previous() {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  goToIndex(newIndex) {
    if (this.animating) return
    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.text}
        >
          <p>Privet</p>
        </CarouselItem>
      )
    })

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    )
  }
}

export default Carouselreact
