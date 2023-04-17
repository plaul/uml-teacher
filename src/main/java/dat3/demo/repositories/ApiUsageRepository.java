package dat3.demo.repositories;

import dat3.demo.entity.ApiUsage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ApiUsageRepository extends JpaRepository<ApiUsage, Integer> {
  @Query("SELECT SUM(a.totalTokens) FROM ApiUsage a")
  int getTotalTokensSum();

  @Query("SELECT SUM(a.promptTokens) FROM ApiUsage a")
  int getTotalPromptTokens();

  @Query("SELECT SUM(a.completionTokens) FROM ApiUsage a")
  int getTotalCompletionTokens();
}
