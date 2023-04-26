const input = document.getElementById("input");
const output = document.getElementById("output");

output.innerHTML = "<img class='img' src='javascript.png' />";

input.addEventListener("change", () => {
    var language = input.value;
    output.textContent = "";

    switch (language) {
        case "javascript":
            output.innerHTML = "<img class='img' src='javascript.png' />";
            break;

        case "python":
            output.innerHTML = "<img class='img' src='python.png' />";
            break;

        case "curl":
            output.innerHTML = "<img class='img' src='terminal.png' />";
            break;

        default:
            output.textContent = "No example available for selected language.";
            break;
  }
});