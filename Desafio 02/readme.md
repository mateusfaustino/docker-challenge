2. **Aplicação Python com Flask:**
   - Crie um Dockerfile para uma aplicação Python usando Flask. A imagem deve instalar as dependências do Python, copiar o código da aplicação e expor a porta 5000.
  
   - Crie um docker compose para subir este container. Crie também um volume pra viabilizar o desenvolvimento.
  
   - Use nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação flask. Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8081
