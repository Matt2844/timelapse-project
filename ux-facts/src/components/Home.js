import React from 'react'

export default function Home () {

  return (
    <section className="landing-page">
      <video playsInline autoPlay muted loop id="bgvid">
        <source src="../assets/backgroundvalley.mp4" type="video/mp4" />
      </video>
      <header>
        <h1>UX development requires more attention.</h1>
        <h2>Learn key facts that can increase conversion.</h2>
      </header>
      <a href={'/facts'}><button>Start Learning</button></a>
    </section>
  )
}