import Head from 'next/head'

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
)

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
)

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
)

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Head>
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="true" />
        <title>Gianluca Bargelli - Software Developer</title>
        <meta name="description" content="Co-founder and CTO at Callbell, loves building and scaling distributed web applications" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="keywords" content="callbell, whatsapp, facebook messenger, ruby on rails, react, elixir, golang" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gianlucabargelli.dev"/>
        <meta property="og:title" content="Gianluca Bargelli - Software Developer" />
        <meta property="og:description" content="Co-founder and CTO at Callbell, loves building and scaling distributed web applications" />
        <meta property="og:image" content="https://gianlucabargelli.dev/android-chrome-384x384.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gianlucabargelli.dev" />
        <meta property="twitter:title" content="Gianluca Bargelli - Software Developer" />
        <meta property="twitter:description" content="Co-founder and CTO at Callbell, loves building and scaling distributed web applications" />
        <meta property="twitter:image" content="https://gianlucabargelli.dev/android-chrome-384x384.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Source+Sans+Pro&display=swap" rel="stylesheet" />
      </Head>

      <main className="container px-10 py-4 mx-auto h-screen w-full flex flex-col items-center justify-center">
        <div className="font-serif text-4xl text-gray-800 dark:text-white font-bold mb-6">Hi, I'm Gianluca 👋</div>
        <div className="font-sans w-full lg:w-1/2 text-2xl text-gray-600 dark:text-white">
          <p>I'm a Software Developer based in Paris, France and I'm passionate about full-stack development in Ruby on Rails, Elixir and Golang.</p>
          <p className="mt-6">I'm currently co-founder and CTO of <a href="https://callbell.eu" target="_blank" rel="noopener" className="hover:underline text-blue-400 dark:text-orange-400">Callbell</a>, a shared collaborative inbox for Facebook Messenger and WhatsApp.</p>
        </div>
        <div className="mt-10 flex flew-row align-center items-center">
          <div className="mr-3"><a href="https://github.com/proudlygeek" target="_blank" rel="noopener" aria-label="Visit GitHub" className="hover:text-blue-400 dark:hover:text-orange-400 transition-colors duration-300"><GithubIcon /></a></div>
          <div className="mr-3"><a href="https://www.linkedin.com/in/gianlucabargelli/" target="_blank" rel="noopener" aria-label="Visit LinkedIn" className="hover:text-blue-400 dark:hover:text-orange-400 transition-colors duration-300"><LinkedInIcon /></a></div>
          <div><a href="mailto:g.bargelli@gmail.com" target="_blank" rel="noopener" aria-label="Send Email" className="hover:text-blue-400 dark:hover:text-orange-400 transition-colors duration-300"><EmailIcon /></a></div>
        </div>
      </main>
    </div>
  )
}
