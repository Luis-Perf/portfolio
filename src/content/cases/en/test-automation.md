---
title: Test automation
translationKey: test-automation
order: 3
context: [Insurance consultancy]
metrics:
  - value: Load and stress
    label: validated on top of functional tests
tags: [Java, Python, Robot Framework, Selenium]
---

It was my first job in the field, as a QA intern on the claims systems of an insurance consultancy. It's the system a policyholder turns to when something has already gone wrong, so a failure there weighs more.

Part of the job was investigating: describing each bug clearly, mapping where it showed up and analyzing its cause with the developers, so the fix would target the right problem.

I also validated the system under pressure, with load and stress tests, which show how it behaves when many people use it at once and how far it goes before it breaks.

For the scenarios that repeated the most, I wrote scripts to automate the tests with Robot Framework and Selenium, which move through the system the way a user would and check every result on their own. Every new scenario also started being documented before it went to production: what needed to be validated and what the expected result was.

The team got time back, and testing gained a method.
