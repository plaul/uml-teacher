FROM openjdk:17-jdk-slim-bullseye
# ENV JAVA_OPTS = "-Xmx256m -Xms128"
WORKDIR /app
COPY .mvn/ .mvn
COPY mvnw pom.xml ./
#Next two lines ONLY for Windows users, and only if build fails
#RUN apt-get update && apt-get install dos2unix
#RUN dos2unix mvnw

RUN chmod +x mvnw && ./mvnw dependency:resolve
COPY src ./src
CMD ["./mvnw", "spring-boot:run"]
