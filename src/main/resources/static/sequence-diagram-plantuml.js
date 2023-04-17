export const plantUmlArchitecture = `
@startuml
actor "You" as U
participant "Server (My Endpoint)" as S
participant "OPEN-AI API" as E

U -> S : Request UML
S -> E : Request UML
E --> S : Generated UML
S --> U : Pass UML back to user

U -> S : Request an explanation of the diagram
S -> E : Request explanation
E --> S : New result from external API
S --> U : Pass new result back to user
@enduml
`