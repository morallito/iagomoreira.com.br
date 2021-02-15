import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Welcome to Iago's website! </title>
      </Head>

      <main>
        <h1 className="title">
          Welcome to Iago's website!!
        </h1>

        <p className="description">
            This is my provisory website! <br></br>
            Come back in some weeks to see the final result!<br></br>
            Want to get in touch with me? <a href="mailto:iagohenrique20@gmail.com">Send me an e-mail!</a>
        </p>

        <div className="grid">
          <a href="https://www.linkedin.com/in/iagohmorais/" className="card">
          <img id="ctl00_002" src="http://www.pngall.com/wp-content/uploads/2016/07/Linkedin-Download-PNG.png" style={{width:'50px',float : 'left', paddingRight : '5px'}}/> 
            <h3>Linkedin</h3>
            <p>Be part of my network and stay on top of my projects!</p>
          </a>

          <a href="https://github.com/morallito" className="card">
          <img id="ctl00_002" src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" style={{width:'50px',float : 'left', paddingRight : '5px'}}/> 
            <h3>Github</h3>
            <p>See all my personal projects in Github!</p>
          </a>

          <a
            href="https://twitter.com/IagoMoMorais"
            className="card"
          >
            <img id="ctl00_002" src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1.png" style={{width:'50px',float : 'left', paddingRight : '5px'}}/>
            <h3>Twitter</h3>
            <p>Follow me on twitter!</p>
          </a>

          <a
            href="https://www.instagram.com/iagohmoreira/"
            className="card"
          >
            <img id="ctl00_002" src="https://w7.pngwing.com/pngs/722/1011/png-transparent-logo-icon-instagram-logo-instagram-logo-purple-violet-text.png" style={{width:'40px',float : 'left', paddingRight : '5px'}}/>
            <h3>Instagram</h3>
            <p>
            Follow me on instagram!
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
            Developed by Morallito&#174; under MIT license.&#169;
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        p {
            font-size: 1rem;
            margin: 20px;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
        .description a{
            color: #0070f3;
            text-decoration: none;
        }
        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
