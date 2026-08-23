---
layout: default
title: Plugin Verisure - Registo de alterações
lang: pt_PT
pluginId: verisure
---

# Importante ler!

**Encontrará abaixo as notas, as novidades e as correções de cada versão do plugin**

**Nota**: caso uma atualização não conste desta lista, isso significa que se trata apenas de alterações menores, como atualizações na documentação ou correções de pequenos erros.

# 2026-08-11

Novidades:

- Tradução do plugin para 5 idiomas (EN, DE, ES, PT, IT)
- Registo dos logs em inglês
- Atualização dos widgets no âmbito de uma harmonização de todos os meus plugins

Atenção: a partir desta versão, a versão mínima necessária do Jeedom é a v4.4 e o Debian 11!

# 2026-05-31

Atualização do ícone no âmbito de uma harmonização de todos os meus plugins

# 2026-02-22

Adicionadas as seguintes funcionalidades:

- Compatibilidade com os detetores de movimento exteriores QP (tipo 3)
- Compatibilidade com o modo exterior (tipo 3)
- Adicionar atualização através do histórico (tipo 1 e 3)
- Suporte ao «modo forçado» (tipo 3)
- Compatibilidade com detetores de água (tipo 2)

Correções a seguir:

- Correção de erros na fechadura conectada (tipo 3)
- Correção de um erro na solicitação de início de sessão (tipo 2)
- Correção de um erro na exibição do nome do sensor no widget (tipo 2)

# 2024-12-31

Adicionadas as seguintes funcionalidades:

- Inclusão de fechaduras conectadas nos alarmes de última geração (tipo 3)
- Otimização do código (criação de comandos)

# 2024-12-13

Correções a seguir:

- Correção de um erro na solicitação «getPhotos» para os alarmes de última geração (tipo 3)

# 2024-12-08

Correções a seguir:

- Correção de um erro na solicitação «logout»
- Otimização do código para o PHP 8.0

# 2024-02-09

Adicionadas as seguintes funcionalidades:

- Adicionar a imagem do alarme às miniaturas da página do plugin

Correções a seguir:

- Atualização do botão para a criação automática de uma publicação na Comunidade Jeedom (vCore Jeedom 4.4 mini)
- Atualização das capturas de ecrã do plugin

# 2024-01-17

Correções a seguir:

- Alarme tipo 1 e 3: Correção na sequência das alterações às APIs da Verisure e do aparecimento do erro «Required request header 'x-installationNumber' not present»

# 2024-01-07

Adicionadas as seguintes funcionalidades:

- Compatibilidade oficial com alarmes do tipo 3
- Fim do suporte às versões do Jeedom 3.x. A versão mínima do núcleo necessária para o bom funcionamento do plugin é a versão 4.0

# 2023-11-19

Adicionadas as seguintes funcionalidades:

- Compatibilidade do Jeedom v4.4 com o Debian 12 e o PHP 8.x
- Adicionar um botão para a criação automática de uma publicação na Comunidade Jeedom (vCore Jeedom 4.4 mini)

# 2023-09-11

Correções a seguir:

- Exibição do widget num smartphone/tablet no modo de ambiente de trabalho

# 2023-05-29

Adicionadas as seguintes funcionalidades:

- Botão de ativação/desativação para a visibilidade das palavras-passe

Correções a seguir:

- Alarme de tipo 2: criação dos comandos de informação «Humidade» para os detetores de fumo

# 2023-05-22

Otimização do código e dos registos

Correções a seguir:

- Alerta tipo 1: Correção de um erro na função GetPictures na sequência da alteração das APIs
- Alarme de tipo 2: Mudança automática para o servidor secundário se o primário estiver em baixo, mas continua a aceitar o início de sessão

# 2023-04-11

Correções na sequência das alterações nas APIs da Verisure (autenticação MFA e pedidos — migração da API REST para GraphQL). Atenção: trata-se, portanto, de uma atualização **significativa**. Terá de se autenticar novamente para cada alarme criado (tipo 1 e 2).

Adicionadas as seguintes funcionalidades:

- Compatibilidade com a nova geração de alarmes (através do tipo 1, por enquanto)
- Reestruturação dos widgets (compatibilidade com o núcleo do Jeedom v4.4)

# 2022-10-18

Adicionadas as seguintes funcionalidades:

- Nova apresentação da tabela de comandos do equipamento (compatível com o núcleo do Jeedom v4.3)
- Reestruturação da apresentação da página «Equipamento»

# 2022-04-24

Adicionadas as seguintes funcionalidades:

- Pedidos de imagens para alarmes do tipo 2

Correções a seguir:

- Correção automática da altura do widget caso existam vários alarmes no painel de controlo
- Correção de um erro na função SetEqLogic()

# 2022-02-02

Correções a seguir:

- Correção do erro de visualização do widget tipo 2 na versão 4.2, caso o utilizador conectado não seja administrador

# 2022-01-31

Adicionadas as seguintes funcionalidades:

- Teste e validação do plugin para a versão 4.2 do núcleo do Jeedom
- Segurança: encriptação da palavra-passe dos equipamentos na base de dados Jeedom
- Adição de uma dica de ferramenta relativa ao número de instalação na página principal de um equipamento
- Separador «Notificações Verisure»: adição do cenário de notificações por SMS
- Alterações menores na interface (integração do novo modo de tabela na v4.2)

Correções a seguir:

- Correção de erros presentes no registo http.error do Jeedom (se a variável SESSIONID estiver vazia)

# 2021-07-07

Adicionadas as seguintes funcionalidades:

- Adicionados comandos de informação/ação para os dispositivos de alarmes do tipo 2 (temperatura, humidade, estado/ligado/desligado das tomadas ligadas, estado (aberto/fechado) dos sensores de abertura)
- Aparece um erro no centro de notificações do Jeedom quando o alarme é ativado devido a uma porta ou janela que ficou aberta

Correções a seguir:

- Alterações e correções nos registos

# 2021-01-06

Adicionadas as seguintes funcionalidades:

- Adicionada uma informação de comando «Qualidade da rede» para os alarmes de tipo 1. Este indicador baseia-se no número de pedidos bem-sucedidos durante a ligação à nuvem da Verisure
- Adicionada a visualização no painel de controlo do nível de humidade dos smartplugs compatíveis para alarmes do tipo 2

Correções a seguir:

- Nova apresentação da lista de objetos (em conformidade com o core v4.1)
- Erro no fuso horário (UTC) do relatório de atividade dos alarmes do tipo 2 (agora baseado no fuso horário do Jeedom)
- Correção de erros no registo hhtp_error durante a visualização do relatório de atividade das alarmes do tipo 1

# 2020-11-06

Correções na sequência das alterações nas APIs da Verisure (autenticação e parâmetros das solicitações)

# 2020-10-13

Adicionadas as seguintes funcionalidades:

- Suporte para os alarmes Verisure disponíveis na Bélgica e na Europa do Norte. O comando «Solicitar Imagens» ainda não está operacional para este tipo de equipamento
- Possibilidade de ocultar determinados comandos no widget (Solicitar imagens, ativação no modo noturno, ativação no modo diurno, ativação no modo exterior)
- Atualização dos ícones do relatório de atividade

Correções a seguir:

- Erro de visualização do Homebridge nos modos «Noite» e «Dia» (Em casa)
- Erro na exibição do relatório de atividade ao ativar o modo noturno através de um comando remoto

# 2020-09-04

Externalização da documentação do plugin

# 2020-08-22

Correções a seguir:

- Alteração dos registos de «Erro» para «Aviso» para evitar sobrecarregar o centro de mensagens do Jeedom
- Alterações e correções menores

# 2020-06-30

Adicionadas as seguintes funcionalidades:

- Consideração dos modos mistos (Total + Exterior, Noite + Exterior, Dia + Exterior)

# 2020-06-14

Adicionadas as seguintes funcionalidades:

- Implementação de um modelo para o painel de controlo móvel compatível com as versões v3 e v4 (Core2019 Light, Dark e Legacy)

# 2020-06-11

Adicionadas as seguintes funcionalidades e correções:

- Pedidos de imagens
- Gestão da exceção do cron todos os dias às 00h00 para evitar uma atualização durante a manutenção dos servidores Versiure
- Implementação de um modelo para o painel de controlo compatível com as versões v3 e v4 (Core2019 Light, Dark e Legacy)
- Otimização global do código
- Reestruturação dos registos do plugin

# 2020-05-04

Adicionadas as seguintes funcionalidades:

- Acesso ao registo de atividades da Verisure
- Separador «Notificações Verisure» para a configuração de cenários de notificações por e-mail e SMS
  
# 2020-04-15

Primeira versão do plugin Verisure

- Ligação à nuvem da Verisure
- Recuperação das informações da instalação
- Funções: ativação no modo total, ativação no modo noturno, ativação no modo diurno, ativação no modo exterior, desativação, recuperação do estado do alarme (manual ou automática (a cada 30 minutos))
- Compatibilidade com o Homebridge

**ATENÇÃO**: nesta primeira versão, o evento relacionado com o disparo do alarme ainda não é tido em conta!
