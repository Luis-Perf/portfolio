---
title: Construction management system
translationKey: construction-management
order: 1
context: [High-end construction company]
metrics:
  - value: 1 to 2 months
    label: ahead of the contract deadline
  - value: R$ 60k
    label: less in losses per project
tags: [Node.js, React, PostgreSQL, MongoDB]
---

At the construction company, each area worked with its own information: engineering, procurement, finance and suppliers. When materials ran short on site or spending went over budget, the problem only showed up later.

Before writing the system, I spent time on the construction site following the daily routine, to understand where information got lost between one area and the next.

What came out of it brought everything into one place: the schedule, orders, what had already arrived and how much each project was spending against its contract. The suppliers themselves started logging deadlines and deliveries there, so the information came straight from whoever was delivering.

Under the hood, it's a React web app talking to a Node.js API, which also feeds the dashboards and reports that support engineering and operations. The data lives in databases modeled around that flow, and the system has automated tests.

The first three projects that ran on the system were delivered ahead of schedule.
