package dat3.demo.entity;


import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class ApiUsage {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  private int promptTokens;
  private int completionTokens;
  private int totalTokens;

  @Column(length = 2000)
  private String prompt;

  @CreationTimestamp
  LocalDateTime created;

}

