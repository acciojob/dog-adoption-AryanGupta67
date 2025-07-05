// Optional: add hover alert or click tracking
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    console.log("Image link clicked: " + link.href);
  });
});

