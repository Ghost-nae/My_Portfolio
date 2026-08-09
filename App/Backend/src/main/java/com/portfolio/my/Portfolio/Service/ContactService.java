package com.portfolio.my.Portfolio.Service;

import com.portfolio.my.Portfolio.DTO.ContactRequest;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ContactService {

    private final JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String recipientEmail;

    public void sendContactEmail(ContactRequest request) throws MessagingException {

        MimeMessage message = mailSender.createMimeMessage();

        MimeMessageHelper helper = new MimeMessageHelper(
                message,
                true,
                "UTF-8"
        );

        helper.setTo(recipientEmail);

        helper.setSubject(
                "Portfolio Contact: " + request.getSubject()
        );

        helper.setReplyTo(request.getEmail());

        helper.setText(
                """
                New message from your portfolio website

                Name:
                %s

                Email:
                %s

                Subject:
                %s

                Message:
                %s
                """.formatted(
                        request.getFullName(),
                        request.getEmail(),
                        request.getSubject(),
                        request.getMessage()
                )
        );

        mailSender.send(message);
    }
}
