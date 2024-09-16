document.addEventListener("DOMContentLoaded", function() {
    const crateContainer = document.querySelector(".defaultCrateImages");
    const crateSkinsContainer = document.querySelector(".defaultCrateImagesSkins");

    // Loop through each crate and display them
    crateData.forEach(crate => {
        // Create crate element
        const crateElement = document.createElement("div");
        crateElement.className = "crateimage";
        crateElement.id = crate.id;
        crateElement.innerHTML = `
            <divclass="defaultCrateImages" onclick="hideDefaultCrateImages()">
                <a onclick="showCrateSkins('${crate.id}')">
                    <img src="${crate.img}" width="270px" height="200px" alt="This is a picture of the ${crate.name}" title="${crate.name}">
                </a>
                <hr class="crateimagehr">
                <br>
                <p>${crate.name}</p>
            </divclass=>
        `;
        crateContainer.appendChild(crateElement);
    });

    // Show crate skins for the selected crate
    window.showCrateSkins = function(crateId) {
        // Hide all crate images
        crateContainer.style.display = 'none';
        
        // Show only the skins for the selected crate
        crateSkinsContainer.innerHTML = ''; // Clear previous skins
        const selectedCrate = crateData.find(crate => crate.id === crateId);
        if (selectedCrate && selectedCrate.skins) {
            selectedCrate.skins.forEach(skin => {
                // Create a skin element for each skin
                const skinElement = document.createElement("div");
                skinElement.className = "crateimage";
                skinElement.id = skin.id;

                // Extract rarity details
                const rarityName = skin.rarity.name;
                const rarityColor = skin.rarity.color;

                // Create the skin's HTML template
                skinElement.innerHTML = `
                    <a onclick="showCrateSkins('${skin.id}')">
                        <img src="${skin.image}" width="270px" height="200px" alt="This is a picture of the ${selectedCrate.name} ${skin.name}" title="${selectedCrate.name} ${skin.name}">
                        <div class="rarity-box" style="background-color: ${rarityColor};">${rarityName}</div>
                    </a>
                    <hr class="crateimagehr">
                    <br>
                    <p>${skin.name}</p>
                `;
                crateSkinsContainer.appendChild(skinElement);
            });

            // Display the crate skins container
            crateSkinsContainer.style.display = 'flex';
        }
    };
});