package com.portfolio.my.Portfolio.Controller;

import com.portfolio.my.Portfolio.DTO.ContactRequest;
import com.portfolio.my.Portfolio.Service.ContactService;
import jakarta.mail.MessagingException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
public class ContactController {

    private final ContactService contactService;

    @PostMapping
    public ResponseEntity<String> sendMessage(
            @Valid @RequestBody ContactRequest request
    ) {
    
        try {
    
            contactService.processContactMessage(request);
    
            return ResponseEntity.ok(
                    "Message sent successfully"
            );
    
        } catch (Exception e) {
    
            e.printStackTrace();
    
            return ResponseEntity.internalServerError()
                    .body("Failed to send message: " + e.getMessage());
        }
    }
}
