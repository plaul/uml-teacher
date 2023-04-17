package dat3.demo;

import dat3.demo.repositories.ApiUsageRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin")
//@CrossOrigin
public class AdminController {
  ApiUsageRepository apiUsageRepository;

  public AdminController(ApiUsageRepository apiUsageRepository) {
    this.apiUsageRepository = apiUsageRepository;
  }

  @GetMapping
  public long getTotalTokens() {
    return apiUsageRepository.getTotalTokensSum();
  }
  @GetMapping( "/total-requests")
  public long getTotalRequests() {
    return apiUsageRepository.count();
  }
  @GetMapping( "/total-promptTokens")
  public long getTotalPromptTokens() {
    return apiUsageRepository.getTotalPromptTokens();
  }
  @GetMapping( "/total-completionTokens")
  public long getTotalCompletionTokens() {
    return apiUsageRepository.getTotalCompletionTokens();
  }
}
