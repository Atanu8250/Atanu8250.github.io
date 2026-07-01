import './globals.css'
import Nav from './components/Nav'

export const metadata = {
  title: 'Dev Portfolio',
  description: 'Frontend Developer & UI Engineer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" data-scheme="lime">
      <head>
        <link rel="icon" href="/favicon.webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@300;400;500;600&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

        <meta name="description" content="Atanu Karmakar, Full Stack MERN Developer, crafts innovative, user-friendly web apps. Explore projects and skills to transform your web ideas into reality." />
        <meta name="keywords" content="Full Stack Developer, MERN Developer, Web Development, Innovative Web Apps, User-Friendly Websites, Atanu Karmakar, Custom Web Solutions" />

        <meta property="og:title" content="Atanu Karmakar | Full Stack MERN Developer | Web Solutions" />
        <meta property="og:description" content="Explore expert web development services and innovative web apps by Atanu Karmakar, Full Stack MERN Developer. Discover projects and skills tailored to your needs." />
        <meta property="og:image" content="https://atanu8250.github.io/portfolio-profile-pic.webp" />
        <meta property="og:url" content="https://atanu8250.github.io/" />
        <meta property="og:type" content="website" />


        <meta name="twitter:card" content="https://atanu8250.github.io/portfolio-profile-pic.webp" />
        <meta name="twitter:title" content="Atanu Karmakar - Full Stack MERN Web Developer Portfolio" />
        <meta name="twitter:description" content="Discover innovative web apps and expert web development services by Atanu Karmakar. Transform your ideas into reality with user-friendly solutions." />
        <meta name="twitter:image" content="https://pbs.twimg.com/profile_images/1750824470699560960/_fbCXQ5f_400x400.jpg" />
        <meta name="twitter:creator" content="@Atanu_200" />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Atanu Karmakar" />


        <link rel="apple-touch-icon" href="/favicon.webp" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://www.atanu8250.github.io/"></link>

        <title>Atanu Karmakar | Full Stack MERN Developer | Web Solutions</title>
      </head>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}