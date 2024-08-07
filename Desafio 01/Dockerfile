# Use a imagem base do Nginx
FROM nginx:alpine

# Copie o arquivo index.html para o diretório padrão do Nginx
COPY index.html /usr/share/nginx/html/

# Exponha a porta 80 para permitir o acesso ao servidor web
EXPOSE 80

# Inicie o servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
