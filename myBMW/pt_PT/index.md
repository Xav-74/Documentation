---
layout: default
title: Plugin My BMW - Documentação
lang: pt_PT
pluginId: myBMW
---

# Apresentação

Este plugin permite-lhe interagir com o seu veículo **BMW** ou **Mini** equipado com os serviços Connected Drive, tal como a aplicação oficial «My BMW» ou «Mini».

> **Dica**
>
> A **versão mínima do Jeedom** necessária para o bom funcionamento do plugin é a **versão 4.4**
> O plugin já é compatível com a **versão 4.6** do Jeedom, bem como com as **versões Debian 12**

# Princípio

Este plugin interage com as **API oficiais do BMW Connected Drive** através da nuvem; por conseguinte, **este plugin requer uma ligação à Internet**.

É igualmente necessário dispor de uma subscrição válida dos serviços BMW Connected Drive para o seu veículo, bem como de uma conta de utilizador **principal** válida para a aplicação «My BMW» ou «Mini».

# Configuração da sua conta de utilizador BMW ou Mini

Antes de poder utilizar o plugin, tem de configurar a sua conta de utilizador BMW. Siga cuidadosamente os passos seguintes:

1. Inicie sessão no portal **[BMW ConnectedDrive](https://www.bmw.fr/fr-fr/mybmw/vehicle-overview)** ou **[Mini ConnectedDrive](https://www.mini.fr/fr-fr/mymini/vehicle-overview)**
2. Clique no ícone **BMW CarData**

![CarData](../images/CarData_section.png)

3. Clique no botão **«Criar um cliente CarData»**
4. Guarde **o ID de cliente** num local seguro!
5. Aguarde **30 segundos**
6. Clique em **"Solicitar acesso à API CarData"**
7. Aguarde **30 segundos** (se o botão não voltar para «off» e não aparecer nenhuma mensagem de erro, pode continuar; caso contrário, terá de repetir este passo)
8. Clique em **"CarData Streaming"**
9. Aguarde **30 segundos** (se o botão não voltar para «off» e não aparecer nenhuma mensagem de erro, pode continuar; caso contrário, terá de repetir este passo)

![CarData](../images/CarData_clientID.png)

10. Aceda à secção **CarData Stream**
11. Verifique se o estado da ligação está em **"ready"**

![CarData](../images/CarData_stream.png)

12. Clique no botão **«Alterar a seleção de dados»**
13. Selecione **«Todas as categorias»** (Estado do veículo, Carregamento, Dados da viagem, etc.) e, em seguida, clique várias vezes no botão **Carregar** para visualizar todos os atributos
14. Selecione **manualmente** os 244 atributos individuais ou prima F12 para aceder à **consola do programador** e digite: (não é possível copiar e colar)

    ```js
    document.querySelectorAll('label.chakra-checkbox:not([data-checked])').forEach(l => l.click());
    ```

15. Em seguida, **guarde** a sua configuração
16. Guarde **o nome de utilizador** num local seguro!

> **Importante**
>
> É importante que todos os atributos estejam assinalados para receber o conjunto completo de dados do veículo.

# Configuração do plugin

Após descarregar o plugin, basta ativá-lo e, em seguida, configurar o ID do cliente e o nome de utilizador obtidos na etapa anterior. Deixe os restantes campos em branco, salvo indicação expressa do programador.
Em seguida, aguarde até que a instalação das dependências termine e o daemon seja iniciado.

> **Dica**
>
> Para facilitar um pedido de assistência remota, recomenda-se definir os registos no **modo de depuração**.

![Configuração](../images/Config_myBMW.png)

# Adicionar um veículo

A configuração dos equipamentos MyBMW está disponível no menu Plugin > Objetos conectados.

![Adicionar veículo](../images/Plugin_myBMW.png)

Clique no botão «Adicionar» para criar um novo veículo. Depois de o adicionar, ficará com:

| Campo | Descrição |
|---|---|
| **Nome do equipamento** | nome do seu veículo |
| **Objeto pai** | indica o objeto pai ao qual o equipamento pertence |
| **Categoria** | a categoria do equipamento |
| **Ativar** | permite ativar o seu equipamento |
| **Visível** | torna o seu equipamento visível no painel de controlo |
| **Marca** | indique a marca do seu veículo (BMW ou Mini) |
| **VIN** | indique o número VIN ou Vehicle Identification Number (Número de identificação do veículo). Pode encontrar este número na casa E do seu cartão de matrícula. Este número é composto por 17 caracteres. |
| **Exibição do estado das portas/janelas** | pode escolher entre duas opções para a exibição do estado das portas e janelas no painel: o modo de texto ou o modo de ícones. |
| **Cor dos ícones das portas/janelas** | se tiver escolhido o modo de ícones, também pode decidir a cor dos ícones (verde ou preto e branco). |
| **Residência (presença)** | tem 3 opções para indicar as coordenadas GPS da sua residência: pode utilizar as coordenadas introduzidas no Jeedom, as coordenadas atuais do veículo ou introduzir manualmente a latitude e a longitude. |
| **Distância máxima (em m)** | indique a distância máxima, em metros, entre a sua residência e o veículo para que este seja considerado como estando na sua residência. |

Em seguida, basta clicar no botão **Autenticação** para obter as informações do seu veículo (se estiverem disponíveis, irá obter o modelo, o ano, o tipo de motorização e uma imagem do seu veículo). Será exibida uma janela pop-up **(atenção ao bloqueador do seu navegador; desative-o, se necessário)** para que se autentique com o nome de utilizador (e-mail) e a palavra-passe da sua conta BMW. Tem 5 minutos para o fazer e, no final, deverá receber a mensagem **Ligação bem-sucedida**.

> **Dica**
>
> Não se esqueça de **guardar** as suas informações!
> Ao guardar, serão criados novos comandos no equipamento.

![Equipamento](../images/Eqpt_myBMW.png)

# Dados brutos

Para facilitar a depuração em caso de problema, pode obter os dados brutos do seu veículo clicando no botão **Dados brutos**. Atenção: antes de os copiar para o fórum, por exemplo, não se esqueça de ocultar informações confidenciais, como o número de VIN!

# Comandos

Existem atualmente vários comandos, que são descritos abaixo.

> **Dica**
>
> Se o comando devolver «not available», significa que a informação correspondente não está disponível no seu veículo.

## Informações

| Comando | Descrição |
|---|---|
| **Marca** | a marca do veículo (BMW ou Mini) |
| **Modelo** | o modelo do veículo |
| **Ano** | ano do veículo |
| **Tipo** | elétrico, térmico ou híbrido |
| **Quilometragem** | quilometragem total do veículo |
| **Bloqueio** | apresenta o estado de bloqueio do veículo |
| **Estado da porta do condutor à frente** | o estado da porta do condutor à frente |
| **Estado da porta do condutor traseira** | o estado da porta do condutor traseira |
| **Estado da porta do passageiro da frente** | o estado da porta do passageiro da frente |
| **Estado da porta do passageiro traseiro** | o estado da porta do passageiro traseiro |
| **Estado de todas as portas** | o estado geral das quatro portas |
| **Estado da janela do condutor à frente** | o estado da janela do condutor à frente |
| **Estado da janela do condutor traseiro** | o estado da janela do condutor traseiro |
| **Estado da janela do passageiro da frente** | o estado da janela do passageiro da frente |
| **Estado da janela do passageiro traseiro** | o estado da janela do passageiro traseiro |
| **Estado de todas as janelas** | o estado global das quatro janelas |
| **Estado do cofre** | o estado do cofre |
| **Estado do capô do motor** | o estado do capô do motor |
| **Estado do teto de abrir** | o estado do teto de abrir |
| **Pressão do pneu dianteiro esquerdo** | a pressão medida no pneu dianteiro esquerdo |
| **Instruções de enchimento do pneu dianteiro esquerdo** | a pressão de enchimento recomendada para o pneu dianteiro esquerdo |
| **Pressão do pneu dianteiro direito** | a pressão medida no pneu dianteiro direito |
| **Instruções de enchimento do pneu dianteiro direito** | a pressão de enchimento recomendada para o pneu dianteiro direito |
| **Pressão do pneu traseiro esquerdo** | a pressão medida no pneu traseiro esquerdo |
| **Instruções para o enchimento do pneu traseiro esquerdo** | a pressão de enchimento recomendada para o pneu traseiro esquerdo |
| **Pressão do pneu traseiro direito** | a pressão medida no pneu traseiro direito |
| **Instruções de enchimento do pneu traseiro direito** | a pressão de enchimento recomendada para o pneu traseiro direito |
| **Estado da carga** | o estado da carga em curso (apenas em veículos elétricos ou híbridos) |
| **Estado da tomada** | o estado de ligação do cabo de carregamento (apenas em veículos elétricos ou híbridos) |
| **Hora de fim do carregamento** | a hora estimada para o fim do carregamento (apenas em veículos elétricos ou híbridos) |
| **Carga restante** | o nível de carga restante da bateria (apenas em veículos elétricos ou híbridos) |
| **Quilómetros restantes (em modo elétrico)** | autonomia restante em modo elétrico (motor elétrico e/ou híbrido) |
| **Combustível restante** | o nível de combustível restante no depósito (apenas em veículos a combustão ou híbridos) |
| **Quilómetros restantes (motor térmico)** | autonomia restante do motor térmico |
| **Mensagens** | apresenta as mensagens exibidas no veículo (controlo e serviços) |
| **Sessões de carregamento** | apresenta as estatísticas de carregamento das baterias no mês em curso (apenas em veículos elétricos ou híbridos) |
| **Carga elétrica total** | indica a carga elétrica total utilizada no mês em curso (apenas em veículos elétricos ou híbridos) |
| **Custo total da eletricidade** | indica o custo mensal dos consumos de eletricidade |
| **Objetivo de recarga** | indica o objetivo de recarga elétrica configurado para o veículo (em %) |
| **Limite de corrente de carga** | indica o limite da corrente de carga utilizada quando o veículo está ligado |
| **Limitação da corrente de carga** | fornece informações sobre o estado de ativação ou não de um limite da corrente de carga no veículo |
| **Coordenadas GPS** | indica a posição do veículo no formato «latitude,longitude» |
| **Última atualização** | indica a data e a hora da última ligação entre o automóvel e os servidores da BMW |
| **Estado de desbloqueio** | devolve o último estado recebido durante um pedido de desbloqueio. Se a ação tiver sido realizada com sucesso, o estado passa de «PENDING» para «EXECUTED». Caso contrário, devolve «ERROR» |
| **Estado de bloqueio** | o último estado recebido durante um pedido de bloqueio (os mesmos valores que **Estado de desbloqueio**) |
| **Estado de carregamento** | o último estado recebido durante um pedido de início do carregamento |
| **Estado «Parar carregamento»** | o último estado recebido aquando de um pedido para interromper o carregamento |
| **Estado da ventilação** | o último estado recebido aquando de um pedido de arranque da ventilação |
| **Estado «Parar Ventilação»** | o último estado recebido aquando de um pedido de paragem da ventilação |
| **Estado do sinal de faróis** | o último estado recebido durante um pedido de sinal de faróis |
| **Estado da buzina** | o último estado recebido durante um pedido de buzina |
| **Estado da pesquisa** | o último estado recebido durante um pedido de localização |
| **Estado do envio de POI** | o último estado recebido durante o envio de um ponto de interesse |
| **Presença em casa** | indica se o seu veículo se encontra na sua residência (1 = presente, 0 = ausente) com base na distância máxima indicada |
| **Distância até casa** | indica a distância (em m ou km) entre o veículo e a sua casa |

## Ação

| Comando | Descrição |
|---|---|
| **Atualizar** | atualiza todas as informações do veículo |
| **Trancar** | permite trancar o carro à distância |
| **Desbloquear** | permite desbloquear o carro à distância |
| **Carregar** | permite iniciar o carregamento do veículo |
| **Interromper carregamento** | permite interromper o carregamento do veículo |
| **Ventilação (Iniciar)** | permite ligar o sistema de ventilação à temperatura definida no veículo |
| **Ventilação (Parar)** | permite desligar o sistema de ventilação à temperatura definida no veículo |
| **Sinalização com os faróis** | ativa a sinalização com os faróis |
| **Tocar a buzina** | ativa um aviso sonoro |
| **Pesquisar** | localiza o veículo em tempo real e apresenta-o num mapa do Google Maps |
| **Envio de POI** | envio de um ponto de interesse (POI) para o centro de mensagens do veículo, introduzindo o nome, a latitude e a longitude do local |

> **Atenção**
>
> Até ao momento, apenas a função **Atualizar** está operacional. As restantes ações voltarão a estar operacionais assim que as APIs da BMW o permitirem!

# Painel de controlo

O plugin inclui um widget personalizado que permite visualizar todas as informações essenciais do veículo.

![Widget myBMW](../images/Widget_myBMW.png)

# Painel

Se tiver marcado a opção **Mostrar o painel do ambiente de trabalho** na página de configuração do plugin, poderá visualizar um painel dedicado ao seu veículo que reúne todas as informações disponíveis neste plugin. Pode aceder-lhe através do menu **Página inicial \ My BMW**

![Painel myBMW](../images/Panel_myBMW_1.png)

![Painel myBMW](../images/Panel_myBMW_2.png)

> **Dica**
>
> Para que os gráficos sejam apresentados, não se esqueça de assinalar a opção **Registo** nos 3 comandos seguintes: Quilometragem, Carga restante e Combustível restante.

# Atualização

## Automático

Graças ao fluxo MQTT, recebe a maioria das informações do seu veículo em tempo real (quilometragem, combustível, bateria, estado de bloqueio do veículo, das portas e janelas, localização, ...)!

É também criada uma tarefa CRON personalizável (com uma frequência de 2 horas, 5 minutos após a hora) para recuperar as informações que não podem ser transmitidas em fluxo (mensagens de controlo, de serviços, histórico de carga). Tenha cuidado para não aumentar demasiado esta frequência, sob pena de exceder os limites de pedidos autorizados pela BMW (50 por dia)!

## Manual

Pode utilizar a qualquer momento o comando **Atualizar** para obter o estado dos veículos.

> **Atenção**
>
> A BMW permite apenas 50 pedidos por dia, por isso não atualize manualmente com demasiada frequência (o CRON atual utiliza 24 pedidos por dia), sob pena de ficar bloqueado até ao dia seguinte.

# Plano de desenvolvimento e suporte

Este plugin irá evoluir ao longo do tempo, de acordo com os vossos pedidos e com as possibilidades das APIs do BMW Connected Drive.

> **Dica**
>
> Pode enviar o seu pedido de melhoria criando um «issue» de «melhoria» no [GitHub](https://github.com/Xav-74/myBMW/issues/new).
> Não hesite também em vir trocar ideias sobre este plugin na Comunidade Jeedom!

Em caso de avaria, pode criar diretamente um tópico na Comunidade a partir da página principal do plugin. As informações úteis do Jeedom e do plugin são adicionadas automaticamente. Não hesite também em copiar os registos myBMW, myBMW_daemon e myBMW_update (modo de depuração) para uma resolução mais rápida!

![Comunidade](../images/community.png)
