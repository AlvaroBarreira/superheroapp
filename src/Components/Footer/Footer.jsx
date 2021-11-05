import React from 'react';
import './Footer.css'

function Footer() {
    return (
<footer className="bg-dark text-center text-white" style={{width: "100%"}}>
  <div className="container p-4">
 
    <section className="mb-4">
      <p>
        A development by Alvaro Joaquin Barreira for <a href="https://campus.alkemy.org/">@Alkemy</a>
      </p>
    </section>

  </div>

  <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2021 Copyright:
    <a className="text-white" href="https://github.com/AlvaroBarreira">GitHub</a>
  </div>
</footer>
    )
}

export default Footer
