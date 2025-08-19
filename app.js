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

  // ------------------- Refresh Listed Characters ------------------- //
  const charTilesBox = document.getElementById("character-tiles-box");

  // returns the first child of charTilesBox, if there is no child, it returns null and is then falsey and stops running.
  while (charTilesBox.firstChild) {
    // removes all of the content in the charTilesBox div - this is because we're going to repopulate it with the updated character list.
    charTilesBox.removeChild(charTilesBox.firstChild);
  }

  // iterates through the character list
  for (character of characterList) {
    // Create the div to add ALL the stat names and values in, and give it a class for styling.
    // as there are more characters, there are more divs created
    const newDiv = document.createElement("div");
    newDiv.className = "character-tile";

    //puts the keys and values of the character into arrays saved as 'stats' and 'values' so that we can iterate through it.
    const stats = Object.keys(character);
    const values = Object.values(character);

    for (i = 0; i < stats.length; i++) {
      const statDiv = document.createElement("div");
      statDiv.className = "flex-row";
      const newStatText = document.createElement("p");
      const newValueText = document.createElement("p");

      newStatText.textContent = stats[i];
      newValueText.textContent = values[i];
      statDiv.appendChild(newStatText);
      statDiv.appendChild(newValueText);
      newDiv.appendChild(statDiv);
    }

    charTilesBox.appendChild(newDiv);
  }
}
