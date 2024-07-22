const cancelBtn = document.getElementById("cancelBtn");
cancelBtn.addEventListener("mouseover", () => {
  // Generate random positions for the button
  cancelBtn.style.width = "100px";

  cancelBtn.style.zIndex = "4";
  cancelBtn.style.backgroundColor = "red";
  cancelBtn.style.color = "white";
  const x = Math.random() * 200 - 100; // Move within a range of -100px to +100px on the x-axis
  const y = Math.random() * 200 - 100; // Move within a range of -100px to +100px on the y-axis

  // Apply the transformation
  cancelBtn.style.transform = `translate(${x}px, ${y}px)`;
});
