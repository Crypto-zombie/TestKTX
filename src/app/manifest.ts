import { MetadataRoute } from 'next';

const manifest = (): MetadataRoute.Manifest => ({
  name: 'Spore`s Journey',
  short_name: 'Spore`s Journey',
  description: 'Storyteller Website',
  start_url: '/',
  display: 'standalone',
  background_color: '#fff',
  theme_color: '#fff',
  icons: [
    {
      src: '/icons/maskable_icon_x48.png',
      sizes: '48x48',
      type: 'image/png',
      purpose: 'maskable',
    },
    {
      src: '/icons/maskable_icon_x72.png',
      sizes: '72x72',
      type: 'image/png',
      purpose: 'maskable',
    },
    {
      src: '/icons/maskable_icon_x96.png',
      sizes: '96x96',
      type: 'image/png',
      purpose: 'maskable',
    },
    {
      src: '/icons/maskable_icon_x128.png',
      sizes: '128x128',
      type: 'image/png',
      purpose: 'maskable',
    },
    {
      src: '/icons/maskable_icon_x384.png',
      sizes: '384x384',
      type: 'image/png',
      purpose: 'maskable',
    },
    {
      src: '/icons/maskable_icon_x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'maskable',
    },
    {
      src: '/icons/maskable_icon_x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any',
    },
  ],
});

export default manifest;
