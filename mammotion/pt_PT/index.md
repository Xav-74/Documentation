---
layout: default
title: Plugin Mammotion - Documentação
lang: pt_PT
pluginId: mammotion
---

# Apresentação

Este plugin permite controlar os seus robôs cortadores de relva (Luba, Yuka) e robôs para piscinas (Spino) da marca **Mammotion** a partir do Jeedom, tal como a aplicação oficial.

A transmissão de dados é **automática e em tempo real**: o daemon do plugin mantém uma ligação permanente à nuvem Mammotion (MQTT) e envia cada alteração de estado para o Jeedom.

> **Aviso**
>
>Este plugin baseia-se na biblioteca não oficial [PyMammotion](https://github.com/mikey0000/PyMammotion). As condições de utilização da Mammotion proíbem o acesso não oficial à sua API: utilize este plugin por sua conta e risco (risco teórico de bloqueio da conta).

<!-- -->

> **Dica**
>
> A **versão mínima do Jeedom** necessária para o bom funcionamento do plugin é a **versão 4.4**
> O plugin já é compatível com a **versão 4.6** do Jeedom, bem como com as **versões Debian 12**

# Configuração do plugin

Após descarregar o plugin:

- Ative o plugin
- Inicie a instalação das dependências (⚠ a primeira instalação pode demorar algum tempo: compilação do Python 3.13 através do pyenv)
- Introduza o **e-mail** e a **palavra-passe** da sua conta Mammotion
- Inicie o serviço

> **Dica**
>
>A nuvem Mammotion só permite uma sessão por conta. Crie uma **conta secundária** dedicada ao Jeedom e partilhe os seus robôs com ela a partir da aplicação oficial; caso contrário, a aplicação móvel será desligada sempre que o daemon for iniciado (e vice-versa).

## Parâmetros

| Parâmetro | Descrição |
| --------- | ----------- |
| E-mail | E-mail da conta Mammotion |
| Palavra-passe | Palavra-passe da conta Mammotion |
| Porta interna | Porta de comunicação Jeedom → daemon (padrão: 44090) |
| Cron personalizado | Frequência de atualização forçada (padrão: a cada 15 min) |

# Criação de equipamentos

A deteção dos robôs é feita através do botão **Sincronizar** na página do plugin. Este consulta a conta Mammotion, cria os equipamentos em falta, atualiza o seu modelo e firmware e, em seguida, recupera a lista de zonas de corte e a lista de atividades.

Execute-o após o primeiro arranque do daemon e, posteriormente, sempre que adicionar um robô à sua conta ou alterar as definições dos seus robôs, zonas e/ou atividades a partir da aplicação.

O tipo de robô é detetado automaticamente (cortador de relva ou piscina) e determina os comandos criados, bem como o widget apresentado no painel de controlo. As zonas e as atividades aplicam-se apenas aos cortadores de relva.

A página do equipamento e o respetivo widget apresentam uma fotografia correspondente ao modelo detetado. Quando o modelo exato não estiver disponível, é utilizada a fotografia do modelo mais semelhante.

# Comandos — Cortador de relva (Luba, Yuka)

## Comandos de informação

| Comando | Descrição |
| -------- | ----------- |
| Online | Robô ligado à nuvem |
| Bateria | Nível da bateria (%) |
| Estado | Modo de funcionamento (corte, carregamento, regresso à estação, ...) |
| Velocidade | Velocidade de deslocação atual (m/s) |
| A carregar | Carregamento em curso |
| Na base | Robô colocado na sua estação |
| Progresso | Progresso da tarefa em curso (%) |
| Área cortada | Área cortada nesta sessão (m²) |
| Área atual | Nome da área que está a ser cortada |
| Tempo restante / decorrido | Estimativa em minutos da tarefa em curso |
| Altura da lâmina | Altura de corte habitual (mm) |
| Lâminas ativas | Rotação das lâminas |
| Detecção de chuva | Sensor de chuva ativo |
| Coordenadas GPS | Posição `latitude,longitude` (em branco enquanto o robô não tiver transmitido a sua referência GNSS, ver FAQ) |
| Orientação | Rumo do robô (°) |
| Sinal Wi-Fi / Bluetooth / celular | RSSI de cada ligação (dBm) |
| Tempo de utilização das lâminas | Desgaste acumulado das lâminas (h) |
| Limite de desgaste das lâminas | Limite a partir do qual se recomenda a substituição (h) |
| Tempo restante de utilização das lâminas | Diferença entre o limiar e o desgaste acumulado (h) |
| Distância total | Distância percorrida desde a entrada em funcionamento (km) |
| Tempo de trabalho total | Tempo de trabalho acumulado (h) |
| Ciclos da bateria | Número de ciclos da bateria |
| Firmware | Versão do firmware |
| Erros | Códigos de erro ativos, acompanhados da respetiva descrição |
| Ligação | Tipo de ligação do robô (Wi-Fi, 3G/4G, BLE) |
| Último evento | Registo de eventos (início do corte, regresso à base, carregamento, atualização...). Histórico: consulte o histórico do comando para ver o registo completo |
| Valor predefinido da altura da lâmina / Valor predefinido da velocidade | Último valor definido através dos controles deslizantes, reutilizado no início de um corte |
| Modo de hibernação | Modo de hibernação ativo ou não (ver *Modo de hibernação*) |
| Última atualização | Data e hora do último dado recebido |

## Comandos de ação

| Comando | Descrição |
| -------- | ----------- |
| Atualizar | Forçar uma atualização do estado |
| Iniciar | Iniciar/retomar a tarefa agendada |
| Pausa | Coloca a tarefa em pausa |
| Retomar | Retoma a tarefa em pausa |
| Cancelar a tarefa | Cancela a tarefa em curso |
| Regresso à estação | Envia o robô de volta à sua estação |
| Sair da estação | Faz com que o robô saia da sua estação |
| Ajustar a altura da lâmina | Controlador deslizante em mm, por predefinição 30 → 70 (não disponível na gama Yuka) |
| Ajustar velocidade | Controlo deslizante em m/s, por predefinição 0,2 → 0,6 (não disponível na gama Yuka) |
| Cortar uma zona | Inicia o corte da zona selecionada (lista alimentada pela sincronização) |
| Iniciar uma atividade | Inicia uma atividade programada na aplicação (lista alimentada pela sincronização) |
| Ativar/desativar o modo de hibernação | Ativa o modo de hibernação ou desativa-o, caso já esteja ativo (ver *Modo de hibernação*) |

> **Dica**
>
> Os limites dos dois controles deslizantes são ajustados automaticamente com base nas capacidades indicadas pelo seu modelo: os valores acima são apenas valores de reserva.

É fornecido um widget específico para o robô cortador de relva, com os 7 (Yuka) ou 9 (Luba) botões de comando e as principais informações.

# Comandos — Robô de piscina (Spino)

## Comandos de informação

| Comando | Descrição |
| -------- | ----------- |
| Online | Robô ligado à nuvem |
| Bateria | Nível da bateria (%) |
| A carregar | Carregamento em curso |
| Estado | Estado do robô: Em modo de espera, Em preparação, À espera de ser colocado na água, Limpeza em curso, Regresso à estação, A carregar, Partida da estação, Recall em curso |
| Modo de limpeza | Modo ativo: Completo, Chão, Paredes, Eco — ou *Nenhum* quando o robô não está a limpar (ver FAQ) |
| Sinal Wi-Fi | RSSI Wi-Fi (dBm) |
| Sinal Bluetooth | RSSI Bluetooth (dBm) |
| Ligado ao Wi-Fi | Ligação Wi-Fi estabelecida |
| Firmware | Versão do firmware |
| Modo de hibernação | Modo de hibernação ativo ou não (ver *Modo de hibernação*) |
| Última atualização | Data e hora do último dado recebido |

## Comandos de ação

| Comando | Descrição |
| -------- | ----------- |
| Atualizar | Forçar uma atualização do estado |
| Limpeza completa | Limpeza do fundo e das paredes (modo **ALL** da aplicação) |
| Limpeza do chão | Apenas o fundo do tanque (**FLOOR**) |
| Limpeza das paredes | Apenas paredes (**WALL**) |
| Limpeza ecológica | Varredura da superfície (**ECO**) |
| Parar e regressar à base de recarga | Interrompe a limpeza em curso e envia o robô de volta à base de recarga (botão *recarga* da aplicação) |
| Ativar/desativar o modo de hibernação | Ativa o modo de hibernação ou desativa-o, caso já esteja ativo (ver *Modo de hibernação*) |

> **Dica**
>
> Os 4 modos correspondem exatamente aos 4 botões do ecrã inicial da aplicação Mammotion. Existem outros modos no protocolo (linha de água, personalizado), mas ainda não estão disponíveis.

É fornecido um widget específico para o robô de piscina, com os 5 botões de comando e as informações principais.

# Modo de hibernação

Quando um robô é guardado durante a época, é desligado. O **modo de hibernação** coloca este equipamento em modo de suspensão.

Quando está ativo:

- o **cron ignora o equipamento**: já não há pedidos de atualização;
- os **comandos de controlo estão bloqueados** e apresentam uma mensagem explícita, mesmo quando acionados a partir de um cenário;
- o **equipamento permanece visível** no painel de controlo e mantém o seu histórico;
- O **demónio continua a funcionar** normalmente para os seus outros robôs.

Esta configuração é **específica para cada equipamento**: pode preparar o seu robô de piscina para o inverno sem interromper a limpeza.

## Como ativá-la

Três opções, todas elas relacionadas com a mesma configuração:

- a caixa **Modo de hibernação**, secção *Hibernação* da página do equipamento;
- o **ícone na barra de título do widget**: um floco de neve quando o robô está no modo padrão, um sol quando está em modo de hibernação. Um clique alterna entre os dois modos;
- o comando de ação **Ativar o modo de hibernação**, que pode ser utilizado num cenário.

O comando de informação **Hibernação** indica o estado atual. Este comando é registado no histórico, o que permite consultar as datas de início e fim da hibernação.

> **Dica**
>
> O comando *Alternar o modo de hibernação* inverte o estado: quando chamado duas vezes, volta ao ponto de partida. Num cenário que automatiza a ativação do modo de hibernação, teste primeiro o comando info **Hibernação** e só chame o comando de alternância se o seu valor for 0.

No final do período de hibernação, os dados são atualizados assim que o cron for executado novamente, ou imediatamente se clicar em *Atualizar*.

# Perguntas frequentes

**O daemon não arranca**: verifique o e-mail/palavra-passe e, em seguida, consulte o registo `mammotion_daemon`. Em caso de erro nas dependências, reinicie a sua instalação. O arranque pode demorar entre 30 e 60 segundos no Raspberry Pi (carregamento da biblioteca pymammotion).

**O modelo / firmware / zonas não são transmitidos**: o robô tem de estar acessível (o plugin consulta-o e ativa-o, se necessário, durante a sincronização). Clique em *Sincronizar*: as zonas aparecem alguns segundos depois, assim que o mapa for efetivamente recebido do robô.

**O comando «Coordenadas GPS» está vazio**: isto é normal após o reinício do daemon. O robô só transmite a sua referência de geolocalização (base RTK ou GNSS integrado para os modelos com visão/LiDAR) em determinados relatórios, geralmente quando está ativo. O comando é preenchido assim que o robô voltar a estar ativo. O plugin prefere um valor vazio a coordenadas degeneradas (próximas do ponto 0,0 do globo).

**Os dados não são transmitidos em tempo real**: o robô só publica quando está ativo ou quando o seu estado muda. Além disso, o cron força uma atualização periódica.

**O meu robô já não se atualiza e os seus botões não respondem**: verifique o ícone na barra de título do widget. Um sol indica que o equipamento está em **modo de hibernação**: o cron ignora-o e os seus comandos estão bloqueados. Basta clicar no ícone para o colocar novamente no modo normal.

**Spino: o Modo de limpeza indica «Nenhum»**: este é o comportamento normal em repouso. Um Spino em repouso não indica nenhum modo ativo nas suas mensagens de estado. Consulte o comando **Estado** para saber se o robô está a funcionar.

**Spino: por que razão não existe um botão «Pausa»?**: o protocolo do robô não o prevê. Para interromper um ciclo, utilize a opção *Parar e regressar à base de carregamento*.

# Plano de desenvolvimento e suporte

Este plugin irá evoluir ao longo do tempo, de acordo com os vossos pedidos e com as possibilidades das APIs da Mammotion.

> **Dica**
>
> Pode enviar o seu pedido de melhoria criando um «issue» de «melhoria» no [GitHub](https://github.com/Xav-74/mammotion/issues/new).
> Não hesite também em vir trocar ideias sobre este plugin na Comunidade Jeedom!

Em caso de avaria, pode criar diretamente um tópico na Comunidade a partir da página principal do plugin. As informações úteis do Jeedom e do plugin são adicionadas automaticamente. Não hesite também em copiar os registos do Mammotion (modo de depuração) para uma resolução mais rápida!
