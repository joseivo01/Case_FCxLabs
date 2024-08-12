# README.md

## Projeto de Testes Automatizados com Cypress

Este projeto tem como objetivo a automação de testes end-to-end utilizando o framework **Cypress**. A seguir, você encontrará instruções detalhadas para configurar o ambiente de desenvolvimento, instalar as dependências necessárias, e executar os testes.

---

## Índice

1. [Pré-requisitos](#pré-requisitos)
2. [Clonando o Repositório](#clonando-o-repositório)
3. [Instalação das Dependências](#instalação-das-dependências)
4. [Configuração do Cypress](#configuração-do-cypress)
5. [Execução dos Testes](#execução-dos-testes)
6. [Estrutura do Projeto](#estrutura-do-projeto)
7. [Boas Práticas](#boas-práticas)
8. [Contribuindo](#contribuindo)
9. [Licença](#licença)

---

## Pré-requisitos

Antes de começar, certifique-se de que o ambiente de desenvolvimento esteja preparado com as seguintes ferramentas instaladas:

- **Node.js** (versão LTS recomendada): Necessário para executar JavaScript no ambiente de servidor e gerenciar as dependências do projeto.
- **npm**: Gerenciador de pacotes do Node.js, usado para instalar as dependências do projeto. O npm já vem instalado com o Node.js.

## Clonando o Repositório

Para obter uma cópia local do código-fonte, execute o seguinte comando no terminal:

```bash
git clone https://github.com/joseivo01/Case_FCxLabs.git
```

Navegue até o diretório do projeto clonado:

```bash
cd FC_X_LABS
```

## Instalação das Dependências

Com o repositório clonado localmente, instale todas as dependências necessárias:

```bash
npm install
```

Este comando irá baixar e instalar todas as bibliotecas listadas no arquivo `package.json`, incluindo o **Cypress**, que é a principal ferramenta de automação utilizada neste projeto.

## Configuração do Cypress

O Cypress já vem pré-configurado para rodar testes de forma eficiente. O arquivo de configuração (`cypress.config.js`) inclui definições importantes como:

- **Base URL:** Configura a URL base da aplicação que será testada, facilitando a escrita dos testes sem a necessidade de repetir a URL completa.
- **Retries:** Define quantas vezes o Cypress deve tentar rodar um teste em caso de falha, aumentando a confiabilidade dos testes.
- **Tempo de Espera Padrão:** Configura o tempo máximo que o Cypress deve esperar por um comando antes de considerá-lo falho.

Essas configurações foram ajustadas para garantir que o ambiente de testes esteja otimizado para as necessidades do projeto.

## Execução dos Testes

Existem duas formas principais de executar os testes:

### 1. **Modo Headless**

Este modo executa os testes sem abrir uma interface gráfica, o que é ideal para integração contínua ou execução automatizada:

```bash
npm run cypress:run
```

### 2. **Modo Interativo**

Este modo abre a interface gráfica do Cypress Test Runner, permitindo que você observe os testes sendo executados em tempo real:

```bash
npm run cypress:open
```

## Estrutura do Projeto

O projeto está organizado de forma a seguir boas práticas de automação, facilitando a manutenção e escalabilidade dos testes. A estrutura de diretórios é a seguinte:

- **pages/**: Contém classes que representam as páginas do site, seguindo o padrão Page Object Model (POM). Isso torna os testes mais reutilizáveis e fáceis de manter.
  
- **support/**: Inclui utilitários e custom commands do Cypress, que ajudam a simplificar a escrita dos testes.

- **e2e/**: Diretório principal onde os testes end-to-end estão localizados. Aqui estão os cenários de teste que simulam o comportamento real do usuário.

## Boas Práticas

- **Modularização**: Mantenha o código dos testes modularizado utilizando classes e métodos que podem ser reutilizados em diferentes cenários de teste.
- **Nomenclatura Clara**: Use nomes claros e descritivos para as variáveis, funções e classes, facilitando a compreensão do código.
- **Validações**: Adicione validações em pontos críticos do fluxo para garantir que as funcionalidades estejam funcionando conforme o esperado.

## Contribuindo

Se você deseja contribuir para este projeto, siga os passos abaixo:

1. Fork este repositório.
2. Crie uma nova branch (`git checkout -b feature/nova-feature`).
3. Faça suas alterações e commite (`git commit -am 'Adiciona nova feature'`).
4. Faça push para a branch criada (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto é licenciado sob os termos da [MIT License](LICENSE).
