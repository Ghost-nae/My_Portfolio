package com.portfolio.my.Portfolio.Service;

import com.portfolio.my.Portfolio.DTO.ContactRequest;
import com.portfolio.my.Portfolio.Models.ContactMessage;
import com.portfolio.my.Portfolio.Repository.ContactMessageRepository;
import com.resend.Resend;
import com.resend.services.emails.model.CreateEmailOptions;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import com.resend.core.exception.ResendException;
import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class ContactService {

    private final ContactMessageRepository contactMessageRepository;

    @Value("${resend.api-key}")
    private String resendApiKey;

    @Value("${resend.from-email}")
    private String fromEmail;

    @Value("${resend.to-email}")
    private String toEmail;

    public void processContactMessage(ContactRequest request) {

        // Save message to database
        ContactMessage contactMessage = new ContactMessage();

        contactMessage.setFullName(request.getFullName());
        contactMessage.setEmail(request.getEmail());
        contactMessage.setSubject(request.getSubject());
        contactMessage.setMessage(request.getMessage());
        contactMessage.setCreatedDate(LocalDateTime.now());

        contactMessageRepository.save(contactMessage);

        // Send email
        sendEmail(request);
    }

    private void sendEmail(ContactRequest request) {

        Resend resend = new Resend(resendApiKey);
    
        String emailBody = """
                <h2>New message from your portfolio website</h2>
    
                <p><strong>Name:</strong> %s</p>
                <p><strong>Email:</strong> %s</p>
                <p><strong>Subject:</strong> %s</p>
    
                <h3>Message</h3>
    
                <p>%s</p>
                """.formatted(
                request.getFullName(),
                request.getEmail(),
                request.getSubject(),
                request.getMessage()
        );
    
        CreateEmailOptions params = CreateEmailOptions.builder()
                .from(fromEmail)
                .to(toEmail)
                .subject("Portfolio Contact: " + request.getSubject())
                .html(emailBody)
                .build();
    
        try {
    
            resend.emails().send(params);
    
        } catch (ResendException e) {
    
            throw new RuntimeException(
                    "Failed to send contact email",
                    e
            );
        }
    }
}
