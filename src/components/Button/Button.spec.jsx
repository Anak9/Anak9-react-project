const { render, screen } = require("@testing-library/react");
import { Button } from '.'; 

// describe - cria uma agrupamento de testes
// o primeiro param é a descriçao do agrupamento de testes. Aqui eu coloquei '<Button />' para indicar que sao
// testes relacionados ao componente Button
describe('<Button />', () => {

    // 'it()' e 'test()' sao a mesma coisa
    it('should render the button with the text "qualquer coisa"', () => {
        
        // essa 'render()' é uma func da testing-library - renderiza o elemento no ambiente de teste
        render(<Button text='qualquer coisa'/>);

        // captura (pega) na tela (screen) o elemento que tem como 'role' um button e que tem um texto = 'qualquer coisa'
        const button = screen.getByRole('button', {name: 'qualquer coisa'});

        // isso é uma asserção - esse é o teste mesmo - espero que a variavel button esteja no documento
        expect(button).toBeInTheDocument();

        // espero que ocorra 1 asserção no teste - isso é mais usado em testes com func assincronas, para ter certeza
        // que as asserçoes realmente foram realizadas
        expect.assertions(1);
    });
    


});