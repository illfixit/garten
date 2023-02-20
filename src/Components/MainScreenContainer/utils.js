// const getTintedColor = (color, v) => {
//   if (color.length > 6) {
//     color = color.substring(1, color.length);
//   }
//   var rgb = parseInt(color, 16);
//   var r = Math.abs(((rgb >> 16) & 0xff) + v);
//   if (r > 255) r = r - (r - 255);
//   var g = Math.abs(((rgb >> 8) & 0xff) + v);
//   if (g > 255) g = g - (g - 255);
//   var b = Math.abs((rgb & 0xff) + v);
//   if (b > 255) b = b - (b - 255);
//   r = Number(r < 0 || isNaN(r)) ? 0 : (r > 255 ? 255 : r).toString(16);
//   if (r.length == 1) r = "0" + r;
//   g = Number(g < 0 || isNaN(g)) ? 0 : (g > 255 ? 255 : g).toString(16);
//   if (g.length == 1) g = "0" + g;
//   b = Number(b < 0 || isNaN(b)) ? 0 : (b > 255 ? 255 : b).toString(16);
//   if (b.length == 1) b = "0" + b;
//   return "#" + r + g + b;
// };

const hslToHex = (h, s, l) => {
  h = parseFloat(h);
  s = parseFloat(s);
  l = parseFloat(l);
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0"); // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
};

const getColor = (colorName, type) => {
  return getComputedStyle(document.querySelector(":root")).getPropertyValue(
    `--${colorName}${type ? "-" + type : ""}`
  );
};

const setColor = (colorName, type, value) => {
  // console.log(colorName, type, value);
  document
    .querySelector(":root")
    .style.setProperty(`--${colorName}${type ? "-" + type : ""}`, value);
};

export { hslToHex, getColor, setColor };
