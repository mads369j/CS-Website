document.addEventListener("DOMContentLoaded", function() {
    const patternContainer = document.querySelector(".defaultPatternImages");
    const patternSkinsContainer = document.querySelector(".defaultPatternImagesSkins");

    patternData.forEach(pattern => {
        // Create weapon element for each pattern
        const patternElement = document.createElement("div");
        patternElement.className = "patternimage";
        patternElement.id = pattern.id;
        patternElement.innerHTML = `
            <divclass="defaultPatternImages" onclick="hideDefaultPatternImages()">
                <a onclick="showPatternSkins('${pattern.id}')">
                    <img src="${pattern.img}" width="270px" height="200px" alt="This is a picture of the ${pattern.name}" title="${pattern.name}">
                </a>
                <hr class="patternimagehr">
                <br>
                <p>${pattern.name}</p>
            </divclass=>
        `;
        patternContainer.appendChild(patternElement);
    });

    window.showPatternSkins = function(patternId) {
        // Hide the weapon patterns and clear the skin container
        patternContainer.style.display = 'none';
        patternSkinsContainer.innerHTML = ''; // Clear previous skins
        
        // Find the selected pattern by ID
        const selectedPattern = patternData.find(pattern => pattern.id === patternId);

        // Check if the selected pattern has skins
        if (selectedPattern && selectedPattern.skins) {
            // Loop through the skins and display them
            selectedPattern.skins.forEach(skin => {
                const skinElement = document.createElement("div");
                skinElement.className = "patternimage";
                skinElement.id = skin.id;
                skinElement.innerHTML = `
                    <a onclick="showPatternDetails('${skin.id}', '${skin.patternDetailsUrl}')">
                        <img src="${skin.img}" width="270px" height="200px" alt="This is a picture of the ${selectedPattern.name} ${skin.name}" title="${selectedPattern.name} ${skin.name}">
                        <div class="rarity-box">${skin.rarity}</div>
                    </a>
                    <hr class="patternimagehr">
                    <br>
                    <p>${skin.name}</p>
                `;
                patternSkinsContainer.appendChild(skinElement);
            });

            // Display the skins container
            patternSkinsContainer.style.display = 'flex';
        }
    };

    window.showPatternDetails = function(skinId, patternDetailsUrl) {
        if (patternDetailsUrl) {
            window.location.href = patternDetailsUrl; // Redirect to the pattern details page
        } else {
            alert("Pattern details not available for this skin.");
        }
    };
});