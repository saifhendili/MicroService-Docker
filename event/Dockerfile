FROM openjdk:8
EXPOSE 8040
ADD target/event.jar event.jar
ENTRYPOINT ["java","-jar","/event.jar"]