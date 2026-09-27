---
title: Payment orchestration
translationKey: payment-orchestration
order: 2
context: [Payment gateway, 2026–present]
metrics:
  - value: Hundreds of thousands of reais
    label: processed in the first months
tags: [PHP, Laravel, Bun, Docker, RabbitMQ, Redis]
---

A payment gateway sits in the middle, between whoever is selling and the institutions that process the money. If something goes wrong there, someone doesn't get paid.

At the gateway where I work today, I look after the system that decides which route each payment takes. The platform connects to several acquirers, the institutions that process payments, and picks the route for each transaction based on the seller and the payment method, following a priority order defined for each one.

I also built the automatic splitting of amounts between the parties, known as the split: the fee calculation for each sale, advances, financial reserves, payouts and the automatic debit on D+2, two days after the sale.

Before a purchase is approved, it goes through a fraud check that analyzes the device used and the behavior of the transaction. Afterwards, the status of each payment is synced both ways between the platform and the acquirers through webhooks, automatic notifications between systems, with every notification's signature validated so no forged message can change a transaction.

I also took part in certification with the acquirers, testing approval, decline, refund, manual review and fraud scenarios before each integration went live.

On top of that, I designed the architecture of the platform's new version from scratch, built for a global, multi-currency operation and to handle more volume without a single transaction getting lost along the way.
