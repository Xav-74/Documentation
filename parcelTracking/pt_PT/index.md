---
layout: default
title: Plugin de Acompanhamento de Encomendas - Documentação
lang: pt_PT
pluginId: parcelTracking
---

# Apresentação

Este plugin permite-lhe acompanhar as suas encomendas provenientes das principais transportadoras francesas e internacionais (La Poste, Mondial Relay, Relais Colis, Colis Privé, Aliexpress, Shein, Amazon, eBay, FedEx, UPS, ...) através da API do [**17Track**](https://www.17track.net/en).

O plano gratuito do 17Track permite o acompanhamento de 100 encomendas por mês (a contagem reinicia no primeiro dia do mês). Se desejar, pode optar por um plano superior pago.

> **Dica**
>
> A **versão mínima do Jeedom** necessária para o bom funcionamento do plugin é a **versão 4.4**
> O plugin já é compatível com a **versão 4.6** do Jeedom, bem como com as **versões Debian 12**

# Instalação

O plugin instala-se como qualquer outro plugin no Jeedom, através do Market.

# Configuração

1. Depois de instalado e ativado, na página de configuração, deve indicar a chave API 17Track
2. Visite o site [www.17track.net](https://user.17track.net/en)
3. Clique em **Sem conta** e crie uma conta de **Desenvolvedor**, ou inicie sessão com os seus dados de acesso existentes
4. Quando estiver no seu painel de controlo, aceda ao menu **Configurações** e copie a chave API
5. Cole a chave API na configuração do plugin

![Painel de controlo 17Track](../images/dashboard_17Track.png)

6. Preencha também a secção Webhook da seguinte forma: («jeedom-host» é o endereço externo do seu dispositivo)

![Webhook 17Track](../images/webhook_17Track.png)

7. Pode consultar o número de acompanhamentos restantes na sua quota clicando no botão **Verificar**
8. Selecione o idioma a utilizar nas respostas da API. Atenção: se escolher um idioma diferente do padrão, serão descontados 2 registos por encomenda da sua quota
9. Pode atualizar a lista de transportadoras e a lista de parâmetros adicionais. Por predefinição, estas serão atualizadas diariamente durante a execução da tarefa cron diária.
10. Preencha os parâmetros opcionais do plugin:
    - Objeto pai por predefinição ==> Adição automática do objeto especificado aquando da criação de novos acompanhamentos
    - Período de retenção do equipamento após a entrega (em dias) ==> Eliminação automática do equipamento X dias após a sua entrega
11. Defina as configurações de notificações se pretender ser informado sempre que houver uma alteração de estado
    - As duas primeiras linhas dizem respeito ao envio de notificações através de um comando de ação do tipo mensagem

Opção: pode personalizar a mensagem utilizando as seguintes etiquetas: `#name#`, `#trackingId#`, `#carrier#`, `#status#`, `#lastState#`, `#date#` e `#time#`

Pode testar o bom funcionamento enviando uma notificação de teste
    - As duas últimas linhas dizem respeito ao envio de notificações através de um cenário

Pode utilizar as seguintes etiquetas: `#name#`, `#object#`, `#trackingId#`, `#carrier#`, `#status#`, `#lastState#`, `#date#` e `#time#`

Funcionam da seguinte forma: `nomedotag=#name#`, em que «nomedotag» é o nome da etiqueta e «#name#» é o valor da etiqueta
12. Defina os parâmetros do widget. Existem 3 opções possíveis:
    - Sem widgets (receberá apenas as notificações)
    - Um widget por encomenda
    - Um widget único para todas as encomendas
13. Guardar

![Configuração do parcelTracking](../images/config_parcelTracking.png)

> **Dica**
>
> Para facilitar um pedido de assistência remota, recomenda-se definir os registos no **modo de depuração**.

# Utilização

1. Inicie o plugin que se encontra na categoria **Organização** do menu **Plugins**
2. Adicionar um pacote, tal como qualquer outro equipamento no Jeedom
3. Indique o nome da sua encomenda e, em seguida, introduza o número de rastreio, a transportadora (se a conhecer) e o parâmetro adicional necessário para o rastreio, caso seja obrigatório. A lista de transportadoras provém diretamente do 17Track e será atualizada regularmente. Se for necessário um parâmetro adicional para a transportadora selecionada, aparecerá uma nota a alertá-lo para isso e a indicar-lhe o formato esperado
4. Guarde e, em seguida, inicie um **registo** para que a encomenda seja registada pelas APIs da 17Track e certifique-se de que esta ação foi bem-sucedida (notificação verde)

> **Dica**
>
> Se, após o primeiro registo **bem-sucedido**, precisar de alterar a transportadora e/ou o parâmetro adicional, pode fazê-lo através dos botões de atualização. Atenção: por vezes, após a atualização de um dos dois parâmetros, as informações de acompanhamento podem não ser atualizadas imediatamente. Aguarde 1 a 2 horas. Passado esse tempo, é preferível eliminar a encomenda e recriá-la **com todos os parâmetros atualizados logo no primeiro registo**

![Configuração do parcelTracking](../images/eqt_parcelTracking.png)

# Comandos

Existem atualmente vários comandos, que são descritos abaixo.

> **Dica**
>
> Se o comando devolver «indisponível», significa que a informação correspondente não consta do acompanhamento da encomenda.

## Informações

| Comando | Descrição |
|---|---|
| **Estado da encomenda** | 5 estados possíveis (entregue, em trânsito, a recolher, chegou, arquivado) |
| **Transportadora** | nome da transportadora principal |
| **Origem** | país de origem da encomenda |
| **Destino** | país de destino da encomenda |
| **Estados** | lista de todas as etapas da entrega |
| **Último evento** | data e hora do último evento enviado pela transportadora. Utilizado para o envio de notificações |
| **Último estado** | último estado enviado pela transportadora. Utilizado para o envio de notificações |
| **Data de entrega** | disponível apenas quando a encomenda tiver sido entregue |

## Ação

| Comando | Descrição |
|---|---|
| **Atualizar** | atualiza todas as informações da encomenda |

# Painel de controlo

O plugin inclui 2 widgets personalizados que permitem visualizar todas as informações relativas às encomendas. Pode escolher entre:

- um widget por encomenda

![widget](../images/widget.png)

- um widget único para todas as encomendas

![widget global](../images/widget_global.png)

- os widgets acima em paralelo

Em qualquer caso, tem a possibilidade de eliminar os pacotes (ícone <img src="../images/trash-solid.svg" class="inline-img" width="15" height="15">) ou de adicionar um novo (ícone <img src="../images/plus-solid.svg" class="inline-img" width="15" height="15">) diretamente a partir dos widgets.

> **Atenção**
>
> O widget único está visível na página de equipamentos do plugin. Não deve, em caso algum, ser eliminado. Se for eliminado por engano, basta forçar uma reinstalação do plugin (sem perda de dados) e este será recriado.

# Atualização

## Automático

Conforme indicado na página de configuração do plugin:

- É criada automaticamente uma tarefa CRON diariamente (às 00h00) para a eliminação automática das encomendas

No que diz respeito à atualização dos envios, o webhook recupera em tempo real as informações transmitidas pela 17Track.

## Manual

Pode utilizar a qualquer momento o comando **Atualizar** para atualizar as informações das encomendas.

# Plano de desenvolvimento e suporte

Este plugin irá evoluir ao longo do tempo, de acordo com os vossos pedidos e com as possibilidades das APIs da 17Track.

> **Dica**
>
> Pode enviar o seu pedido de melhoria criando uma issue de «melhoria» no [GitHub](https://github.com/Xav-74/parcelTracking/issues/new).
> Não hesite também em vir trocar ideias sobre este plugin na Comunidade Jeedom!

Em caso de avaria, pode criar diretamente um tópico na Comunidade a partir da página principal do plugin. As informações úteis do Jeedom e do plugin são adicionadas automaticamente. Não hesite também em copiar os registos do parcelTracking (modo de depuração) para uma resolução mais rápida!

![Comunidade](../images/community.png)
