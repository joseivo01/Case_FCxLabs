function generate_string(base) {
    const baseString = base;
    const randomNumber = Math.floor(1000 + Math.random() * 9000468);
    return `${randomNumber}${baseString}`;
}
function get_number_from_element(selector) {
  return cy.get(selector)
      .invoke('text')  // Obtém o texto do elemento
      .then(text => {
          const numberString = text.replace(/[^\d.,]/g, '');
          
          // Substitui a vírgula por ponto para garantir a formatação correta para parseFloat
          const normalizedNumberString = numberString.replace(',', '.');
          return parseFloat(normalizedNumberString);
      });
}

  module.exports = {
    generate_string,
  };