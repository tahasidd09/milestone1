document.addEventListener("DOMContentLoaded", () => {
    const toggleSkillsButton = document.getElementById("toggle-skills") as HTMLButtonElement;
    const skillsList = document.getElementById("skills-list") as HTMLUListElement;

    toggleSkillsButton.addEventListener("click", () => {
        skillsList.style.display = skillsList.style.display === "block" ? "none" : "block";
    });
});
