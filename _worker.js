/**
 * Cloudflare Worker for Refukus
 * Handles routing and serves the React app
 */

import { Router } from 'itty-router';

const router = Router();

// Handle all requests
router.all('*', async (request) => {
  try {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // Try to serve the static asset
    let response = await fetch(new Request(url, request));

    // If the asset is not found (404), serve index.html for client-side routing
    if (response.status === 404 && !pathname.includes('.')) {
      response = await fetch(new Request(new URL('/index.html', url), request));
      return new Response(response.body, {
        status: 200,
        headers: {
          ...Object.fromEntries(response.headers),
          'Cache-Control': 'public, max-age=3600',
        },
      });
    }

    // Add caching headers for static assets
    const headers = new Headers(response.headers);
    if (pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|woff|woff2)$/)) {
      headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    }

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 });
  }
});

export default router.handle;
