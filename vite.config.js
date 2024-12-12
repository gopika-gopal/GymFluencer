import { defineConfig } from 'vite';
import rewriteAll from 'vite-plugin-rewrite-all';
import tailwindcss from 'tailwindcss';


// export default defineConfig({
//   plugins: [rewriteAll()],
//   base: '/GymFluencer', 

  export default defineConfig({
    css: {
      postcss: {
        plugins: [tailwindcss()],
      },
    },
});
