---
layout: default
title: Plugin de Acompanhamento de Encomendas - Registo de alterações
lang: pt_PT
pluginId: parcelTracking
---

# Importante ler!

**Encontrará abaixo as notas, as novidades e as correções de cada versão do plugin**

**Nota**: caso uma atualização não conste desta lista, isso significa que se trata apenas de alterações menores, como atualizações na documentação ou correções de pequenos erros.


# 2026-05-31

Atualização do ícone no âmbito de uma harmonização de todos os meus plugins


# 2026-02-15

Adicionadas as seguintes funcionalidades:
 - Atualização automática da lista de transportadoras e dos parâmetros adicionais (através de um botão ou de uma tarefa cron diária)
 

# 2025-11-10

Adicionadas as seguintes funcionalidades:
 - Atualização da lista de transportadoras e dos parâmetros adicionais
 - Adicionar um campo «Pesquisa» para filtrar as transportadoras na lista de opções (por nome, por país,...)

Correções a seguir:
 - Correção de um aviso do PHP ao apresentar o widget global em determinados casos (por exemplo, quando «states» está vazio)


# 2025-05-20

Adicionadas as seguintes funcionalidades:
 - Possibilidade de apresentar simultaneamente os widgets individuais e o widget global
 - Inclusão do nome da encomenda no título das notificações


# 2024-12-31

Adicionadas as seguintes funcionalidades:
 - Adicionar as etiquetas #url# e #location# às notificações e aos cenários


# 2024-10-17

Adicionadas as seguintes funcionalidades:
 - Adicionados os campos «transportadora» e «parâmetro adicional» na janela modal que permite adicionar uma encomenda a partir do widget/painel de controlo

Correções a seguir:
 - As datas e horas são agora apresentadas no fuso horário configurado no seu Jeedom (widget único / widget global)
 - Consideração das descrições traduzidas pelo 17Track quando tiver definido um idioma específico
 

# 2024-09-28

Adicionadas as seguintes funcionalidades:
 - Implementação de um webhook que recupera em tempo real as informações transmitidas pelo 17Track. O cron de execução horária foi, por conseguinte, desativado
 - Adicionado um botão que permite enviar uma notificação de teste na página de configuração do plugin

> ATENÇÃO!!!
> É imprescindível configurar os parâmetros do webhook no seu painel de controlo do 17Track; caso contrário, deixará de receber qualquer informação sobre as suas encomendas!


# 2024-09-07

Adicionadas as seguintes funcionalidades:
 - Mudança das APIs da ParcelsApp para a 17Track

> ATENÇÃO!!!
> Trata-se de uma alteração significativa no plugin. Por isso, terá de o configurar novamente (nomeadamente, integrar uma chave API da 17Track) e, em seguida, recriar todas as suas encomendas. Todo o procedimento está detalhado na documentação. A grande vantagem desta nova versão é que o número de envios monitorizados passa para 100 encomendas por mês (a atualização da quota ocorre no primeiro dia de cada mês)!


# 2024-08-22

Adicionadas as seguintes funcionalidades:
 - Tradução do plugin (inglês, alemão, espanhol, italiano, português)

Correções a seguir:
 - Tradução das etiquetas em inglês

> ATENÇÃO!!!
> Por isso, terá de alterar o formato das suas mensagens (notificações) e/ou dos seus cenários!


# 2024-08-01

Adicionadas as seguintes funcionalidades:
 - Remoção automática de espaços, caso existam antes e/ou depois do trackingID

Correções a seguir:
 - Recuperação das informações relativas à transportadora, origem e destino (diferentes chaves no JSON, consoante as transportadoras)


# 2024-07-27

Adicionadas as seguintes funcionalidades:
 - Possibilidade de adicionar ou eliminar pacotes diretamente a partir dos widgets (individuais ou globais)
 - Possibilidade de adicionar uma chave API secundária para o acompanhamento de mais 10 encomendas
 - Adicionar uma notificação no centro de mensagens do Jeedom quando for atingido o limite de 10 pacotes (apenas durante a sincronização, e não durante a atualização)

Correções a seguir:
 - Aviso PHP no registo http.error ao chamar a função buildList()
 - Atualização das encomendas dos equipamentos quando o JSON «Shipments» estiver vazio


# 2024-07-16

Primeira versão do plugin «Acompanhamento de encomendas» (parcelTracking)
 - Ligação à nuvem da Parcelsapp através da API
 - Recuperação de informações sobre as encomendas: estado, transportadora, país de origem, país de destino, etapas de entrega, data de entrega
 - Funcionalidades disponíveis: widget por encomenda ou global, envio de notificações através de comando e/ou cenário, eliminação automática das encomendas após um período de tempo definido

  
