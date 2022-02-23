# BUSCA DE TEXTO EM STRINGS LONGAS

## A necessidade desses códigos surgiu ao consumir algumas APIs.

> Status do Projeto: Concluido :heavy_check_mark:

***

### O Problema:

Durante uma rotina de busca utilizando APIs do Confluence (plataforma da Atlassian) foi vista a necessidade de buscar o trecho onde a palavra buscada estava inserida na página. Como a API do confluence retorna em uma de suas funcionalidades o HTML da página buscada surgiu a necessidade desse código.

***

### A solução:

Foram criados dois códigos que estão contidos neste repositório, sendo um deles usando o recurso IndexOF() do javascript e o outro utilizando expressões regulares (REGEX).

***

- **IndexOF:** Foi identificado que essa função do Javascript faz a distinção de letras maiúsculas e minúsculas, o que dificulta a busca e se faz necessário utilizar o ToLowerCase() para forçar a procura em minúsculas. Este foi o motivo de o código com REGEX existir, uma vez que é boa prática exibir o texto como ele realmente é, sem alterações nas letras maiúsculas.

- **Expressões Regulares:** Se utilizando deste recurso é possível ignorar letras maiúsculas e minúsculas. Desta forma podemos procurar, pegar e exibir o texto como ele realmente é, sem alterações de suas propriedades.

***

### Por que colocar no GIT?

Os códigos estão aqui para, principalmente, fins didáticos. Uma vez que é interessante estudarmos e testarmos ambas as soluções, assim podemos identificar e resolver os principais problemas de cada uma delas.
Acredito que este código seja de grande proveito para quem deseja aprender mais sobre busca de palavras dentro de Strings longas, ou até mesmo otimizar a busca dentro de alguma página HTML de seu site.

Os códigos estão organizados da forma mais simples possível, e em sua atual versão **basta serem executados para funcionar**. Utilize os console.log() existentes para ver os resultados e fazer testes.

***

#### São códigos genéricos
Os códigos estão formatados para funcionar em qualquer editor de texto, devem ser adaptados de acordo com a necessidade caso sejam jogados dentro de outros sistemas.
Apenas fazem a busca de alguma palavra dentro de uma string longa.

Estude-os e procure entender a complexididade por trás do problema.