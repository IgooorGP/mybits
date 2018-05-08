# Melkor
Serviço responsável por ouvir eventos de assinaturas Google e Apple como novas inscrições, upgrades/downgrades de planos, renovações de assinturas, entre outros. Tais eventos serão escutados através de duas URLs que são webhooks para receber HTTP POSTS da API da Google e da Apple para criação de POSTS ao barramento com novas informações sobre as assinaturas.

## Eventos de assinaturas cobertos para envio de informações ao barramento:

* Nova assinatura;
* Renovação de assinatura;
* Upgrade/Downgrade de planos;
* Restore purchase.

## Sumário de arquivos

```/flaskr.py```: --> arquivo principal da aplicação criada com framework Flask; <br/>
```/docker-compose.yml```: --> compose para subir os containeres: aplicação principal, MongoDB e Redis; <br/>
```/Dockerfile```: --> Dockefiler para buildar container principal da aplicação em Flask; <br/>
```/wait-for-it.sh```: --> Shell script para que o container principal se comunique com o MongoDB/Redis quando prontos; <br/>
```/docker-entrypoint.sh```: --> Shell script para ***iniciar a aplicação chamando Honcho.***; <br/>
```/run_tests.sh```: --> Shell script ***para rodar testes*** dentro do container da aplicação principal; <br/>
```/clean_databases.sh```: --> Shell script para limpeza da base MongoDB. ***Editar a data máxima de limpeza***; <br/>
```/.env```: --> Arquivo usado para exportar variáveis de ambiente para configurar a aplicação em Flask; <br/>
```/Procfile```: --> Arquivo de processos utilizado pelo Honcho para inicializar a aplicação com Gunicorn; <br/>
```/flaskr.log```: --> Arquivo de log; <br/>
```/dbs/mongo.py```: --> Arquivo que permite conexão com a base MongoDB; <br/>
```/dbs/redis.py```: --> Arquivo que permite conexão com Redis; <br/>
```/dbs/mongo_clean.py```: --> Arquivo para limpeza do MongoDB; <br/>
```/dbs/redis_clean.py```: --> Arquivo para limpeza do Redis; <br/>
```/routes/healthcheck_routes.py```: --> Definição de rota para executar um healthcheck dos containers MongoDB e Redis; <br/>
```/routes/listening_routes.py```: --> Definição de rotas ***para ouvir eventos enviados pelo Google e Apple.***. <br/>

## Testes:

```/tests/integration/test_databases.py```: --> Testes relacionados às bases de dados (MongoDB e Redis); <br/>
```/tests/integration/test_healthcheck_routes.py```: --> Teste de integração para rota de health check; <br/> 
```/tests/integration/test_listening_routes.py```: --> Testes de integração para as rotas que ouvem eventos Google e Apple. <br/>

## Para executar a aplicação

* ```git clone <this_repo>```: clonar este repositório;
* ```docker-compose build```: buildar o container da aplicação principal e os containers MongoDB e Redis;
* ```docker-compose up```: rodar os containers para executar a aplicação principal;

## Para testar

* ```docker ps```: obter ***id*** do container da ***aplicação principal***;
* ```docker exec -it <container_id> bash```: executar bash e "entrar" no container da aplicação principal;
* ```source run_tests.sh```: rodar script de tests no container principal (nosetests).

## Rotas definidas

```/notifications/apple```: rota HTTP POST para receber JSON de eventos da Apple; <br/>
```/notifications/google```: rota HTTP POST para receber JSON de eventos da Google; <br/>
```/notifications/healthcheck```: rota HTTP GET para receber JSON com status se MongoDB e Redis estão ativos (ping). <br/>