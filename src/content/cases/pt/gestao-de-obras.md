---
title: Sistema de gestão de obras
translationKey: construction-management
order: 1
context: [Construtora de alto padrão, 2023–2025]
metrics:
  - value: 1 a 2 meses
    label: antes do prazo de contrato
  - value: R$ 60 mil
    label: a menos em prejuízo por obra
tags: [Node.js, React, PostgreSQL, MongoDB]
---

Na construtora, cada área trabalhava com as suas próprias informações: engenharia, suprimentos, financeiro e fornecedores. Quando faltava material na obra ou um gasto saía do orçamento, o problema só aparecia depois.

Antes de escrever o sistema, passei um tempo no canteiro acompanhando a rotina, para entender em que ponto a informação se perdia entre uma área e outra.

O que saiu dali juntou tudo num lugar só: cronograma, pedidos, o que já tinha chegado e quanto cada obra estava gastando em relação ao contrato. Os próprios fornecedores passaram a registrar prazos e entregas por lá, então a informação já chegava direto de quem entregava.

Por dentro, é uma aplicação web em React conversando com uma API em Node.js, que também alimenta os painéis e relatórios de apoio à engenharia e à operação. Os dados ficam em bancos modelados para esse fluxo, e o sistema tem testes automatizados.

As três primeiras obras que rodaram com o sistema foram entregues antes do prazo.
