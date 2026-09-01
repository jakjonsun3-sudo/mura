import { Categories } from '@/components/categories'
import { FeaturedProject } from '@/components/featured-project'
import { Hero } from '@/components/hero'
import { Intro } from '@/components/intro'
import { Process } from '@/components/process'
import { SelectedProjects } from '@/components/selected-projects'
import { Services } from '@/components/services'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Stats } from '@/components/stats'
import { Testimonial } from '@/components/testimonial'

export default function Page() {
  return (
    <main className="relative">
      <SiteHeader />
      <Hero />
      <Intro />
      <SelectedProjects />
      <Categories />
      <FeaturedProject />
      <Services />
      <Stats />
      <Testimonial />
      <Process />
      <SiteFooter />
    </main>
  )
}
