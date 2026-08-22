---
layout: default
title: Plugin HP instantInk - Documentação
lang: pt_PT
pluginId: instantInk
---

# Apresentação

Este plugin permite-lhe obter as informações da sua subscrição do InstantInk e das suas impressoras HP.

> **Dica**
>
> A **versão mínima do Jeedom** necessária para o bom funcionamento do plugin é a **versão 4.4**
> O plugin é compatível com as **versões Debian 11 e 12**


# Instalação

O plugin instala-se como qualquer outro plugin no Jeedom, através do Market.


# Configuração

1. Depois de instalado e ativado, na página de configuração, deve introduzir um token **sessionId**
2. Abra [portal.hpsmart.com](https://portal.hpsmart.com) no seu navegador e inicie sessão
3. Prima **F12** para abrir as DevTools
4. Vá ao separador **Aplicações** (Chrome) ou **Armazenamento** (Firefox)
5. No painel lateral: **Cookies → https://portal.hpsmart.com**
6. Encontre o cookie **shell-session-id** e copie o seu valor na íntegra
7. Cole-o no campo correspondente e clique em **Ligar**
<br/>Este token é válido por 90 dias. O Jeedom avisar-lhe-á quando for necessário renová-lo manualmente
8. Em caso de problemas de ligação, pode eliminar os tokens previamente obtidos através do botão **Eliminar tokens**
9. Preencha os parâmetros opcionais do plugin:
 - Cron personalizado (valor recomendado: 1 hora, no mínimo)
10. Guardar

<br/>![Configuração do InstantInk](../images/config_instantInk.png)<br/>

> **Dica**
>
> Para facilitar um pedido de assistência remota, recomenda-se definir os registos no **modo de depuração**.


# Utilização
1. Inicie o plugin que se encontra na categoria **Dispositivos conectados** do menu **Plugins**
2. Clique no botão **Sincronizar**
3. A sua impressora aparece na lista
4. Clique no ícone da sua impressora e introduza o endereço IP da mesma no campo previsto para o efeito
5. Guardar

<br/>![Equipamento InstantInk](../images/eqt_instantInk.png)<br/>


# Comandos

Existem atualmente vários comandos, que são descritos abaixo.

## Informações

- **Número de páginas previstas**: o número de páginas incluídas no seu pacote
- **Número máximo de páginas a reportar**: o número máximo de páginas reportadas de um período para o outro
- **Preço do plano**: o preço mensal do seu plano
- **Número máximo de páginas adicionais no plano**: o número máximo de páginas autorizadas no modo fora do pacote
- **Período**: o período atual do plano
- **Número de páginas impressas no período**: o número de páginas impressas durante o período
- **Número de páginas impressas no período**: o número de páginas impressas no período
- **Número máximo de páginas reportadas no período**: o número de páginas reportadas nesse período
- **Número de páginas adicionais impressas no período**: o número de páginas impressas fora do pacote durante o período
- **Preço do período**: o preço atual do período
- **Estado do cartucho preto**: o nível atual de tinta do cartucho preto (%)
- **Estado do cartucho de ciano**: o nível atual de tinta do cartucho de ciano (%)
- **Estado do cartucho magenta**: o nível atual de tinta do cartucho magenta (%)
- **Estado do cartucho amarelo**: o nível atual de tinta do cartucho amarelo (%)
- **Última atualização**: a data e a hora da última atualização das informações
- **Histórico**: todas as informações relativas ao plano (páginas impressas e preços) dos últimos 12 meses

> **Dica**
>
>Se não quiser que o histórico seja apresentado no widget, basta desmarcar a caixa **Mostrar** desta opção.

## Ação

- **Atualizar**: atualiza todas as informações relativas à impressora e ao plano
- **Consultar o histórico**: permite consultar o histórico do plano dos últimos 12 meses


# Painel de controlo

O plugin inclui um widget personalizado que permite visualizar todas as informações relativas ao plano e à impressora.

![widget](../images/widget_instantInk.png)

Tem a possibilidade de atualizar as informações (ícone <i class="fas fa-sync" style="width:15px; height:15px"></i>) ou o histórico (ícone <i class="far fa-chart-bar" style="width:15px; height:15px"></i>) diretamente a partir do widget.


# Atualização

## Automático

Conforme indicado na página de configuração do plugin:
- É criada automaticamente uma **tarefa CRON diária**, todas as noites (às 00h00), para atualizar o histórico do plano
- É criada automaticamente uma **tarefa CRON personalizada** para a recolha de informações sobre o plano e a impressora (recomenda-se um intervalo mínimo de 1 hora)

## Manual

Pode utilizar a qualquer momento o comando **Atualizar** ou o comando **Obter histórico** para atualizar as informações relativas ao plano e à impressora.


# Plano de desenvolvimento e suporte

Este plugin irá evoluir ao longo do tempo, de acordo com os vossos pedidos e com as possibilidades das APIs da instantInk.

As próximas versões incluirão as seguintes funcionalidades:
- ...

> **Dica**
>
>Pode enviar o seu pedido de melhoria criando um «issue» de «melhoria» no [GitHub](https://github.com/Xav-74/instantInk/issues/new).
>Não hesitem também em participar na discussão sobre este plugin na Comunidade Jeedom!

Em caso de avaria, pode criar diretamente um tópico na Comunidade a partir da página principal do plugin. As informações úteis do Jeedom e do plugin são adicionadas automaticamente. Não hesite também em copiar os registos do instantInk (modo de depuração) para uma resolução mais rápida!

![Comunidade](../images/community.png)
