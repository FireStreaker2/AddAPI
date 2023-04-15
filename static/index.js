const input = document.getElementById("input");
const output = document.getElementById("output");

output.textContent = "fetch(\"http://addapi.firestreaker2.gq/add?x=1&y=1\", {\n" +
    "  method: \"GET\",\n" +
    "  headers: {\n" +
    "    \"Content-Type\": \"application/json\"\n" +
    "  }\n" +
    "})\n" +
    "  .then(response => response.json())\n" +
    "  .then(data => console.log(data))\n" +
    "  .catch(error => console.error(error));";

input.addEventListener("change", () => {
    var language = input.value;
    output.textContent = "";

    switch (language) {
        case "javascript":
            output.textContent = "fetch(\"http://addapi.firestreaker2.gq/add?x=1&y=1\", {\n" +
                "  method: \"GET\",\n" +
                "  headers: {\n" +
                "    \"Content-Type\": \"application/json\"\n" +
                "  }\n" +
                "})\n" +
                "  .then(response => response.json())\n" +
                "  .then(data => console.log(data))\n" +
                "  .catch(error => console.error(error));";
            break;

        case "python":
            output.textContent = "import requests\n\n" +
                "response = requests.get(\"http://addapi.firestreaker2.gq/add?x=1&y=1\")\n" +
                "if response.status_code == 200:\n" +
                "  data = response.json()\n" +
                "  print(data)\n" +
                "else:\n" +
                "  print(\"Error: {}\".format(response.status_code))";
            break;

        case "curl":
            output.textContent = "curl -X GET \"http://addapi.firestreaker2.gq/add?x=1&y=1\"";
            break;

        default:
            output.textContent = "No example available for selected language.";
            break;
  }
});