const editor = document.getElementById("editor");
const saveBtn = document.querySelector(".save-btn");
const logoutBtn = document.querySelector(".logout-btn");

const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "login.html";
}

async function loadEditor() {
  try {
    const res = await fetch("http://localhost:5000/api/editor", {
      headers: {
        Authorization: token
      }
    });

    if (!res.ok) throw new Error();

    const data = await res.json();
    editor.innerHTML = data.content || "";
  } catch {
    alert("Session expired");
    localStorage.removeItem("token");
    window.location.href = "login.html";
  }
}

loadEditor();

saveBtn.addEventListener("click", async () => {
  try {
    const res = await fetch("http://localhost:5000/api/editor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify({ content: editor.innerHTML })
    });

    if (!res.ok) throw new Error();
    alert("Saved");
  } catch {
    alert("Save failed");
  }
});

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.href = "login.html";
});
