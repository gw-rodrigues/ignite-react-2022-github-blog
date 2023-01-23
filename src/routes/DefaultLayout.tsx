import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div className="bg-base-background w-full min-h-screen pb-20">
      <Header />
      <main className="max-w-[864px] mx-auto mt-[-5.4rem] text-base-text px-6 lg:px-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
