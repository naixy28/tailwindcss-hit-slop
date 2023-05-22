# TailwindCSS Hit Slop Plugin

Hit slop is used for adding touchable area for any HTML element without changing position and element size, by simply using a positive padding + negative margin trick. However it would conflict with padding and margin properties if the element has its own. A common scenario is to add hit slop to words in a paragraph, which makes it easier to click. [Still not got it](https://css-tricks.com/enhancing-the-clickable-area-size/)

## Installation

You can install the plugin via npm:

```bash
npm install tailwindcss-hit-slop
```

After installing the plugin, you'll need to add it to your TailwindCSS configuration file:

```javascript
// tailwind.config.js
module.exports = {
  plugins: [
    require("tailwindcss-hit-slop"),
    // other plugins...
  ],
  // other configuration...
};
```

## Usage

Use spacing values

```html
<div class="hit-slop-4">clickable content here</div>
```

Use arbitary values

```html
<div class="hit-slop-[10px]">clickable content here</div>
```

## License

The TailwindCSS Hit Slop Plugin is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
