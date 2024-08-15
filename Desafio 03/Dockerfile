# Use uma imagem base oficial do Node
FROM node:18

# Define o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# RUN apt-get update && apt-get install -y wget

# ENV DOCKERIZE_VERSION v0.6.1

# RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
#     && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
#     && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

RUN apt update && \
    apt install -y wget netcat-traditional && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for

# Copia o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do Node.js
RUN npm install

# Copia o código da aplicação para o diretório de trabalho
COPY . .

# Exponha a porta em que a aplicação irá rodar
EXPOSE 3000

# Define o comando padrão para executar a aplicação
CMD ["node", "app.js"]
