import HeroSection from './components/heroSection/HeroSection'
import ServiceSection from './components/serviceSection/ServiceSection'
import ReviewSection from './components/reviewSection/ReviewSection'

export default function Home() {
  return (
    <main className='mainSection'>
      <HeroSection />
      <ServiceSection />
      <ReviewSection /> 
    </main>
  )
}
