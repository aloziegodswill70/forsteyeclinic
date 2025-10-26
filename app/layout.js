import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Forst Eye Clinic — 3D Experience',
  description: 'Interactive 3D tour and booking for Forst Eye Clinic',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-forstYellow min-h-screen flex flex-col">
        {/* Logo Header Section */}
        <header className="bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-300 py-3 shadow-md flex justify-center">
          <div className="flex items-center gap-3">
            <img
              src="/images/feclogo1.png"
              alt="Forst Eye Clinic Logo"
              className="w-14 h-14 rounded-full shadow-sm"
            />
            <h1 className="text-white font-extrabold text-xl tracking-wide drop-shadow-md">
              Forst Eye Clinic
            </h1>
          </div>
        </header>

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="container mx-auto px-4 py-6 flex-grow">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  )
}
