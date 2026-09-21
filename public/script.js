const form = document.getElementById("aiForm");
const promptInput = document.getElementById("prompt");
const result = document.getElementById("result");
const errorMessage = document.getElementById("errorMessage");
const generateBtn = document.getElementById("generateBtn");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const prompt = promptInput.value.trim();

    // Clear previous error
    errorMessage.textContent = "";

    // Check empty prompt
    if (!prompt) {
        errorMessage.textContent = "Please enter a prompt first.";
        promptInput.focus();
        return;
    }

    // Loading state
    generateBtn.disabled = true;
    generateBtn.querySelector("span:first-child").textContent = "Generating...";
    status.textContent = "Thinking...";

    result.innerHTML = `
        <p class="placeholder">
            AI is generating your response...
        </p>
    `;

    try {

        const response = await fetch("/api/generate", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                prompt: prompt
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Something went wrong.");
        }

        // Show AI response
        result.textContent = data.result;

        status.textContent = "Completed";

    } catch (error) {

        result.innerHTML = `
            <p class="placeholder">
                Unable to generate response.
            </p>
        `;

        errorMessage.textContent = error.message;

        status.textContent = "Error";

    } finally {

        generateBtn.disabled = false;

        generateBtn.querySelector("span:first-child").textContent = "Generate";

    }

});