FROM openjdk:19-jdk-alpine3.16
COPY target/*.jar testapp.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","testapp.jar"]