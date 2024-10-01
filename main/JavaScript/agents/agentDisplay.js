document.addEventListener("DOMContentLoaded", function() {
    const agentContainer = document.querySelector(".defaultAgentImages");
   
    agentData.forEach(agent => {
        // Access rarity information from the agent
        const rarityName = agent.rarity?.name || "Unknown";  // Fallback to "Unknown" if no rarity
        const rarityColor = agent.rarity?.color || "#FFFFFF";  // Fallback to white color if no rarity

        // Create agent element
        const agentElement = document.createElement("div");
        agentElement.className = "weaponimage";
        agentElement.id = agent.id;

        // Agent HTML content
        agentElement.innerHTML = `
            <div class="defaultAgentImages" onclick="hideDefaultAgentImages()">
                <a onclick="showAgentSkins('${agent.id}')">
                    <img src="${agent.image}" width="270px" height="200px" alt="This is a picture of the ${agent.name}" title="${agent.name}">
                    <div class="rarity-box" style="background-color: ${rarityColor};">${rarityName}</div>
                </a>
                <hr class="weaponimagehr">
                <br>
                <p>${agent.name}</p>
            </div>
        `;
        
        // Append agent element to the container
        agentContainer.appendChild(agentElement);
    });
});
