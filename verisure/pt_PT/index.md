---
layout: default
title: Plugin Verisure - Documentação
lang: pt_PT
pluginId: verisure
---

# Apresentação

Este plugin do Jeedom permite-lhe interagir com o seu alarme Verisure Europe (Securitas Direct) da mesma forma que a aplicação oficial «My Verisure».
É compatível com três gerações de equipamentos Verisure.

**NOTA: ESTE PLUG-IN NÃO ESTÁ, DE FORMA ALGUMA, ASSOCIADO OU LIGADO ÀS EMPRESAS DO GRUPO SECURITAS DIRECT - VERISURE.**

A utilização deste plugin destina-se a fins estritamente pessoais e privados.
Consequentemente, o desenvolvedor não aprova nem tolera qualquer utilização inadequada e não assume qualquer responsabilidade legal pela funcionalidade ou segurança dos seus alarmes e dispositivos.

> **Dica**
>
> A **versão mínima do Jeedom** necessária para o bom funcionamento do plugin é a **versão 4.4**
> O plugin já é compatível com a **versão 4.6** do Jeedom, bem como com as **versões Debian 12**

# Princípio

Este plugin interage com as APIs da Verisure através da nuvem; por conseguinte, **este plugin requer uma ligação à Internet**.
É também necessário ter uma subscrição dos serviços da Verisure. Com efeito, este plugin só comunica com a central do seu alarme através das infraestruturas na nuvem da Verisure. Não interage diretamente com a central, nem com os dispositivos associados. Se a sua subscrição tiver sido cancelada, este plugin não funcionará.

# Configuração do plugin

Após descarregar o plugin, basta ativá-lo. Se tiver um alarme do tipo 1 ou 3, pode ativar (e desativar) um cron personalizado para atualizar as informações do seu alarme com base no histórico de ações. Não se esqueça de ativar a opção na configuração do seu equipamento.

> **Dica**
>
> Para facilitar um pedido de assistência remota, recomenda-se definir os registos no **modo de depuração**.

![Configuração](../images/Config_verisure.png)

# Adicionar um alarme

A configuração dos equipamentos de alarme está disponível no menu Plugin > Segurança.

![Adicionar alarme](../images/Plugin_verisure.png)

Clique no botão «Adicionar» para criar um novo alarme. Depois de o adicionar, terá:

- **Nome do equipamento**: nome do seu alarme
- **Objeto pai**: indica o objeto pai ao qual o equipamento pertence
- **Categoria**: a categoria do equipamento (segurança em geral, no caso de um alarme)
- **Ativar**: permite ativar o seu equipamento
- **Visível**: torna o seu equipamento visível no painel de controlo
- **Tipo de alarme**: escolha do tipo de alarme (tipo 1 = Sul da Europa (França, Espanha, ...) / tipo 2 = Norte da Europa (Bélgica, Reino Unido, ...) / tipo 3 = nova geração (a partir de 2022))
- **Número de instalação** (alarmes do tipo 1 e 3): indique o seu número de instalação da Verisure. **Atenção! Este número deve ser exatamente igual ao que aparece na sua aplicação My Verisure. Se o seu número de instalação começar por um 0, mas este não constar na aplicação, elimine-o!**
- **Identificação** (alarmes de tipo 1, 2 e 3): indique a sua identificação Verisure que utiliza para iniciar sessão nos sites [https://customers.securitasdirect.fr](https://customers.securitasdirect.fr) ou [https://mypages.verisure.com/](https://mypages.verisure.com)
- **Palavra-passe** (alarmes do tipo 1, 2 e 3): introduza a sua palavra-passe
- **Código do alarme** (alarme tipo 2): indique o código PIN do seu alarme (4 ou 6 dígitos)
- **País** (alarmes do tipo 1 e 3): selecione o país onde o seu alarme está instalado (países suportados atualmente: França, Espanha, Grã-Bretanha, Itália, Portugal). Para os alarmes do tipo 2, a seleção do país é automática (países suportados atualmente: Bélgica, Países Baixos, Alemanha, Grã-Bretanha, Dinamarca, Finlândia, Noruega, Suécia)
- **Opções** (alarmes do tipo 1 e 3): dependendo do tipo do seu alarme, pode selecionar as seguintes opções:
  - **Atualização através do histórico** (alarmes do tipo 1 e 3): permite atualizar os estados do alarme com base no histórico de ações. Não se esqueça de configurar e ativar o cron na configuração do plugin
    - **Alarme de presença exterior** (alarme de tipo 3): assinalar esta opção se tiver detetores exteriores e se o modo exterior estiver ativado no seu alarme
    - **Ativação forçada** (alarme de tipo 3): permite forçar a ativação do alarme, mesmo que uma porta ou janela tenha ficado aberta. Por sua conta e risco!

Em seguida, basta clicar no botão **Autenticação** para obter as informações do seu sistema de alarme. Se tudo correr bem, será apresentada uma tabela com todos os dispositivos instalados na sua casa (ID, nome e tipo).

**Atenção**: recomenda-se vivamente que crie, no seu espaço Verisure, um utilizador dedicado ao Jeedom com direitos de «administrador». O plugin gere a autenticação multifator (MFA) para alarmes do tipo 1. O mesmo se aplica aos alarmes do tipo 2, mas recomenda-se desativar esta opção por enquanto, uma vez que a atualização do token é muito restritiva. Em caso de problema de ligação, o botão **Eliminar Token** permite eliminar os cookies guardados e reiniciar com uma autenticação inicial.

> **Dica**
>
> Não se esqueça de **guardar** as suas informações!
> Ao guardar, serão criados novos comandos no equipamento.

![Equipamento](../images/Eqpt_verisure.png)

# Registo de atividades

Pode consultar o registo de atividades do seu sistema de alarme clicando no botão **Registo de atividades**. Este relatório apresenta os últimos eventos ocorridos na sua central (alertas de intrusão, SOS, ativação/desativação, corte de energia).

![Diário](../images/journal_verisure.png)

# Notificações da Verisure

As API da Verisure não permitem o envio automático e direto de informações e notificações, tais como a ativação/desativação através de um cartão ou de um comando à distância, nem o acionamento do alarme.
Este separador descreve em pormenor como configurar o Jeedom (cenários) para colmatar esta lacuna em:

- as **notificações por e-mail** para ativar/desativar o alarme através do plugin [Mail Listener](https://www.jeedom.com/market/index.php?v=d&p=market&author=Lunarok&&name=maillistener) da Lunarok!
- as **notificações por SMS** para ativar/desativar o alarme através do plugin [SMS](https://www.jeedom.com/market/index.php?v=d&p=market_display&id=16) da Jeedom SAS!

# Comandos

Existem atualmente vários comandos, que são descritos abaixo.

## Informações

- **Estado de ativação**: permite saber o estado de ativação do alarme
  - **0**: desarmada
  - **1**: exército
- **Estado do alarme**: permite saber o estado do alarme
  - **0**: estado normal
  - **1**: alarme acionado
- **Modo de alarme**: permite saber o modo de ativação do alarme
  - **Modo total**: o alarme está ativado no modo total (alarmes do tipo 1, 2 e 3)
  - **Modo noturno**: o alarme está ativado no modo noturno (alarme tipo 1)
  - **Modo diurno**: o alarme está ativado no modo diurno (alarme tipo 1)
  - **Modo exterior**: o alarme está ativado no modo exterior (alarme de tipo 1)
  - **Modo parcial**: o alarme está ativado no modo parcial (alarmes de tipo 2 e 3)
- **Qualidade da rede**: permite estimar a qualidade da rede 3G/4G dos alarmes de tipo 1 e 3 (com base no resultado das últimas 25 solicitações)

**Atenção**: nesta versão, o evento relacionado com o acionamento do alarme ainda não é tido em conta!

## Ação

- **Modo Total**: ativa o alarme no modo total (alarmes de tipo 1, 2 e 3)
- **Modo Noturno**: ativa o alarme no modo noturno (alarme tipo 1)
- **Modo Diurno**: ativa o alarme no modo diurno (alarme tipo 1)
- **Modo Exterior**: ativa o alarme no modo exterior (alarme tipo 1)
- **Modo Parcial**: ativa o alarme no modo parcial (alarmes de tipo 2 e 3)
- **Desativação**: desativa o alarme, independentemente do modo (alarme tipo 1, 2 e 3)
- **Atualizar**: atualiza o estado do alarme (alarmes de tipo 1, 2 e 3)
- **Pedido de imagens**: aciona a captura de uma fotografia a partir de um detetor de movimento compatível e exibe-a no ecrã (alarmes de tipo 1, 2 e 3)

> **Dica**
>
> Quando é solicitada uma imagem, a fotografia é gravada e guardada no diretório **/verisure/data/**. Não se esqueça de esvaziar o diretório de vez em quando!

![Comandos](../images/Command_verisure.png)

## Compatibilidade com o Homebridge

Os comandos foram criados de forma a serem compatíveis de forma nativa com o plugin [Homebridge](https://www.jeedom.com/market/index.php?v=d&p=market&author=Nebz&&name=Homebridge) do Nebz! (Obrigado a ele pela ajuda)

Não é, portanto, necessário efetuar qualquer configuração específica no plugin Homebridge.
No HomeKit, a função de alarme é gerida em 4 modos: «Desativada», «Noite», «À distância» e «Em casa».

![HomeKit](../images/homekit.png)

A correspondência entre os modos é a seguinte:

- **Casa**  --> Modo Dia / Modo Parcial
- **À distância** --> Modo Total
- **Noite**   --> Modo Noturno
- **Desativada** --> Desativação

Os outros modos (Exterior,...) não são suportados pelo HomeKit.

## Dispositivos de alarme do tipo 2

Para os alarmes do tipo 2 (**e apenas do tipo 2!**), o plugin irá criar os comandos associados aos dispositivos do alarme:

- **Tomada inteligente** --> estado / ligado / desligado
- **Sensores compatíveis** --> temperatura / humidade
- **Sensor de abertura**  --> estado (aberto / fechado)

Por predefinição, os comandos não são apresentados no widget. O objetivo é, em seguida, criar um comando virtual para cada sensor. Desta forma, poderá obter as informações relativas à abertura, fecho, temperatura e humidade dos diferentes sensores, bem como controlar remotamente as tomadas Versiure ligadas a partir do Jeedom.

> **Dica**
>
>Atenção: os estados não são atualizados em tempo real (o que, de momento, é impossível devido à Versiure). Terá de atualizar o estado do alarme através de um cenário para os atualizar ou aguardar o cron30. A personalização do cron (5, 10, 15, 30...) será disponibilizada numa fase posterior. **No entanto, tenha cuidado para não enviar demasiadas solicitações aos servidores da Verisure, sob pena de ser colocado na lista negra.**

## Dispositivos de alarme do tipo 3

Para os alarmes do tipo 3 (**e apenas do tipo 3!**), o plugin irá criar os comandos associados aos dispositivos do alarme:

- **Fechadura inteligente** --> estado / abertura / fecho

# Painel de controlo

O plugin inclui um painel de controlo que permite:

- Verificar o estado do alarme (alarmes de tipo 1, 2 e 3)
- Verificar o estado do alarme (alarmes de tipo 1, 2 e 3)
- Conhecer o modo do alarme (alarmes de tipo 1, 2 e 3)
- Conhecer o estado da fechadura conectada (alarme tipo 3)
- Ativar o modo total do alarme (alarmes de tipo 1, 2 e 3)
- Ativar o modo noturno do alarme (alarme tipo 1)
- Ativar o modo diurno do alarme (alarme tipo 1)
- Ativar o modo exterior do alarme (alarme tipo 1)
- Ativar o modo parcial do alarme (alarmes de tipo 2 e 3)
- Desativar o alarme (alarmes do tipo 1, 2 e 3)
- Atualizar o estado do alarme (alarmes de tipo 1, 2 e 3)
- Abrir/fechar a fechadura conectada (alarme tipo 3)
- Solicitar a captura de uma fotografia a partir de um sensor de movimento compatível (alarmes de tipo 1, 2 e 3)
- Mostrar informações de determinados dispositivos, como a temperatura, a humidade ou o estado de abertura (**!!! APENAS alarme do tipo 2 !!!**)
- Mostrar o nível de qualidade da rede 3G/4G do alarme (alarmes de tipo 1 e 3)
  - ícone de 5 barras: nenhuma solicitação com erro nas últimas 25
    - ícone de 4 barras: 1 a 2 pedidos com erro nos últimos 25
    - ícone com 3 barras: entre 3 e 7 pedidos com erro nos últimos 25
    - ícone com 2 barras: entre 8 e 17 pedidos com erro nos últimos 25
    - ícone de 1 barra: entre 18 e 24 pedidos com erro nos últimos 25
    - ícone 0 barras: 25 erros nas últimas 25 solicitações

**Atenção**: por vezes, os comandos podem demorar vários segundos a serem executados (entre 15 e 25 segundos, ou até mais de um minuto no caso de pedidos de fotografias). Isto deve-se à qualidade da ligação 3G ou 4G da central do seu alarme. Por isso, seja paciente!

![Painel de controlo tipo 1](../images/Dashboard_verisure.png)
![Painel de controlo tipo 2](../images/Dashboard_verisure_2.png)
![Painel de controlo tipo 3](../images/Dashboard_verisure_3.png)

# Atualização

## Automático

É criada automaticamente uma tarefa CRON com intervalos de 30 minutos, conforme indicado na configuração do plugin.
**Atenção**: este valor de 30 minutos poderá vir a sofrer alterações em função do feedback e dos pedidos dos utilizadores, bem como do número de pedidos autorizados por hora pela Verisure nos seus servidores!

## Manual

Pode utilizar a qualquer momento o comando **Atualizar** para atualizar o estado do alarme.

# Plano de desenvolvimento e suporte

Este plugin irá evoluir ao longo do tempo, de acordo com os vossos pedidos e com as possibilidades das APIs da Versiure.

> **Dica**
>
>Pode enviar o seu pedido criando um pedido de «melhoria» [GitHub](https://github.com/Xav-74/verisure/issues/new).
>Não hesitem também em participar na discussão sobre este plugin na Comunidade Jeedom!

Em caso de avaria, pode criar diretamente um tópico na Comunidade a partir da página principal do plugin. As informações úteis do Jeedom e do plugin são adicionadas automaticamente. Não hesite também em copiar os registos do Verisure (modo de depuração) para uma resolução mais rápida!

![Comunidade](../images/community.png)
