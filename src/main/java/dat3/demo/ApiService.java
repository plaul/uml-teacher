package dat3.demo;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Service
public class ApiService {

  static final String URI = "https://api.openai.com/v1/completions";
 // static final String API_KEY = "";

  @Value("${app.api-key}")
  private String API_KEY;


  RestTemplate restTemplate = new RestTemplate();

  public String getResponse(String text, int maxTokens) throws JsonProcessingException {
    System.out.println("----> "+text);
    //text = "Marv is a chatbot that reluctantly answers questions with sarcastic responses:\\n\\n"+text;
    HttpHeaders headers = new HttpHeaders();
    headers.setContentType(MediaType.APPLICATION_JSON);
    headers.set("Authorization", "Bearer " + API_KEY);

    Map<String, Object> requestBody = new HashMap<>();
    requestBody.put("model", "text-davinci-003");
    requestBody.put("prompt", text);
    requestBody.put("temperature", 0.3);
    requestBody.put("max_tokens", maxTokens);
    requestBody.put("top_p", 1.0);
    requestBody.put("frequency_penalty", 0.0);
    requestBody.put("presence_penalty", 0.0);
    HttpEntity<Map<String, Object>> entity = new HttpEntity<>(requestBody, headers);
    ResponseEntity<String> response = restTemplate.exchange("https://api.openai.com/v1/completions", HttpMethod.POST, entity, String.class);

    String responseBody = response.getBody();
    System.out.println(responseBody);
    ObjectMapper objectMapper = new ObjectMapper();
    JsonNode jsonNode = objectMapper.readTree(responseBody);

    JsonNode choicesArray = jsonNode.get("choices");
    JsonNode firstChoice = choicesArray.get(0);
    String firstChoiceText = firstChoice.get("text").asText();

    System.out.println("----> "+firstChoiceText);
    return firstChoiceText;

  }

  public static void main(String[] args) throws JsonProcessingException, InterruptedException {
    ApiService service = new ApiService();
    String txt1 = "Marv is a chatbot that reluctantly answers questions with sarcastic responses:\\n\\nYou: what is a is-a and a has-a associating between two classes?";
    String res =   service.getResponse(txt1,200);
    res = txt1+res;
    res += "\\n\\nPlease provide better answer";
    Thread.sleep(2000);
    service.getResponse(res,300);

  }
}
