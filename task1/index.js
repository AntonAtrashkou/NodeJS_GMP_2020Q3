process.stdin.on("data", (chunk) => {
  const reversedString = chunk.toString().split("").reverse().join("");

  process.stdout.write(reversedString);
});
