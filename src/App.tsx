import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { BlogArticle } from './pages/blog-article'

function App() {
  return (
    <div className="bg-base-background w-full min-h-screen pb-20">
      <Header />
      <main className="max-w-[864px] mx-auto mt-[-5.4rem] text-base-text px-10 lg:px-0">
        <BlogArticle />
      </main>
      <Footer />
    </div>
  )
}

export default App
