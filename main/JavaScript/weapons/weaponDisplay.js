document.addEventListener("DOMContentLoaded", function() {
const weaponContainer = document.querySelector(".defaultWeaponImages");
const weaponSkinsContainer = document.querySelector(".defaultWeaponImagesSkins");

weaponData.forEach(weapon => {
    // Create weapon element
    const weaponElement = document.createElement("div");
    weaponElement.className = "weaponimage";
    weaponElement.id = weapon.id;
    weaponElement.innerHTML = `
        <divclass="defaultWeaponImages" onclick="hideDefaultWeaponImages()">
            <a onclick="showWeaponSkins('${weapon.id}')">
                <img src="${weapon.img}" width="270px" height="200px" alt="This is a picture of the ${weapon.name}" title="${weapon.name}">
            </a>
            <hr class="weaponimagehr">
            <br>
            <p>${weapon.name}</p>
        </divclass=>
    `;
    weaponContainer.appendChild(weaponElement);
});

window.showWeaponSkins = function(weaponId) {
    // Hide all weapon images
    weaponContainer.style.display = 'none';
    
    // Show only the skins for the selected weapon
    weaponSkinsContainer.innerHTML = ''; // Clear previous skins
    const selectedWeapon = weaponData.find(weapon => weapon.id === weaponId);
    if (selectedWeapon && selectedWeapon.skins) {
        selectedWeapon.skins.forEach(skin => {
            // const rarityClass = skin.rarity.toLowerCase().replace('', '');
            const skinElement = document.createElement("div");
            skinElement.className = "weaponimage";
            skinElement.id = skin.id;
            skinElement.innerHTML = `
                <a onclick="showWeaponSkins('${skin.id}')">
                    <img src="${skin.img}" width="270px" height="200px" alt="This is a picture of the ${selectedWeapon.name} ${skin.name}" title="${selectedWeapon.name} ${skin.name}">
                    <div class="rarity-box">${skin.rarity}</div>
                </a>
                <hr class="weaponimagehr">
                <br>
                <p>${skin.name}</p>
            `;
            weaponSkinsContainer.appendChild(skinElement);
        });
        weaponSkinsContainer.style.display = 'flex';
        
    }
};
});