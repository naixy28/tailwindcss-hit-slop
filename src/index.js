module.exports = function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      "hit-slop": (value) => ({
        margin: `-${value}`,
        padding: value,
      }),
    },
    {
      values: theme("spacing"),
    }
  );
};
