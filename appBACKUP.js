const characterList = [];

function saveStats() {
  const nameInput = document.getElementById("name");
  const strengthInput = document.getElementById("strength");
  const dexterityInput = document.getElementById("dexterity");
  const constitutionInput = document.getElementById("constitution");
  const intelligenceInput = document.getElementById("intelligence");
  const wisdomInput = document.getElementById("wisdom");

  const newCharacter = {
    name: nameInput.value,
    strength: strengthInput.value,
    dexterity: dexterityInput.value,
    constitution: constitutionInput.value,
    intelligence: intelligenceInput.value,
    wisdom: wisdomInput.value,
  };

  characterList.push(newCharacter);
  console.log(characterList);
  const charCount = document.getElementById("character-count");
  charCount.textContent = `Character Saved! You have ${characterList.length} characters saved.`;

  nameInput.value = null;
  strengthInput.value = null;
  dexterityInput.value = null;
  constitutionInput.value = null;
  intelligenceInput.value = null;
  wisdomInput.value = null;

  // -------------------
  const charTilesBox = document.getElementById("character-tiles-box");

  while (charTilesBox.firstChild) {
    charTilesBox.removeChild(charTilesBox.firstChild);
  }

  for (character of characterList) {
    const newDiv = document.createElement("div");
    newDiv.className = "character-tile";
    const pName = document.createElement("p");
    pName.textContent = `Name: ${character.name}`;
    newDiv.appendChild(pName);

    const pStrength = document.createElement("p");
    pStrength.textContent = `Str: ${character.strength}`;
    newDiv.appendChild(pStrength);

    const pDexterity = document.createElement("p");
    pDexterity.textContent = `Dex: ${character.dexterity}`;
    newDiv.appendChild(pDexterity);

    const pConstitution = document.createElement("p");
    pConstitution.textContent = `Con: ${character.constitution}`;
    newDiv.appendChild(pConstitution);

    const pIntelligence = document.createElement("p");
    pIntelligence.textContent = `Int: ${character.intelligence}`;
    newDiv.appendChild(pIntelligence);

    const pWisdom = document.createElement("p");
    pWisdom.textContent = `Wis: ${character.wisdom}`;
    newDiv.appendChild(pWisdom);
    charTilesBox.appendChild(newDiv);
  }
}

// function pushCharacters() {
//   const charTilesBox = document.getElementById("character-tiles-box");

//   while (charTilesBox.firstChild) {
//     charTilesBox.removeChild(charTilesBox.firstChild);
//   }

//   for (character of characterList) {
//     const newDiv = document.createElement("div");
//     newDiv.className = "character-tile";
//     newDiv.class;
//     const pName = document.createElement("p");
//     pName.textContent = `Name: ${character.name}`;
//     newDiv.appendChild(pName);

//     const pStrength = document.createElement("p");
//     pStrength.textContent = `Str: ${character.strength}`;
//     newDiv.appendChild(pStrength);

//     const pDexterity = document.createElement("p");
//     pDexterity.textContent = `Dex: ${character.dexterity}`;
//     newDiv.appendChild(pDexterity);

//     const pConstitution = document.createElement("p");
//     pConstitution.textContent = `Con: ${character.constitution}`;
//     newDiv.appendChild(pConstitution);

//     const pIntelligence = document.createElement("p");
//     pIntelligence.textContent = `Int: ${character.intelligence}`;
//     newDiv.appendChild(pIntelligence);

//     const pWisdom = document.createElement("p");
//     pWisdom.textContent = `Wis: ${character.wisdom}`;
//     newDiv.appendChild(pWisdom);
//     charTilesBox.appendChild(newDiv);
//   }
// }
