---
layout: default
title: Plugin myBMW - Registo de alterações
lang: pt_PT
pluginId: myBMW
---

# Importante ler!

**Encontrará abaixo as notas, as novidades e as correções de cada versão do plugin**

**Nota**: caso uma atualização não conste desta lista, isso significa que se trata apenas de alterações menores, como atualizações na documentação ou correções de pequenos erros.


# 2026-07-31

Correções a seguir:
 - Correção de um erro na exibição da percentagem da bateria - Suporte para o novo parâmetro «vehicle.drivetrain.batteryManagement.header»
 - Atualização do catálogo Telematics com a adição do campo «Condition Based Service» (246 até à data)


# 2026-07-25

Correções a seguir:
 - Atualização do catálogo Telematics apenas com os campos transmitíveis (245 até à data)


# 2026-07-04

Adicionadas as seguintes funcionalidades:
 - Configuração de um cron personalizável para evitar erros «500» nos servidores BMW em caso de consulta a uma hora fixa (xx:00). Por predefinição, este cron está configurado para executar-se a cada 2 horas, 5 minutos após a hora (xx:05), mas pode alterar o minuto exato modificando o primeiro valor do cron (5 */2 * * *)


# 2026-06-19

Adicionadas as seguintes funcionalidades:
 - Adicionada uma variável «Preço médio do kWh» para calcular o custo de um carregamento elétrico, visível no gráfico do histórico de carregamento (Painel)
 
Correções a seguir:
 - Painel: correção do erro de JavaScript «Unexpected end of JSON input» ao visualizar o histórico de consumo elétrico


# 2026-05-31

Atualização do ícone no âmbito de uma harmonização de todos os meus plugins


# 2025-11-09

Adicionadas as seguintes funcionalidades:
 - Mudança para as **API oficiais da BMW**
 - Implementação do **stream MQTT** para a recolha de informações em tempo real

**ATENÇÃO** Trata-se de uma atualização significativa do plugin que requer uma reconfiguração completa do mesmo. Por favor, leia atentamente a documentação e siga todas as etapas descritas, uma a uma (nomeadamente as ações a realizar na sua conta de utilizador BMW ou Mini)


# 2025-09-12

Adicionadas as seguintes funcionalidades:
 - Possibilidade de configurar o objetivo de recarga e o limite de corrente de carga para veículos elétricos e híbridos recarregáveis compatíveis
 - Adicionar os comandos de informação correspondentes
 - Geração de um x_user_agent genérico e específico para o equipamento, para evitar erros 403 (Quota de volume de chamadas esgotada)
 - Adicionada uma atualização automática para a recuperação imediata das informações após a sincronização do veículo ou após a utilização de um serviço remoto que o exija

**ATENÇÃO** Para que estas novas funcionalidades sejam aplicadas, é necessário efetuar uma nova sincronização de todos os seus veículos (sem captcha)

Correções a seguir:
 - Otimização do código
 - Página de configuração: correção de um erro na função «guardar automaticamente» antes de uma sincronização ou de uma alteração dos parâmetros
 - Página de configuração: correção de um erro relacionado com a remoção automática do captcha após uma sincronização


# 2025-05-20

Adicionadas as seguintes funcionalidades:
 - Eliminação do cron30 e adição de um cron personalizável a partir da página de configuração do plugin


# 2025-03-09

Adicionadas as seguintes funcionalidades:
 - Adicionada a ordem info chargingTarget (objetivo de recarga elétrica em %)

Correções a seguir:
 - Painel: correção de um erro na exibição do estado de abertura/fecho da tampa


# 2025-01-31

Adicionadas as seguintes funcionalidades:
 - Adicionada a comanda totalEnergyCost (custo total mensal do consumo de eletricidade)
 - Redução do número de chamadas aos servidores da BMW, em função das capacidades do veículo (cargas e percursos)
 - Painel: alteração do gráfico sobre as estatísticas de carga (adição do custo total)
 - Painel e dashboard: a apresentação dos gráficos e botões é agora feita de acordo com as capacidades do veículo

Correções a seguir:
 - Painel: correção de um erro na primeira visualização com ícones de portas e janelas


# 2024-12-18

Correções a seguir:
 - Correção de um erro que provocava a perda do histórico de percursos caso a consulta devolvesse «TripHistoryNotActive» por engano


# 2024-12-08

Adicionadas as seguintes funcionalidades:
 - Consideração do captcha imposto pela BMW aquando do primeiro início de sessão (ver documentação!!)
 - Exibição dos serviços disponíveis de acordo com a subscrição na página «Equipamento»

Correções a seguir:
 - Exibição da hora, além da data, nos gráficos


# 2024-10-22

Correções a seguir:
 - Correção de erros nos comandos do painel (sendPOI e vehicleFinder)


# 2024-09-06

Adicionadas as seguintes funcionalidades:
 - Compatibilidade com as novas APIs da BMW e da Mini (aplicação móvel v4.7.2)

Correções a seguir:
 - Correção de erro na solicitação sendPOI (alteração na API)
 - Correção de erro na consulta vehicleFinder (alteração na API)
 - Correção de erro na consulta lastTrip (consideração da informação «NoTripsYet»)


# 2024-07-07

Adicionadas as seguintes funcionalidades:
 - Adicionar sessões de carregamento para carros elétricos com extensor (tipo ELECTRIC_WITH_RANGE_EXTENDER)

Correções a seguir:
 - Melhoria na apresentação das publicações na comunidade
 - Correção de um erro na exibição das mensagens de serviço (alteração na API)
 - Correção de erro na consulta chargingStatistics (alteração na API)
 - Correção de erros na visualização do painel e do dashboard para veículos do tipo «mild_hybrid» (API v2) ou «hybrid» (API v1)


# 2024-04-17

Adicionadas as seguintes funcionalidades:
 - Adicionar um botão que permita a eliminação manual do token do equipamento
 - Adicionar a solicitação «Configurações do OAuth2»
 - Adicionada a função unset() para pedidos cURL (compatibilidade com o PHP 8.x)

Correções a seguir:
 - Correção da sincronização dos veículos na sequência da alteração das API (método SHA256)
 - Correção de um erro na visualização dos mosaicos para carros elétricos com extensor (tipo ELECTRIC_WITH_RANGE_EXTENDER)


# 2024-04-16

Adicionadas as seguintes funcionalidades:
 - Pequena alteração no design do widget e do painel
 - Painel: mudança da visualização das sessões de carregamento do modo tabela para o modo gráfico
 - Painel: adição de um gráfico com as estatísticas de condução (se disponível)
 - Painel: adição de um gráfico sobre os percursos do mês em curso (se disponível)
 - Revisão do cron: mudança de 1 hora para 30 minutos (nomeadamente para recuperar os últimos percursos)

Correções a seguir:
- Correção de um erro na exibição das sessões de carregamento de um veículo com motor a combustão
- Correção do URL das sessões de carregamento na sequência da alteração das API


# 2024-03-14

Adicionadas as seguintes funcionalidades:
 - Compatibilidade com as novas APIs da BMW e da Mini v3.11.0
 - Redução do número de chamadas aos servidores da BMW (nomeadamente a mudança do cron30 para o cronHourly (temporária ou não))
 - Adicionada a consulta API «lastTrips». Será disponibilizado um novo gráfico mais tarde no painel

Correções a seguir:
 - Registo por predefinição dos 3 comandos necessários para os gráficos do painel aquando da sua criação
 - Eliminação da consulta «chargingStatistics», que já não funciona atualmente


# 2024-02-09

Adicionadas as seguintes funcionalidades:
 - Adicionar a imagem do veículo às miniaturas da página do plugin

Correções a seguir:
 - Atualização do botão para a criação automática de uma publicação na Comunidade Jeedom (vCore Jeedom 4.4 mini)
 - Atualização das capturas de ecrã do plugin
 

# 2024-01-31

Correções a seguir:
 - Correção dos km restantes para carros elétricos com extensor de autonomia (tipo ELECTRIC_WITH_RANGE_EXTENDER)
 

# 2023-11-30

Correções a seguir:
 - Gestão do erro «429 - Limite de frequência excedido»
 - Exibição do painel mesmo que o equipamento não esteja visível


# 2023-11-19

Adicionadas as seguintes funcionalidades:
 - Compatibilidade do Jeedom v4.4 com o Debian 12 e o PHP 8.x
 - Compatibilidade com as novas APIs da BMW e da Mini v3.9.0
 - Adicionar um botão para a criação automática de uma publicação na Comunidade Jeedom (vCore Jeedom 4.4 mini)


# 2023-10-10

Adicionadas as seguintes funcionalidades:
 - Consideração do tema Legacy para a visualização do widget e do painel (vCore Jeedom < 4.4)

Correções a seguir:
 - Retrospectiva sobre a mudança da indicação do volume de combustível restante de «litros» para «%», na sequência da alteração das APIs. As duas opções são agora possíveis e dependem do veículo
 - Correção do comando «sessões de carregamento», que devolvia um JSON inválido se o veículo não fosse elétrico ou híbrido


# 2023-10-04

Adicionadas as seguintes funcionalidades:
 - Compatibilidade com as novas APIs da BMW e da Mini v3.3.1
 - Reformulação do widget com um regresso a um design mais tradicional/convencional, para não sobrecarregar desnecessariamente o painel de controlo, e centrado exclusivamente nas informações/ações importantes
 - Adicionada uma painel muito mais completa, incluindo, nomeadamente, gráficos sobre a quilometragem, o volume de combustível e a bateria. Para tal, deve selecionar a opção «painel» na configuração do plugin e ativar o registo histórico dos comandos «quilometragem», «combustível» e/ou «bateria». O painel é personalizável a partir da página de configuração do equipamento (ícone/texto do estado de abertura de portas e janelas, cores, etc.)
 - Adicionado o histórico de consumo do mês em curso, com a potência consumida e o custo aproximado, se configurado na aplicação BMW ou Mini
 - Inclusão de informações sobre a carga nos dados brutos
 - Adicionar botões «Iniciar/Parar recarga» para veículos elétricos
 - Possibilidade de exibir a palavra-passe no equipamento
 - Início da compatibilidade com o Jeedom v4.4

Correções a seguir:
 - Correção da visualização do widget num smartphone/tablet no modo de secretária (pelo menos, supostamente!)
 - Adicionar registos adicionais em caso de depuração durante a atualização do token
 - Mudança da indicação do volume de combustível restante de litros para % na sequência da alteração das API
 - Otimização da exibição de mensagens de controlo ou serviços (se a descrição estiver vazia)
 - Correção da função «VehicleFinder» na sequência da alteração das APIs. Utilização da última posição conhecida do veículo, uma vez que agora é necessário enviar as coordenadas GPS do utilizador que solicita a localização do veículo. A posição só é devolvida se o veículo se encontrar num raio inferior a 1,5 km


# 2023-01-15

Adicionadas as seguintes funcionalidades:
 - Compatibilidade com as novas APIs da BMW e da Mini v2.12
 - Adicionar a pressão e o valor de referência de enchimento dos pneus (Atenção: esta funcionalidade depende do modelo do veículo. As informações no widget só são visíveis se estiverem disponíveis)
 - Adicionado o ícone e implementada a exibição de mensagens relativas ao líquido de limpeza do pára-brisas

Correções a seguir:
 - Ajuste da vista do veículo (vista de perfil 3/4 para todos os veículos — requer uma nova sincronização e a limpeza da cache)
 - Alteração da mensagem relativa ao tempo restante para o carregamento de veículos elétricos
 - Atualização da documentação


# 2022-09-25

Adicionadas as seguintes funcionalidades:
 - Adicionar a presença do veículo na residência
 - Adicionar a distância entre o veículo e a residência
 - Consideração das mensagens relativas às pastilhas de travão e ao desgaste dos pneus
 - Eliminação dos dois comandos «unidade de distância» e «unidade de combustível» (não utilizados)
 - Nova apresentação da tabela de comandos do equipamento (compatível com o núcleo do Jeedom v4.3)
 

Correções a seguir:
 - Supressão do «ou» no título das mensagens de serviço, caso não haja data
 - Correção da cor azul dos ícones Font Awesome do widget flatdesign
 - Correção da API para a recuperação dos «status event» (eliminação do checkauth)
 - Atualização da documentação
 

# 2022-09-02

Adicionadas as seguintes funcionalidades:
 - Adicionados os novos comandos de informação «Todas as portas» e «Todas as janelas»
 - Novo widget «Flat Design»: pode selecionar o widget pretendido na página do equipamento (compatível com os temas escuro/claro). Este widget é personalizável (consulte a documentação).

Correções a seguir:
 - Alteração do tempo limite de atualização do token para evitar erros de ligação


# 2022-08-01

Adicionadas as seguintes funcionalidades:
 - Adicionar ícones para a gestão das mensagens de controlo do veículo (óleo, travões, pressão dos pneus, controlo geral do veículo)

Correções a seguir:
 - Correção de um erro de sincronização caso o equipamento não tenha sido guardado (a partir de agora, o guardado é automático)


# 2022-07-25

Adicionadas as seguintes funcionalidades:
 - Compatibilidade com as novas APIs BMW e Mini v2
 - Adicionar dicas de ferramenta ao widget para saber o estado das portas e janelas

Correções a seguir:
 - Correção de um erro relacionado com o token de atualização


# 2022-06-12

Adicionadas as seguintes funcionalidades:
 - Suporte às novas APIs Mini
 - Fusão das APIs da BMW e da Mini e otimização do código
 - Suporte ao idioma francês nas informações devolvidas (unidades e mensagens do veículo)
 - Mudança dos registos de «debug» para «error» se a solicitação não for bem-sucedida
 - Utilização do logicalID dos equipamentos em vista de futuros desenvolvimentos

Correções a seguir:
 - Correção de um erro na função CreateCmd
 - Correção dos km restantes dos motores de combustão (subtração dos km restantes dos motores elétricos)
 - Exibição da última ligação como «desconhecida» se o valor for 01/01/1970
 - Correção do problema de exibição de mensagens caso estas contenham um « ’ »


# 2022-05-28

Correções a seguir:
 - Alteração das APIs do BMW Connected Drive (x-user-agent)
 - Correção de um erro no URL da imagem do veículo se o Jeedom não estiver instalado na raiz
 - Conversão de milhas para quilómetros para a distância total


# 2022-04-24

Adicionadas as seguintes funcionalidades:
 - Suporte ao modo «Secured» ao nível do widget (bloqueio)
 - Adicionada a possibilidade de registar o histórico dos comandos no separador Equipamento\Comandos
 - Suporte à exibição de uma informação histórica no fundo de um mosaico (core v4.2)
 

# 2022-04-11

Adicionadas as seguintes funcionalidades:
 - Ventilação: adição dos modos «start» / «stop»
 - Localização de veículos: localização do veículo em tempo real
 - Funcionalidade de envio de um POI nas mensagens do carro
 - Verificação do estado de cada ação durante 2 minutos («PENDING» -> «EXECUTED» ou «ERROR»)
 - Adicionar os comandos «Status» para cada comando de ação (para acompanhamento através de um cenário)
 - Alteração dos ícones de ações
 
Correções a seguir:
 - Correção de um erro que fazia com que a tomada fosse apresentada como desligada se o valor fosse «false» em vez de 0 num veículo elétrico
 - otimização do código


# 2022-03-28

Primeira versão do plugin myBMW
 - Ligação à nuvem BMW Connected Drive
 - Recuperação de informações do veículo: estado do sistema de fecho, estado das portas e janelas, quilometragem total, % de carga e quilómetros restantes para os motores elétricos, volume de combustível e quilómetros restantes para os motores a combustão, localização do veículo, mensagens de alerta
 - Funcionalidades disponíveis: trancar/destrancar o veículo, ligar a ventilação, acionar os faróis, tocar a buzina
  
