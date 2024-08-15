# Use uma imagem base oficial do MySQL
FROM mysql:8.0

# Defina variáveis de ambiente para configurar o MySQL
ENV MYSQL_DATABASE=mydatabase \
    MYSQL_USER=myuser \
    MYSQL_PASSWORD=mypassword \
    MYSQL_ROOT_PASSWORD=rootpassword

# Copia o script de inicialização para dentro do contêiner
COPY ./init-db.sql /docker-entrypoint-initdb.d/

# O MySQL será iniciado automaticamente com as configurações acima
