# Use uma imagem base oficial do OpenJDK
FROM openjdk:17-jdk-slim

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o JAR da aplicação para o diretório de trabalho
COPY target/demo-0.0.1-SNAPSHOT.jar /app/demo-0.0.1-SNAPSHOT.jar

# Expõe a porta em que a aplicação irá rodar
EXPOSE 8080

# Define o comando padrão para executar a aplicação
CMD ["java", "-jar", "demo-0.0.1-SNAPSHOT.jar"]