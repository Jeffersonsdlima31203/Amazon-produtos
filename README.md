Especificação do modelo

Este arquivo contém um exemplo de teste Cypress escrito em JavaScript (JS) para automatizar interações do navegador. O teste demonstra como fazer login em uma conta da Amazon e pesquisar produtos.

Detalhamento do teste

Visite a página inicial da Amazon: o teste começa visitando a página inicial da Amazon usando cy.visit.
Clique em Link da conta: em seguida, clique no link da conta usando o seletor CSS #nav-link-accountList-nav-line-1.
Insira o e-mail e a senha: o teste insere um endereço de e-mail predefinido (@@@@@@@@@@@@) e uma senha (########) no formulário de login. Observe que essas credenciais são comentadas e devem ser substituídas por informações válidas da conta de teste.
Login: o teste envia o formulário de login clicando no botão de login usando o seletor CSS #signInSubmit.
Pesquisar por "Alexa": Após o login bem-sucedido, o teste interage com a barra de pesquisa removendo primeiro quaisquer atributos de estilo em potencial que possam bloquear a interação usando invoke('removeAttr', 'style'). Em seguida, ele seleciona a categoria de pesquisa (Todas as categorias) e digita "Alexa" na barra de pesquisa usando os métodos cy.get e cy.type. Finalmente, ele envia a pesquisa clicando no botão de pesquisa usando cy.get e .click().
Clicar no primeiro resultado da pesquisa: O teste clica no primeiro resultado da pesquisa usando cy.get e .click().
Limpar barra de pesquisa: O teste limpa a barra de pesquisa selecionando-a primeiro usando cy.get, depois usando .clear() para remover o conteúdo do texto e, finalmente, validando que a barra está vazia usando .should('have.value', '').
Pesquisar por "carrinho" (Carrinho): O teste realiza uma nova pesquisa por "carrinho" (carrinho) seguindo a mesma lógica da pesquisa anterior por "Alexa".
Executando o teste

Para executar este teste, você precisará do Cypress instalado e configurado. Uma vez configurado, você pode executar o teste a partir da linha de comando usando o seguinte comando:

Bash

npx cypress run
Este comando iniciará o Cypress test runner e executará os testes dentro do projeto.

Notas adicionais

Este é um exemplo básico e pode ser estendido para incluir interações e asserções mais complexas.
Lembre-se de substituir as credenciais comentadas por informações de conta de teste válidas antes de executar os testes.
Considere usar variáveis ​​de ambiente para armazenar informações confidenciais, como senhas.
