'use client';

import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header / Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg shadow-blue-200">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  CANAL-BTP
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              <a href="#accueil" className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium">
                Accueil
              </a>
              <a href="#professionnels" className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium">
                Professionnels
              </a>
              <a href="#particuliers" className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium">
                Particuliers
              </a>
              <a href="#fonctionnalites" className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium">
                Fonctionnalités
              </a>
              <button className="ml-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300">
                S'inscrire
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none p-2 hover:bg-blue-50 rounded-lg transition-all duration-200"
              >
                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-2">
                <a href="#accueil" className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 py-3 px-4 rounded-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Accueil
                </a>
                <a href="#professionnels" className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 py-3 px-4 rounded-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Professionnels
                </a>
                <a href="#particuliers" className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 py-3 px-4 rounded-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Particuliers
                </a>
                <a href="#fonctionnalites" className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 py-3 px-4 rounded-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Fonctionnalités
                </a>
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold shadow-lg shadow-blue-200 text-center mt-2">
                  S'inscrire
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="pt-32 md:pt-40 pb-20 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-block">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
                  La plateforme de confiance
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                Trouvez le
                <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent mt-2">
                  professionnel BTP
                </span>
                <span className="block mt-2">de confiance</span>
              </h2>

              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                La plateforme qui met en relation particuliers et professionnels du bâtiment de manière simple, fiable et sécurisée.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <button className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-xl shadow-blue-200 hover:shadow-2xl hover:shadow-blue-300 hover:scale-105 transform">
                  <span className="flex items-center justify-center">
                    Trouver un professionnel
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
                <button className="bg-white text-blue-600 border-2 border-blue-200 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 transform">
                  Je suis un pro
                </button>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600 mt-1">Professionnels</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">1,200+</div>
                  <div className="text-sm text-gray-600 mt-1">Projets réalisés</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600 mt-1">Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-48 h-48 md:w-64 md:h-64 text-white opacity-20" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/50 to-transparent">
                  <div className="flex items-center space-x-4 text-white">
                    <div className="flex -space-x-3">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white flex items-center justify-center text-sm font-semibold">👷</div>
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white flex items-center justify-center text-sm font-semibold">🏗️</div>
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white flex items-center justify-center text-sm font-semibold">🔨</div>
                    </div>
                    <div>
                      <div className="font-semibold">Artisans vérifiés</div>
                      <div className="text-sm text-white/80">Tous nos professionnels sont certifiés</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Professionals Section */}
      <section id="professionnels" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100 mb-6">
              Pour les professionnels
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Vous êtes professionnel du BTP ?
            </h2>
            <p className="text-xl text-gray-600">
              Gagnez en visibilité et trouvez de nouveaux clients grâce à notre plateforme
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="group bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-200 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-200">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Visibilité accrue</h3>
              <p className="text-gray-600 leading-relaxed">
                Créez votre profil professionnel et soyez visible auprès de milliers de particuliers à la recherche de services.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-200 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-200">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Nouveaux clients</h3>
              <p className="text-gray-600 leading-relaxed">
                Recevez des demandes de devis qualifiées et développez votre portefeuille clients.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-200 hover:-translate-y-2 sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-200">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Profil vérifié</h3>
              <p className="text-gray-600 leading-relaxed">
                Présentez vos réalisations, certifications et avis clients pour renforcer votre crédibilité.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-xl shadow-blue-200 hover:shadow-2xl hover:shadow-blue-300 hover:scale-105 transform">
              Créer mon profil professionnel
            </button>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="particuliers" className="py-20 md:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100 mb-6">
              Pour les particuliers
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Vous avez un projet de travaux ?
            </h2>
            <p className="text-xl text-gray-600">
              Trouvez facilement une entreprise de confiance pour réaliser vos travaux
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Décrivez votre projet</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Expliquez vos besoins en quelques clics : type de travaux, budget, délais.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Consultez les profils</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Parcourez les professionnels disponibles, leurs réalisations et les avis clients.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Contactez et comparez</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Échangez directement avec les professionnels et comparez plusieurs devis.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Réalisez vos travaux</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Choisissez le professionnel qui correspond le mieux à vos besoins et lancez votre projet.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-xl shadow-blue-200 hover:shadow-2xl hover:shadow-blue-300 hover:scale-105 transform">
              Déposer mon projet
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="fonctionnalites" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100 mb-6">
              Nos garanties
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Une plateforme de confiance
            </h2>
            <p className="text-xl text-gray-600">
              Toutes les fonctionnalités pour garantir des échanges fiables et transparents
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-xl shadow-blue-200 group-hover:shadow-2xl group-hover:shadow-blue-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Vérification</h3>
              <p className="text-gray-600">
                Entreprises vérifiées et certifications contrôlées
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-xl shadow-blue-200 group-hover:shadow-2xl group-hover:shadow-blue-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Avis clients</h3>
              <p className="text-gray-600">
                Système d'avis authentiques avec droit de réponse
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-xl shadow-blue-200 group-hover:shadow-2xl group-hover:shadow-blue-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Messagerie</h3>
              <p className="text-gray-600">
                Communication sécurisée entre clients et professionnels
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-xl shadow-blue-200 group-hover:shadow-2xl group-hover:shadow-blue-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Portfolio</h3>
              <p className="text-gray-600">
                Galerie de réalisations pour chaque professionnel
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djhoLTh2LThoOHptLTh2OEgyMHYtOGg4em04IDBoOHY4aC04di04em04IDhoOHY4aC04di04em0tOC04djhoLTh2LThoOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Prêt à démarrer ?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Rejoignez CANAL-BTP dès aujourd'hui et découvrez une nouvelle façon de connecter professionnels et particuliers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-2xl hover:shadow-3xl hover:scale-105 transform">
              Je suis un particulier
            </button>
            <button className="bg-blue-900 text-white border-2 border-white/30 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-blue-800 hover:border-white/50 transition-all duration-200 shadow-xl hover:scale-105 transform">
              Je suis un professionnel
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">CANAL-BTP</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                La plateforme de confiance pour vos projets de construction et rénovation.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Navigation</h4>
              <ul className="space-y-3">
                <li><a href="#accueil" className="text-gray-400 hover:text-white transition-colors">Accueil</a></li>
                <li><a href="#professionnels" className="text-gray-400 hover:text-white transition-colors">Professionnels</a></li>
                <li><a href="#particuliers" className="text-gray-400 hover:text-white transition-colors">Particuliers</a></li>
                <li><a href="#fonctionnalites" className="text-gray-400 hover:text-white transition-colors">Fonctionnalités</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Légal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mentions légales</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Conditions d'utilisation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Politique de confidentialité</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">CGU</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <ul className="space-y-3">
                <li className="text-gray-400">Email: contact@canal-btp.fr</li>
                <li className="text-gray-400">Tél: 01 23 45 67 89</li>
                <li className="text-gray-400">Du lundi au vendredi</li>
                <li className="text-gray-400">9h - 18h</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              &copy; 2025 CANAL-BTP. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
