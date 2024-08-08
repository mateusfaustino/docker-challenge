# Use uma imagem base oficial do Node
FROM node:14

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do Node.js
RUN npm install

# Copia o código da aplicação para o diretório de trabalho
COPY . .

# Exponha a porta em que a aplicação irá rodar
EXPOSE 3000

# Define o comando padrão para executar a aplicação
CMD ["npm", "start"]
