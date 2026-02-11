// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',        // Bloqueia endpoints da API
        '/admin/',      // Bloqueia área administrativa
        '/private/',    // Bloqueia páginas privadas
        '/*.json$',     // Bloqueia arquivos JSON
        '/*.js$',       // Bloqueia arquivos JS (opcional)
      ],
    },
    sitemap: 'https://rad-aero.com.br/sitemap.xml',
    host: 'https://rad-aero.com.br',
  }
}