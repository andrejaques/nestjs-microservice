architecture = {
  src: {
    api: {
      modules: {
        users: {
          controllers: {
            commands: {},
            queries: {},
          },
          domain: {
            models: {
              index,
              userCreationAttributeModel,
              userUpdateAttributeModel,
            },
            services: {},
          },
        },
      },
      providers: {},
    },
    common: {
      errors: {},
      models: {},
    },
    database: {
      postgres,
      mongo,
      redis,
    },
    events: {},
    config: {
      kafkaConfig,
      dockerConfig,
      envConfig,
    },
    scripts: {
      start,
      build,
      test,
    },
  },
};


// explaining
/*
src/client: This folder contains the code for the client-side interface, such as a web app or mobile app.
src/server/api/microservices: This folder contains the code for the microservices in the server-side API. Each microservice has its own subfolder, such as users or products, which contains the code for that specific microservice.
src/server/api/microservices/[microservice]/presentation: This folder contains the code for the presentation layer of the microservice, which handles the user interface and communicates with the outside world. It includes the command handlers (for write operations) and the query handlers (for read operations).
src/server/api/microservices/[microservice]/domain: This folder contains the code for the domain layer of the microservice, which contains the business logic and the domain models. It includes the service classes and the domain models.
src/server/api/microservices/[microservice]/infrastructure: This folder contains the code for the infrastructure layer of the microservice, which handles interactions with external dependencies, such as databases and the event store. It includes the repository classes and any other classes that handle these interactions.
src/server/common: This folder contains code that is shared across multiple microservices, such as error classes or common models.
src/server/database: This folder contains code for interacting with the databases, such as module and provider classes for the database connection.
src/server/events: This folder contains code for working with the event store and handling events, such as module and provider classes for the event store and a service for publishing events.
src/server/api: This folder contains the module and provider classes for the NestJS API.
src/server/config: This folder contains configuration files for the application, such as environment variables or Kafka settings.
src/server/scripts: This folder contains scripts for tasks such as building or deploying the application.
*/
