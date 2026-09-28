---
title: Automação de testes
translationKey: test-automation
order: 3
context: [Consultoria de seguros]
metrics:
  - value: Carga e estresse
    label: validados além dos testes funcionais
tags: [Java, Python, Robot Framework, Selenium]
---

Foi meu primeiro trabalho na área, como estagiário de QA nos sistemas de sinistro de uma consultoria de seguros. É o sistema que o segurado procura quando algo já deu errado, então uma falha ali pesa mais.

Parte do trabalho era investigar: descrever cada bug com clareza, mapear onde ele aparecia e analisar a causa junto com os desenvolvedores, para que a correção atacasse o problema certo.

Também validei o sistema sob pressão, com testes de carga e de estresse, que mostram como ele se comporta quando muita gente usa ao mesmo tempo e até onde aguenta antes de falhar.

Nos cenários que mais se repetiam, escrevi scripts para automatizar os testes com Robot Framework e Selenium, que navegam pelo sistema como um usuário faria e conferem cada resultado sozinhos. E cada cenário novo passou a ser documentado antes de ir para produção: o que precisava ser validado e qual era o resultado esperado.

O time ganhou tempo, e o processo de teste passou a ter método.
