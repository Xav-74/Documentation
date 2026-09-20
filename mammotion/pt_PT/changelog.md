---
layout: default
title: Plugin Mammotion - Registo de alterações
lang: pt_PT
pluginId: mammotion
---

# Importante ler!

**Encontrará abaixo as notas, as novidades e as correções de cada versão do plugin**

**Nota**: caso uma atualização não conste desta lista, isso significa que se trata apenas de alterações menores, como atualizações na documentação ou correções de pequenos erros.


# 2026-09-19 [~]

Novidades:
- Adicionados os comandos «hibernation» e «set_hibernation» para visualização no widget e utilização num cenário

Correções:
- Melhoria das imagens dos robôs


# 2026-09-17 [~]

Novidades:
- Adicionar o modo de hibernação
- Adicionar registos a partir dos widgets
- Áreas e atividades ordenadas por ordem alfabética

Correções:
- Correção de erro: modelo em falta para os Spino
- Correção de erro: erro durante a sincronização dos Spino (device_limits)


# 2026-09-08 [~]

Novidades:
- Reestruturação da secção «Spino» com suporte para comandos de ação
- Widget dedicado aos robôs «Spino»


# 2026-07-10 [~]

Primeira versão do plugin Mammotion (mammotion)
- Suporte para os robôs cortadores de relva Luba / Yuka e os robôs para piscinas Spino (estado)
- Detecção automática de dispositivos
- Transmissão de dados em tempo real através da nuvem Mammotion (MQTT)
- Recuperação das áreas de corte
- Recuperação das atividades
- Informações de controlo: bateria / carga / estado / velocidade / progresso / área / tipo de ligação / intensidade do sinal...
- Comandos de ação: iniciar / pausar / retomar / cancelar / regressar e sair da estação / altura da lâmina / velocidade / corte por zona / corte por atividade
