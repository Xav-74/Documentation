---
layout: default
title: Plugin Verisure - Registo de alterações
lang: pt_PT
pluginId: verisure
---

# Importante ler!

**Encontrará abaixo as notas, as novidades e as correções de cada versão do plugin**

**Nota**: caso uma atualização não conste desta lista, isso significa que se trata apenas de alterações menores, como atualizações na documentação ou correções de pequenos erros.

# 11 de agosto de 2026 [s]

Novidades:

- Tradução do plugin para 5 idiomas (EN, DE, ES, PT, IT)
- Registo dos logs em inglês
- Atualização dos widgets no âmbito de uma harmonização de todos os meus plugins

Atenção: a partir desta versão, a versão mínima necessária do Jeedom é a v4.4 e o Debian 11!

# 31 de maio de 2026 [s]

Atualização do ícone no âmbito de uma harmonização de todos os meus plugins

# 22/02/2026 [s]

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

# 31 de dezembro de 2024 [s]

Adicionadas as seguintes funcionalidades:

- Inclusão de fechaduras conectadas nos alarmes de última geração (tipo 3)
- Otimização do código (criação de comandos)

# 13 de dezembro de 2024 [s]

Correções a seguir:

- Correção de um erro na solicitação «getPhotos» para os alarmes de última geração (tipo 3)

# 8 de dezembro de 2024 [s]

Correções a seguir:

- Correção de um erro na solicitação «logout»
- Otimização do código para o PHP 8.0

# 9 de fevereiro de 2024 [s]

Adicionadas as seguintes funcionalidades:

- Adicionar a imagem do alarme às miniaturas da página do plugin

Correções a seguir:

- Atualização do botão para a criação automática de uma publicação na Comunidade Jeedom (vCore Jeedom 4.4 mini)
- Atualização das capturas de ecrã do plugin

# 17/01/2024 [s]

Correções a seguir:

- Alarme tipo 1 e 3: Correção na sequência das alterações às APIs da Verisure e do aparecimento do erro «Required request header 'x-installationNumber' not present»

# 7 de janeiro de 2024 [s]

Adicionadas as seguintes funcionalidades:

- Compatibilidade oficial com alarmes do tipo 3
- Fim do suporte às versões do Jeedom 3.x. A versão mínima do núcleo necessária para o bom funcionamento do plugin é a versão 4.0

# 19/11/2023 [s]

Adicionadas as seguintes funcionalidades:

- Compatibilidade do Jeedom v4.4 com o Debian 12 e o PHP 8.x
- Adicionar um botão para a criação automática de uma publicação na Comunidade Jeedom (vCore Jeedom 4.4 mini)

# 11 de setembro de 2023 [s]

Correções a seguir:

- Exibição do widget num smartphone/tablet no modo de ambiente de trabalho

# 29 de maio de 2023 [s]

Adicionadas as seguintes funcionalidades:

- Botão de ativação/desativação para a visibilidade das palavras-passe

Correções a seguir:

- Alarme de tipo 2: criação dos comandos de informação «Humidade» para os detetores de fumo

# 22 de maio de 2023 [s]

Otimização do código e dos registos

Correções a seguir:

- Alerta tipo 1: Correção de um erro na função GetPictures na sequência da alteração das APIs
- Alarme de tipo 2: Mudança automática para o servidor secundário se o primário estiver em baixo, mas continua a aceitar o início de sessão

# 11 de abril de 2023 [s]

Correções na sequência das alterações nas APIs da Verisure (autenticação MFA e pedidos — migração da API REST para GraphQL). Atenção: trata-se, portanto, de uma atualização **significativa**. Terá de se autenticar novamente para cada alarme criado (tipo 1 e 2).

Adicionadas as seguintes funcionalidades:

- Compatibilidade com a nova geração de alarmes (através do tipo 1, por enquanto)
- Reestruturação dos widgets (compatibilidade com o núcleo do Jeedom v4.4)

# 18 de outubro de 2022 [s]

Adicionadas as seguintes funcionalidades:

- Nova apresentação da tabela de comandos do equipamento (compatível com o núcleo do Jeedom v4.3)
- Reestruturação da apresentação da página «Equipamento»

# 24 de abril de 2022 [s]

Adicionadas as seguintes funcionalidades:

- Pedidos de imagens para alarmes do tipo 2

Correções a seguir:

- Correção automática da altura do widget caso existam vários alarmes no painel de controlo
- Correção de um erro na função SetEqLogic()

# 2 de fevereiro de 2022 [s]

Correções a seguir:

- Correção do erro de visualização do widget tipo 2 na versão 4.2, caso o utilizador conectado não seja administrador

# 31 de janeiro de 2022 [s]

Adicionadas as seguintes funcionalidades:

- Teste e validação do plugin para a versão 4.2 do núcleo do Jeedom
- Segurança: encriptação da palavra-passe dos equipamentos na base de dados Jeedom
- Adição de uma dica de ferramenta relativa ao número de instalação na página principal de um equipamento
- Separador «Notificações Verisure»: adição do cenário de notificações por SMS
- Alterações menores na interface (integração do novo modo de tabela na v4.2)

Correções a seguir:

- Correção de erros presentes no registo http.error do Jeedom (se a variável SESSIONID estiver vazia)

# 7 de julho de 2021 [s]

Adicionadas as seguintes funcionalidades:

- Adicionados comandos de informação/ação para os dispositivos de alarmes do tipo 2 (temperatura, humidade, estado/ligado/desligado das tomadas ligadas, estado (aberto/fechado) dos sensores de abertura)
- Aparece um erro no centro de notificações do Jeedom quando o alarme é ativado devido a uma porta ou janela que ficou aberta

Correções a seguir:

- Alterações e correções nos registos

# 6 de janeiro de 2021 [s]

Adicionadas as seguintes funcionalidades:

- Adicionada uma informação de comando «Qualidade da rede» para os alarmes de tipo 1. Este indicador baseia-se no número de pedidos bem-sucedidos durante a ligação à nuvem da Verisure
- Adicionada a visualização no painel de controlo do nível de humidade dos smartplugs compatíveis para alarmes do tipo 2

Correções a seguir:

- Nova apresentação da lista de objetos (em conformidade com o core v4.1)
- Erro no fuso horário (UTC) do relatório de atividade dos alarmes do tipo 2 (agora baseado no fuso horário do Jeedom)
- Correção de erros no registo hhtp_error durante a visualização do relatório de atividade das alarmes do tipo 1

# 06/11/2020 [s]

Correções na sequência das alterações nas APIs da Verisure (autenticação e parâmetros das solicitações)

# 13 de outubro de 2020 [s]

Adicionadas as seguintes funcionalidades:

- Suporte para os alarmes Verisure disponíveis na Bélgica e na Europa do Norte. O comando «Solicitar Imagens» ainda não está operacional para este tipo de equipamento
- Possibilidade de ocultar determinados comandos no widget (Solicitar imagens, ativação no modo noturno, ativação no modo diurno, ativação no modo exterior)
- Atualização dos ícones do relatório de atividade

Correções a seguir:

- Erro de visualização do Homebridge nos modos «Noite» e «Dia» (Em casa)
- Erro na exibição do relatório de atividade ao ativar o modo noturno através de um comando remoto

# 4 de setembro de 2020 [s]

Externalização da documentação do plugin

# 22/08/2020 [s]

Correções a seguir:

- Alteração dos registos de «Erro» para «Aviso» para evitar sobrecarregar o centro de mensagens do Jeedom
- Alterações e correções menores

# 30 de junho de 2020 [s]

Adicionadas as seguintes funcionalidades:

- Consideração dos modos mistos (Total + Exterior, Noite + Exterior, Dia + Exterior)

# 14 de junho de 2020 [s]

Adicionadas as seguintes funcionalidades:

- Implementação de um modelo para o painel de controlo móvel compatível com as versões v3 e v4 (Core2019 Light, Dark e Legacy)

# 11 de junho de 2020 [s]

Adicionadas as seguintes funcionalidades e correções:

- Pedidos de imagens
- Gestão da exceção do cron todos os dias às 00h00 para evitar uma atualização durante a manutenção dos servidores Versiure
- Implementação de um modelo para o painel de controlo compatível com as versões v3 e v4 (Core2019 Light, Dark e Legacy)
- Otimização global do código
- Reestruturação dos registos do plugin

# 4 de maio de 2020 [s]

Adicionadas as seguintes funcionalidades:

- Acesso ao registo de atividades da Verisure
- Separador «Notificações Verisure» para a configuração de cenários de notificações por e-mail e SMS
  
# 15 de abril de 2020 [s]

Primeira versão do plugin Verisure

- Ligação à nuvem da Verisure
- Recuperação das informações da instalação
- Funções: ativação no modo total, ativação no modo noturno, ativação no modo diurno, ativação no modo exterior, desativação, recuperação do estado do alarme (manual ou automática (a cada 30 minutos))
- Compatibilidade com o Homebridge

**ATENÇÃO**: nesta primeira versão, o evento relacionado com o disparo do alarme ainda não é tido em conta!
