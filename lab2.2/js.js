function convertToCamelCase() {
    const inputText = document.getElementById('inputText').value;
    const variables = inputText.split('\n');

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    variables.forEach(variable => {
      const camelCaseVariable = convertVariableToCamelCase(variable);
      const ticks = '✅'.repeat(camelCaseVariable.length);
      outputDiv.innerHTML += `${camelCaseVariable} ${ticks}<br>`;
    });
  }

  function convertVariableToCamelCase(underscoreVariable) {
    const words = underscoreVariable.split('_');
    const camelCaseWords = words.map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1));
    return camelCaseWords.join('');
  }