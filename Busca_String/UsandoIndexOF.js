String.prototype.stripHTML = function() {return this.replace(/<.*?>/g, '');} //Usado para remover Tags HTML de uma string

function TratarTexto(texto, busca){
    texto = texto.toLowerCase();
    busca = busca.toLowerCase();
    if(texto.indexOf(busca) > -1){
        ocorrencias = (texto.split(busca).length - 1); //Conta quantas vezes a palavra aparece na string
        posicao = texto.indexOf(busca); //Pega a posicao da primeira ocorrencia da palavra na string
        trecho = texto.substring(posicao-30, posicao+100); //Retorna o trecho da primeira ocorrencia da palavra

        resultado = {
            ocorrencias: ocorrencias,
            posicao: posicao,
            trecho: "..."+trecho+"..."
        };

        return resultado

    } else{
        console.log("Texto não encontrado");
        return false
    }
}


body = "<h1>texto de teste</h1>";
string = '<p><span class="mt-first-letter">S</span>egue abaixo uma função simples e eficaz para remover as tags HTML de uma string usando javascript.</p><p>Esse tipo de função é importante para “limpar” texto que não precisam de tags, evitando, inclusive, injeção de código malícioso.</p><p>Utilizei uma solução elegante que é adicionando no objeto String a função <i>stripHTML</i> alterando a estrutura do objeto. </p><p>Desta forma é possível considerar a função como parte do objeto String. Esta é uma solução um pouco mais complexa, mas é a mais  “limpa” em termos de organização de código.</p><p>A chamada da função é feita utilizando a própria variável, veja o código:</p><p></p><!-- Crayon Syntax Highlighter v_2.7.2_beta --><div id="crayon-6215aab70ce17205943360" class="crayon-syntax crayon-theme-monokai crayon-font-monaco crayon-os-pc print-yes notranslate" data-settings=" minimize scroll-mouseover" style="margin-top: 10px; margin-bottom: 10px; font-size: 12px !important; line-height: 15px !important; height: auto;"><div class="crayon-toolbar" data-settings=" mouseover overlay hide delay" style="font-size: 12px !important; height: 18px !important; line-height: 18px !important; margin-top: -18px; display: none; position: absolute; z-index: 2;"><span class="crayon-title"></span><div class="crayon-tools" style="font-size: 12px !important;height: 18px !important; line-height: 18px !important;"><div class="crayon-button crayon-nums-button crayon-pressed" title="Alternar números de linha"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-plain-button crayon-pressed" title="Exibir código simples"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-wrap-button" title="Alternar quebras de linha"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-expand-button" title="Expand Code" style="display: none;"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-copy-button" title="Copy"><div class="crayon-button-icon"></div></div><div class="crayon-button crayon-popup-button" title="Abrir código em nova janela"><div class="crayon-button-icon"></div></div></div></div>'
string = string.stripHTML(); //Remove Tags HTML da String
palavra = "String";

tentativa = TratarTexto(string, palavra);
console.log(tentativa);