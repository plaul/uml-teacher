package dat3.demo;

import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@Getter
@Setter
@NoArgsConstructor
class AiResponse {
  String question;
  String answer;

  public AiResponse(String question, String answer) {
    this.question = question;
    this.answer = answer;
  }
}

@CrossOrigin
@RestController
@RequestMapping("/api/ai")
public class API {
  ApiService apiService;

  public API(ApiService apiService) {
    this.apiService = apiService;
  }

  @GetMapping
  public AiResponse getAnswer(@RequestParam String question) throws JsonProcessingException {
    String response = apiService.getResponse(question,200);
    return new AiResponse(question,response);
  }

  @GetMapping("/explanation")
  public AiResponse getExplanation(@RequestParam String plantuml) throws JsonProcessingException {
    String prompt = "explain the oo concepts, and explain the types of relations involved (inheritance, composition or aggregation) in this plantuml diagram.";
    prompt += "Dont use any plantuml terms in the description, but explain it from what a user will see. Provide the response nicely formatted as HTML ready to be inserted in a div:";
    String response = apiService.getResponse(prompt+plantuml,300);
    return new AiResponse(prompt,response);
  }

  @GetMapping("/uml")
  public AiResponse getUml(@RequestParam String question) throws JsonProcessingException {

    if(!question.toLowerCase().contains("class")){
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"Text must contain at least one occurence of the word 'class'");
    }
    String myPart = ".Can you create a response that must start with @startuml and end with @enduml";
    myPart += "including only source code for valid plantuml drawing representing the classes, properties, and relationships?";
    String response = apiService.getResponse(question+myPart,450);
    return new AiResponse(question,response);
  }

}
