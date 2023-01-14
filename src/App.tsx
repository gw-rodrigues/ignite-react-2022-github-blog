import { Header } from './components/Header'
import { BlogList } from './pages/blog-list'

function App() {
  return (
    <div className="bg-base-background w-full min-h-screen pb-20">
      <Header />
      <main className="max-w-[864px] mx-auto mt-[-5.4rem] text-base-text">
        <BlogList />
      </main>
    </div>
  )
}

export default App
