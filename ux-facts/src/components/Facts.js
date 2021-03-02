import React from 'react'
import HomeIcon from '@material-ui/icons/Home';

export default function Facts () {

  return (
    <div>
      <a href={"/"}>
        <button className="home-button">
          <HomeIcon />
        </button>
      </a>
      <div className="boxes">
        <div className="left-box why">Why is the user experience important?</div>
        <div className="right-box list">
          <ul>
            <li>UX keeps your audience front and centre.</li>
            <li>UX helps you get to the top of search results</li>
            <li>UX converts. It's funnelling without funnelling.</li>
            <li>UX builds a solid framework for your content.</li>
          </ul>
        </div>
      </div>
      <div className="boxes">
        <div className="left-box image" style={{
          backgroundImage: `url("/images/money-tree.jpg")`
        }}>
        </div>
        <div className="right-box roi">
          <p>Reseach shows that, on average, every <span>$1</span> invested in UX brings <span>$100</span> in return.</p>
        </div>
      </div>
      <div className="boxes">
        <div className="left-box top-companies">
          <p>The top companies leading in user experience outperformed the S&P index by <span>35%</span>.</p>
        </div>
        <div className="right-box image" style={{
          backgroundImage: `url("/images/graph.jpg")`
        }}></div>
      </div>
      <div className="boxes">
        <div className="left-box image cart" style={{
          backgroundImage: `url("/images/cart.jpg")`
        }}></div>
        <div className="right-box study">
          <p>A 2016 design study of 408 different companies found that the <span>more</span> a company invested
          in and focused on design, the <span>more sales</span> they saw.</p>
        </div>
      </div>
      <div className="boxes">
        <div className="left-box carousel">
          <p>It is clear that developers need to think of the user when coding.
          Writing the code for a carousel is pointless if no one is going to use it.
        </p>
        </div>
        <div className="right-box image" style={{
          backgroundImage: `url("/images/money-toilet.jpg")`
        }}></div>
      </div>
      <div className="boxes">
        <div className="left-box image" style={{
          backgroundImage: `url("/images/money-fire.jpg")`
        }}></div>
        <div className="right-box click-through-rate">
          <p>The highest click-through-rate of a homepage carousel was <span>0.64%</span>,
          a measly <span>32</span> clicks out of almost 5,000 visits.</p>
        </div>
      </div>
    </div>
  )
}