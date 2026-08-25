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

> **Dica**: a nuvem Mammotion só permite uma sessão por conta. Crie uma **conta secundária** dedicada ao Jeedom e partilhe os seus robôs com ela a partir da aplicação oficial; caso contrário, a aplicação móvel será desligada sempre que o daemon for iniciado (e vice-versa).

## Parâmetros

| Parâmetro | Descrição |
| --------- | ----------- |
| E-mail | E-mail da conta Mammotion |
| Palavra-passe | Palavra-passe da conta Mammotion |
| Porta interna | Porta de comunicação Jeedom → daemon (padrão: 44090) |
| Cron personalizado | Frequência de atualização forçada (padrão: a cada 15 min) |

# Criação de equipamentos

Os equipamentos são criados **automaticamente**:

- Ao iniciar o serviço, é recuperada a lista de robôs da conta e são criados os equipamentos em falta
- O botão **Sincronizar** na página do plugin força uma nova deteção, atualiza os estados e recupera a **lista de zonas** de corte e a lista de **atividades**.

# Comandos

## Comandos de informação (cortador de relva)

| Comando | Descrição |
| -------- | ----------- |
| Online | Robô ligado à nuvem |
| Bateria | Nível da bateria (%) |
| A carregar | Carregamento em curso |
| Estado | Modo de funcionamento (MODE_WORKING, MODE_CHARGING, ...) |
| Progresso | Progresso da tarefa em curso (%) |
| Área cortada | Área cortada nesta sessão (m²) |
| Tempo restante / decorrido | Estimativa em minutos da tarefa em curso |
| Altura da lâmina | Altura de corte habitual (mm) |
| Lâminas ativas | Rotação das lâminas |
| Detecção de chuva | Sensor de chuva ativo |
| Coordenadas GPS | Posição `latitude,longitude` (em branco enquanto o robô não tiver transmitido a sua referência GNSS, ver FAQ) |
| Orientação | Rumo do robô (°) |
| Sinal Wi-Fi | RSSI Wi-Fi (dBm) |
| Desgaste das lâminas | Tempo de utilização das lâminas (h) |
| Distância total | Distância percorrida desde a entrada em funcionamento (km) |
| Tempo de trabalho total | Tempo de trabalho acumulado (h) |
| Ciclos da bateria | Número de ciclos da bateria |
| Firmware | Versão do firmware |
| Erros | Códigos de erro ativos |
| Ligação | Tipo de ligação do robô (Wi-Fi, 3G/4G, BLE) |
| Último evento | Registo de eventos (início do corte, regresso à base, carregamento, atualização...). Histórico: consulte o histórico do comando para ver o registo completo |
| Última atualização | Data e hora do último dado recebido |

## Comandos de ação (cortador de relva)

| Comando | Descrição |
| -------- | ----------- |
| Atualizar | Forçar uma atualização do estado |
| Iniciar | Iniciar/retomar a tarefa agendada |
| Pausa | Coloca a tarefa em pausa |
| Retomar | Retoma a tarefa em pausa |
| Cancelar a tarefa | Cancela a tarefa em curso |
| Regresso à estação | Envia o robô de volta à sua estação |
| Sair da estação | Faz com que o robô saia da sua estação |
| Ajustar a altura da lâmina | Deslizador 25 → 70 mm (não existe na gama Yuka, tal como no Home Assistant) |
| Ajustar velocidade | Controlo deslizante 20 → 60 cm/s (não disponível na gama Yuka) |
| Cortar uma zona | Inicia o corte da zona selecionada (lista alimentada pela sincronização) |

## Robô de piscina (Spino)

O suporte aos robôs de piscina é mais limitado na v1: informação de estado (ligado, bateria, estado, velocidade) e comandos básicos (iniciar / pausar / cancelar / voltar).

# Perguntas frequentes

**O daemon não arranca**: verifique o e-mail/palavra-passe e, em seguida, consulte o registo `mammotion_daemon`. Em caso de erro nas dependências, reinicie a sua instalação. O arranque pode demorar entre 30 e 60 segundos no Raspberry Pi (carregamento da biblioteca pymammotion).

**O modelo / firmware / zonas não são transmitidos**: o robô tem de estar acessível (o plugin consulta-o e ativa-o, se necessário, durante a sincronização). Clique em *Sincronizar*: as zonas aparecem alguns segundos depois, assim que o mapa for efetivamente recebido do robô.

**O comando «Coordenadas GPS» está vazio**: isto é normal após o reinício do daemon. O robô só transmite a sua referência de geolocalização (base RTK ou GNSS integrado para os modelos com visão/LiDAR) em determinados relatórios, geralmente quando está ativo. O comando é preenchido assim que o robô voltar a estar ativo. O plugin prefere um valor vazio a coordenadas degeneradas (próximas do ponto 0,0 do globo).

**Os dados não são transmitidos em tempo real**: o robô só publica quando está ativo ou quando o seu estado muda. Além disso, o cron força uma atualização periódica.

# Plano de desenvolvimento e suporte

Este plugin irá evoluir ao longo do tempo, de acordo com os vossos pedidos e com as possibilidades das APIs da Mammotion.

> **Dica**
>
> Pode enviar o seu pedido de melhoria criando um «issue» de «melhoria» no [GitHub](https://github.com/Xav-74/mammotion/issues/new).
> Não hesite também em vir trocar ideias sobre este plugin na Comunidade Jeedom!

Em caso de avaria, pode criar diretamente um tópico na Comunidade a partir da página principal do plugin. As informações úteis do Jeedom e do plugin são adicionadas automaticamente. Não hesite também em copiar os registos do Mammotion (modo de depuração) para uma resolução mais rápida!
