---
title: Transcrição de documentos históricos com IA
translationKey: historical-documents
order: 4
context: [Projeto individual, Competição internacional na Zindi]
metrics:
  - value: Top 4%
    label: entre mais de 1.850 participantes
tags: [Python, Machine Learning, Visão computacional]
---

Documentos antigos, papel manchado, tinta apagada, letra irregular. As ferramentas comuns de leitura de texto não dão conta desse material.

Construí sozinho um modelo que trabalha em duas etapas. A primeira trata cada imagem, ajustando cor, resolução e nitidez até o texto ficar legível, o que em visão computacional se chama pré-processamento. A segunda é o reconhecimento em si: o modelo aprende a identificar letra por letra e palavra por palavra, mesmo com a caligrafia mudando de um documento para outro.

Numa competição, cada versão do modelo é medida num placar contra a dos outros participantes, então cada ajuste precisa provar que melhora o resultado.

A mesma técnica serve para digitalizar notas, contratos e fichas em papel de uma empresa.
