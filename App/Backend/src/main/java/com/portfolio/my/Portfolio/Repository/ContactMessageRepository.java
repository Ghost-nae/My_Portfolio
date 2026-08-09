package com.portfolio.my.Portfolio.Repository;

import com.portfolio.my.Portfolio.Models.ContactMessage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactMessageRepository
        extends JpaRepository<ContactMessage, Long> {
}
