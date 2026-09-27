---
title: Orquestração de pagamentos
translationKey: payment-orchestration
order: 2
context: [Gateway de pagamentos]
metrics:
  - value: Centenas de milhares de reais
    label: processados nos primeiros meses
tags: [PHP, Laravel, Bun, Docker, RabbitMQ, Redis]
---

Um gateway de pagamentos fica no meio do caminho entre quem vende e as instituições que processam o dinheiro. Se algo dá errado ali, alguém deixa de receber.

No gateway em que trabalho hoje, cuido do sistema que decide por onde cada pagamento vai passar. A plataforma se conecta a várias adquirentes, as instituições que processam os pagamentos, e escolhe a rota de cada transação de acordo com o vendedor e a forma de pagamento, seguindo uma ordem de prioridade definida para cada um.

Também desenvolvi a divisão automática dos valores entre as partes, o chamado split: o cálculo das taxas de cada venda, as antecipações, as reservas financeiras, os saques e o débito automático em D+2, dois dias depois da venda.

Antes de uma compra ser aprovada, ela passa por uma checagem antifraude que analisa o dispositivo usado e o comportamento da transação. Depois, o status de cada pagamento é sincronizado nos dois sentidos entre a plataforma e as adquirentes por webhooks, avisos automáticos entre sistemas, com a assinatura de cada aviso validada para que nenhuma mensagem falsa altere uma transação.

Participei ainda da homologação com as adquirentes, testando aprovação, recusa, estorno, revisão manual e antifraude antes de cada integração entrar no ar.

Além disso, montei do zero a arquitetura da nova versão da plataforma, preparada para uma operação global, em várias moedas, e para aguentar mais volume sem que nenhuma transação se perca no caminho.
