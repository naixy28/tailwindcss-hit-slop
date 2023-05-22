# TailwindCSS Hip Slop Plugin

The TailwindCSS Hip Slop Plugin is a custom plugin that adds a new `slop` utility class to TailwindCSS. This utility class can be used to add a sloped edge to any HTML element.

## Installation

You can install the plugin via npm:

```bash
npm install tailwindcss-hip-slop
```

After installing the plugin, you'll need to add it to your TailwindCSS configuration file:

```javascript
// tailwind.config.js
module.exports = {
  plugins: [
    require("tailwindcss-hip-slop"),
    // other plugins...
  ],
  // other configuration...
};
```

## Usage

The `slop` utility class can be used to add a sloped edge to any HTML element. Here's an example:

```html
<div class="slop-45deg bg-blue-500 text-white py-4 px-6">
  This div has a 45 degree sloped edge
</div>
```

In this example, the `slop-45deg` class is added to the `div` element to give it a 45 degree sloped edge. The `bg-blue-500` and `text-white` classes are added to set the background color and text color, respectively. The `py-4` and `px-6` classes are added to set the padding on the top/bottom and left/right sides of the element.

## Customization

By default, the plugin adds sloped edges with a thickness of 20px and a slope angle of 45 degrees. You can customize these values by adding them to your TailwindCSS configuration file:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    slop: {
      thickness: {
        1: "1px",
        2: "2px",
        4: "4px",
      },
      slope: {
        15: "15deg",
        30: "30deg",
        60: "60deg",
      },
    },
  },
  variants: {
    slop: ["responsive"],
  },
  plugins: [
    require("tailwindcss-hip-slop"),
    // other plugins...
  ],
  // other configuration...
};
```

In this example, the `slop` object is added to the `theme` configuration to set the allowed thicknesses and slopes for the `slop` utility class. The `variants` configuration is added to enable responsive variants for the `slop` utility class.

You can then use these custom values in your HTML:

```html
<div class="slop-2-60 bg-red-500 text-white py-4 px-6">
  This div has a thick 2px sloped edge with a slope angle of 60 degrees
</div>
```

In this example, the `slop-2-60` class is added to the `div` element to give it a 2px thick sloped edge with a slope angle of 60 degrees. The `bg-red-500` and `text-white` classes are added to set the background color and text color, respectively. The `py-4` and `px-6` classes are added to set the padding on the top/bottom and left/right sides of the element.

## License

The TailwindCSS Hip Slop Plugin is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
