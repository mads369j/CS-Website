document.addEventListener("DOMContentLoaded", function() {
    const collectionContainer = document.querySelector(".defaultCollectionImages");
    const collectionSkinsContainer = document.querySelector(".defaultCollectionImagesSkins");
   
    collectionData.forEach(collection => {
        // Create collection element
        const collectionElement = document.createElement("div");
        collectionElement.className = "weaponimage";
        collectionElement.id = collection.id;
        collectionElement.innerHTML = `
            <divclass="defaultCollectionImages" onclick="hideDefaultCollectionImages()">
                <a onclick="showCollectionSkins('${collection.id}')">
                    <img src="${collection.img}" width="270px" height="200px" alt="This is a picture of the ${collection.name}" title="${collection.name}">
                </a>
                <hr class="weaponimagehr">
                <br>
                <p>${collection.name}</p>
            </divclass=>
        `;
            collectionContainer.appendChild(collectionElement);
    });
    
    window.showCollectionSkins = function(collectionId) {
        // Hide all collection images
        collectionContainer.style.display = 'none';
        
        // Show only the skins for the selected collection
        collectionSkinsContainer.innerHTML = ''; // Clear previous skins
        const selectedCollection = collectionData.find(collection =>collection.id === collectionId);
        if (selectedCollection && selectedCollection.skins) {
            selectedCollection.skins.forEach(skin => {

                const skinElement = document.createElement("div");
                skinElement.className = "weaponimage";
                skinElement.id = skin.id;
                
                const rarityName = skin.rarity.name;
                const rarityColor = skin.rarity.color;
                
                skinElement.innerHTML = `
                    <a onclick="showCollectionSkins('${skin.id}')">
                        <img src="${skin.image}" width="270px" height="200px" alt="This is a picture of the ${selectedCollection.name} ${skin.name}" title="${selectedCollection.name} ${skin.name}">
                        <div class="rarity-box" style="background-color: ${rarityColor};">${rarityName}</div>
                    </a>
                    <hr class="weaponimagehr">
                    <br>
                    <p>${skin.name}</p>
                `;
                collectionSkinsContainer.appendChild(skinElement);
            });
            collectionSkinsContainer.style.display = 'flex';
        }
    };
    });