// uno.config.ts
import { defineConfig, presetMini, presetIcons } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  presets:[
    presetMini(),
    presetIcons()
  ],
  theme: {
    colors: {
        'brand': {
        'primary': '#8571ff',
        'white': '#FFFFFF',
        'dark': '#1f2937',
      }
    }
  }
})