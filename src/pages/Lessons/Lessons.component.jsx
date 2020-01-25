import React from "react";

const Lessons = () => (
  // <!-- Main Section -->
  <main class="w3-content w3-container w3-white">
    {/* <!-- Content --> */}
    <h1>Lessons</h1>

    <h2>Preparation:</h2>

    <div>
      <a href="../pages/lessons/stringing-the-instrument.html">
        How to string your instrument
      </a>
      <p>
        Knowing how to string your instrument is an essential skill every
        musician needs to learn. It can be a daunting task for beginners because
        of uncertainty and fear of damaging the instrument. This section covers
        how to string the instrument and the different options available when
        buying strings.
      </p>

      <a href="../pages/lessons/tuning-the-instrument.html">
        How to tune your instrument
      </a>
      <p>
        When playing with other musicians it is vital that your instrument is in
        tune. This section covers how to use a chromatic tuner and the different
        tuning configurations available to the Irish Bouzouki.
      </p>

      <a href="../pages/lessons/how-to-read-tablature.html">
        How to read tablature
      </a>
      <p>
        Tablature is a form of music notation structured towards fretted
        instruments. It is regarded as one of the quickest methods for teaching
        beginners how to start making music. This section covers how to read
        tablature.
      </p>
    </div>

    <h2>Useful Websites:</h2>

    <div>
      <a
        href="https://thesession.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        The Session
      </a>
      <p>The best resource for Irish traditional sheet music.</p>

      <a
        href="http://irish-music.net/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Irish-Music
      </a>
      <p>
        Useful website that provides links to many resources for traditional
        Irish instruments.
      </p>

      <a
        href="http://mandolessons.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Mando Lessons
      </a>
      <p>Mandolin focused website providing high quality video lessons.</p>
    </div>
  </main>
);

export default Lessons;
