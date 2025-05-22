// Example: Theme icon logic
function getThemeIcon(isLight) {
  return isLight ? "🌞" : "🌙";
}

test("getThemeIcon returns correct icon", () => {
  expect(getThemeIcon(true)).toBe("🌞");
  expect(getThemeIcon(false)).toBe("🌙");
});

// Example: Carousel index logic
function getNextSlideIndex(current, total) {
  return (current + 1) % total;
}

test("getNextSlideIndex cycles correctly", () => {
  expect(getNextSlideIndex(0, 6)).toBe(1);
  expect(getNextSlideIndex(5, 6)).toBe(0);
});
