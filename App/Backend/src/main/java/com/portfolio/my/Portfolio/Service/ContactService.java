package com.portfolio.my.Portfolio.Service;

import com.portfolio.my.Portfolio.DTO.ContactRequest;
import com.portfolio.my.Portfolio.Models.ContactMessage;
import com.portfolio.my.Portfolio.Repository.ContactMessageRepository;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class ContactService {

    private final ContactMessageRepository contactMessageRepository;
    private final JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String recipientEmail;

    public void processContactMessage(ContactRequest request)
            throws MessagingException {

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

    private void sendEmail(ContactRequest request)
            throws MessagingException {

        MimeMessage mimeMessage = mailSender.createMimeMessage();

        MimeMessageHelper helper = new MimeMessageHelper(
                mimeMessage,
                false,
                "UTF-8"
        );

        helper.setTo(recipientEmail);

        helper.setReplyTo(request.getEmail());

        helper.setSubject(
                "Portfolio Contact: " + request.getSubject()
        );

        String emailBody = """
                New message from your portfolio website

                Name: %s
                Email: %s
                Subject: %s

                Message:
                %s
                """.formatted(
                request.getFullName(),
                request.getEmail(),
                request.getSubject(),
                request.getMessage()
        );

        helper.setText(emailBody);

        mailSender.send(mimeMessage);
    }
}
