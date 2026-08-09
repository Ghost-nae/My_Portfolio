package com.portfolio.my.Portfolio.Models;

import java.time.LocalDate;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.AllArgsConstructor;

@Entity
@Table(name = "Message")
@Getter
@Setter
@AllArgsConstructor
public class ContactMessage{
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false, unique = false)
  private String fullname;

  @Column(nullable = false, unique = true)
  private String email;

  @Column(nullable = false, unique = false)
  private String subject;

  @Column(nullable = false)
  private String message;

  private LocalDate createdAt;

  public ContactMessage() {}
  
}
