import React from 'react'
import List from "../features/Lists"
import Discover from '../features/Discover'

const Home = () => {
  return (
    <>
    <main className='bg-white'>
      <article className=''>
        {/* section for list */}
        <section>
          <List/>
        </section>
        <section><Discover/></section>
      </article>

    </main>
      
    </>
  )
}

export default Home
