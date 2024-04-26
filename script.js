document.addEventListener("DOMContentLoaded", function() {
    const output = document.getElementById("output");
    const jsonInput = document.getElementById("jsonInput");
    const mockapiBaseUrl = "https://662abf39d3f63c12f458970b.mockapi.io/example";

    function updateOutput(content) {
        output.innerHTML += "<pre>" + JSON.stringify(content, null, 2) + "</pre>";
    }

    async function postData() {
        const json = jsonInput.value;
        const response = await fetch(`${mockapiBaseUrl}/usuario`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: json
        });
        const data = await response.json();
        updateOutput(data);
    }

    async function putData() {
        const json = jsonInput.value;
        const response = await fetch(`${mockapiBaseUrl}/usuario/66`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: json
        });
        const data = await response.json();
        updateOutput(data);
    }

    async function deleteData() {
        const response = await fetch(`${mockapiBaseUrl}/usuario/66`, {
            method: "DELETE"
        });
        if (response.ok) {
            updateOutput("DELETE successful");
        } else {
            updateOutput("DELETE failed");
        }
    }

    async function getAllData() {
        const promise1 = fetch(`${mockapiBaseUrl}/usuario/1`);
        const promise2 = fetch(`${mockapiBaseUrl}/usuario/2`);

        const responses = await Promise.all([promise1, promise2]);
        const data = await Promise.all(responses.map(response => response.json()));
        updateOutput(data);
    }

    window.postData = postData;
    window.putData = putData;
    window.deleteData = deleteData;
    window.getAllData = getAllData;
});
